from flask import *
from markupsafe import escape
import mysql.connector
from flask import session
import urllib.parse as urlparse
from urllib.parse import parse_qs
from mysql.connector import Error
from flask_sqlalchemy import SQLAlchemy
import json


db = mysql.connector.connect(
    host="localhost",
    port=3306,
    user="",
    passwd="",
    db='mff',
    charset='utf8')
cursor = db.cursor()


app = Flask(
    __name__,
    static_folder="material",
    static_url_path="/mffWIKI"
)

# 讀取Json檔案

with open(r"data/challenge.json", mode="r", encoding="utf-8") as file:
    data4 = json.load(file)


for x in range(len(data4['data'])):
    id = data4['data'][x]['id']
    idCName = data4['data'][x]['idCName']
    mode = data4['data'][x]['mode']
    keyword = data4['data'][x]['keyword']
    top1 = ""
    top1Name = ""
    top2 = ""
    top2Name = ""
    top3 = ""
    top3Name = ""
    top4 = ""
    top4Name = ""
    top5 = ""
    top5Name = ""
    top6 = ""
    top6Name = ""
    top7 = ""
    top7Name = ""
    f9 = ""
    f9Name = ""
    f19 = ""
    f19Name = ""
    f29 = ""
    f29Name = ""
    f39 = ""
    f39Name = ""
    f49 = ""
    f49Name = ""
    f59 = ""
    f59Name = ""
    f69 = ""
    f69Name = ""
    f79 = ""
    f79Name = ""
    f89 = ""
    f89Name = ""

    sql = "INSERT INTO challenge (id,idCName,mode,keyword,top1,top1Name,top2,top2Name,top3,top3Name,top4,top4Name,top5,top5Name,top6,top6Name,top7,top7Name,9F,9FName,19F,19FName,29F,29FName,39F,39FName,49F,49FName,59F,59FName,69F,69FName,79F,79FName,89F,89FName) VALUES (%s, %s,%s, %s,%s, %s,%s, %s,%s, %s,%s, %s,%s, %s,%s, %s,%s, %s,%s, %s,%s, %s,%s, %s,%s, %s, %s, %s ,%s, %s, %s, %s, %s ,%s, %s, %s)"
    val = (str(id), str(idCName), str(mode), str(keyword),
           str(top1), str(top1Name), str(top2), str(top2Name), str(top3), str(top3Name), str(top4), str(
        top4Name), str(top5), str(top5Name), str(top6), str(top6Name), str(top7), str(top7Name),
        str(f9), str(f9Name), str(f19), str(f19Name), str(f29), str(f29Name), str(f39), str(f39Name), str(f49), str(f49Name), str(f59), str(f59Name), str(f69), str(f69Name), str(f79), str(f79Name), str(f89), str(f89Name))
    cursor.execute(sql, val)
    db.commit()

    if len(data4['data'][x]['raiders']) == 2:
        id = data4['data'][x]['id']
        top1 = data4['data'][x]['raiders'][1]['top1']
        top1Name = data4['data'][x]['raiders'][1]['top1Name']
        top2 = data4['data'][x]['raiders'][1]['top2']
        top2Name = data4['data'][x]['raiders'][1]['top2Name']
        top3 = data4['data'][x]['raiders'][1]['top3']
        top3Name = data4['data'][x]['raiders'][1]['top3Name']

        sql = "UPDATE challenge SET top1=%s,top1Name=%s,top2=%s,top2Name=%s,top3=%s,top3Name=%s WHERE (id = %s)"
        val = (str(top1), str(top1Name), str(top2), str(top2Name), str(top3), str(top3Name), str(id))
        cursor.execute(sql, val)
        db.commit()

    if len(data4['data'][x]['raiders']) > 1:
        if len(data4['data'][x]['raiders'][1]) == 10:
            id = data4['data'][x]['id']
            top1 = data4['data'][x]['raiders'][1]['top1']
            top1Name = data4['data'][x]['raiders'][1]['top1Name']
            top2 = data4['data'][x]['raiders'][1]['top2']
            top2Name = data4['data'][x]['raiders'][1]['top2Name']
            top3 = data4['data'][x]['raiders'][1]['top3']
            top3Name = data4['data'][x]['raiders'][1]['top3Name']
            top4 = data4['data'][x]['raiders'][1]['top4']
            top4Name = data4['data'][x]['raiders'][1]['top4Name']
            top5 = data4['data'][x]['raiders'][1]['top5']
            top5Name = data4['data'][x]['raiders'][1]['top5Name']

            sql = "UPDATE challenge SET top1=%s,top1Name=%s,top2=%s,top2Name=%s,top3=%s,top3Name=%s,top4=%s,top4Name=%s,top5=%s,top5Name=%s WHERE (id = %s)"
            val = (str(top1), str(top1Name), str(top2), str(top2Name), str(top3), str(
                top3Name), str(top4), str(top4Name), str(top5), str(top5Name), str(id))
            cursor.execute(sql, val)
            db.commit()

    if len(data4['data'][x]['raiders']) == 3:
        if len(data4['data'][x]['raiders'][2]) == 18:
            id = data4['data'][x]['id']
            f9 = data4['data'][x]['raiders'][2]['9F']
            f9Name = data4['data'][x]['raiders'][2]['9FName']
            f19 = data4['data'][x]['raiders'][2]['19F']
            f19Name = data4['data'][x]['raiders'][2]['19FName']
            f29 = data4['data'][x]['raiders'][2]['29F']
            f29Name = data4['data'][x]['raiders'][2]['29FName']
            f39 = data4['data'][x]['raiders'][2]['39F']
            f39Name = data4['data'][x]['raiders'][2]['39FName']
            f49 = data4['data'][x]['raiders'][2]['49F']
            f49Name = data4['data'][x]['raiders'][2]['49FName']
            f59 = data4['data'][x]['raiders'][2]['59F']
            f59Name = data4['data'][x]['raiders'][2]['59FName']
            f69 = data4['data'][x]['raiders'][2]['69F']
            f69Name = data4['data'][x]['raiders'][2]['69FName']
            f79 = data4['data'][x]['raiders'][2]['79F']
            f79Name = data4['data'][x]['raiders'][2]['79FName']
            f89 = data4['data'][x]['raiders'][2]['89F']
            f89Name = data4['data'][x]['raiders'][2]['89FName']

            sql = "UPDATE challenge SET 9F=%s,9FName=%s,19F=%s,19FName=%s,29F=%s,29FName=%s,39F=%s,39FName=%s,49F=%s,49FName=%s,59F=%s,59FName=%s,69F=%s,69FName=%s,79F=%s,79FName=%s,89F=%s,89FName=%s WHERE (id = %s)"
            val = (str(f9), str(f9Name), str(f19), str(f19Name), str(f29), str(f29Name), str(f39), str(f39Name), str(f49), str(
                f49Name), str(f59), str(f59Name), str(f69), str(f69Name), str(f79), str(f79Name), str(f89), str(f89Name), str(id))
            cursor.execute(sql, val)
            db.commit()

    if len(data4['data'][x]['raiders']) == 1:
        id = data4['data'][x]['id']
        top1 = data4['data'][x]['raiders'][0]['top1']
        top1Name = data4['data'][x]['raiders'][0]['top1Name']

        sql = "UPDATE challenge SET top1=%s,top1Name=%s WHERE (id = %s)"
        val = (str(top1), str(top1Name), str(id))
        cursor.execute(sql, val)
        db.commit()

        if len(data4['data'][x]['raiders'][0]) == 6:
            id = data4['data'][x]['id']
            top2 = data4['data'][x]['raiders'][0]['top2']
            top2Name = data4['data'][x]['raiders'][0]['top2Name']
            top3 = data4['data'][x]['raiders'][0]['top3']
            top3Name = data4['data'][x]['raiders'][0]['top3Name']

            sql = "UPDATE challenge SET top2=%s,top2Name=%s,top3=%s,top3Name=%s WHERE (id = %s)"
            val = (str(top2), str(top2Name), str(top3), str(top3Name), str(id))
            cursor.execute(sql, val)
            db.commit()

        if len(data4['data'][x]['raiders'][0]) == 8:
            id = data4['data'][x]['id']
            top2 = data4['data'][x]['raiders'][0]['top2']
            top2Name = data4['data'][x]['raiders'][0]['top2Name']
            top3 = data4['data'][x]['raiders'][0]['top3']
            top3Name = data4['data'][x]['raiders'][0]['top3Name']
            top4 = data4['data'][x]['raiders'][0]['top4']
            top4Name = data4['data'][x]['raiders'][0]['top4Name']

            sql = "UPDATE challenge SET top2=%s,top2Name=%s,top3=%s,top3Name=%s,top4=%s,top4Name=%s WHERE (id = %s)"
            val = (str(top2), str(top2Name), str(top3), str(
                top3Name), str(top4), str(top4Name), str(id))
            cursor.execute(sql, val)
            db.commit()

        if len(data4['data'][x]['raiders'][0]) == 10:
            id = data4['data'][x]['id']
            top2 = data4['data'][x]['raiders'][0]['top2']
            top2Name = data4['data'][x]['raiders'][0]['top2Name']
            top3 = data4['data'][x]['raiders'][0]['top3']
            top3Name = data4['data'][x]['raiders'][0]['top3Name']
            top4 = data4['data'][x]['raiders'][0]['top4']
            top4Name = data4['data'][x]['raiders'][0]['top4Name']
            top5 = data4['data'][x]['raiders'][0]['top5']
            top5Name = data4['data'][x]['raiders'][0]['top5Name']

            sql = "UPDATE challenge SET top2=%s,top2Name=%s,top3=%s,top3Name=%s,top4=%s,top4Name=%s,top5=%s,top5Name=%s WHERE (id = %s)"
            val = (str(top2), str(top2Name), str(top3), str(top3Name), str(
                top4), str(top4Name), str(top5), str(top5Name), str(id))
            cursor.execute(sql, val)
            db.commit()

        if len(data4['data'][x]['raiders'][0]) == 12:
            id = data4['data'][x]['id']
            top2 = data4['data'][x]['raiders'][0]['top2']
            top2Name = data4['data'][x]['raiders'][0]['top2Name']
            top3 = data4['data'][x]['raiders'][0]['top3']
            top3Name = data4['data'][x]['raiders'][0]['top3Name']
            top4 = data4['data'][x]['raiders'][0]['top4']
            top4Name = data4['data'][x]['raiders'][0]['top4Name']
            top5 = data4['data'][x]['raiders'][0]['top5']
            top5Name = data4['data'][x]['raiders'][0]['top5Name']
            top6 = data4['data'][x]['raiders'][0]['top6']
            top6Name = data4['data'][x]['raiders'][0]['top6Name']

            sql = "UPDATE challenge SET top2=%s,top2Name=%s,top3=%s,top3Name=%s,top4=%s,top4Name=%s,top5=%s,top5Name=%s,top6=%s,top6Name=%s WHERE (id = %s)"
            val = (str(top2), str(top2Name), str(top3), str(top3Name), str(top4), str(
                top4Name), str(top5), str(top5Name), str(top6), str(top6Name), str(id))
            cursor.execute(sql, val)
            db.commit()

        if len(data4['data'][x]['raiders'][0]) == 14:
            id = data4['data'][x]['id']
            top2 = data4['data'][x]['raiders'][0]['top2']
            top2Name = data4['data'][x]['raiders'][0]['top2Name']
            top3 = data4['data'][x]['raiders'][0]['top3']
            top3Name = data4['data'][x]['raiders'][0]['top3Name']
            top4 = data4['data'][x]['raiders'][0]['top4']
            top4Name = data4['data'][x]['raiders'][0]['top4Name']
            top5 = data4['data'][x]['raiders'][0]['top5']
            top5Name = data4['data'][x]['raiders'][0]['top5Name']
            top6 = data4['data'][x]['raiders'][0]['top6']
            top6Name = data4['data'][x]['raiders'][0]['top6Name']
            top7 = data4['data'][x]['raiders'][0]['top7']
            top7Name = data4['data'][x]['raiders'][0]['top7Name']

            sql = "UPDATE challenge SET top2=%s,top2Name=%s,top3=%s,top3Name=%s,top4=%s,top4Name=%s,top5=%s,top5Name=%s,top6=%s,top6Name=%s,top7=%s,top7Name=%s WHERE (id = %s)"
            val = (str(top2), str(top2Name), str(top3), str(top3Name), str(top4), str(top4Name), str(
                top5), str(top5Name), str(top6), str(top6Name), str(top7), str(top7Name), str(id))
            cursor.execute(sql, val)
            db.commit()
