import requests
import base64
import os
import re
from time import time

from dbMysqlHelper import db_tool

auth_token = "sk-tZbCZEd-bgFMnN-QzpXqLw"
base_url = "https://gate.aidingqing.com"

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
                headers={"Content-Type": "application/json", "Authorization": f"Bearer {auth_token}"},
                json=data, timeout=30
            )
            result = resp.json()
            return result['choices'][0]['message']['content'].strip()
        except Exception as e:
            print(f"think retry {retry}: {e}")
    return 'A traditional Chinese medicine herb table with mortar and pestle, warm lighting, no people no text'


def image_generate_with_gemini(
        title_prompt: str,
        file_name: str,
):
    data = {
        "model": "gemini-2.5-flash-image",
        # 1. prompt里强制写16:9
        # 2. size直接写16:9的分辨率
        "prompt": f"{image_build_prompt.format(title_prompt)}, 16:9 widescreen, ultra wide shot",
        "n": 1,
        "size": "1792x1024"  # 这就是标准的16:9，比 aspect_ratio 参数更管用
    }
    # print(data['prompt'])
    for retry in range(5):
        try:
            resp = requests.post(
                f"{base_url}/v1/images/generations",
                headers={"Content-Type": "application/json", "Authorization": f"Bearer {auth_token}"},
                json=data, timeout=120
            )
            if resp.status_code != 200:
                print(resp.text)
                continue
            result = resp.json()
            item = result['data'][0]
            b64_data = item.get('b64_json') or ""
            if not b64_data and 'url' in item and 'base64' in item['url']:
                m = re.search(r'base64,([A-Za-z0-9+/=]+)', item['url'])
                b64_data = m.group(1) if m else ""

            if b64_data:
                os.makedirs("./public", exist_ok=True)
                path = f"./public/{file_name}.png"
                with open(path, "wb") as f:
                    f.write(base64.b64decode(b64_data.replace('\n', '')))
                return f"/public/{file_name}.png"
        except Exception as e:
            print(f"重试 {retry + 1}: {e}")
    return None


def save_data(news):
    up_ins_sql = """
        UPDATE `data-mining`.`chinese_folktales` SET  `ai_image` = {} WHERE `id` = {};
        """.format(
        repr(news['ai_image']),
        repr(news['id'])
    )
    db_tool.update_insert(up_ins_sql)


def main_run():
    task_sql = "SELECT * FROM `data-mining`.`chinese_folktales` WHERE `ai_image` IS NULL LIMIT 0, 20;"
    for article in db_tool.query(task_sql):
        start_time = time()
        article_title = article['title_en']
        article_summary = article['ai_summary_en']
        article_text = f"""
        title = {article_title}
        summary = {article_summary}
        """
        title_prompt = image_prompt_think(
            article_text=article_text
        )
        ai_image = image_generate_with_gemini(
            title_prompt=title_prompt,
            file_name=article['file_name'],
        )
        elapsed = time() - start_time
        if ai_image:
            article['ai_image'] = ai_image
            save_data(news=article)
            print(f"  ✅ id={article['id']} 绘图成功，耗时 {elapsed:.1f}s")
        else:
            print(f"  ❌ id={article['id']} 绘图成功，耗时 {elapsed:.1f}s")

if __name__ == '__main__':
    main_run()
