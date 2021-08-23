
// =====HeroList-localStorage=====
let Gender = localStorage.Gender
let HeroAttributes = localStorage.HeroAttributes
let Race = localStorage.Race
let Camp = localStorage.Camp
let Ability = localStorage.Ability
let page = 0

// 使用者確認是否登入
async function checkProcess() {
    let navLeftSpan = document.getElementsByClassName('navLeftSpan');
    await fetch("/api/userDatas", { method: "GET" })
        .then(response => {
            return response.json()
        })
        .then(res => {
            if (res.data == true) {
                navLeftSpan[0].style.display = 'none';
                navLeftSpan[1].style.display = 'none';
                navLeftSpan[2].style.display = 'contents';
                navLeftSpan[3].style.display = 'contents';
                navLeftSpan[2].innerHTML = res.NickName + ' 設置' + ' / ';
            } else {
                navLeftSpan[0].style.display = 'contents';
                navLeftSpan[1].style.display = 'contents';
                navLeftSpan[2].style.display = 'none';
                navLeftSpan[3].style.display = 'none';
            }
        })
}

// 使用者註冊
async function registerProcess() {
    let emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
    let passwordRule = /[^a-zA-Z0-9]+/;
    let RegisteredDatasName = document.getElementsByClassName("RegisteredInput")[0].value;
    let RegisteredDatasNickName = document.getElementsByClassName("RegisteredInput")[1].value;
    let RegisteredDatasAccountNumber = document.getElementsByClassName("RegisteredInput")[2].value;
    let RegisteredDatasEmail = document.getElementsByClassName("RegisteredInput")[3].value;
    let RegisteredDatasPassword = document.getElementsByClassName("RegisteredInput")[4].value;
    let RegisteredDatasPasswordAgain = document.getElementsByClassName("RegisteredInput")[5].value;
    let AgreeWarningSign = document.getElementsByClassName("AgreeWarningSign");
    if (RegisteredDatasName.length == 0) {
        AgreeWarningSign[0].style.display = 'block';
        AgreeWarningSign[0].innerHTML = ' * 請輸入您的真實姓名'
    }
    else if (RegisteredDatasNickName.length == 0) {
        AgreeWarningSign[0].style.display = 'block';
        AgreeWarningSign[0].innerHTML = ' * 請您喜歡的暱稱'
    }
    else if (RegisteredDatasAccountNumber.length == 0) {
        AgreeWarningSign[0].style.display = 'block';
        AgreeWarningSign[0].innerHTML = ' * 請輸入您的帳號'
    }
    else if (RegisteredDatasEmail.length == 0) {
        AgreeWarningSign[0].style.display = 'block';
        AgreeWarningSign[0].innerHTML = ' * 請輸入您的電子信箱'
    }
    else if (RegisteredDatasPassword.length == 0) {
        AgreeWarningSign[0].style.display = 'block';
        AgreeWarningSign[0].innerHTML = ' * 請輸入密碼'
    }
    else if (RegisteredDatasPasswordAgain.length == 0) {
        AgreeWarningSign[0].style.display = 'block';
        RegisteredDatasPassword.value = '';
        AgreeWarningSign[0].innerHTML = ' * 再次確認密碼為空白'
    }
    else if (RegisteredDatasEmail.search(emailRule) == -1) { 
        AgreeWarningSign[0].style.display = 'block';
        AgreeWarningSign[0].innerHTML = '信箱格式錯誤'
    }
    else if (RegisteredDatasPassword.length < 7 && RegisteredDatasPassword.length > 13 && RegisteredDatasPassword.search(passwordRule)) {
        RegisteredDatasPassword.value = '';
        RegisteredDatasPasswordAgain.value = '';
        AgreeWarningSign[0].style.display = 'block';
        AgreeWarningSign[0].innerHTML = ' * 密碼需要8至12字元，並且英文以及數字都使用';
    }

    else if (RegisteredDatasPassword != RegisteredDatasPasswordAgain) {
        RegisteredDatasPassword.value = '';
        RegisteredDatasPasswordAgain.value = '';
        AgreeWarningSign[0].style.display = 'block';
        AgreeWarningSign[0].innerHTML = ' * 再次驗證密碼不正確！請再次確認！';
    }
    else {
        fetch("/api/userDatas", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                RegisteredName: RegisteredDatasName,
                RegisteredNickName: RegisteredDatasNickName,
                RegisteredAccountNumber: RegisteredDatasAccountNumber,
                RegisteredEmail: RegisteredDatasEmail,
                RegisteredPassword: RegisteredDatasPassword,
            }),
        })
            .then(response => {
                return response.json()
            })
            .then(data => {
                if (data.error == true) {
                    AgreeWarningSign[0].style.display = 'block';
                    AgreeWarningSign[0].innerHTML = ' * 帳號重複或是輸入格式錯誤';
                } else {
                    AgreeWarningSign[0].style.display = 'block';
                    AgreeWarningSign[0].style.color = 'blue';
                    AgreeWarningSign[0].innerHTML = ' * 已註冊成功！';
                    location = "/Registered";
                }
            })
            .catch(function (error) {
                AgreeWarningSign[0].style.display = 'block';
                AgreeWarningSign[0].innerHTML = ' * 伺服器內部錯誤！';
            });
    }
}








