import json
import mysql.connector
from flask_sqlalchemy import SQLAlchemy


db = mysql.connector.connect(
    host="localhost",
    port=,
    user="",
    passwd="",
    db='mff',
    charset='utf8')
cursor = db.cursor()


# 讀取Json檔案
with open(r"data/allHero.json", mode="r", encoding="utf-8") as file:
    data = json.load(file)


# 創建
for index in range(len(data["heroDatas"])):
    heroId = data["heroDatas"][index]["id"]  # 英雄id
    heroClass = data["heroDatas"][index]["class"]  # class
    url = data["heroDatas"][index]["url"]  # url
    bgImg = data["heroDatas"][index]["bgImg"]  # bgImg
    name = data["heroDatas"][index]["name"]  # name
    sql = "INSERT INTO heroicon(id,class,url,bgImg,name) VALUES (%s, %s, %s, %s, %s)"
    val = (str(heroId), str(heroClass), str(url), str(bgImg), str(name))
    cursor.execute(sql, val)
    db.commit()
