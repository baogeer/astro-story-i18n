import json
import os
from datetime import datetime, date

import pymysql


def dict_fetchall(cursor):
    columns = [col[0] for col in cursor.description]
    rows = cursor.fetchall()

    result = []
    for row in rows:
        row_dict = {}
        for col, value in zip(columns, row):
            if isinstance(value, datetime):
                # 转为标准时间字符串（精确到秒）
                value = value.strftime('%Y-%m-%d %H:%M:%S')
            elif isinstance(value, date):
                # 仅日期
                value = value.strftime('%Y-%m-%d')
            else:
                try:
                    value = json.loads(value)
                except:
                    pass
            # 可根据需要添加其他类型转换
            row_dict[col] = value
        result.append(row_dict)

    return result


class DbMysqlHelper(object):
    def __init__(self, param):
        self.param = param
        self.connection = pymysql.connect(host=self.param.get('host'),
                                          user=self.param.get('user'),
                                          passwd=self.param.get('password'),
                                          port=int(self.param.get('port')),
                                          database=self.param.get('database'),
                                          use_unicode=True,
                                          charset='utf8mb4')
        self._host = param.get('host')
        self._user = param.get('user')
        self._password = param.get('password')  # 注意：原代码用的是'pwd'，建议统一
        self._port = param.get('port')
        self._charset = 'utf8mb4'

    def reConnect(self):
        try:
            self.connection.ping()
        except:
            self.connection = pymysql.connect(host=self.param.get('host'),
                                              user=self.param.get('user'),
                                              passwd=self.param.get('password'),
                                              port=int(self.param.get('port')),
                                              database=self.param.get('database'),
                                              use_unicode=True,
                                              charset='utf8mb4')

    def query(self, sql):
        try:
            self.reConnect()
            cursor = self.connection.cursor()
            self.connection.begin()
            cursor.execute(sql)
            self.connection.commit()
            rows = dict_fetchall(cursor)
            cursor.close()
            return rows
        except Exception as e:
            self.connection.rollback()
            print(f"查询错误: {e}")
            return []

    def update_insert(self, sql):
        try:
            self.reConnect()
            cursor = self.connection.cursor()
            self.connection.begin()
            effect_row = cursor.execute(sql)
            last_row_id = cursor.lastrowid
            self.connection.commit()
            cursor.close()
            return effect_row, last_row_id
        except Exception as e:
            self.connection.rollback()
            print(f"SQL执行错误: {e}")
            print(f"SQL: {sql[:]}")  # 打印部分SQL用于调试
            return 0, 0  # 返回 (0, 0) 而不是 None


# 本地
save_database_config = {
    'host': '127.0.0.1',
    'password': 'wang3468315',
    'user': 'root',
    'port': 3306,
    'database': 'data-mining',
}
db_tool = DbMysqlHelper(param=save_database_config)




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
    task_sql = "SELECT * FROM `data-mining`.`chinese_folktales` LIMIT 0, 100;"
    for article in db_tool.query(task_sql):
        for lang_code, fields in LANG_FIELDS.items():
            build_markdown(
                language_code=lang_code,
                article={
                    'file_name': article['file_name'],
                    'title': article[fields['title']],
                    'description': article[fields['summary']],
                    'content': article[fields['content']],
                    'publish_time': article['created_at'],
                }
            )


if __name__ == '__main__':
    main_run()
