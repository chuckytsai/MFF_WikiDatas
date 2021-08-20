checkProcess();
checkLike();
// 英雄各制服喜愛設定
let evaluationH1 = document.getElementsByClassName('evaluationH1');
let goodBtn = document.getElementsByClassName('goodBtn');
let good = document.getElementsByClassName('good');
let likeBigger = true;

// 使用者確認是否登入才可以確認已點like
async function checkLike() {
    await fetch("/api/userDatas", { method: "GET" })
        .then(response => {
            return response.json()
        })
        .then(res => {
            if (res.data == true) {
                HaveLike(res.AccountNumber);
                skinEvaluationQuantity();
            } else {
                skinEvaluationQuantity();
            }
        })
}
// 執行like或是取消like
function skinEvaluation(AccountNumber) {
    let HeroName = location.href.split('http://127.0.0.1:3000/Heros/')[1].split('/')[0];
    let SkinName = location.href.split('http://127.0.0.1:3000/Heros/')[1].split('/')[1];
    fetch("/api/skinEvaluation" + '/' + HeroName + '/' + SkinName, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            user: AccountNumber,
            HeroName: HeroName,
            Heroskin: SkinName
        }),
    })
        .then(response => {
            return response.json()
        })
        .then(data => {
            if (data.data[0]['ok'] == true) {
                goodBtn[0].style.display = 'none';
                goodBtn[1].style.display = 'block';
                goodBtn[1].style.backgroundColor = 'rgb(201, 184, 154)';
                good[1].style.height = '32px';
                skinEvaluationQuantity()
            } else {
                goodBtn[0].style.display = 'block';
                goodBtn[1].style.display = 'none';
                good[1].style.height = '30px';
                skinEvaluationQuantity()
            }
        })
        .catch(function (error) {
            console.log(error)
        });
}

function skinEvaluationQuantity() {
    let HeroName = location.href.split('http://127.0.0.1:3000/Heros/')[1].split('/')[0];
    let SkinName = location.href.split('http://127.0.0.1:3000/Heros/')[1].split('/')[1];
    fetch("/api/skinEvaluation" + '/' + HeroName + '/' + SkinName, {
        method: "GET",
    })
        .then(response => {
            return response.json()
        })
        .then(data => {
            // 該角色like數目
            evaluationH1[0].innerHTML = data.data[0]['evaluation'];
        })
        .catch(function (error) {
            console.log(error)
        });
}

function HaveLike(AccountNumber) {
    let HeroName = location.href.split('http://127.0.0.1:3000/Heros/')[1].split('/')[0];
    let SkinName = location.href.split('http://127.0.0.1:3000/Heros/')[1].split('/')[1];
    fetch("/api/skinEvaluation" + '/' + HeroName + '/' + SkinName, {
        method: "PATCH",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            user: AccountNumber,
            HeroName: HeroName,
            Heroskin: SkinName
        }),
    })
        .then(response => {
            return response.json()
        })
        .then(data => {
            if (data.error == true) {
                console.log(data)
            } else {
                if (data.data[0]['like'] == true) {
                    goodBtn[0].style.display = 'none';
                    goodBtn[1].style.display = 'block';
                    goodBtn[1].style.backgroundColor = 'rgb(201, 184, 154)';
                    good[1].style.height = '32px';
                }
                else {
                    goodBtn[0].style.display = 'block';
                    goodBtn[1].style.display = 'none';
                    good[1].style.height = '30px';
                }
            }
        })
        .catch(function (error) {
            console.log(error)
        });
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
    localStorage.setItem('HerosRecordLocation', bodyTop) //將Y座標位置紀錄
})

function HerosMoveScol() {
    var scrollo_y = localStorage.HerosRecordLocation;
    if (scrollo_y != null) {
            window.scrollTo(100, scrollo_y);
    }
}

