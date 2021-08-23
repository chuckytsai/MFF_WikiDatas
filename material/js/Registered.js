window.onload = function () {
    checkProcess();
};

let contractDivAndAgree = document.getElementsByClassName('contractDivAndAgree')[0];
let agreeBtn = document.getElementsByClassName('agreeBtn')[0];
let agreeShiny = document.getElementsByClassName('agreeShiny')[0];
let RegisteredDatas = document.getElementsByClassName('RegisteredDatas')[0];
let isShiny = true;

agreeShiny.onclick = function () {
    isShiny = !isShiny;
    agreeShiny.style.backgroundColor = isShiny ? 'white' : '#448899';
    agreeShiny.style.border = isShiny ? '1.5px solid rgb(139, 139, 139, 0.9)' : '1.5px solid black';
}

agreeBtn.onclick = function () {
    if (agreeShiny.style.backgroundColor == 'rgb(68, 136, 153)') {
        contractDivAndAgree.style.display = 'none';
        RegisteredDatas.style.display = 'block';
    }
    else {
        alert('請先閱讀合約內容,以及同意合約');
    }
}

RegisteredDatas.addEventListener("click", (e) => {
    e.preventDefault()
});


// =====登入方寬顯示/隱藏=====
let ICanFly = true;
let LoginForm = document.getElementsByClassName('LoginForm')[0];
function loginDivChange() {
    ICanFly = !ICanFly;
    LoginForm.style.display = ICanFly ? 'none' : 'block'
}
LoginForm.onclick = (r) => {
    r.preventDefault()
}