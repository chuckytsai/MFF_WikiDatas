// ======================未來之戰NAV創造======================
// NAV打包菜單
class NavMenuCreat extends React.Component {
    render() {
        return <span>
            <a href='http://127.0.0.1:3000'>
                <MffImg className='indexBtn' src='/mffWIKI/img/logo121.jpg' />
            </a>
            <div className='navLeft'>
                <MffA className='navLeftSpan' href='http://127.0.0.1:3000/Registered' text='登入' />
                <MffA className='navLeftSpan' href='http://127.0.0.1:3000/Registered' text='/ 註冊' />
                <MffA className='navLeftSpan' href='http://127.0.0.1:3000/Change' />
                <MffSpan className='navLeftSpan' text='登出' onClick={deleteProcess} />
            </div>
            <div class='navRight'>
                <div className='hamburger'>
                    <MffImg src='/mffWIKI/img/hamburg.png' onClick={navSwitch} />
                    <MffA className='hamburgerA' href='http://127.0.0.1:3000/Herolist' />
                    <MffA className='hamburgerA' href='http://127.0.0.1:3000/Challenge' />
                </div>
                <MffA className='navRightA' text='遊戲角色' href='http://127.0.0.1:3000/Herolist' />
                <MffA className='navRightA' text='遊戲攻略' href='http://127.0.0.1:3000/Challenge' />
                <form class='serchBtn' onSubmit={serchBtnInput}>
                    <MffInput className='serchBtnInput' type='text' placeholder='搜尋關鍵字' />
                    <MffImg src='/mffWIKI/img/SearchBTN.JPG' onClick={serchBtnInput} />
                </form>
            </div>
        </span>
    }
}
let navMFFElem = <NavMenuCreat />;
ReactDOM.render(
    navMFFElem, document.getElementsByClassName('NavBarMFFSpan')[0]);

// 使用者登入
async function loginProcess() {
    let loginBtnChick = document.getElementsByClassName('loginBtnChick')[0];
    await fetch("/api/userDatas", {
        method: "PATCH",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            AccountNumber: document.getElementsByClassName("loginInput")[0].value,
            Password: document.getElementsByClassName("loginInput")[1].value
        })
    })
        .then(response => {
            return response.json()
        })
        .then(data => {
            if (data.error == true) {
                document.getElementsByClassName("loginInput")[1].value = "";
                loginBtnChick.style.display = 'block';
                loginBtnChick.style.color = 'red';
                loginBtnChick.innerHTML = '* 輸入帳號或是密碼錯誤';
            } else {
                history.go(-1)
            }
        })
        .catch(function (error) {
            loginBtnChick.style.display = 'block';
            loginBtnChick.style.color = 'red';
            loginBtnChick.innerHTML = '* 輸入帳號或是密碼錯誤';
        });
}
// 使用者登出
async function deleteProcess() {
    await fetch("/api/userDatas", {
        method: "DELETE",
        headers: {
            "content-type": "application/json"
        },
    })
        .then(response => {
            return response.json()
        })
        .then(result => {
            if (result.ok == true) {
                window.location = location;
            }
        })
}

function serchBtnInput(d) {
    d.preventDefault();
    let serchBtnInput = document.getElementsByClassName('serchBtnInput')[0];
    if (serchBtnInput.value.length > 0) {
        location = "/Search" + '/' + serchBtnInput.value;
        serchBtnInput.value = '';
    }
}

let isShow = true;
// NAV漢堡圖
function navSwitch() {
    let navRightA = document.querySelectorAll('.navRightA');
    isShow = !isShow;
    navRightA[0].style.display = isShow ? 'none' : 'block';
    navRightA[1].style.display = isShow ? 'none' : 'block';
};

