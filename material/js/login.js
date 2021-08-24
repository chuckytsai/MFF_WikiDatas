// 登入輸入帳號
class LoginFormAccountDiv extends React.Component {
    render() {
        return <div>
            <MffP text='帳號' />
            <MffInput className='loginInput' type='text' placeholder='* 請輸入帳號'/>
        </div>;
    }
}
// 登入輸入密碼
class LoginFormPasswordDiv extends React.Component {
    render() {
        return <div>
            <MffP text='密碼' />
            <MffInput className='loginInput' type='password' placeholder='* 請輸入密碼'/>
        </div>;
    }
}
// ======================確認登入Form創造======================
class LoginFormCreat extends React.Component {
    render() {
        return <span>
            {/* <MffImg src='/mffWIKI/img/close.png' onClick={() => {
                document.getElementsByClassName('LoginForm')[0].style.display = 'none';
            }} /> */}
            <LoginFormAccountDiv />
            <LoginFormPasswordDiv />
            <MffBtn onClick={loginProcess} text='確認登入' />
            <MffH6 className='loginBtnChick' />
            <MffBtn onClick={() => {
                let LoginForm = document.getElementsByClassName('LoginForm')[0];
                let contractDivAndAgree=document.getElementsByClassName('contractDivAndAgree')[0];
                contractDivAndAgree.style.display = 'block';
                LoginForm.style.display = 'none';
            }} text='註冊此網站' />
        </span>
    }
}
let LoginFormCreatElem = <LoginFormCreat />;
ReactDOM.render(
    LoginFormCreatElem, document.getElementsByClassName('LoginSpan')[0]);