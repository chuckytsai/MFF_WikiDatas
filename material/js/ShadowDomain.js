let ChallengeModeBtn = document.getElementsByClassName('ChallengeModeBtn');
if (localStorage.ChallengeOptionShadowDomain == null) {
    localStorage.setItem("ChallengeOptionShadowDomain", '影域1F(接力模式)');
}
else if(localStorage.mode == '影域' && localStorage.ChallengeOptionShadowDomain != null) {
    ShadowDomainDatas();
};

function ShadowDomainDatas() {
    fetch('/api/Challenge/' + localStorage.mode + '/' + localStorage.ChallengeOptionShadowDomain)
        .then(response => {
            return response.json();
        })
        .then(r => {
            class ShadowDomainSelect extends React.Component {
                render() {
                    return <select className='ChallengeModeBtn' onChange={printShadowDomainValue}>
                        <MffOption value="" text={localStorage.ChallengeOptionShadowDomain} />
                        <MffOption value="影域1F(接力模式)" text='影域1F(接力模式)' />
                        <MffOption value="影域2F(亂鬥模式)" text='影域2F(亂鬥模式)' />
                        <MffOption value="影域3F(接力模式)" text='影域3F(接力模式)' />
                        <MffOption value="影域4F(戰場模式)" text='影域4F(戰場模式)' />
                        <MffOption value="影域5F(亂鬥模式)" text='影域5F(亂鬥模式)' />
                        <MffOption value="影域6F(接力模式)" text='影域6F(接力模式)' />
                        <MffOption value="影域7F(亂鬥模式)" text='影域7F(亂鬥模式)' />
                        <MffOption value="影域8F(接力模式)" text='影域8F(接力模式)' />
                        <MffOption value="影域9F(戰場模式)" text='影域9F(戰場模式)' />
                        <MffOption value="影域10F(亂鬥模式)" text='影域10F(亂鬥模式)' />
                        <MffOption value="影域11F(接力模式)" text='影域11F(接力模式)' />
                        <MffOption value="影域12F(首領模式)" text='影域12F(首領模式)' />
                        <MffOption value="影域13F(接力模式)" text='影域13F(接力模式)' />
                        <MffOption value="影域14F(亂鬥模式)" text='影域14F(亂鬥模式)' />
                        <MffOption value="影域15F(入場模式)" text='影域15F(入場模式)' />
                        <MffOption value="影域16F(接力模式)" text='影域16F(接力模式)' />
                        <MffOption value="影域17F(首領模式)" text='影域17F(首領模式)' />
                        <MffOption value="影域18F(亂鬥模式)" text='影域18F(亂鬥模式)' />
                        <MffOption value="影域19F(戰場模式)" text='影域19F(戰場模式)' />
                        <MffOption value="影域20F(入場模式)" text='影域20F(入場模式)' />
                        <MffOption value="影域21F(接力模式)" text='影域21F(接力模式)' />
                        <MffOption value="影域22F(首領模式)" text='影域22F(首領模式)' />
                        <MffOption value="影域23F(亂鬥模式)" text='影域23F(亂鬥模式)' />
                        <MffOption value="影域24F(首領模式)" text='影域24F(首領模式)' />
                        <MffOption value="影域25F(入場模式)" text='影域25F(入場模式)' />
                        <MffOption value="影域26F(首領模式)" text='影域26F(首領模式)' />
                        <MffOption value="影域27F(入場模式)" text='影域27F(入場模式)' />
                        <MffOption value="影域28F(亂鬥模式)" text='影域28F(亂鬥模式)' />
                        <MffOption value="影域29F(入場模式)" text='影域29F(入場模式)' />
                        <MffOption value="影域30F(接力模式)" text='影域30F(接力模式)' />
                        <MffOption value="影域31F(接力模式)" text='影域31F(接力模式)' />
                        <MffOption value="影域32F(接力模式)" text='影域32F(接力模式)' />
                        <MffOption value="影域33F(首領模式)" text='影域33F(首領模式)' />
                        <MffOption value="影域34F(接力模式)" text='影域34F(接力模式)' />
                        <MffOption value="影域35F(首領模式)" text='影域35F(首領模式)' />
                    </select>
                }
            }
            class SelectDiv extends React.Component {
                render() {
                    return <span>
                        <ShadowDomainSelect />
                    </span>
                }
            }
            let SelectDivElems = <SelectDiv />;
            ReactDOM.render(
                SelectDivElems, document.getElementsByClassName('selectDiv')[0]);
            class ShadowDatasDiv extends React.Component {
                render() {
                    return <div className="shadowDatas">
                        <div className='ShadowDomainMode'>
                            <div className='ShadowDomainDiv'>
                                <MffImg className='ShadowDomainImg' src={"/mffWIKI/img/Challenge/shadow/" + r.data[0]['top1'] + ".jpg"} />
                                <MffH5 className='ShadowDomainH5' text={r.data[0].top1Name} />
                            </div>
                            <div className='ShadowDomainDiv'>
                                <MffImg className='ShadowDomainImg' src={"/mffWIKI/img/Challenge/shadow/" + r.data[0]['top2'] + ".jpg"} />
                                <MffH5 className='ShadowDomainH5' text={r.data[0].top2Name} />
                            </div>
                            <div className='ShadowDomainDiv'>
                                <MffImg className='ShadowDomainImg' src={"/mffWIKI/img/Challenge/shadow/" + r.data[0]['top3'] + ".jpg"} />
                                <MffH5 className='ShadowDomainH5' text={r.data[0].top3Name} />
                            </div>
                            <div className='ShadowDomainDiv'>
                                <MffImg className='ShadowDomainImg' src={"/mffWIKI/img/Challenge/shadow/" + r.data[0]['top4'] + ".jpg"} />
                                <MffH5 className='ShadowDomainH5' text={r.data[0].top4Name} />
                            </div>
                            <div className='ShadowDomainDiv'>
                                <MffImg className='ShadowDomainImg' src={"/mffWIKI/img/Challenge/shadow/" + r.data[0]['top5'] + ".jpg"} />
                                <MffH5 className='ShadowDomainH5' text={r.data[0].top5Name} />
                            </div>
                            <div className='ShadowDomainDiv'>
                                <MffImg className='ShadowDomainImg' src={"/mffWIKI/img/Challenge/shadow/" + r.data[0]['top6'] + ".jpg"} />
                                <MffH5 className='ShadowDomainH5' text={r.data[0].top5Name} />
                            </div>
                            <div className='ShadowDomainDiv'>
                                <MffImg className='ShadowDomainImg' src={"/mffWIKI/img/Challenge/shadow/" + r.data[0]['top7'] + ".jpg"} />
                                <MffH5 className='ShadowDomainH5' text={r.data[0].top5Name} />
                            </div>
                        </div>
                    </div>
                }
            }
            class ChallengeTextDiv extends React.Component {
                render() {
                    return <div className='ChallengeText'>
                        <ShadowDatasDiv />
                    </div>
                }
            }
            let shadowDatasElems = <ChallengeTextDiv />;
            ReactDOM.render(
                shadowDatasElems, document.getElementsByClassName('ChallengeList')[0]);
            noneNoIcon();
            shadowOptionShow();
        }).catch(function (error) {
            console.log(error)
        });
}

function printShadowDomainValue() {
    let ShadowDomainFloor = document.getElementsByClassName('ChallengeModeBtn')[0].value;
    localStorage.setItem("ChallengeOptionShadowDomain", ShadowDomainFloor);
    ShadowDomainDatas();
}

function noneNoIcon() {
    let ShadowDomainImg = document.getElementsByClassName('ShadowDomainImg');
    let ShadowDomainDiv=document.getElementsByClassName('ShadowDomainDiv');
    for (let index = 0; index < ShadowDomainImg.length; index++) {
        if (ShadowDomainImg[index].src == '/mffWIKI/img/Challenge/shadow/.jpg'){
            ShadowDomainDiv[index].style.display='none'
        }
        else{
            ShadowDomainDiv[index].style.display='block'
        }
    }
}

function shadowOptionShow() {
    let optionShow = document.getElementsByTagName('option');
    for (let index = 0; index < optionShow.length; index++) {
        if (optionShow[index].value == localStorage.ChallengeOptionShadowDomain) {
            optionShow[index].style.display = 'none';
        }
    }
}