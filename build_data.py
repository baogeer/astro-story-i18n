import json
import os

from dbMysqlHelper import db_tool

def yaml_safe(value: str) -> str:
    """把字符串转成 YAML 安全的值（用 JSON 双引号包裹并转义）"""
    if value is None:
        return '""'
    return json.dumps(str(value), ensure_ascii=False)


def build_markdown(language_code, article):
    newline = '\r\n'
    content_str = newline.join(article['content'])

    article_content = f"""---
pubDatetime: {article['publish_time']}
title: {yaml_safe(article['title'])}
featured: false
draft: false
description: {yaml_safe(article['description'])}
---



![AstroPaper I18n]({article['ai_image']})




 {content_str}   

"""

    dir_path = f"./src/data/blog/{language_code}"
    os.makedirs(dir_path, exist_ok=True)

    file_path = f"{dir_path}/{article['file_name']}.md"
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(article_content)


LANG_FIELDS = {
    'en': {'title': 'title_en', 'summary': 'ai_summary_en', 'content': 'article_content_en'},
    'ar': {'title': 'title_ar', 'summary': 'ai_summary_ar', 'content': 'article_content_ar'},
    'es': {'title': 'title_es', 'summary': 'ai_summary_es', 'content': 'article_content_es'},
    'fr': {'title': 'title_fr', 'summary': 'ai_summary_fr', 'content': 'article_content_fr'},
    'ru': {'title': 'title_ru', 'summary': 'ai_summary_ru', 'content': 'article_content_ru'},
}


def main_run():
    task_sql = "SELECT * FROM `data-mining`.`chinese_folktales` WHERE `ai_image` IS NOT NULL LIMIT 0, 100;"
    for article in db_tool.query(task_sql):
        for lang_code, fields in LANG_FIELDS.items():
            build_markdown(
                language_code=lang_code,
                article={
                    'file_name': article['file_name'],
                    'title': article[fields['title']],
                    'description': article[fields['summary']],
                    'content': article[fields['content']],
                    'ai_image': article['ai_image'],
                    'publish_time': article['created_at'],
                }
            )


if __name__ == '__main__':
    main_run()
