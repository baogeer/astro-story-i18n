from dbMysqlHelper import db_tool

LANG_FIELDS = {
    'en': 'https://folkstory.kilosites.com/posts/{}',
    'ar': 'https://folkstory.kilosites.com/ar/posts/{}',
    'es': 'https://folkstory.kilosites.com/es/posts/{}',
    'fr': 'https://folkstory.kilosites.com/fr/posts/{}',
    'ru': 'https://folkstory.kilosites.com/ru/posts/{}',
}


def main_run():
    article_list = []

    task_sql = "SELECT `file_name` FROM `data-mining`.`chinese_folktales`;"
    for article in db_tool.query(task_sql):
        for part_url in LANG_FIELDS.values():
            article_list.append(part_url.format(article['file_name']))

    newline = '\n'
    content_str = newline.join(article_list)

    file_path = f"./folkstory_article_url.txt"
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content_str)


if __name__ == '__main__':
    main_run()
