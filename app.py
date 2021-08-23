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
    port=,
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
app.config["JSON_AS_ASCII"] = False
app.config["TEMPLATES_AUTO_RELOAD"] = True
app.secret_key ="jo4x965 504"

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/Herolist")
def Herolist():
    return render_template("Herolist.html")

@app.route("/mission")
def mission():
    return render_template("mission.html")

@app.route("/Heros/<HeroName>/<SkinName>")
def Heros(HeroName, SkinName):
    return render_template("Heros.html")

@app.route("/Challenge")
def challange():
    return render_template("Challenge.html")

@app.route("/Registered")
def apiRegistered():
    return render_template("Registered.html")

@app.route("/Change")
def Change():
    return render_template("Change.html")

@app.route("/CreatHeroDatas")
def CreatHeroDatas():
    return render_template("CreatHeroDatas.html")

@app.route("/Search/<wantKey>")
def Search(wantKey):
    return render_template("Search.html")

# 預設英雄Icon顯示在英雄頁面上
@app.route("/api/HeroIcon")
def apiHeroIcon():
    preset = request.args.get('preset', ' ')
    Gender = request.args.get('Gender', ' ')
    HeroAttributes = request.args.get('HeroAttributes', ' ')
    Race = request.args.get('Race', ' ')
    Camp = request.args.get('Camp', ' ')
    Ability = request.args.get('Ability', ' ')
    preset = "%"+preset+"%"
    GenderText = "%"+Gender+"%"
    HeroAttributesText = "%"+HeroAttributes+"%"
    RaceText = "%"+Race+"%"
    CampText = "%"+Camp+"%"
    AbilityText = "%"+Ability+"%"
    cursor.execute("SELECT * FROM heroicon WHERE class like %s AND class like %s AND class like %s AND class like %s AND class like %s AND class like %s",
                (preset, GenderText, HeroAttributesText, RaceText, CampText, AbilityText))
    heroicon = cursor.fetchall()
    dataArreys = []
    for x in heroicon:
        data_dic = {
            "id": x[0],
            "class": x[1].decode("utf8"),
            "url": x[2].decode("utf8"),
            "bgImg": x[3].decode("utf8"),
            "name": x[4]
        }
        data = data_dic.copy()
        dataArreys.append(data)
    return json.dumps({"data": dataArreys}, ensure_ascii=False)

# 英雄資料
@app.route("/api/Heros/<AskHeroName>/<AskSkinName>")
def apiHeros(AskHeroName,AskSkinName):
    dataArreys = []
    HeroName = AskHeroName
    SkinName = AskSkinName
    Name = "SELECT * FROM heroskin WHERE HeroName= %(val)s AND HeroSkin = %(val2)s"
    cursor.execute(Name, {'val': HeroName,'val2':SkinName})
    Heros = cursor.fetchall()

    Options = "SELECT * FROM heroskin WHERE HeroName= %(val)s"
    cursor.execute(Options, {'val': HeroName})
    HeroOptions = cursor.fetchall()

    unique_set = set(Heros+HeroOptions)
    unique_list = list(unique_set)
    for x in sorted(unique_list):
        data_dic = {
            "Id": x[0],
            "HeroName":x[1],
            "Heroskin": x[2],
            "CName": x[3],
            "SkinName": x[4],
            "HowToget": x[5],
            "Gender": x[6],
            "Race": x[7],
            "Camp": x[8],
            "photoSticker": x[9],
            "T1Effects": x[10].decode("utf8"),
            "T2Effects": x[11].decode("utf8"),
            "LeaderEffects": x[12].decode("utf8"),
            "Skill1Effects": x[13].decode("utf8"),
            "Skill2Effects": x[14].decode("utf8"),
            "Skill3Effects": x[15].decode("utf8"),
            "Skill4Effects": x[16].decode("utf8"),
            "Skill5Effects": x[17].decode("utf8"),
            "Skill6Effects": x[18].decode("utf8"),
            "SkinSkillEffects": x[19].decode("utf8"),
            "RelatedUniforms1": x[20].decode("utf8"),
            "RelatedUniforms2": x[21].decode("utf8"),
            "RelatedUniforms3": x[22].decode("utf8"),
            "RelatedUniforms4": x[23].decode("utf8"),
            "RelatedUniforms5": x[24].decode("utf8"),
            "Chained1": x[25].decode("utf8"),
            "Chained2": x[26].decode("utf8"),
            "Chained3": x[27].decode("utf8"),
            "Chained4": x[28].decode("utf8"),
            "Chained5": x[29].decode("utf8"),
            "Chained6": x[30].decode("utf8"),
            "Chained7": x[31].decode("utf8"),
            "Chained8": x[32].decode("utf8"),
            "Chained9": x[33].decode("utf8")
        }
        data = data_dic.copy()
        dataArreys.append(data)
    return json.dumps({"data": dataArreys}, ensure_ascii=False)

# 遊戲攻略
@app.route("/api/Challenge/<mode>/<idCName>")
def apiChallenge(mode,idCName):
    Name = "SELECT * FROM challenge Where mode=%(val1)s AND idCName=%(val2)s"
    cursor.execute(Name, {'val1': mode,'val2': idCName})
    datas = cursor.fetchall()
    dataArreys = []
    for x in datas:
        data_dic = {
            "id": x[0],
            "idCName": x[1],
            "mode": x[2],
            "keyword": x[3],
            "top1": x[4],
            "top1Name": x[5],
            "top2": x[6],
            "top2Name": x[7],
            "top3": x[8],
            "top3Name": x[9],
            "top4": x[10],
            "top4Name": x[11],
            "top5": x[12],
            "top5Name": x[13],
            "top6": x[14],
            "top6Name": x[15],
            "top7": x[16],
            "top7Name": x[17],
            "f9": x[18],
            "f9Name": x[19],
            "f19": x[20],
            "f19Name": x[21],
            "f29": x[22],
            "f29Name": x[23],
            "f39": x[24],
            "f39Name": x[25],
            "f49": x[26],
            "f49Name": x[27],
            "f59": x[28],
            "f59Name": x[29],
            "f69": x[30],
            "f69Name": x[31],
            "f79": x[32],
            "f79Name": x[33],
            "f89": x[34],
            "f89Name": x[35]
        }
        data = data_dic.copy()
        dataArreys.append(data)
    return json.dumps({"data": dataArreys}, ensure_ascii=False)

#任務模式
@app.route("/api/mission")
def apiMMission():
    Name = "SELECT * FROM challenge Where mode='任務模式'"
    cursor.execute(Name)
    datas = cursor.fetchall()
    dataArreys = []
    for x in datas:
        data_dic = {
            "needHeroName": x[5]+','+x[7]+','+x[9]
        }
        data = data_dic.copy()
        dataArreys.append(data)
    return json.dumps({"data": dataArreys}, ensure_ascii=False)

# 聯盟戰爭查詢
@app.route("/api/alliance")
def apiAlliance():
    Gender = request.args.get('Gender', '')
    Camp = request.args.get('Camp', '')
    CName = request.args.get('CName', '')
    thisMoonText = request.args.get('thisMoonText', '')
    Gender="%"+Gender+"%"
    Camp = "%"+Camp+"%"
    CName = "%"+CName+"%"
    T1Effects = "%"+thisMoonText+"%"
    T2Effects = "%"+thisMoonText+"%"
    LeaderEffects = "%"+thisMoonText+"%"
    Skill1Effects = "%"+thisMoonText+"%"
    Skill2Effects = "%"+thisMoonText+"%"
    Skill3Effects = "%"+thisMoonText+"%"
    Skill4Effects = "%"+thisMoonText+"%"
    Skill5Effects = "%"+thisMoonText+"%"
    Skill6Effects = "%"+thisMoonText+"%"

    t1 = "SELECT * FROM  heroskin WHERE Gender like %(Gender)s AND Camp like %(Camp)s AND CName like %(CName)s AND T1Effects like %(T1Effects)s"
    t2 = "SELECT * FROM  heroskin WHERE Gender like %(Gender)s AND Camp like %(Camp)s AND CName like %(CName)s AND T2Effects like %(T2Effects)s"
    l = "SELECT * FROM  heroskin WHERE Gender like %(Gender)s AND Camp like %(Camp)s AND CName like %(CName)s AND LeaderEffects like %(LeaderEffects)s"
    s1 = "SELECT * FROM  heroskin WHERE Gender like %(Gender)s AND Camp like %(Camp)s AND CName like %(CName)s AND Skill1Effects like %(Skill1Effects)s"
    s2 = "SELECT * FROM  heroskin WHERE Gender like %(Gender)s AND Camp like %(Camp)s AND CName like %(CName)s AND Skill2Effects like %(Skill2Effects)s"
    s3 = "SELECT * FROM  heroskin WHERE Gender like %(Gender)s AND Camp like %(Camp)s AND CName like %(CName)s AND Skill3Effects like %(Skill3Effects)s"
    s4 = "SELECT * FROM  heroskin WHERE Gender like %(Gender)s AND Camp like %(Camp)s AND CName like %(CName)s AND Skill4Effects like %(Skill4Effects)s"
    s5 = "SELECT * FROM  heroskin WHERE Gender like %(Gender)s AND Camp like %(Camp)s AND CName like %(CName)s AND Skill5Effects like %(Skill5Effects)s"
    s6 = "SELECT * FROM  heroskin WHERE Gender like %(Gender)s AND Camp like %(Camp)s AND CName like %(CName)s AND Skill6Effects like %(Skill6Effects)s"

    cursor.execute(t1, {'Gender': Gender, 'Camp': Camp, 'CName': CName, 'T1Effects': T1Effects})
    t1 = cursor.fetchall()
    cursor.execute(t2, {'Gender': Gender, 'Camp': Camp, 'CName': CName, 'T2Effects': T2Effects})
    t2 = cursor.fetchall()
    cursor.execute(l, {'Gender': Gender, 'Camp': Camp, 'CName': CName, 'LeaderEffects': LeaderEffects})
    l = cursor.fetchall()
    cursor.execute(s1, {'Gender': Gender, 'Camp': Camp, 'CName': CName, 'Skill1Effects': Skill1Effects})
    s1 = cursor.fetchall()
    cursor.execute(s2, {'Gender': Gender, 'Camp': Camp, 'CName': CName, 'Skill2Effects': Skill2Effects})
    s2 = cursor.fetchall()
    cursor.execute(s3, {'Gender': Gender, 'Camp': Camp, 'CName': CName, 'Skill3Effects': Skill3Effects})
    s3 = cursor.fetchall()
    cursor.execute(s4, {'Gender': Gender, 'Camp': Camp, 'CName': CName, 'Skill4Effects': Skill4Effects})
    s4 = cursor.fetchall()
    cursor.execute(s5, {'Gender': Gender, 'Camp': Camp, 'CName': CName, 'Skill5Effects': Skill5Effects})
    s5 = cursor.fetchall()
    cursor.execute(s6, {'Gender': Gender, 'Camp': Camp, 'CName': CName, 'Skill6Effects': Skill6Effects})
    s6 = cursor.fetchall()

    skillSearch=t1+t2+l+s1+s2+s3+s4+s5+s6
    unique_set = set(skillSearch)
    unique_list = list(unique_set)
    dataArreys = []
    for x in sorted(unique_list):
        data_dic = {
            "imgUrl": x[9],
            "CName":x[3],
            "SkinName":x[4]
        }
        data = data_dic.copy()
        dataArreys.append(data)
    return json.dumps({"data": dataArreys}, ensure_ascii=False)

#搜尋
@app.route("/api/SearchDatas")
def SearchDatas():
    wantKey=request.args.get('wantKey', '')
    keyWord = "%"+wantKey+"%"

    dataArreys1 = []
    sql = "SELECT * FROM heroskin WHERE  HeroName like %(val)s or HeroSkin like %(val)s or CName like %(val)s or SkinName like %(val)s or HowToGet like %(val)s or Gender like %(val)s or Race like %(val)s or Camp like %(val)s or photoSticker like %(val)s or T1Effects like %(val)s or T2Effects like %(val)s or LeaderEffects like %(val)s or Skill1Effects like %(val)s or Skill2Effects like %(val)s or Skill3Effects like %(val)s or Skill4Effects like %(val)s or Skill5Effects like %(val)s or Skill6Effects like %(val)s or SkinSkillEffects like %(val)s or RelatedUniforms1 like %(val)s or RelatedUniforms2 like %(val)s or RelatedUniforms3 like %(val)s or RelatedUniforms4 like %(val)s or RelatedUniforms5 like %(val)s or Chained1 like %(val)s or Chained2 like %(val)s or Chained3 like %(val)s or Chained4 like %(val)s or Chained5 like %(val)s or Chained6 like %(val)s or Chained7 like %(val)s or Chained8 like %(val)s or Chained9 like %(val)s"
    val = ({'val':keyWord})
    cursor.execute(sql, val)
    SearchSkin = cursor.fetchall()
    for x in SearchSkin:
        data1_dic = {
            "CName":x[3],
            "SkinName":x[4],
            "url":x[9],
            "Gender":x[6],
            "Camp":x[8],
            "Race":x[7],
            "HowToGet":x[5]
        }
        data1 = data1_dic.copy()
        dataArreys1.append(data1)

    dataArreys2 = []
    sql = "SELECT * FROM heroicon WHERE  id like %(val)s or class like %(val)s or url like %(val)s or bgImg like %(val)s or name like %(val)s"
    val = ({'val':keyWord})
    cursor.execute(sql, val)
    SearchIcon = cursor.fetchall()
    for y in SearchIcon:
        data2_dic = {
            "name":y[4],
            "url":y[2].decode("utf8"),
            "type":y[1].decode("utf8")
        }
        data2 = data2_dic.copy()
        dataArreys2.append(data2)

    dataArreys3 = []
    sql = "SELECT * FROM challenge WHERE id like %(val)s or idCName like %(val)s or mode like %(val)s or keyword like %(val)s or top1 like %(val)s or top1Name like %(val)s or top2 like %(val)s or top2Name like %(val)s or top3 like %(val)s or top3Name like %(val)s or top4 like %(val)s or top4Name like %(val)s or top5 like %(val)s or top5Name like %(val)s or top6 like %(val)s or top6Name like %(val)s or top7 like %(val)s or top7Name like %(val)s or 9F like %(val)s or 9FName like %(val)s or 19F like %(val)s or 19FName like %(val)s or 29F like %(val)s or 29FName like %(val)s or 39F like %(val)s or 39FName like %(val)s or 49F like %(val)s or 49FName like %(val)s or 59F like %(val)s or 59FName like %(val)s or 69F like %(val)s or 69FName like %(val)s or 79F like %(val)s or 79FName like %(val)s or 89F like %(val)s or 89FName like %(val)s"
    val = ({'val':keyWord})
    cursor.execute(sql, val)
    SearchChallenge = cursor.fetchall()
    for z in SearchChallenge:
        data3_dic = {
            "mode":z[2],
            "idCName":z[1]
        }
        data3 = data3_dic.copy()
        dataArreys3.append(data3)
    return json.dumps({"data1": dataArreys1,"data2": dataArreys2,"data3": dataArreys3}, ensure_ascii=False)

# 使用者登入
@app.route("/api/userDatas", methods=["GET", "POST", "PATCH", "DELETE"])
def loginPage():
    if request.method == "PATCH":
        userData = request.get_json()
        userAccountNumber = userData['AccountNumber']
        userPassword = userData['Password']
        cursor.execute ("SELECT * FROM userdatas WHERE AccountNumber = '%s'" % (userAccountNumber))
        loginData = cursor.fetchone()
        try:
            if loginData != None:
                if userPassword == loginData[4]:
                    session["AccountNumber"] = loginData[2]
                    session["NickName"] = loginData[5]
                    return jsonify ({
                            "data": {
                            "id": loginData[0],
                            "Name": loginData[1],
                            "AccountNumber": loginData[2],
                            "Email": loginData[3],
                            "NickName": loginData[5]
                        }
                    }), 200
                else:
                    return jsonify ({
                        "error": True,
                        "message": "輸入密碼錯誤"
                    }), 400
            else:
                return jsonify ({
                    "error": True,
                    "message": "查無帳號!"
                }), 500

        except:
            return jsonify ({
                "error": True,
                "message": "系統異常"
            }), 500

    elif request.method == "POST":
        userData = request.get_json()
        RegisteredName = userData['RegisteredName']
        RegisteredNickName = userData['RegisteredNickName']
        RegisteredAccountNumber = userData['RegisteredAccountNumber']
        RegisteredEmail = userData ['RegisteredEmail']
        RegisteredPassword = userData ['RegisteredPassword']
        cursor.execute ("SELECT * FROM userdatas WHERE AccountNumber = '%s'" % (RegisteredAccountNumber))
        registerResult = cursor.fetchone()
        try:
            if registerResult == None:
                if len(RegisteredName)==0 or len(RegisteredAccountNumber)==0 or len(RegisteredEmail)==0 or len(RegisteredPassword)==0:
                    print("資料未正確")
                    return jsonify({
						"error": True,
						"message": "資料未正確"
					}),400
                else:
                    cursor.execute("INSERT INTO userdatas(Name, AccountNumber, Email, Password, NickName) VALUES  (%s, %s, %s,%s, %s)", (RegisteredName,RegisteredAccountNumber, RegisteredEmail,RegisteredPassword,RegisteredNickName))
                    db.commit()
                    return jsonify({
						"ok": True,
						"message": "註冊成功"
					}),200

            else:
                return jsonify ({
					"error": True,
					"message": "Email已重複註冊過",
					}),400
        except:
            return jsonify ({
				"error": True,
				"message": "Error"
			}),500

    elif request.method == "GET":
        if "AccountNumber" in session:
            if session["AccountNumber"]=="MFFChucky":
                return jsonify({
				    "data": True,
                    "adm": True,
                    "AccountNumber":session['AccountNumber'],
                    "NickName":session['NickName']
			    })
            else:
                return jsonify({
				    "data": True,
                    "adm": False,
                    "AccountNumber":session['AccountNumber'],
                    "NickName":session['NickName']
			    })
        else:
            return jsonify({
				"data": None,
            })

    elif request.method == "DELETE":
        session.pop("AccountNumber", None)
        return jsonify({
			"ok": True,
		})

# 使用者變更密碼
@app.route("/api/ChangePassword",methods=["POST"])
def ChangePassword():
    userData = request.get_json()
    ChangeName= userData["ChangeName"]
    ChangeNickName= userData["ChangeNickName"]
    ChangeEmail= userData["ChangeEmail"]
    ChangePassword= userData["ChangeNewPassword"]
    ChangeOldPassword= userData["ChangeOldPassword"]
    ChangeAccountNumber= userData["ChangeAccountNumber"]

    userName = ChangeAccountNumber
    Name = "SELECT * FROM userdatas WHERE AccountNumber= %(val)s"
    cursor.execute(Name, {'val': userName})
    original = cursor.fetchall()
    if ChangeOldPassword==original[0][4]:
        cursor.execute("UPDATE userdatas SET Name=%s, Password =%s,NickName=%s,Email=%s WHERE AccountNumber=%s",(ChangeName,ChangePassword,ChangeNickName,ChangeEmail,ChangeAccountNumber))
        db.commit()
        return jsonify({
            "ok": True,
            "message": "變更成功"
        }),200

# 英雄制服評價
@app.route("/api/skinEvaluation/<AskHeroName>/<AskSkinName>",methods=["GET","POST", "PATCH"])
def skinEvaluation(AskHeroName,AskSkinName):
    if request.method == "GET":
        dataArreys = []
        HeroName = AskHeroName
        SkinName = AskSkinName
        likeThis = "SELECT * FROM evaluation WHERE HeroName= %(val)s AND HeroSkin = %(val2)s"
        cursor.execute(likeThis, {'val': HeroName,'val2':SkinName})
        evaluation = cursor.fetchall()
        data_dic = {
            "evaluation":len(evaluation)
        }
        data = data_dic.copy()
        dataArreys.append(data)
        return json.dumps({"data": dataArreys}, ensure_ascii=False)
    if request.method == "POST":
        evaluationData = request.get_json()
        user=evaluationData["user"]
        HeroName=evaluationData["HeroName"]
        HeroSkin=evaluationData["HeroSkin"]
        cursor.execute ("SELECT * FROM evaluation WHERE user=%s AND HeroName=%s AND HeroSkin=%s",(user, HeroName, HeroSkin))
        Result = cursor.fetchone()
        if Result==None:
            cursor.execute("INSERT INTO evaluation(user,HeroName,HeroSkin) VALUES  (%s, %s, %s)",
                (user, HeroName, HeroSkin))
            db.commit()
            dataArreys = []
            data_dic = {
                "ok":True
                }
            data = data_dic.copy()
            dataArreys.append(data)
            return json.dumps({"data": dataArreys}, ensure_ascii=False)
        else:
            cursor.execute("DELETE FROM evaluation WHERE user=%s AND HeroName=%s AND HeroSkin=%s",(user, HeroName, HeroSkin))
            db.commit()
            dataArreys = []
            data_dic = {
                "ok":False
                }
            data = data_dic.copy()
            dataArreys.append(data)
        return json.dumps({"data": dataArreys}, ensure_ascii=False)

    if request.method == "PATCH":
        evaluationData = request.get_json()
        user=evaluationData["user"]
        HeroName=evaluationData["HeroName"]
        HeroSkin=evaluationData["HeroSkin"]
        cursor.execute ("SELECT * FROM evaluation WHERE user=%s AND HeroName=%s AND HeroSkin=%s",(user, HeroName, HeroSkin))
        Result = cursor.fetchone()
        if Result!=None:
            dataArreys = []
            data_dic = {
                "like":True
                }
            data = data_dic.copy()
            dataArreys.append(data)
            return json.dumps({"data": dataArreys}, ensure_ascii=False)
        else:
            dataArreys = []
            data_dic = {
                "like":False
                }
            data = data_dic.copy()
            dataArreys.append(data)
            return json.dumps({"data": dataArreys}, ensure_ascii=False)

# 新增英雄資料
@app.route("/api/CreatHeroDatas",methods=["GET","POST"])
def creatHero():
    if request.method == "GET":
        cursor.execute("SELECT * FROM heroskin WHERE HowToGet like '%金幣%' or HowToGet like '%鑽石%' or HowToGet like '%劇情%' or HowToGet like '%收藏%'")
        heroicon = cursor.fetchall()
        dataArreys = []
        for x in heroicon:
            data_dic = {
                "CName": x[3],
                "skin": x[4],
                "EName": x[9]
            }
            data = data_dic.copy()
            dataArreys.append(data)
        return json.dumps({"data": dataArreys}, ensure_ascii=False)

    if request.method == "POST":
        HeroData = request.get_json()
        Id = HeroData["Id"]
        HeroName = HeroData["HeroName"]
        HeroSkin = HeroData["HeroSkin"]
        CName = HeroData["CName"]
        SkinName = HeroData["SkinName"]
        HowToGet = HeroData["HowToGet"]
        Gender = HeroData["Gender"]
        Race = HeroData["Race"]
        Camp = HeroData["Camp"]
        photoSticker = HeroName+'/'+HeroSkin
        T1Effects = HeroData["T1Effects"]
        T2Effects = HeroData["T2Effects"]
        LeaderEffects = HeroData["LeaderEffects"]
        Skill1Effects = HeroData["Skill1Effects"]
        Skill2Effects = HeroData["Skill2Effects"]
        Skill3Effects = HeroData["Skill3Effects"]
        Skill4Effects = HeroData["Skill4Effects"]
        Skill5Effects = HeroData["Skill5Effects"]
        Skill6Effects = HeroData["Skill6Effects"]
        SkinSkillEffects = HeroData["SkinSkillEffects"]
        RelatedUniforms1 = HeroData["RelatedUniforms1"]
        RelatedUniforms2 = HeroData["RelatedUniforms2"]
        RelatedUniforms3 = HeroData["RelatedUniforms3"]
        RelatedUniforms4 = HeroData["RelatedUniforms4"]
        RelatedUniforms5 = HeroData["RelatedUniforms5"]
        Chained1 = ""
        Chained2 = ""
        Chained3 = ""
        Chained4 = ""
        Chained5 = ""
        Chained6 = ""
        Chained7 = ""
        Chained8 = ""
        Chained9 = ""
        ChainedText1= CName.split('(')[0]+ '/' + SkinName +','+ HeroName+ '/'+ HeroSkin +',第一件'
        ChainedText2= CName.split('(')[0]+ '/' + SkinName +','+ HeroName+ '/'+ HeroSkin +',第二件'
        ChainedText3= CName.split('(')[0]+ '/' + SkinName +','+ HeroName+ '/'+ HeroSkin +',第三件'
        ChainedText4= CName.split('(')[0]+ '/' + SkinName +','+ HeroName+ '/'+ HeroSkin +',第四件'
        ChainedText5= CName.split('(')[0]+ '/' + SkinName +','+ HeroName+ '/'+ HeroSkin +',第五件'

        sql = "INSERT INTO heroskin(Id,HeroName,HeroDkin,CName,SkinName,HowToGet,Gender,Race,Camp,photoSticker,T1Effects,T2Effects,LeaderEffects,Skill1Effects,Skill2Effects,Skill3Effects,Skill4Effects,Skill5Effects,Skill6Effects,SkinSkillEffects,RelatedUniforms1,RelatedUniforms2,RelatedUniforms3,RelatedUniforms4,RelatedUniforms5,Chained1,Chained2,Chained3,Chained4,Chained5,Chained6,Chained7,Chained8,Chained9)VALUES (%s, %s, %s, %s, %s, %s,%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
        val = (str(Id), str(HeroName), str(HeroSkin), str(CName), str(SkinName), str(HowToGet), str(Gender), str(Race), str(Camp), str(photoSticker), str(T1Effects), str(T2Effects), str(LeaderEffects), str(Skill1Effects), str(Skill2Effects), str(Skill3Effects), str(Skill4Effects), str(Skill5Effects),
           str(Skill6Effects), str(SkinSkillEffects), str(RelatedUniforms1), str(RelatedUniforms2), str(RelatedUniforms3), str(RelatedUniforms4), str(RelatedUniforms5), str(Chained1), str(Chained2), str(Chained3), str(Chained4), str(Chained5), str(Chained6), str(Chained7), str(Chained8), str(Chained9))
        cursor.execute(sql, val)
        db.commit()

        RelatedUniforms1=RelatedUniforms1.split(',')[1]
        cursor.execute("SELECT * FROM heroskin WHERE photoSticker= '%s'" %(RelatedUniforms1))
        Result = cursor.fetchone()
        if Result[25]=='':
            cursor.execute("UPDATE heroskin SET Chained1=%s WHERE photoSticker=%s",(ChainedText1,RelatedUniforms1))
            db.commit()
        elif Result[26]=='':
            cursor.execute("UPDATE heroskin SET Chained2=%s WHERE photoSticker=%s",(ChainedText1,RelatedUniforms1))
            db.commit()
        elif Result[27]=='':
            cursor.execute("UPDATE heroskin SET Chained3=%s WHERE photoSticker=%s",(ChainedText1,RelatedUniforms1))
            db.commit()
        elif Result[28]=='':
            cursor.execute("UPDATE heroskin SET Chained4=%s WHERE photoSticker=%s",(ChainedText1,RelatedUniforms1))
            db.commit()
        elif Result[29]=='':
            cursor.execute("UPDATE heroskin SET Chained5=%s WHERE photoSticker=%s",(ChainedText1,RelatedUniforms1))
            db.commit()
        elif Result[30]=='':
            cursor.execute("UPDATE heroskin SET Chained6=%s WHERE photoSticker=%s",(ChainedText1,RelatedUniforms1))
            db.commit()
        elif Result[31]=='':
            cursor.execute("UPDATE heroskin SET Chained7=%s WHERE photoSticker=%s",(ChainedText1,RelatedUniforms1))
            db.commit()
        elif Result[32]=='':
            cursor.execute("UPDATE heroskin SET Chained8=%s WHERE photoSticker=%s",(ChainedText1,RelatedUniforms1))
            db.commit()
        elif Result[33]=='':
            cursor.execute("UPDATE heroskin SET Chained9=%s WHERE photoSticker=%s",(ChainedText1,RelatedUniforms1))
            db.commit()

        RelatedUniforms2=RelatedUniforms2.split(',')[1]
        cursor.execute("SELECT * FROM heroskin WHERE photoSticker= '%s'" %(RelatedUniforms2))
        Result = cursor.fetchone()
        if Result[25]=='':
            cursor.execute("UPDATE heroskin SET Chained1=%s WHERE photoSticker=%s",(ChainedText2,RelatedUniforms2))
            db.commit()
        elif Result[26]=='':
            cursor.execute("UPDATE heroskin SET Chained2=%s WHERE photoSticker=%s",(ChainedText2,RelatedUniforms2))
            db.commit()
        elif Result[27]=='':
            cursor.execute("UPDATE heroskin SET Chained3=%s WHERE photoSticker=%s",(ChainedText2,RelatedUniforms2))
            db.commit()
        elif Result[28]=='':
            cursor.execute("UPDATE heroskin SET Chained4=%s WHERE photoSticker=%s",(ChainedText2,RelatedUniforms2))
            db.commit()
        elif Result[29]=='':
            cursor.execute("UPDATE heroskin SET Chained5=%s WHERE photoSticker=%s",(ChainedText2,RelatedUniforms2))
            db.commit()
        elif Result[30]=='':
            cursor.execute("UPDATE heroskin SET Chained6=%s WHERE photoSticker=%s",(ChainedText2,RelatedUniforms2))
            db.commit()
        elif Result[31]=='':
            cursor.execute("UPDATE heroskin SET Chained7=%s WHERE photoSticker=%s",(ChainedText2,RelatedUniforms2))
            db.commit()
        elif Result[32]=='':
            cursor.execute("UPDATE heroskin SET Chained8=%s WHERE photoSticker=%s",(ChainedText2,RelatedUniforms2))
            db.commit()
        elif Result[33]=='':
            cursor.execute("UPDATE heroskin SET Chained9=%s WHERE photoSticker=%s",(ChainedText2,RelatedUniforms2))
            db.commit()

        RelatedUniforms3=RelatedUniforms3.split(',')[1]
        cursor.execute("SELECT * FROM heroskin WHERE photoSticker= '%s'" %(RelatedUniforms3))
        Result = cursor.fetchone()
        if Result[25]=='':
            cursor.execute("UPDATE heroskin SET Chained1=%s WHERE photoSticker=%s",(ChainedText3,RelatedUniforms3))
            db.commit()
        elif Result[26]=='':
            cursor.execute("UPDATE heroskin SET Chained2=%s WHERE photoSticker=%s",(ChainedText3,RelatedUniforms3))
            db.commit()
        elif Result[27]=='':
            cursor.execute("UPDATE heroskin SET Chained3=%s WHERE photoSticker=%s",(ChainedText3,RelatedUniforms3))
            db.commit()
        elif Result[28]=='':
            cursor.execute("UPDATE heroskin SET Chained4=%s WHERE photoSticker=%s",(ChainedText3,RelatedUniforms3))
            db.commit()
        elif Result[29]=='':
            cursor.execute("UPDATE heroskin SET Chained5=%s WHERE photoSticker=%s",(ChainedText3,RelatedUniforms3))
            db.commit()
        elif Result[30]=='':
            cursor.execute("UPDATE heroskin SET Chained6=%s WHERE photoSticker=%s",(ChainedText3,RelatedUniforms3))
            db.commit()
        elif Result[31]=='':
            cursor.execute("UPDATE heroskin SET Chained7=%s WHERE photoSticker=%s",(ChainedText3,RelatedUniforms3))
            db.commit()
        elif Result[32]=='':
            cursor.execute("UPDATE heroskin SET Chained8=%s WHERE photoSticker=%s",(ChainedText3,RelatedUniforms3))
            db.commit()
        elif Result[33]=='':
            cursor.execute("UPDATE heroskin SET Chained9=%s WHERE photoSticker=%s",(ChainedText3,RelatedUniforms3))
            db.commit()

        RelatedUniforms4=RelatedUniforms4.split(',')[1]
        cursor.execute("SELECT * FROM heroskin WHERE photoSticker= '%s'" %(RelatedUniforms4))
        Result = cursor.fetchone()
        if Result[25]=='':
            cursor.execute("UPDATE heroskin SET Chained1=%s WHERE photoSticker=%s",(ChainedText4,RelatedUniforms4))
            db.commit()
        elif Result[26]=='':
            cursor.execute("UPDATE heroskin SET Chained2=%s WHERE photoSticker=%s",(ChainedText4,RelatedUniforms4))
            db.commit()
        elif Result[27]=='':
            cursor.execute("UPDATE heroskin SET Chained3=%s WHERE photoSticker=%s",(ChainedText4,RelatedUniforms4))
            db.commit()
        elif Result[28]=='':
            cursor.execute("UPDATE heroskin SET Chained4=%s WHERE photoSticker=%s",(ChainedText4,RelatedUniforms4))
            db.commit()
        elif Result[29]=='':
            cursor.execute("UPDATE heroskin SET Chained5=%s WHERE photoSticker=%s",(ChainedText4,RelatedUniforms4))
            db.commit()
        elif Result[30]=='':
            cursor.execute("UPDATE heroskin SET Chained6=%s WHERE photoSticker=%s",(ChainedText4,RelatedUniforms4))
            db.commit()
        elif Result[31]=='':
            cursor.execute("UPDATE heroskin SET Chained7=%s WHERE photoSticker=%s",(ChainedText4,RelatedUniforms4))
            db.commit()
        elif Result[32]=='':
            cursor.execute("UPDATE heroskin SET Chained8=%s WHERE photoSticker=%s",(ChainedText4,RelatedUniforms4))
            db.commit()
        elif Result[33]=='':
            cursor.execute("UPDATE heroskin SET Chained9=%s WHERE photoSticker=%s",(ChainedText4,RelatedUniforms4))
            db.commit()

        RelatedUniforms5=RelatedUniforms5.split(',')[1]
        cursor.execute("SELECT * FROM heroskin WHERE photoSticker= '%s'" %(RelatedUniforms5))
        Result = cursor.fetchone()
        if Result[25]=='':
            cursor.execute("UPDATE heroskin SET Chained1=%s WHERE photoSticker=%s",(ChainedText5,RelatedUniforms5))
            db.commit()
        elif Result[26]=='':
            cursor.execute("UPDATE heroskin SET Chained2=%s WHERE photoSticker=%s",(ChainedText5,RelatedUniforms5))
            db.commit()
        elif Result[27]=='':
            cursor.execute("UPDATE heroskin SET Chained3=%s WHERE photoSticker=%s",(ChainedText5,RelatedUniforms5))
            db.commit()
        elif Result[28]=='':
            cursor.execute("UPDATE heroskin SET Chained4=%s WHERE photoSticker=%s",(ChainedText5,RelatedUniforms5))
            db.commit()
        elif Result[29]=='':
            cursor.execute("UPDATE heroskin SET Chained5=%s WHERE photoSticker=%s",(ChainedText5,RelatedUniforms5))
            db.commit()
        elif Result[30]=='':
            cursor.execute("UPDATE heroskin SET Chained6=%s WHERE photoSticker=%s",(ChainedText5,RelatedUniforms5))
            db.commit()
        elif Result[31]=='':
            cursor.execute("UPDATE heroskin SET Chained7=%s WHERE photoSticker=%s",(ChainedText5,RelatedUniforms5))
            db.commit()
        elif Result[32]=='':
            cursor.execute("UPDATE heroskin SET Chained8=%s WHERE photoSticker=%s",(ChainedText5,RelatedUniforms5))
            db.commit()
        elif Result[33]=='':
            cursor.execute("UPDATE heroskin SET Chained9=%s WHERE photoSticker=%s",(ChainedText5,RelatedUniforms5))
            db.commit()

        return jsonify({
            "ok": True
        }),200

app.run(port=3000, debug=True)
