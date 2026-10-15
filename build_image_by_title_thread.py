# -*- coding: utf-8 -*-
"""
AI 图片生成 - 多线程批处理

流程：
    1. 查数据库，取 ai_image IS NULL 的记录
    2. 多线程并发调用：先想 prompt，再生成图片
    3. 加锁串行写入 ai_image
"""

import base64
import os
import re
import threading
from concurrent.futures import ThreadPoolExecutor, as_completed
from time import time

import requests

from dbMysqlHelper import db_tool

# ============ 配置 ============
auth_token = "sk-tZbCZEd-bgFMnN-QzpXqLw"
base_url = "https://gate.aidingqing.com"

# ============ 全局锁：保证 save_data 串行执行 ============
_save_lock = threading.Lock()

# ============ 并发线程数 ============
MAX_WORKERS = 1

# ============ Prompt 模板 ============
image_prompt_system_prompt = """
Analyze the article title and create a visual concept for a header image.
Rules: No text, no people, no charts, no solid color.
Return ONLY a concise English description under 80 words.
"""

image_build_prompt = """

Generate a relevant image for article caption based on the following article content,

requirement:

    1. Text cannot appear in the image
    2. Characters cannot appear in the picture
    3. Avoid single color images
    4. Visual charts cannot appear in the image

    {}

"""


def image_prompt_think(article_text: str):
    """调用 LLM 生成图片描述 prompt"""
    data = {
        "model": "azure/gpt-4o-mini",
        "messages": [
            {"role": "system", "content": image_prompt_system_prompt},
            {"role": "user", "content": article_text},
        ],
    }
    for retry in range(5):
        try:
            resp = requests.post(
                f"{base_url}/v1/chat/completions",
                headers={
                    "Content-Type": "application/json",
                    "Authorization": f"Bearer {auth_token}",
                },
                json=data,
                timeout=30,
            )
            result = resp.json()
            return result["choices"][0]["message"]["content"].strip()
        except Exception as e:
            print(f"think retry {retry}: {e}")
    return (
        "A traditional Chinese medicine herb table with mortar and pestle, "
        "warm lighting, no people no text"
    )


def image_generate_with_gemini(title_prompt: str, file_name: str):
    """调用 Gemini 生成图片并保存到 ./public/{file_name}.png"""
    data = {
        "model": "gemini-2.5-flash-image",
        # 1. prompt 里强制写 16:9
        # 2. size 直接写 16:9 的分辨率
        "prompt": f"{image_build_prompt.format(title_prompt)}, 16:9 widescreen, ultra wide shot",
        "n": 1,
        "size": "1792x1024",  # 标准 16:9
    }
    # print(data['prompt'])
    for retry in range(5):
        try:
            resp = requests.post(
                f"{base_url}/v1/images/generations",
                headers={
                    "Content-Type": "application/json",
                    "Authorization": f"Bearer {auth_token}",
                },
                json=data,
                timeout=120,
            )
            if resp.status_code != 200:
                print(resp.text)
                continue
            result = resp.json()
            item = result["data"][0]
            b64_data = item.get("b64_json") or ""
            if not b64_data and "url" in item and "base64" in item["url"]:
                m = re.search(r"base64,([A-Za-z0-9+/=]+)", item["url"])
                b64_data = m.group(1) if m else ""

            if b64_data:
                os.makedirs("./public", exist_ok=True)
                path = f"./public/{file_name}.png"
                with open(path, "wb") as f:
                    f.write(base64.b64decode(b64_data.replace("\n", "")))
                return f"/public/{file_name}.png"
        except Exception as e:
            print(f"重试 {retry + 1}: {e}")
    return None


def save_data(news):
    """写库（加锁，保证同一时刻只有一个线程执行）"""
    with _save_lock:
        up_ins_sql = """
            UPDATE `data-mining`.`chinese_folktales`
            SET `ai_image` = {}
            WHERE `id` = {};
        """.format(
            repr(news["ai_image"]),
            repr(news["id"]),
        )
        db_tool.update_insert(up_ins_sql)
        print(f"  💾 已保存 id={news['id']}")


def process_one(article):
    """处理单条：想 prompt + 生成图片 + 写库"""
    news_id = article.get("id")
    try:
        start_time = time()
        article_title = article.get("title_en")
        article_summary = article.get("ai_summary_en")
        article_text = f"""
        title = {article_title}
        summary = {article_summary}
        """

        # 1. 生成图片 prompt
        title_prompt = image_prompt_think(article_text=article_text)

        # 2. 生成图片
        ai_image = image_generate_with_gemini(
            title_prompt=title_prompt,
            file_name=article["file_name"],
        )

        elapsed = time() - start_time

        # 3. 成功才写库
        if ai_image:
            article["ai_image"] = ai_image
            save_data(news=article)
            print(f"  ✅ id={news_id} 绘图成功，耗时 {elapsed:.1f}s")
        else:
            print(f"  ❌ id={news_id} 绘图失败，耗时 {elapsed:.1f}s")

        return article

    except Exception as e:
        print(f"  ❌ id={news_id} 处理异常: {e}")
        return article


def main_run():
    # 1. 查询待处理任务
    task_sql = """
        SELECT *
        FROM `data-mining`.`chinese_folktales`
        WHERE `ai_image` IS NULL
        LIMIT 0, 10;
    """

    tasks = db_tool.query(task_sql)
    if not tasks:
        print("没有待处理的任务")
        return

    print(f"共 {len(tasks)} 条待处理，并发数={MAX_WORKERS}\n")

    # 2. 多线程并发调用
    with ThreadPoolExecutor(max_workers=MAX_WORKERS) as executor:
        futures = {
            executor.submit(process_one, article): article
            for article in tasks
        }

        for future in as_completed(futures):
            article = futures[future]
            try:
                future.result()
            except Exception as e:
                print(f"❌ id={article.get('id')} 线程异常: {e}")


if __name__ == "__main__":
    main_run()