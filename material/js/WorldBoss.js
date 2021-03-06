let ChallengeModeBtn = document.getElementsByClassName('ChallengeModeBtn');
if (localStorage.mode == null) {
    localStorage.setItem("mode", '世界頭目');
    localStorage.setItem("idCName", '闇夜無星');
    WorldBossDatas();
}
else if (localStorage.mode == '世界頭目' && localStorage.idCName == null) {
    localStorage.setItem("mode", '世界頭目');
    localStorage.setItem("idCName", '闇夜無星');
    WorldBossDatas();
}
else if (localStorage.mode == '世界頭目' && localStorage.idCName != null) {
    WorldBossDatas();
}

function WorldBossDatas() {
    fetch('/api/Challenge/' + localStorage.mode + '/' + localStorage.idCName)
        .then(response => {
            return response.json();
        })
        .then(r => {
            class WorldBossSelect extends React.Component {
                render() {
                    return <select className='ChallengeModeBtn' onChange={() => {
                        printWorldBossValue();
                    }}>
                        <MffOption value="" text={localStorage.idCName} />
                        <MffOption value="闇夜無星" text='闇夜無星' />
                        <MffOption value="星駭滅寂" text='星駭滅寂' />
                        <MffOption value="掠鴉凶刃" text='掠鴉凶刃' />
                        <MffOption value="昊天極星" text='昊天極星' />
                        <MffOption value="烏木邪心" text='烏木邪心' />
                        <MffOption value="薩諾斯" text='薩諾斯' />
                        <MffOption value="快銀" text='快銀' />
                        <MffOption value="機堡" text='機堡' />
                        <MffOption value="緋紅女巫" text='緋紅女巫' />
                        <MffOption value="天啟" text='天啟' />
                        <MffOption value="努爾" text='努爾' />
                        <MffOption value="曼菲斯特" text='曼菲斯特' />
                    </select>
                }
            }
            class SelectDiv extends React.Component {
                render() {
                    return <span>
                        <WorldBossSelect />
                    </span>
                }
            }
            let SelectDivElems = <SelectDiv />;
            ReactDOM.render(
                SelectDivElems, document.getElementsByClassName('selectDiv')[0]);
            class DpsTop5Div extends React.Component {
                render() {
                    return <div className="recommendTop5">
                        <MffH5 className="WorldBossTitle" text='站長推薦輸出角色' />
                        {/* 站長推薦輸出角色 */}
                        <div className='DpsTop5'>
                            <div className='recommendDiv' onClick={function () {
                                localStorage.setItem('HerosRecordLocation', 0),
                                    localStorage.setItem("cellphoneSkill", 0)
                            }}>
                                <a href={'/Heros/' + r.data[0]['top1']}>
                                    <MffImg className='recommendImg' src={"/mffWIKI/img/Heros/" + r.data[0]['top1'] + ".jpg"} />
                                    <MffH5 className='recommendH5' text={r.data[0].top1Name} />
                                </a>
                            </div>

                            <div className='recommendDiv' onClick={function () {
                                localStorage.setItem('HerosRecordLocation', 0),
                                    localStorage.setItem("cellphoneSkill", 0)
                            }}>
                                <a href={'/Heros/' + r.data[0]['top2']}>
                                    <MffImg className='recommendImg' src={"/mffWIKI/img/Heros/" + r.data[0]['top2'] + ".jpg"} />
                                    <MffH5 className='recommendH5' text={r.data[0].top2Name} />
                                </a>
                            </div>

                            <div className='recommendDiv' onClick={function () {
                                localStorage.setItem('HerosRecordLocation', 0),
                                    localStorage.setItem("cellphoneSkill", 0)
                            }}>
                                <a href={'/Heros/' + r.data[0]['top3']}>
                                    <MffImg className='recommendImg' src={"/mffWIKI/img/Heros/" + r.data[0]['top3'] + ".jpg"} />
                                    <MffH5 className='recommendH5' text={r.data[0].top3Name} />
                                </a>
                            </div>

                            <div className='recommendDiv' onClick={function () {
                                localStorage.setItem('HerosRecordLocation', 0),
                                    localStorage.setItem("cellphoneSkill", 0)
                            }}>
                                <a href={'/Heros/' + r.data[0]['top4']}>
                                    <MffImg className='recommendImg' src={"/mffWIKI/img/Heros/" + r.data[0]['top4'] + ".jpg"} />
                                    <MffH5 className='recommendH5' text={r.data[0].top4Name} />
                                </a>
                            </div>


                            <div className='recommendDiv' onClick={function () {
                                localStorage.setItem('HerosRecordLocation', 0),
                                    localStorage.setItem("cellphoneSkill", 0)
                            }}>
                                <a href={'/Heros/' + r.data[0]['top5']}>
                                    <MffImg className='recommendImg' src={"/mffWIKI/img/Heros/" + r.data[0]['top5'] + ".jpg"} />
                                    <MffH5 className='recommendH5' text={r.data[0].top5Name} />
                                </a>
                            </div>

                        </div>

                        {/* 世界頭目過關條件角色 */}
                        <div>
                            <MffH5 className="WorldBossTitle" text='世界頭目過關條件角色' />

                            <div className="BossAchievementDiv">

                                <div className="PassHerosDiv" onClick={function () {
                                    localStorage.setItem('HerosRecordLocation', 0),
                                        localStorage.setItem("cellphoneSkill", 0)
                                }}>
                                    <a href={'/Heros/' + r.data[0]['f9']}>
                                        <MffImg className="PassHerosImg" src={"/mffWIKI/img/Heros/" + r.data[0]['f9'] + ".jpg"} />
                                        <MffH5 className="PassHerosH5" text={'9F/' + r.data[0]['f9Name']} />
                                    </a>
                                </div>

                                <div className="PassHerosDiv" onClick={function () {
                                    localStorage.setItem('HerosRecordLocation', 0),
                                        localStorage.setItem("cellphoneSkill", 0)
                                }}>
                                    <a href={'/Heros/' + r.data[0]['f19']}>
                                        <MffImg className="PassHerosImg" src={"/mffWIKI/img/Heros/" + r.data[0]['f19'] + ".jpg"} />
                                        <MffH5 className="PassHerosH5" text={'19F/' + r.data[0]['f19Name']} />
                                    </a>
                                </div>

                                <div className="PassHerosDiv" onClick={function () {
                                    localStorage.setItem('HerosRecordLocation', 0),
                                        localStorage.setItem("cellphoneSkill", 0)
                                }}>
                                    <a href={'/Heros/' + r.data[0]['f29']}>
                                        <MffImg className="PassHerosImg" src={"/mffWIKI/img/Heros/" + r.data[0]['f29'] + ".jpg"} />
                                        <MffH5 className="PassHerosH5" text={'29F/' + r.data[0]['f29Name']} />
                                    </a>
                                </div>


                                <div className="PassHerosDiv" onClick={function () {
                                    localStorage.setItem('HerosRecordLocation', 0),
                                        localStorage.setItem("cellphoneSkill", 0)
                                }}>
                                    <a href={'/Heros/' + r.data[0]['f39']}>
                                        <MffImg className="PassHerosImg" src={"/mffWIKI/img/Heros/" + r.data[0]['f39'] + ".jpg"} />
                                        <MffH5 className="PassHerosH5" text={'39F/' + r.data[0]['f39Name']} />
                                    </a>
                                </div>

                                <div className="PassHerosDiv" onClick={function () {
                                    localStorage.setItem('HerosRecordLocation', 0),
                                        localStorage.setItem("cellphoneSkill", 0)
                                }}>
                                    <a href={'/Heros/' + r.data[0]['f49']}>
                                        <MffImg className="PassHerosImg" src={"/mffWIKI/img/Heros/" + r.data[0]['f49'] + ".jpg"} />
                                        <MffH5 className="PassHerosH5" text={'49F/' + r.data[0]['f49Name']} />
                                    </a>
                                </div>

                                <div className="PassHerosDiv" onClick={function () {
                                    localStorage.setItem('HerosRecordLocation', 0),
                                        localStorage.setItem("cellphoneSkill", 0)
                                }}>
                                    <a href={'/Heros/' + r.data[0]['f59']}>
                                        <MffImg className="PassHerosImg" src={"/mffWIKI/img/Heros/" + r.data[0]['f59'] + ".jpg"} />
                                        <MffH5 className="PassHerosH5" text={'59F/' + r.data[0]['f59Name']} />
                                    </a>
                                </div>

                                <div className="PassHerosDiv" onClick={function () {
                                    localStorage.setItem('HerosRecordLocation', 0),
                                        localStorage.setItem("cellphoneSkill", 0)
                                }}>
                                    <a href={'/Heros/' + r.data[0]['f69']}>
                                        <MffImg className="PassHerosImg" src={"/mffWIKI/img/Heros/" + r.data[0]['f69'] + ".jpg"} />
                                        <MffH5 className="PassHerosH5" text={'69F/' + r.data[0]['f69Name']} />
                                    </a>
                                </div>

                                <div className="PassHerosDiv" onClick={function () {
                                    localStorage.setItem('HerosRecordLocation', 0),
                                        localStorage.setItem("cellphoneSkill", 0)
                                }}>
                                    <a href={'/Heros/' + r.data[0]['f79']}>
                                        <MffImg className="PassHerosImg" src={"/mffWIKI/img/Heros/" + r.data[0]['f79'] + ".jpg"} />
                                        <MffH5 className="PassHerosH5" text={'79F/' + r.data[0]['f79Name']} />
                                    </a>
                                </div>


                                <div className="PassHerosDiv" onClick={function () {
                                    localStorage.setItem('HerosRecordLocation', 0),
                                        localStorage.setItem("cellphoneSkill", 0)
                                }}>
                                    <a href={'/Heros/' + r.data[0]['f89']}>
                                        <MffImg className="PassHerosImg" src={"/mffWIKI/img/Heros/" + r.data[0]['f89'] + ".jpg"} />
                                        <MffH5 className="PassHerosH5" text={'89F/' + r.data[0]['f89Name']} />
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                }
            }
            class ChallengeTextDiv extends React.Component {
                render() {
                    return <div className='ChallengeText'>
                        <DpsTop5Div />
                    </div>
                }
            }
            let WorldBossDatasElems = <ChallengeTextDiv />;
            ReactDOM.render(
                WorldBossDatasElems, document.getElementsByClassName('ChallengeList')[0]);
            WorldBossOptionShow();
            NoneImg();
            ChallengeWorldBossMoveScol();
        }).catch(function (error) {
            console.log(error)
        });
}

function printWorldBossValue() {
    let bossName = document.getElementsByClassName('ChallengeModeBtn')[0].value;
    localStorage.setItem("idCName", bossName);
    WorldBossDatas();
}

function WorldBossOptionShow() {
    let optionShow = document.getElementsByTagName('option');
    for (let index = 0; index < optionShow.length; index++) {
        if (optionShow[index].value == localStorage.idCName) {
            optionShow[index].style.display = 'none';
        }
    }
}

function NoneImg() {
    let PassHerosImg = document.getElementsByClassName('PassHerosImg');
    let PassHerosDiv = document.getElementsByClassName('PassHerosDiv');
    for (let index = 0; index < PassHerosImg.length; index++) {
        if (PassHerosImg[index].src == 'http://35.73.243.150:3000/mffWIKI/img/Heros/.jpg') {
            PassHerosDiv[index].style.display = 'none'
        }
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
    localStorage.setItem('ChallengeWorldBossRecordLocation', bodyTop) //將Y座標位置紀錄
})

function ChallengeWorldBossMoveScol() {
    var scrollo_y = localStorage.ChallengeWorldBossRecordLocation;
    if (scrollo_y != null) {
        window.scrollTo(100, scrollo_y);
    }
}
