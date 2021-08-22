import json
import mysql.connector
from flask_sqlalchemy import SQLAlchemy


db = mysql.connector.connect(
    host="localhost",
    port=3306,
    user="",
    passwd="",
    db='mff')
cursor = db.cursor()

# 讀取Json檔案
with open("data/data.json", mode="r") as file:
    data = json.load(file)

# 創建
for index in range(len(data)):
    Id = (data[index]["Id"])
    HeroName = data[index]["HeroName"]
    Heroskin = data[index]["Heroskin"]
    CName = data[index]["CName"]
    SkinName = data[index]["SkinName"]
    HowToGet = data[index]["HowToget"]
    Gender = data[index]["Gender"]
    Race = data[index]["Race"]
    Camp = data[index]["Camp"]
    photoSticker = data[index]["photoSticker"]
    T1Effects = data[index]["T1Effects"]
    T2Effects = data[index]["T2Effects"]
    LeaderEffects = data[index]["LeaderEffects"]
    Skill1Effects = data[index]["Skill1Effects"]
    Skill2Effects = data[index]["Skill2Effects"]
    Skill3Effects = data[index]["Skill3Effects"]
    Skill4Effects = data[index]["Skill4Effects"]
    Skill5Effects = data[index]["Skill5Effects"]
    Skill6Effects = data[index]["Skill6Effects"]
    SkinSkillEffects = data[index]["SkinSkillEffects"]
    RelatedUniforms1 = data[index]["RelatedUniforms1"]
    RelatedUniforms2 = data[index]["RelatedUniforms2"]
    RelatedUniforms3 = data[index]["RelatedUniforms3"]
    RelatedUniforms4 = data[index]["RelatedUniforms4"]
    RelatedUniforms5 = data[index]["RelatedUniforms5"]
    Chained1 = data[index]["Chained1"]
    Chained2 = data[index]["Chained2"]
    Chained3 = data[index]["Chained3"]
    Chained4 = data[index]["Chained4"]
    Chained5 = data[index]["Chained5"]
    Chained6 = data[index]["Chained6"]
    Chained7 = data[index]["Chained7"]
    Chained8 = data[index]["Chained8"]
    Chained9 = data[index]["Chained9"]

    sql = "INSERT INTO heroskin(Id,HeroName,Heroskin,CName,SkinName,HowToGet,Gender,Race,Camp,photoSticker,T1Effects,T2Effects,LeaderEffects,Skill1Effects,Skill2Effects,Skill3Effects,Skill4Effects,Skill5Effects,Skill6Effects,SkinSkillEffects,RelatedUniforms1,RelatedUniforms2,RelatedUniforms3,RelatedUniforms4,RelatedUniforms5,Chained1,Chained2,Chained3,Chained4,Chained5,Chained6,Chained7,Chained8,Chained9)VALUES (%s, %s, %s, %s, %s, %s,%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
    val = (str(Id), str(HeroName), str(Heroskin), str(CName), str(SkinName), str(HowToGet), str(Gender), str(Race), str(Camp), str(photoSticker), str(T1Effects), str(T2Effects), str(LeaderEffects), str(Skill1Effects), str(Skill2Effects), str(Skill3Effects), str(Skill4Effects), str(Skill5Effects),
           str(Skill6Effects), str(SkinSkillEffects), str(RelatedUniforms1), str(RelatedUniforms2), str(RelatedUniforms3), str(RelatedUniforms4), str(RelatedUniforms5), str(Chained1), str(Chained2), str(Chained3), str(Chained4), str(Chained5), str(Chained6), str(Chained7), str(Chained8), str(Chained9))
    cursor.execute(sql, val)
    db.commit()
