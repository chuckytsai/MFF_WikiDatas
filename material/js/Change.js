window.onload = function () {
    checkProcess();
    ChangeMoveScol();
};

// 使用者確認是否登入
async function checkProcess() {
    let navLeftSpan = document.getElementsByClassName('navLeftSpan');
    let ChangeData = document.getElementsByClassName('ChangeData')[0];
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
                ChangeData.innerHTML = res.AccountNumber;
            } else {
                location = "/";
            }
        })
}

// 使用者變更資料
async function ChangeDatas() {
    let ChangeData = document.getElementsByClassName('ChangeData')[0];
    let emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
    let passwordRule = /[^a-zA-Z0-9]+/;
    let ChangeDatasName = document.getElementsByClassName("ChangeInput")[0].value;
    let ChangeDatasNickName = document.getElementsByClassName("ChangeInput")[1].value;
    let ChangeDatasEmail = document.getElementsByClassName("ChangeInput")[2].value;
    let ChangeDatasOldPassword = document.getElementsByClassName("ChangeInput")[3].value;
    let ChangeDatasNewPassword = document.getElementsByClassName("ChangeInput")[4].value;
    let ChangeDatasNewPasswordAgain = document.getElementsByClassName("ChangeInput")[5].value;
    let AgreeWarningSign = document.getElementsByClassName("AgreeWarningSign");

    if (ChangeDatasEmail.search(emailRule) != -1) { //信箱格式
        if (ChangeDatasNewPassword.length > 7 && ChangeDatasNewPassword.length < 13 && ChangeDatasNewPassword.search(passwordRule)) {
            if (ChangeDatasNewPassword == ChangeDatasNewPasswordAgain) {  //再次確認密碼
                await fetch("/api/ChangePassword", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({
                        ChangeAccountNumber: ChangeData.innerHTML,
                        ChangeName: ChangeDatasName,
                        ChangeNickName: ChangeDatasNickName,
                        ChangeEmail: ChangeDatasEmail,
                        ChangeOldPassword: ChangeDatasOldPassword,
                        ChangeNewPassword: ChangeDatasNewPassword
                    }),
                })
                    .then(response => {
                        return response.json()
                    })
                    .then(data => {
                        if (data.error == true) {
                            AgreeWarningSign[0].style.display = 'block';
                            AgreeWarningSign[0].style.color = 'red';
                            AgreeWarningSign[0].innerHTML = ' * 輸入格式錯誤';
                        } else {
                            AgreeWarningSign[0].style.display = 'block';
                            AgreeWarningSign[0].style.color = 'blue';
                            AgreeWarningSign[0].innerHTML = ' * 已變更成功！';
                        }
                    })
                    .catch(function (error) {
                        AgreeWarningSign[0].style.display = 'block';
                        AgreeWarningSign[0].style.color = 'red';
                        AgreeWarningSign[0].innerHTML = ' * 伺服器內部錯誤！';
                    });
            }
            else {
                ChangeDatasNewPassword.value = '';
                ChangeDatasNewPasswordAgain.value = '';
                AgreeWarningSign[0].style.display = 'block';
                AgreeWarningSign[0].style.color = 'red';
                AgreeWarningSign[0].innerHTML = ' * 再次驗證密碼不正確！請再次確認！';
            }
        } else {
            ChangeDatasNewPassword.value = '';
            ChangeDatasNewPasswordAgain.value = '';
            AgreeWarningSign[0].style.display = 'block';
            AgreeWarningSign[0].style.color = 'red';
            AgreeWarningSign[0].innerHTML = ' * 密碼需要 8 碼至 12 碼 & 需要英文與數字';
        }
    }
    else {
        AgreeWarningSign[0].style.display = 'block';
        AgreeWarningSign[0].style.color = 'red';
        AgreeWarningSign[0].innerHTML = ' * 格式錯誤或是欄位空白'
    }
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
    localStorage.setItem('ChangeRecordLocation', bodyTop) //將Y座標位置紀錄
})

function ChangeMoveScol() {
    var scrollo_y = localStorage.ChangeRecordLocation;
    if (scrollo_y != null) {
            window.scrollTo(100, scrollo_y);
    }
}

