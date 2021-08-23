let ChallengeModeBtn = document.getElementsByClassName('ChallengeModeBtn');
if (localStorage.ChallengeOptionAlliance == null) {
    localStorage.setItem('ChallengeOptionAlliance', ',英雄,近戰');
    localStorage.setItem('ChallengeRaiders', '麻痺(');
    localStorage.setItem('ChallengeOptionAllianceText', '星期一(近戰+英雄)');
    localStorage.setItem('ChallengeRaidersText', '麻痺')
}
if (localStorage.mode == '聯盟戰爭' && localStorage.ChallengeOptionAlliance != null) {
    AllianceDatas();
};

function AllianceDatas() {
    fetch('/api/alliance?Gender=' + localStorage.ChallengeOptionAlliance.split(',')[0] +
        '&Camp=' + localStorage.ChallengeOptionAlliance.split(',')[1] +
        '&CName=' + localStorage.ChallengeOptionAlliance.split(',')[2] +
        '&thisMoonText=' + localStorage.ChallengeRaiders)
        .then(response => {
            return response.json();
        })
        .then(r => {
            class AllianceSelect extends React.Component {
                render() {
                    return <select className='ChallengeModeBtn' onChange={AllianceDaysValue}>
                        <MffOption value="" text={localStorage.ChallengeOptionAllianceText} />
                        <MffOption value=",英雄,近戰" text='星期一(近戰+英雄)' />
                        <MffOption value="男性,,爆破" text='星期二(爆破+男性)' />
                        <MffOption value=",反派,宇宙" text='星期三(宇宙+反派)' />
                        <MffOption value=",英雄,速度" text='星期四(速度+英雄)' />
                        <MffOption value=",反派,近戰" text='星期五(近戰+反派)' />
                        <MffOption value=",," text='星期六(無條件)' />
                        <MffOption value="女性,英雄,宇宙" text='星期日(宇宙+英雄+女性)' />
                        <MffOption value="女性,反派," text='星期一(反派+女性)' />
                        <MffOption value="女性,英雄,速度" text='星期二(速度+英雄+女性)' />
                        <MffOption value="女性,,近戰" text='星期三(近戰+女性)' />
                        <MffOption value=",反派,速度" text='星期四(速度+反派)' />
                        <MffOption value=",反派,爆破" text='星期五(爆破+反派)' />
                        <MffOption value=",," text='星期六(無條件)' />
                        <MffOption value=",英雄,宇宙" text='星期日(宇宙+英雄)' />
                    </select>
                }
            }
            class RaidersSelect extends React.Component {
                render() {
                    return <select className='raidersDiv' onChange={RaidersValue}>
                        <MffOption value="" text={localStorage.ChallengeRaidersText} />
                        <MffOption value="麻痺(" className="raidersDivBtn" text='麻痺' />
                        <MffOption value="灼傷傷害" className="raidersDivBtn" text='灼傷' />
                        <MffOption value="沉默(" className="raidersDivBtn" text='沉默' />
                    </select>
                }
            }
            class SelectDiv extends React.Component {
                render() {
                    return <span>
                        <AllianceSelect />
                        <RaidersSelect />
                    </span>
                }
            }
            let SelectDivElems = <SelectDiv />;
            ReactDOM.render(
                SelectDivElems, document.getElementsByClassName('selectDiv')[0]);
            let HeroIcons = [];
            for (let x = 0; x < r.data.length; x++) {
                HeroIcons.push(<a href={'/Heros/' + r.data[x]['imgUrl']}>
                    <div onClick={function () { localStorage.setItem('HerosRecordLocation', 0) }}>
                        <MffImg className='allianceImg' src={'/mffWIKI/img/Heros/' + r.data[x]['imgUrl'] + '.jpg'} />
                        <MffH5 className='allianceH5' text={r.data[x]['CName'].split('(')[0] + '/' + r.data[x]['SkinName']} />
                    </div>
                </a>)
            }
            class AllianceDataDiv extends React.Component {
                render() {
                    return <div className='allianceDataDiv'>
                        {HeroIcons}
                    </div>
                }
            }
            let AllianceDataDivElems = <AllianceDataDiv />;
            ReactDOM.render(
                AllianceDataDivElems, document.getElementsByClassName('ChallengeList')[0]);
            AllianceOptionShow();
        }).catch(function (error) {
            console.log(error)
        });
}

function AllianceDaysValue() {
    let AllianceDays = document.getElementsByClassName('ChallengeModeBtn')[0].value;
    localStorage.setItem('ChallengeOptionAlliance', AllianceDays);
    AllianceOptionShow();
    AllianceDatas();
}

function RaidersValue() {
    let Raiders = document.getElementsByClassName('raidersDiv')[0].value;
    localStorage.setItem('ChallengeRaiders', Raiders);
    AllianceOptionShow();
    AllianceDatas();
}

function AllianceOptionShow() {
    let optionShow = document.getElementsByTagName('option');
    for (let index = 0; index < optionShow.length; index++) {
        if (optionShow[index].value == localStorage.ChallengeOptionAlliance) {
            localStorage.setItem('ChallengeOptionAllianceText', optionShow[index].innerHTML);
            optionShow[index].style.display = 'none';
        }
        if (optionShow[index].value == localStorage.ChallengeRaiders) {
            localStorage.setItem('ChallengeRaidersText', optionShow[index].innerHTML)
            optionShow[index].style.display = 'none';
        }
    }
}