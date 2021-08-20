checkProcess();
class ChallengePicDiv extends React.Component {
    render() {
        return <div className='ChallengePicDivs'>
            <MffBtn className='modeBtn' text='世界頭目' onClick={function () {
                localStorage.setItem("mode", '世界頭目');
                localStorage.setItem("modeBtn", 0);
                changeBtn();
                WorldBossDatas();
            }} />
            <MffBtn className='modeBtn' text='影域' onClick={function () {
                localStorage.setItem("mode", '影域');
                localStorage.setItem("modeBtn", 1);
                changeBtn();
                ShadowDomainDatas();
            }} />
            <MffBtn className='modeBtn' text='聯盟戰爭' onClick={function () {
                localStorage.setItem("mode", '聯盟戰爭');
                localStorage.setItem("modeBtn", 2);
                changeBtn();
                AllianceDatas();
            }}
            />
            <MffBtn className='modeBtn' text='任務模式' onClick={function () {
                localStorage.setItem("mode", '任務模式');
                localStorage.setItem("modeBtn", 3);
                changeBtn();
                MissionDatas();
            }}
            />
        </div>
    }
}

let ChallengePicDivElems = <ChallengePicDiv />;
ReactDOM.render(
    ChallengePicDivElems, document.getElementsByClassName('ChallengePicDiv')[0]);

let modeBtn = document.getElementsByClassName('modeBtn');

// 預設按鈕底色
if (localStorage.getItem('modeBtn') == null) {
    localStorage.setItem("modeBtn", 0);
    modeBtn[localStorage.modeBtn].style.backgroundColor = "#448899";
    modeBtn[localStorage.modeBtn].style.color = "white";
}
else{
    modeBtn[localStorage.modeBtn].style.backgroundColor = "#448899";
    modeBtn[localStorage.modeBtn].style.color = "white";
}

//點選按鈕設計
function changeBtn() {
    for (let i = 0; i < modeBtn.length; i++) {
        modeBtn[i].style.backgroundColor = "white";
        modeBtn[i].style.color = "#448899";
    }
    modeBtn[localStorage.modeBtn].style.backgroundColor = "#448899";
    modeBtn[localStorage.modeBtn].style.color = "white";
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
    localStorage.setItem('ChallengeRecordLocation', bodyTop) //將Y座標位置紀錄
})

function ChallengeMoveScol() {
    var scrollo_y = localStorage.ChallengeRecordLocation;
    if (scrollo_y != null) {
        window.scrollTo(100, scrollo_y);
    }
}

