checkProcess();

// 搜尋
if (localStorage.getItem('showSmall') == null) {
    localStorage.setItem("showSmall", 0);
    localStorage.setItem("showBig", 20);
}
let wantKeyWordUrl = location.href.split('http://127.0.0.1:3000/Search')[1].split('/')[1]
var encoded = wantKeyWordUrl;
wantKeyWordUrl = decodeURIComponent(encoded.replace(/\+/g, " "));
let SearchResult = document.getElementsByClassName('SearchResult')[0];
let SearchData = document.getElementsByClassName('SearchData');


fetch("/api/SearchDatas?wantKey=" + wantKeyWordUrl)
    .then(response => {
        return response.json();
    })
    .then(r => {
        const data1 = r.data1;
        const data2 = r.data2;
        const data3 = r.data3;
        const x = data1.length + data2.length + data3.length;
        searchPageBtnCreate(Math.ceil(x / 20))
        SearchResultText(x)
        if (data1.length > 0) {
            data1SearchUrl(data1)
        }
        if (data2.length > 0) {
            data2SearchUrl(data2)
        }
        if (data3.length > 0) {
            data3SearchUrl(data3)
        }
        SearchUrlCut();
        SearchDataMoveScol();
    }).catch(function (error) {
        console.log(error)
    });


// 搜尋結果h3標籤元件
function SearchResultText(x) {

    class SeaechResultH3 extends React.Component {
        render() {
            return <h3
                className="SearchResult">
                搜尋結果 : {wantKeyWordUrl}  共{x}筆結果
            </h3>;
        }
    }
    let SeaechResultH3Elem = <SeaechResultH3 />;
    ReactDOM.render(
        SeaechResultH3Elem, document.getElementsByClassName('SearchTitle')[0]);
}

function data1SearchUrl(data) {
    let Data1SearchUrs = [];
    for (let index = 0; index < data.length; index++) {
        Data1SearchUrs.push(<div className='SearchUrl'><a href={"http://127.0.0.1:3000/Heros/" + data[index].url}>
            <MffP text={data[index].CName + '-' + data[index].SkinName} />
            <MffH6 text={"名稱:" + data[index].CName + " 性別:" + data[index].Gender + " 陣營:" + data[index].Camp + " 種族:" + data[index].Race + " 獲得方式:" + data[index].HowToGet + "..."} />
        </a></div>)
    }
    ReactDOM.render(
        Data1SearchUrs, document.getElementsByClassName('SearchData')[0]);
}

function data2SearchUrl(data) {
    let Data2SearchUrs = [];
    for (let index = 0; index < data.length; index++) {
        Data2SearchUrs.push(<div className='SearchUrl'><a href={data[index].url}>
            <MffP text={data[index].name} />
            <MffH6 text={"類型: " + data[index].type + "...."} />
        </a></div>)
    }
    ReactDOM.render(
        Data2SearchUrs, document.getElementsByClassName('SearchData')[1]);
}

function data3SearchUrl(data) {
    let Data3SearchUrs = [];
    for (let index = 0; index < data.length; index++) {
        function changeMode() {
            localStorage.setItem("mode", data[index].mode);
            if (data[index].mode == '世界頭目') {
                localStorage.setItem("mode", '世界頭目');
                localStorage.setItem("modeBtn", 0);
                localStorage.setItem("ChallengeOptionWorldBoss", data[index].idCName);
                localStorage.setItem("idCName", data[index].idCName);
            }
            else if (data[index].mode == '影域') {
                localStorage.setItem("mode", '影域');
                localStorage.setItem("modeBtn", 1);
                localStorage.setItem("ChallengeOptionShadowDomain", data[index].idCName);
            }
            else if (data[index].mode == '任務模式') {
                localStorage.setItem("mode", '任務模式');
                localStorage.setItem("modeBtn", 3);
                localStorage.setItem("ChallengeOptionMission", data[index].idCName);
            }
        }
        Data3SearchUrs.push(<div className='SearchUrl' onClick={changeMode}><a href={"http://127.0.0.1:3000/Challenge"}>
            <MffP text={"模式:" + data[index].mode + " 名稱:" + data[index].idCName + "..."} />
        </a></div>)
    }
    ReactDOM.render(
        Data3SearchUrs, document.getElementsByClassName('SearchData')[2]);
}

function SearchUrlCut(showSmall, showBig) {
    let SearchUrl = document.getElementsByClassName('SearchUrl');
    for (let x = 0; x < SearchUrl.length; x++) {
        SearchUrl[x].style.display = 'none'
        console.log(showSmall, showBig)
        if (x >= localStorage.showSmall && x < localStorage.showBig) {
            SearchUrl[x].style.display = 'block'
        }
    }
    srarchBtnColor();
}
function searchPageBtnCreate(pageMath) {
    let pages = [];
    for (let x = 0; x < pageMath; x++) {
        pages.push(<button value={x} className='searchPageBtn' onClick={function () {
            localStorage.setItem("showSmall", x * 20);
            localStorage.setItem("showBig", (x + 1) * 20);
            localStorage.setItem("btnIndex", x);
            SearchUrlCut();
        }}>{x + 1}</button>)
    }
    ReactDOM.render(
        pages, document.getElementsByClassName('SearchPage')[0]);
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
    localStorage.setItem('SearchRecordLocation', bodyTop) //將Y座標位置紀錄
})

function SearchDataMoveScol() {
    var scrollo_y = localStorage.SearchRecordLocation;
    if (scrollo_y != null) {
        window.scrollTo(100, scrollo_y);
    }
}


function srarchBtnColor() {
    let searchPageBtn = document.getElementsByClassName('searchPageBtn');
    if(localStorage.getItem('btnIndex') == null){
        localStorage.setItem("btnIndex", 0);
    }
    for (let index = 0; index < searchPageBtn.length; index++) {
        searchPageBtn[index].style.color = 'black';
        searchPageBtn[index].style.backgroundColor = '#c2c2e2';

    }
    searchPageBtn[localStorage.btnIndex].style.color = 'white';
    searchPageBtn[localStorage.btnIndex].style.backgroundColor = '#448899';
}
