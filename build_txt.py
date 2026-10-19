from dbMysqlHelper import db_tool

LANG_FIELDS = {
    'en': 'http://guochuan-story.s3-website-ap-southeast-1.amazonaws.com/posts/{}',
    'ar': 'http://guochuan-story.s3-website-ap-southeast-1.amazonaws.com/ar/posts/{}',
    'es': 'http://guochuan-story.s3-website-ap-southeast-1.amazonaws.com/es/posts/{}',
    'fr': 'http://guochuan-story.s3-website-ap-southeast-1.amazonaws.com/fr/posts/{}',
    'ru': 'http://guochuan-story.s3-website-ap-southeast-1.amazonaws.com/ru/posts/{}',
}


def main_run():
    article_list = []

    task_sql = "SELECT `file_name` FROM `data-mining`.`chinese_folktales`;"
    for article in db_tool.query(task_sql):
        for part_url in LANG_FIELDS.values():
            article_list.append(part_url.format(article['file_name']))

    newline = '\n'
    content_str = newline.join(article_list)

    file_path = f"./article_url.txt"
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content_str)


if __name__ == '__main__':
    main_run()
