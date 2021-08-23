window.onload = function () {
    checkProcess();
};

async function checkProcess() {
    await fetch("/api/userDatas", { method: "GET" })
        .then(response => {
            return response.json()
        })
        .then(res => {
            if (res.adm == true) {
                optionSkin();
            }
            else {
                location = "/Herolist";
            }
        })
}

// 制服選單
function optionSkin() {
    fetch("/api/CreatHeroDatas", { method: "GET" })
        .then(response => {
            return response.json()
        })
        .then(data => {
            data = data.data
            for (let x = 0; x < data.length; x++) {
                let RelatedSelect1 = document.getElementsByClassName('RelatedSelect')[0];
                let RelatedOption = document.createElement('option');
                let SkinName = document.createTextNode(data[x]['CName'].split("(")[0] + '/' + data[x]['skin']);
                RelatedSelect1.append(RelatedOption);
                RelatedOption.appendChild(SkinName);
                RelatedOption.value = data[x]['CName'].split("(")[0] + '/' + data[x]['skin'] + ',' + data[x]['EName'];
            }
            for (let x = 0; x < data.length; x++) {
                let RelatedSelect2 = document.getElementsByClassName('RelatedSelect')[1];
                let RelatedOption = document.createElement('option');
                let SkinName = document.createTextNode(data[x]['CName'].split("(")[0] + '/' + data[x]['skin']);
                RelatedSelect2.append(RelatedOption);
                RelatedOption.appendChild(SkinName);
                RelatedOption.value = data[x]['CName'].split("(")[0] + '/' + data[x]['skin'] + ',' + data[x]['EName'];
            }
            for (let x = 0; x < data.length; x++) {
                let RelatedSelect3 = document.getElementsByClassName('RelatedSelect')[2];
                let RelatedOption = document.createElement('option');
                let SkinName = document.createTextNode(data[x]['CName'].split("(")[0] + '/' + data[x]['skin']);
                RelatedSelect3.append(RelatedOption);
                RelatedOption.appendChild(SkinName);
                RelatedOption.value = data[x]['CName'].split("(")[0] + '/' + data[x]['skin'] + ',' + data[x]['EName'];
            }
            for (let x = 0; x < data.length; x++) {
                let RelatedSelect4 = document.getElementsByClassName('RelatedSelect')[3];
                let SkinName = document.createTextNode(data[x]['CName'].split("(")[0] + '/' + data[x]['skin']);
                let RelatedOption = document.createElement('option');
                RelatedSelect4.append(RelatedOption);
                RelatedOption.appendChild(SkinName);
                RelatedOption.value = data[x]['CName'].split("(")[0] + '/' + data[x]['skin'] + ',' + data[x]['EName'];
            }
            for (let x = 0; x < data.length; x++) {
                let RelatedSelect5 = document.getElementsByClassName('RelatedSelect')[4];
                let SkinName = document.createTextNode(data[x]['CName'].split("(")[0] + '/' + data[x]['skin']);
                let RelatedOption = document.createElement('option');
                RelatedSelect5.append(RelatedOption);
                RelatedOption.appendChild(SkinName);
                RelatedOption.value = data[x]['CName'].split("(")[0] + '/' + data[x]['skin'] + ',' + data[x]['EName'];
            }
        })
        .catch(function (error) {
            console.log(error)
        });

}

// 新增英雄資料
async function HeroDatas() {
    let HeroIconDatasText = document.getElementsByClassName('HeroIconDatasText');
    let skinNameH3 = document.getElementsByClassName('skinNameH3')[0];
    let heroName = document.getElementsByClassName('heroName');
    let howGetLan = document.getElementsByClassName('howGetLan');
    let SkillDescription = document.getElementsByClassName('SkillDescription');
    let RelatedSelect = document.getElementsByClassName('RelatedSelect');

    await fetch("/api/CreatHeroDatas", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            Id: HeroIconDatasText[0].value + HeroIconDatasText[1].value,
            HeroName: HeroIconDatasText[0].value.split('.')[1],
            Heroskin: HeroIconDatasText[1].value,
            CName: heroName[0].value,
            SkinName: skinNameH3.value,
            HowToGet: howGetLan[0].value,
            Gender: heroName[1].value,
            Race: heroName[2].value,
            Camp: heroName[3].value,
            T1Effects: SkillDescription[5].value,
            T2Effects: SkillDescription[6].value,
            Skill1Effects: SkillDescription[0].value,
            Skill2Effects: SkillDescription[1].value,
            Skill3Effects: SkillDescription[2].value,
            Skill4Effects: SkillDescription[3].value,
            Skill5Effects: SkillDescription[4].value,
            Skill6Effects: SkillDescription[8].value,
            LeaderEffects: SkillDescription[7].value,
            SkinSkillEffects: SkillDescription[9].value,
            RelatedUniforms1: RelatedSelect[0].value,
            RelatedUniforms2: RelatedSelect[1].value,
            RelatedUniforms3: RelatedSelect[2].value,
            RelatedUniforms4: RelatedSelect[3].value,
            RelatedUniforms5: RelatedSelect[4].value
        }),
    })
        .then(response => {
            return response.json()
        })
        .then(data => {
            if (data.error == true) {
                console.log(data)
            } else {
                console.log(data)
            }
        })
        .catch(function (error) {
            console.log(error)
        });
}
