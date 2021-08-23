let ChallengeModeBtn = document.getElementsByClassName('ChallengeModeBtn');
if (localStorage.ChallengeOptionMission == null) {
    localStorage.setItem('ChallengeOptionMission', '劇情模式1-1(次元衝突)');
    test();
}
else if (localStorage.mode == '任務模式' && localStorage.ChallengeOptionMission != null) {
    MissionDatas();
    test();
}

function MissionDatas() {
    fetch('/api/Challenge/' + localStorage.mode + '/' + localStorage.ChallengeOptionMission)
        .then(response => {
            return response.json();
        })
        .then(r => {
            class MissionSelect extends React.Component {
                render() {
                    return <select className='ChallengeModeBtn' onChange={printMissionValue}>
                        <MffOption fontSize='14px' value="" text={localStorage.ChallengeOptionMission} />
                        <MffOption value="劇情模式1-1(次元衝突)" backgroundColor='rgb(241,240,59,0.3)' text='劇情模式1-1(次元衝突)' />
                        <MffOption value="劇情模式1-2(次元衝突)" backgroundColor='rgb(241,240,59,0.3)' text='劇情模式1-2(次元衝突)' />
                        <MffOption value="劇情模式1-3(次元衝突)" backgroundColor='rgb(241,240,59,0.3)' text='劇情模式1-3(次元衝突)' />
                        <MffOption value="劇情模式2-1(次元衝突)" backgroundColor='rgb(241,240,59,0.3)' text='劇情模式2-1(次元衝突)' />
                        <MffOption value="劇情模式2-2(次元衝突)" backgroundColor='rgb(241,240,59,0.3)' text='劇情模式2-2(次元衝突)' />
                        <MffOption value="劇情模式2-3(次元衝突)" backgroundColor='rgb(241,240,59,0.3)' text='劇情模式2-3(次元衝突)' />
                        <MffOption value="劇情模式3-1(次元衝突)" backgroundColor='rgb(241,240,59,0.3)' text='劇情模式3-1(次元衝突)' />
                        <MffOption value="劇情模式3-2(次元衝突)" backgroundColor='rgb(241,240,59,0.3)' text='劇情模式3-2(次元衝突)' />
                        <MffOption value="劇情模式3-3(次元衝突)" backgroundColor='rgb(241,240,59,0.3)' text='劇情模式3-3(次元衝突)' />
                        <MffOption value="劇情模式4-1(次元衝突)" backgroundColor='rgb(241,240,59,0.3)' text='劇情模式4-1(次元衝突)' />
                        <MffOption value="劇情模式4-2(次元衝突)" backgroundColor='rgb(241,240,59,0.3)' text='劇情模式4-2(次元衝突)' />
                        <MffOption value="劇情模式5-1(次元衝突)" backgroundColor='rgb(241,240,59,0.3)' text='劇情模式5-1(次元衝突)' />
                        <MffOption value="劇情模式6-1(次元衝突)" backgroundColor='rgb(241,240,59,0.3)' text='劇情模式6-1(次元衝突)' />
                        <MffOption value="劇情模式6-2(次元衝突)" backgroundColor='rgb(241,240,59,0.3)' text='劇情模式6-2(次元衝突)' />
                        <MffOption value="劇情模式7-1(次元衝突)" backgroundColor='rgb(241,240,59,0.3)' text='劇情模式7-1(次元衝突)' />
                        <MffOption value="劇情模式7-2(次元衝突)" backgroundColor='rgb(241,240,59,0.3)' text='劇情模式7-2(次元衝突)' />
                        <MffOption value="劇情模式7-3(次元衝突)" backgroundColor='rgb(241,240,59,0.3)' text='劇情模式7-3(次元衝突)' />
                        <MffOption value="劇情模式8-1(次元衝突)" backgroundColor='rgb(241,240,59,0.3)' text='劇情模式8-1(次元衝突)' />
                        <MffOption value="劇情模式8-2(次元衝突)" backgroundColor='rgb(241,240,59,0.3)' text='劇情模式8-2(次元衝突)' />
                        <MffOption value="劇情模式8-3(次元衝突)" backgroundColor='rgb(241,240,59,0.3)' text='劇情模式8-3(次元衝突)' />
                        <MffOption value="劇情模式9-1(真正的神盾局)" backgroundColor='rgb(201, 191, 191, 0.5)' text='劇情模式9-1(真正的神盾局)' />
                        <MffOption value="劇情模式9-2(真正的神盾局)" backgroundColor='rgb(201, 191, 191, 0.5)' text='劇情模式9-2(真正的神盾局)' />
                        <MffOption value="劇情模式10-1(真正的神盾局)" backgroundColor='rgb(201, 191, 191, 0.5)' text='劇情模式10-1(真正的神盾局)' />
                        <MffOption value="劇情模式10-2(真正的神盾局)" backgroundColor='rgb(201, 191, 191, 0.5)' text='劇情模式10-2(真正的神盾局)' />
                        <MffOption value="劇情模式11-1(世紀戰爭)" backgroundColor='rgb(161, 197, 63,0.3)' text='劇情模式11-1(世紀戰爭)' />
                        <MffOption value="劇情模式11-2(世紀戰爭)" backgroundColor='rgb(161, 197, 63,0.3)' text='劇情模式11-2(世紀戰爭)' />
                        <MffOption value="劇情模式12-1(世紀戰爭)" backgroundColor='rgb(161, 197, 63,0.3)' text='劇情模式12-1(世紀戰爭)' />
                        <MffOption value="劇情模式12-2(世紀戰爭)" backgroundColor='rgb(161, 197, 63,0.3)' text='劇情模式12-2(世紀戰爭)' />
                        <MffOption value="劇情模式13-1(未來終結)" backgroundColor='rgb(225, 204, 243)' text='劇情模式13-1(未來終結)' />
                        <MffOption value="劇情模式13-2(未來終結)" backgroundColor='rgb(225, 204, 243)' text='劇情模式13-2(未來終結)' />
                        <MffOption value="劇情模式13-3(未來終結)" backgroundColor='rgb(225, 204, 243)' text='劇情模式13-3(未來終結)' />
                    </select>
                }
            }

            class SelectDiv extends React.Component {
                render() {
                    return <span>
                        <MissionSelect />
                    </span>
                }
            }
            let SelectDivElems = <SelectDiv />;
            ReactDOM.render(
                SelectDivElems, document.getElementsByClassName('selectDiv')[0]);
            class MissStroy extends React.Component {
                render() {
                    return <div className="MissionStroy">
                        <div className="MissionDiv" onClick={function () {
                            localStorage.setItem('HerosRecordLocation', 0)
                        }}>
                            <a href={'/Heros/' + r.data[0]['top1']}>
                                <MffImg className="MissionImg" src={"/mffWIKI/img/Heros/" + r.data[0]['top1'] + ".jpg"} />
                                <MffH5 className="MissionH5" text={'本月需求角色/' + r.data[0]['top1Name']} />
                            </a>
                        </div>
                        <div className="MissionDiv" onClick={function () {
                            localStorage.setItem('HerosRecordLocation', 0)
                        }}>
                            <a href={'/Heros/' + r.data[0]['top2']}>
                                <MffImg className="MissionImg" src={"/mffWIKI/img/Heros/" + r.data[0]['top2'] + ".jpg"} />
                                <MffH5 className="MissionH5" text={'本月需求角色/' + r.data[0]['top2Name']} />
                            </a>
                        </div>
                        <div className="MissionDiv" onClick={function () {
                            localStorage.setItem('HerosRecordLocation', 0)
                        }}>
                            <a href={'/Heros/' + r.data[0]['top3']}>
                                <MffImg className="MissionImg" src={"/mffWIKI/img/Heros/" + r.data[0]['top3'] + ".jpg"} />
                                <MffH5 className="MissionH5" text={'本月需求角色/' + r.data[0]['top3Name']} />
                            </a>
                        </div>
                    </div>
                }
            }
            class MissionDatas extends React.Component {
                render() {
                    return <div className='missionDatas'>
                        <MissStroy />
                    </div>
                }
            }
            let MissionDatasElems = <MissionDatas />;
            ReactDOM.render(
                MissionDatasElems, document.getElementsByClassName('ChallengeList')[0]);
            MissionOptionShow();
        }).catch(function (error) {
            console.log(error)
        });
}

function printMissionValue() {
    let MissionValue = document.getElementsByClassName('ChallengeModeBtn')[0].value;
    localStorage.setItem('ChallengeOptionMission', MissionValue);
    MissionDatas();
}

function MissionOptionShow() {
    let optionShow = document.getElementsByTagName('option');
    for (let index = 0; index < optionShow.length; index++) {
        if (optionShow[index].value == localStorage.ChallengeOptionMission) {
            optionShow[index].style.display = 'none';
        }
    }
}

function test() {
    fetch('/api/mission')
        .then(response => {
            return response.json();
        })
        .then(r => {
            let needHeroTop = []
            for (let index = 0; index < r.data.length; index++) {
                needHeroTop.push(r.data[index].needHeroName.split(',')[0] + ',' + r.data[index].needHeroName.split(',')[1] + ',' + r.data[index].needHeroName.split(',')[2] + ',')
            }
            console.log(needHeroTop)
        }).catch(function (error) {
            console.log(error)
        });
}