window.onload = function () {
    checkProcess();
};

async function checkProcess() {
    let navLeftSpan = document.getElementsByClassName('navLeftSpan');
    fetch("/api/userDatas", { method: "GET" })
        .then(response => {
            return response.json()
        })
        .then(res => {
            if (res.data == true) {
                navLeftSpan[0].style.display = 'none';
                navLeftSpan[1].style.display = 'none';
                navLeftSpan[2].style.display = 'contents';
                navLeftSpan[3].style.display = 'contents';
                navLeftSpan[2].innerHTML = '歡迎! ' + res.NickName + ' / ';
            } else {
                navLeftSpan[0].style.display = 'contents';
                navLeftSpan[1].style.display = 'contents';
                navLeftSpan[2].style.display = 'none';
                navLeftSpan[3].style.display = 'none';
            }
            if (res.adm == true) {
                let WhatHeros = document.getElementsByClassName('WhatHeros')[0];
                let heroA = document.createElement('a'); //建立a標籤
                let herodiv = document.createElement('div'); //建立div標籤
                let heroIcon = document.createElement('img'); //建立heroIcon的img標籤
                let heroName = document.createElement('h6'); //建立heroName的h6標籤
                heroA.href = '/CreatHeroDatas';
                heroIcon.src = '/mffWIKI/img/Heros/StanLee/StanLee.jpg';
                heroName.className = 'heroName';
                WhatHeros.append(heroA);
                heroA.append(herodiv);
                herodiv.append(heroIcon);
                herodiv.append(heroName);
                heroName.append('新增角色');
            }
        })
}

let ConditionScreening = document.getElementsByClassName('ConditionScreening');
// 選擇性別
ConditionScreening[0].onchange = function () {
    localStorage.setItem("Present", ' ');
    localStorage.setItem("Gender", document.getElementById('Gender').value);
    Herolist();
}

// 選擇屬性
ConditionScreening[1].onchange = function () {
    localStorage.setItem("Present", ' ');
    localStorage.setItem("HeroAttributes", document.getElementById('HeroAttributes').value);
    Herolist();
}

// 選擇種族
ConditionScreening[2].onchange = function () {
    localStorage.setItem("Present", ' ');
    localStorage.setItem("Race", document.getElementById('Race').value);
    Herolist();
}

// 選擇陣營
ConditionScreening[3].onchange = function () {
    localStorage.setItem("Present", ' ');
    localStorage.setItem("Camp", document.getElementById('Camp').value);
    Herolist();
}

// 選擇能力
ConditionScreening[4].onchange = function () {
    localStorage.setItem("Present", ' ');
    localStorage.setItem("Ability", document.getElementById('Ability').value);
    Herolist();
}

// 清除類別選擇
ConditionScreening[5].onclick = function () {
    localStorage.setItem("Gender", ' ');
    localStorage.setItem("HeroAttributes", ' ');
    localStorage.setItem("Race", ' ');
    localStorage.setItem("Camp", ' ');
    localStorage.setItem("Ability", ' ');
    localStorage.setItem("Present", '預設');
    location = "/Herolist";
}

// 選取英雄類別
function printValue() {
    // localStorage給值
    localStorage.setItem("Present", ' ');
    localStorage.setItem("Gender", document.getElementById('Gender').value);
    localStorage.setItem("HeroAttributes", document.getElementById('HeroAttributes').value);
    localStorage.setItem("Race", document.getElementById('Race').value);
    localStorage.setItem("Camp", document.getElementById('Camp').value);
    localStorage.setItem("Ability", document.getElementById('Ability').value);
    Herolist();
}

// ======滾動滑鼠======
window.addEventListener("scroll", () => {
    let bodyTop = 0;
    if (typeof window.pageYOffset != "undefined") {
        bodyTop = window.pageYOffset;

    }
    else if (typeof document.compatMode != "undefined" && document.compatMode != "BackCompat") {
        bodyTop = document.documentElement.scrollTop;
    }
    else if (typeof document.body != "undefined") {
        bodyTop = document.body.scrollTop;
    }
    /*捲動後的高度值*/
    localStorage.setItem('HeroListRecordLocation', bodyTop) //將Y座標位置紀錄
})


