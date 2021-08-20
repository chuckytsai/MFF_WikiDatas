// =====英雄制服與技能的定義=====
let HeroName = location.href.split('http://127.0.0.1:3000/Heros/')[1].split('/')[0];
let SkinName = location.href.split('http://127.0.0.1:3000/Heros/')[1].split('/')[1];
if (2 > 1) {
    heroDatas(HeroName, SkinName);
}
if (localStorage.getItem('cellphoneSkill') == null) {
    localStorage.setItem('cellphoneSkill', 0);
}

function heroDatas(HeroName, SkinName) {
    fetch('/api/Heros/' + HeroName + '/' + SkinName)
        .then(response => {
            return response.json();
        })
        .then(r => {
            for (let i = 0; i < r.data.length; i++) {
                if (SkinName == r.data[i]['Id'].split(HeroName)[1]) {
                    HerosData(r.data, i, r.data.length)
                }
            }
        }).catch(function (error) {
            console.log(error)
        });
    function HerosData(data, dataID, dataLength) {
        SkinSkillShow(data, dataID)
        // 英雄角色 名稱 性別 陣營與頭像菜單
        class HeroIntroductionCreat extends React.Component {
            render() {
                return <div class='heroIntroduction'>
                    <div>
                        <MffImg className='photoSticker' src={'/mffWIKI/img/Heros/' + data[dataID]['photoSticker'] + '.jpg'} />
                    </div>
                    <div className='heroData'>
                        <div>
                            <MffP className='heroP' text='名稱' />
                            <MffH6 className='heroName' text={data[dataID]['CName']} />
                        </div>
                        <div>
                            <MffP className='heroP' text='性別' />
                            <MffH6 className='heroName' text={data[dataID]['Gender']} />
                        </div>
                        <div>
                            <MffP className='heroP' text='陣營' />
                            <MffH6 className='heroName' text={data[dataID]['Camp']} />
                        </div>
                        <div>
                            <MffP className='heroP' text='種族' />
                            <MffH6 className='heroName' text={data[dataID]['Race']} />
                        </div>
                    </div>
                </div>
            }
        }
        let HeroIntroductionElem = <HeroIntroductionCreat />;
        ReactDOM.render(
            HeroIntroductionElem, document.getElementsByClassName('heroIntroductionSpan')[0]);
        // 英雄制服選單的optin標籤
        let heroSkinOptins = [];
        for (let n = 0; n < dataLength; n++) {
            if (n != dataID) {
                heroSkinOptins.push(<option className='heroLi' value={data[n]['photoSticker']}>{data[n]['SkinName']}</option>)
            }
        }
        // 英雄制服選單selext標籤元件
        class HeroSkinSelect extends React.Component {
            render() {
                return <select className='HeroskinName' onChange={changeSkinName}>
                    <MffOption text={data[dataID]['SkinName']} />
                    {heroSkinOptins}
                </select>;
            }
        }
        let HeroSkinSelectElmt = <HeroSkinSelect />
        ReactDOM.render(
            HeroSkinSelectElmt, document.getElementsByClassName('nameDiv')[0]);

        // 關聯制服區域
        if (data[dataID]['RelatedUniforms1'].length > 0) {
            class SkinRelated extends React.Component {
                render() {
                    return <div className='Related'>
                        <MffH1 text='相關制服' />
                        <div class='RelatedSkin'>
                            <a href={'http://127.0.0.1:3000/Heros/' + data[dataID]['RelatedUniforms1'].split(',')[1]}>
                                <MffImg className='RelatedImg' src={'/mffWIKI/img/Heros/' + data[dataID]['RelatedUniforms1'].split(',')[1] + '.jpg'} />
                            </a>
                            <MffH6 className='RelatedText' text={data[dataID]['RelatedUniforms1'].split(',')[0]} />
                        </div>
                        <div class='RelatedSkin'>
                            <a href={'http://127.0.0.1:3000/Heros/' + data[dataID]['RelatedUniforms2'].split(',')[1]}>
                                <MffImg className='RelatedImg' src={'/mffWIKI/img/Heros/' + data[dataID]['RelatedUniforms2'].split(',')[1] + '.jpg'} />
                            </a>
                            <MffH6 className='RelatedText' text={data[dataID]['RelatedUniforms2'].split(',')[0]} />
                        </div>
                        <div class='RelatedSkin'>
                            <a href={'http://127.0.0.1:3000/Heros/' + data[dataID]['RelatedUniforms3'].split(',')[1]}>
                                <MffImg className='RelatedImg' src={'/mffWIKI/img/Heros/' + data[dataID]['RelatedUniforms3'].split(',')[1] + '.jpg'} />
                            </a>
                            <MffH6 className='RelatedText' text={data[dataID]['RelatedUniforms3'].split(',')[0]} />
                        </div>
                        <div class='RelatedSkin'>
                            <a href={'http://127.0.0.1:3000/Heros/' + data[dataID]['RelatedUniforms4'].split(',')[1]}>
                                <MffImg className='RelatedImg' src={'/mffWIKI/img/Heros/' + data[dataID]['RelatedUniforms4'].split(',')[1] + '.jpg'} />
                            </a>
                            <MffH6 className='RelatedText' text={data[dataID]['RelatedUniforms4'].split(',')[0]} />
                        </div>
                        <div class='RelatedSkin'>
                            <a href={'http://127.0.0.1:3000/Heros/' + data[dataID]['RelatedUniforms5'].split(',')[1]}>
                                <MffImg className='RelatedImg' src={'/mffWIKI/img/Heros/' + data[dataID]['RelatedUniforms5'].split(',')[1] + '.jpg'} />
                            </a>
                            <MffH6 className='RelatedText' text={data[dataID]['RelatedUniforms5'].split(',')[0]} />
                        </div>
                        <span class='RelatedDots'>
                            <div class='RelatedDot' onClick={function () {
                                localStorage.setItem("RelatedDotIndex", 0);
                                RelatedSkinDotSelect();
                            }}></div>
                            <div class='RelatedDot' onClick={function () {
                                localStorage.setItem("RelatedDotIndex", 1);
                                RelatedSkinDotSelect();
                            }}></div>
                            <div class='RelatedDot' onClick={function () {
                                localStorage.setItem("RelatedDotIndex", 2);
                                RelatedSkinDotSelect();
                            }}></div>
                            <div class='RelatedDot' onClick={function () {
                                localStorage.setItem("RelatedDotIndex", 3);
                                RelatedSkinDotSelect();
                            }}></div>
                            <div class='RelatedDot' onClick={function () {
                                localStorage.setItem("RelatedDotIndex", 4);
                                RelatedSkinDotSelect();
                            }}></div>
                        </span>
                    </div>

                }
            }
            let SkinRelatedElem = <SkinRelated />;
            ReactDOM.render(
                SkinRelatedElem, document.getElementsByClassName('RelatedSpan')[0]);
            cellphonModeRelatedSkin();
        }
        // 被關聯制服第1件
        class Chained1 extends React.Component {
            render() {
                return <div className='ChainedDiv' style={{ display: this.props.display }}>
                    <a href={'http://127.0.0.1:3000/Heros/' + data[dataID]['Chained1'].split(',')[1]}>
                        <MffImg className='ChainedImg' src={'/mffWIKI/img/Heros/' + data[dataID]['Chained1'].split(',')[1] + '.jpg'} />
                    </a>
                    <MffH6 className='ChainedText' text={data[dataID]['Chained1'].split(',')[0] + ' ; ' + data[dataID]['Chained1'].split(',')[2]} />
                </div>;
            }
        }
        // 被關聯制服第2件
        class Chained2 extends React.Component {
            render() {
                return <div className='ChainedDiv' style={{ display: this.props.display }}>
                    <a href={'http://127.0.0.1:3000/Heros/' + data[dataID]['Chained2'].split(',')[1]}>
                        <MffImg className='ChainedImg' src={'/mffWIKI/img/Heros/' + data[dataID]['Chained2'].split(',')[1] + '.jpg'} />
                    </a>
                    <MffH6 className='ChainedText' text={data[dataID]['Chained2'].split(',')[0] + ' ; ' + data[dataID]['Chained2'].split(',')[2]} />
                </div>;
            }
        }
        // 被關聯制服第3件
        class Chained3 extends React.Component {
            render() {
                return <div className='ChainedDiv' style={{ display: this.props.display }}>
                    <a href={'http://127.0.0.1:3000/Heros/' + data[dataID]['Chained3'].split(',')[1]}>
                        <MffImg className='ChainedImg' src={'/mffWIKI/img/Heros/' + data[dataID]['Chained3'].split(',')[1] + '.jpg'} />
                    </a>
                    <MffH6 className='ChainedText' text={data[dataID]['Chained3'].split(',')[0] + ' ; ' + data[dataID]['Chained3'].split(',')[2]} />
                </div>;
            }
        }
        // 被關聯制服第4件
        class Chained4 extends React.Component {
            render() {
                return <div className='ChainedDiv' style={{ display: this.props.display }}>
                    <a href={'http://127.0.0.1:3000/Heros/' + data[dataID]['Chained4'].split(',')[1]}>
                        <MffImg className='ChainedImg' src={'/mffWIKI/img/Heros/' + data[dataID]['Chained4'].split(',')[1] + '.jpg'} />
                    </a>
                    <MffH6 className='ChainedText' text={data[dataID]['Chained4'].split(',')[0] + ' ; ' + data[dataID]['Chained4'].split(',')[2]} />
                </div>;
            }
        }
        // 被關聯制服第5件
        class Chained5 extends React.Component {
            render() {
                return <div className='ChainedDiv' style={{ display: this.props.display }}>
                    <a href={'http://127.0.0.1:3000/Heros/' + data[dataID]['Chained5'].split(',')[1]}>
                        <MffImg className='ChainedImg' src={'/mffWIKI/img/Heros/' + data[dataID]['Chained5'].split(',')[1] + '.jpg'} />
                    </a>
                    <MffH6 className='ChainedText' text={data[dataID]['Chained5'].split(',')[0] + ' ; ' + data[dataID]['Chained5'].split(',')[2]} />
                </div>;
            }
        }
        // 被關聯制服第6件
        class Chained6 extends React.Component {
            render() {
                return <div className='ChainedDiv' style={{ display: this.props.display }}>
                    <a href={'http://127.0.0.1:3000/Heros/' + data[dataID]['Chained6'].split(',')[1]}>
                        <MffImg className='ChainedImg' src={'/mffWIKI/img/Heros/' + data[dataID]['Chained6'].split(',')[1] + '.jpg'} />
                    </a>
                    <MffH6 className='ChainedText' text={data[dataID]['Chained6'].split(',')[0] + ' ; ' + data[dataID]['Chained6'].split(',')[2]} />
                </div>;
            }
        }
        // 被關聯制服第7件
        class Chained7 extends React.Component {
            render() {
                return <div className='ChainedDiv' style={{ display: this.props.display }}>
                    <a href={'http://127.0.0.1:3000/Heros/' + data[dataID]['Chained7'].split(',')[1]}>
                        <MffImg className='ChainedImg' src={'/mffWIKI/img/Heros/' + data[dataID]['Chained7'].split(',')[1] + '.jpg'} />
                    </a>
                    <MffH6 className='ChainedText' text={data[dataID]['Chained7'].split(',')[0] + ' ; ' + data[dataID]['Chained7'].split(',')[2]} />
                </div>;
            }
        }
        // 被關聯制服第8件
        class Chained8 extends React.Component {
            render() {
                return <div className='ChainedDiv' style={{ display: this.props.display }}>
                    <a href={'http://127.0.0.1:3000/Heros/' + data[dataID]['Chained8'].split(',')[1]}>
                        <MffImg className='ChainedImg' src={'/mffWIKI/img/Heros/' + data[dataID]['Chained8'].split(',')[1] + '.jpg'} />
                    </a>
                    <MffH6 className='ChainedText' text={data[dataID]['Chained8'].split(',')[0] + ' ; ' + data[dataID]['Chained8'].split(',')[2]} />
                </div>;
            }
        }
        // 被關聯制服第9件
        class Chained9 extends React.Component {
            render() {
                return <div className='ChainedDiv' style={{ display: this.props.display }}>
                    <a href={'http://127.0.0.1:3000/Heros/' + data[dataID]['Chained9'].split(',')[1]}>
                        <MffImg className='ChainedImg' src={'/mffWIKI/img/Heros/' + data[dataID]['Chained9'].split(',')[1] + '.jpg'} />
                    </a>
                    <MffH6 className='ChainedText' text={data[dataID]['Chained9'].split(',')[0] + ' ; ' + data[dataID]['Chained9'].split(',')[2]} />
                </div>;
            }
        }
        // 被關聯制服
        if (data[dataID]['Chained1'].length > 0) {
            class SkinChained extends React.Component {
                render() {
                    return <div className='Chained'>
                        <MffH1 text='被對應制服' />
                        <Chained1 display={localStorage.Chained1Show} />
                        <Chained2 display={localStorage.Chained2Show} />
                        <Chained3 display={localStorage.Chained3Show} />
                        <Chained4 display={localStorage.Chained4Show} />
                        <Chained5 display={localStorage.Chained5Show} />
                        <Chained6 display={localStorage.Chained6Show} />
                        <Chained7 display={localStorage.Chained7Show} />
                        <Chained8 display={localStorage.Chained8Show} />
                        <Chained9 display={localStorage.Chained9Show} />
                        <span class='ChainedDots'>
                            <div class='ChainedDot' onClick={function () {
                                localStorage.setItem("ChainedDotIndex", 0);
                                ChainedSkinDotSelect();
                            }}></div>
                            <div class='ChainedDot' onClick={function () {
                                localStorage.setItem("ChainedDotIndex", 1);
                                ChainedSkinDotSelect();
                            }}></div>
                            <div class='ChainedDot' onClick={function () {
                                localStorage.setItem("ChainedDotIndex", 2);
                                ChainedSkinDotSelect();
                            }}></div>
                            <div class='ChainedDot' onClick={function () {
                                localStorage.setItem("ChainedDotIndex", 3);
                                ChainedSkinDotSelect();
                            }}></div>
                            <div class='ChainedDot' onClick={function () {
                                localStorage.setItem("ChainedDotIndex", 4);
                                ChainedSkinDotSelect();
                            }}></div>
                            <div class='ChainedDot' onClick={function () {
                                localStorage.setItem("ChainedDotIndex", 5);
                                ChainedSkinDotSelect();
                            }}></div>
                            <div class='ChainedDot' onClick={function () {
                                localStorage.setItem("ChainedDotIndex", 6);
                                ChainedSkinDotSelect();
                            }}></div>
                            <div class='ChainedDot' onClick={function () {
                                localStorage.setItem("ChainedDotIndex", 7);
                                ChainedSkinDotSelect();
                            }}></div>
                            <div class='ChainedDot' onClick={function () {
                                localStorage.setItem("ChainedDotIndex", 8);
                                ChainedSkinDotSelect();
                            }}></div>
                        </span>
                    </div>
                }
            }
            let SkinChainedElem = <SkinChained />;
            ReactDOM.render(
                SkinChainedElem, document.getElementsByClassName('ChainedSpan')[0]);
            cellphonModeChainedSkin();
        }
        // 制服評價按鈕標籤元件
        class EvaluationBtn extends React.Component {
            render() {
                return <button
                    className='goodBtn'
                    style={{ display: this.props.display }}
                    onClick={this.props.onClick}
                ><MffImg className='good' src='/mffWIKI/img/good.png' />
                </button>;
            }
        }
        // T3或是覺醒技能
        class Skill6Effects extends React.Component {
            render() {
                return <div class='skillText' style={{ display: this.props.display }}>
                    <MffBtn className='cellphoneSkillSelect' text='T3(覺醒)技能效果' onClick={function () {
                        localStorage.setItem("cellphoneSkill", 8);
                        cellphoneSkillDecription();
                    }} />
                    <MffH6 className='DescriptionTitle' text={data[dataID]['Skill6Effects'].split(",")[0]} />
                    <div class='SkillDescription'>
                        <MffH4 text={data[dataID]['Skill6Effects'].split(",")[1]} />
                        <MffH4 text={data[dataID]['Skill6Effects'].split(",")[2]} />
                        <MffH4 text={data[dataID]['Skill6Effects'].split(",")[4]} />
                        <MffH4 text={data[dataID]['Skill6Effects'].split(",")[5]} />
                        <MffH4 text={data[dataID]['Skill6Effects'].split(",")[6]} />
                        <MffH4 text={data[dataID]['Skill6Effects'].split(",")[7]} />
                        <MffH4 text={data[dataID]['Skill6Effects'].split(",")[8]} />
                        <MffH4 text={data[dataID]['Skill6Effects'].split(",")[9]} />
                        <MffH4 text={data[dataID]['Skill6Effects'].split(",")[10]} />
                        <MffH4 text={data[dataID]['Skill6Effects'].split(",")[11]} />
                        <MffH4 text={data[dataID]['Skill6Effects'].split(",")[12]} />
                        <MffH4 text={data[dataID]['Skill6Effects'].split(",")[13]} />
                        <MffH4 text={data[dataID]['Skill6Effects'].split(",")[14]} />
                        <MffH4 text={data[dataID]['Skill6Effects'].split(",")[15]} />
                        <MffH4 text={data[dataID]['Skill6Effects'].split(",")[16]} />
                        <MffH4 text={data[dataID]['Skill6Effects'].split(",")[17]} />
                        <MffH4 text={data[dataID]['Skill6Effects'].split(",")[18]} />
                        <MffH4 text={data[dataID]['Skill6Effects'].split(",")[19]} />
                        <MffH4 text={data[dataID]['Skill6Effects'].split(",")[20]} />
                    </div>
                </div>;
            }
        }

        // 制服技能
        class SkinSkillEffects extends React.Component {
            render() {
                return <div style={{ display: this.props.display }}>
                    <MffBtn className='cellphoneSkillSelect' text='制服技能' onClick={function () {
                        localStorage.setItem("cellphoneSkill", 9);
                        cellphoneSkillDecription();
                    }} />
                    <MffH6 className='DescriptionTitle' display='none'/>
                    <div class='SkillDescription'>
                        <MffH4 text={data[dataID]['SkinSkillEffects'].split(",")[0]} />
                        <MffH4 text={data[dataID]['SkinSkillEffects'].split(",")[1]} />
                        <MffH4 text={data[dataID]['SkinSkillEffects'].split(",")[2]} />
                        <MffH4 text={data[dataID]['SkinSkillEffects'].split(",")[3]} />
                        <MffH4 text={data[dataID]['SkinSkillEffects'].split(",")[4]} />
                        <MffH4 text={data[dataID]['SkinSkillEffects'].split(",")[5]} />
                        <MffH4 text={data[dataID]['SkinSkillEffects'].split(",")[6]} />
                        <MffH4 text={data[dataID]['SkinSkillEffects'].split(",")[7]} />
                        <MffH4 text={data[dataID]['SkinSkillEffects'].split(",")[8]} />
                        <MffH4 text={data[dataID]['SkinSkillEffects'].split(",")[9]} />
                        <MffH4 text={data[dataID]['SkinSkillEffects'].split(",")[11]} />
                        <MffH4 text={data[dataID]['SkinSkillEffects'].split(",")[12]} />
                        <MffH4 text={data[dataID]['SkinSkillEffects'].split(",")[13]} />
                        <MffH4 text={data[dataID]['SkinSkillEffects'].split(",")[14]} />
                        <MffH4 text={data[dataID]['SkinSkillEffects'].split(",")[15]} />
                        <MffH4 text={data[dataID]['SkinSkillEffects'].split(",")[16]} />
                    </div>
                </div>;
            }
        }
        // 英雄制服技能資料
        class HeroSkinSkill extends React.Component {
            render() {
                return <div className='skinData'>
                    <div className='howGetLan'>
                        <MffH5 text='獲得方式：' />
                        <MffH5 className='HowToget' text={data[dataID]['HowToget']} />
                        <div className='evaluationDiv'>
                            <MffH5 text='制服評價：' />
                            <EvaluationBtn onClick={checkProcessLike} />
                            <EvaluationBtn onClick={checkProcessLike} display='none' />
                            <MffH1 className='evaluationH1' />
                        </div>
                    </div>

                    <div class='skinDataLan'>
                        <div className="skillText">
                            <MffBtn className='cellphoneSkillSelect' text='技能1效果' onClick={function () {
                                localStorage.setItem("cellphoneSkill", 0);
                                cellphoneSkillDecription();
                            }} />
                            <MffH6 className='DescriptionTitle' text={data[dataID]['Skill1Effects'].split(",")[0]} />
                            <div class='SkillDescription'>
                                <MffH4 text={data[dataID]['Skill1Effects'].split(",")[1]} />
                                <MffH4 text={data[dataID]['Skill1Effects'].split(",")[2]} />
                                <MffH4 text={data[dataID]['Skill1Effects'].split(",")[4]} />
                                <MffH4 text={data[dataID]['Skill1Effects'].split(",")[5]} />
                                <MffH4 text={data[dataID]['Skill1Effects'].split(",")[6]} />
                                <MffH4 text={data[dataID]['Skill1Effects'].split(",")[7]} />
                                <MffH4 text={data[dataID]['Skill1Effects'].split(",")[8]} />
                                <MffH4 text={data[dataID]['Skill1Effects'].split(",")[9]} />
                                <MffH4 text={data[dataID]['Skill1Effects'].split(",")[10]} />
                                <MffH4 text={data[dataID]['Skill1Effects'].split(",")[11]} />
                                <MffH4 text={data[dataID]['Skill1Effects'].split(",")[12]} />
                                <MffH4 text={data[dataID]['Skill1Effects'].split(",")[13]} />
                            </div>
                        </div>
                        <div className="skillText">
                            <MffBtn className='cellphoneSkillSelect' text='技能2效果' onClick={function () {
                                localStorage.setItem("cellphoneSkill", 1);
                                cellphoneSkillDecription();
                            }} />
                            <MffH6 className='DescriptionTitle' text={data[dataID]['Skill2Effects'].split(",")[0]} />
                            <div class='SkillDescription'>
                                <MffH4 text={data[dataID]['Skill2Effects'].split(",")[1]} />
                                <MffH4 text={data[dataID]['Skill2Effects'].split(",")[2]} />
                                <MffH4 text={data[dataID]['Skill2Effects'].split(",")[4]} />
                                <MffH4 text={data[dataID]['Skill2Effects'].split(",")[5]} />
                                <MffH4 text={data[dataID]['Skill2Effects'].split(",")[6]} />
                                <MffH4 text={data[dataID]['Skill2Effects'].split(",")[7]} />
                                <MffH4 text={data[dataID]['Skill2Effects'].split(",")[8]} />
                                <MffH4 text={data[dataID]['Skill2Effects'].split(",")[9]} />
                                <MffH4 text={data[dataID]['Skill2Effects'].split(",")[10]} />
                                <MffH4 text={data[dataID]['Skill2Effects'].split(",")[11]} />
                                <MffH4 text={data[dataID]['Skill2Effects'].split(",")[12]} />
                                <MffH4 text={data[dataID]['Skill2Effects'].split(",")[13]} />
                            </div>
                        </div>
                        <div className="skillText">
                            <MffBtn className='cellphoneSkillSelect' text='技能3效果' onClick={function () {
                                localStorage.setItem("cellphoneSkill", 2);
                                cellphoneSkillDecription();
                            }} />
                            <MffH6 className='DescriptionTitle' text={data[dataID]['Skill3Effects'].split(",")[0]} />
                            <div class='SkillDescription'>
                                <MffH4 text={data[dataID]['Skill3Effects'].split(",")[1]} />
                                <MffH4 text={data[dataID]['Skill3Effects'].split(",")[2]} />
                                <MffH4 text={data[dataID]['Skill3Effects'].split(",")[4]} />
                                <MffH4 text={data[dataID]['Skill3Effects'].split(",")[5]} />
                                <MffH4 text={data[dataID]['Skill3Effects'].split(",")[6]} />
                                <MffH4 text={data[dataID]['Skill3Effects'].split(",")[7]} />
                                <MffH4 text={data[dataID]['Skill3Effects'].split(",")[8]} />
                                <MffH4 text={data[dataID]['Skill3Effects'].split(",")[9]} />
                                <MffH4 text={data[dataID]['Skill3Effects'].split(",")[10]} />
                                <MffH4 text={data[dataID]['Skill3Effects'].split(",")[11]} />
                                <MffH4 text={data[dataID]['Skill3Effects'].split(",")[12]} />
                                <MffH4 text={data[dataID]['Skill3Effects'].split(",")[13]} />
                                <MffH4 text={data[dataID]['Skill3Effects'].split(",")[14]} />
                                <MffH4 text={data[dataID]['Skill3Effects'].split(",")[15]} />
                                <MffH4 text={data[dataID]['Skill3Effects'].split(",")[16]} />
                                <MffH4 text={data[dataID]['Skill3Effects'].split(",")[17]} />
                                <MffH4 text={data[dataID]['Skill3Effects'].split(",")[18]} />
                                <MffH4 text={data[dataID]['Skill3Effects'].split(",")[19]} />
                                <MffH4 text={data[dataID]['Skill3Effects'].split(",")[20]} />
                            </div>
                        </div>
                        <div className="skillText">
                            <MffBtn className='cellphoneSkillSelect' text='技能4效果' onClick={function () {
                                localStorage.setItem("cellphoneSkill", 3);
                                cellphoneSkillDecription();
                            }} />
                            <MffH6 className='DescriptionTitle' text={data[dataID]['Skill4Effects'].split(",")[0]} />
                            <div class='SkillDescription'>
                                <MffH4 text={data[dataID]['Skill4Effects'].split(",")[1]} />
                                <MffH4 text={data[dataID]['Skill4Effects'].split(",")[2]} />
                                <MffH4 text={data[dataID]['Skill4Effects'].split(",")[4]} />
                                <MffH4 text={data[dataID]['Skill4Effects'].split(",")[5]} />
                                <MffH4 text={data[dataID]['Skill4Effects'].split(",")[6]} />
                                <MffH4 text={data[dataID]['Skill4Effects'].split(",")[7]} />
                                <MffH4 text={data[dataID]['Skill4Effects'].split(",")[8]} />
                                <MffH4 text={data[dataID]['Skill4Effects'].split(",")[9]} />
                                <MffH4 text={data[dataID]['Skill4Effects'].split(",")[10]} />
                                <MffH4 text={data[dataID]['Skill4Effects'].split(",")[11]} />
                                <MffH4 text={data[dataID]['Skill4Effects'].split(",")[12]} />
                                <MffH4 text={data[dataID]['Skill4Effects'].split(",")[13]} />
                                <MffH4 text={data[dataID]['Skill4Effects'].split(",")[14]} />
                                <MffH4 text={data[dataID]['Skill4Effects'].split(",")[15]} />
                                <MffH4 text={data[dataID]['Skill4Effects'].split(",")[16]} />
                                <MffH4 text={data[dataID]['Skill4Effects'].split(",")[17]} />
                                <MffH4 text={data[dataID]['Skill4Effects'].split(",")[18]} />
                                <MffH4 text={data[dataID]['Skill4Effects'].split(",")[19]} />
                                <MffH4 text={data[dataID]['Skill4Effects'].split(",")[20]} />
                            </div>
                        </div>
                        <div className="skillText">
                            <MffBtn className='cellphoneSkillSelect' text='技能5效果' onClick={function () {
                                localStorage.setItem("cellphoneSkill", 4);
                                cellphoneSkillDecription();
                            }} />
                            <MffH6 className='DescriptionTitle' text={data[dataID]['Skill5Effects'].split(",")[0]} />
                            <div class='SkillDescription'>
                                <MffH4 text={data[dataID]['Skill5Effects'].split(",")[1]} />
                                <MffH4 text={data[dataID]['Skill5Effects'].split(",")[2]} />
                                <MffH4 text={data[dataID]['Skill5Effects'].split(",")[4]} />
                                <MffH4 text={data[dataID]['Skill5Effects'].split(",")[5]} />
                                <MffH4 text={data[dataID]['Skill5Effects'].split(",")[6]} />
                                <MffH4 text={data[dataID]['Skill5Effects'].split(",")[7]} />
                                <MffH4 text={data[dataID]['Skill5Effects'].split(",")[8]} />
                                <MffH4 text={data[dataID]['Skill5Effects'].split(",")[9]} />
                                <MffH4 text={data[dataID]['Skill5Effects'].split(",")[10]} />
                                <MffH4 text={data[dataID]['Skill5Effects'].split(",")[11]} />
                                <MffH4 text={data[dataID]['Skill5Effects'].split(",")[12]} />
                                <MffH4 text={data[dataID]['Skill5Effects'].split(",")[13]} />
                                <MffH4 text={data[dataID]['Skill5Effects'].split(",")[14]} />
                                <MffH4 text={data[dataID]['Skill5Effects'].split(",")[15]} />
                                <MffH4 text={data[dataID]['Skill5Effects'].split(",")[16]} />
                                <MffH4 text={data[dataID]['Skill5Effects'].split(",")[17]} />
                                <MffH4 text={data[dataID]['Skill5Effects'].split(",")[18]} />
                                <MffH4 text={data[dataID]['Skill5Effects'].split(",")[19]} />
                                <MffH4 text={data[dataID]['Skill5Effects'].split(",")[20]} />

                            </div>
                        </div>
                    </div>
                    <div className='skinDataLanT3'>
                        <div class='skillText'>
                            <MffBtn className='cellphoneSkillSelect' text='T1技能效果' onClick={function () {
                                localStorage.setItem("cellphoneSkill", 5);
                                cellphoneSkillDecription();
                            }} />
                            <MffH6 className='DescriptionTitle' text={data[dataID]['T1Effects'].split(",")[0]} />
                            <div class='SkillDescription'>
                                <MffH4 text={data[dataID]['T1Effects'].split(",")[1]} />
                                <MffH4 text={data[dataID]['T1Effects'].split(",")[2]} />
                                <MffH4 text={data[dataID]['T1Effects'].split(",")[4]} />
                                <MffH4 text={data[dataID]['T1Effects'].split(",")[5]} />
                                <MffH4 text={data[dataID]['T1Effects'].split(",")[6]} />
                                <MffH4 text={data[dataID]['T1Effects'].split(",")[7]} />
                                <MffH4 text={data[dataID]['T1Effects'].split(",")[8]} />
                                <MffH4 text={data[dataID]['T1Effects'].split(",")[9]} />
                                <MffH4 text={data[dataID]['T1Effects'].split(",")[10]} />
                                <MffH4 text={data[dataID]['T1Effects'].split(",")[11]} />
                                <MffH4 text={data[dataID]['T1Effects'].split(",")[12]} />
                                <MffH4 text={data[dataID]['T1Effects'].split(",")[13]} />
                            </div>
                        </div>
                        <div class='skillText'>
                            <MffBtn className='cellphoneSkillSelect' text='T2技能效果' onClick={function () {
                                localStorage.setItem("cellphoneSkill", 6);
                                cellphoneSkillDecription();
                            }} />
                            <MffH6 className='DescriptionTitle' text={data[dataID]['T2Effects'].split(",")[0]} />
                            <div class='SkillDescription'>
                                <MffH4 text={data[dataID]['T2Effects'].split(",")[1]} />
                                <MffH4 text={data[dataID]['T2Effects'].split(",")[2]} />
                                <MffH4 text={data[dataID]['T2Effects'].split(",")[4]} />
                                <MffH4 text={data[dataID]['T2Effects'].split(",")[5]} />
                                <MffH4 text={data[dataID]['T2Effects'].split(",")[6]} />
                                <MffH4 text={data[dataID]['T2Effects'].split(",")[7]} />
                                <MffH4 text={data[dataID]['T2Effects'].split(",")[8]} />
                                <MffH4 text={data[dataID]['T2Effects'].split(",")[9]} />
                                <MffH4 text={data[dataID]['T2Effects'].split(",")[10]} />
                                <MffH4 text={data[dataID]['T2Effects'].split(",")[11]} />
                                <MffH4 text={data[dataID]['T2Effects'].split(",")[12]} />
                                <MffH4 text={data[dataID]['T2Effects'].split(",")[13]} />
                            </div>
                        </div>
                        <div class='skillText'>
                            <MffBtn className='cellphoneSkillSelect' text='隊長技能效果' onClick={function () {
                                localStorage.setItem("cellphoneSkill", 7);
                                cellphoneSkillDecription();
                            }} />
                            <MffH6 className='DescriptionTitle' text={data[dataID]['LeaderEffects'].split(",")[0]} />
                            <div class='SkillDescription'>
                                <MffH4 text={data[dataID]['LeaderEffects'].split(",")[1]} />
                                <MffH4 text={data[dataID]['LeaderEffects'].split(",")[2]} />
                                <MffH4 text={data[dataID]['LeaderEffects'].split(",")[4]} />
                                <MffH4 text={data[dataID]['LeaderEffects'].split(",")[5]} />
                                <MffH4 text={data[dataID]['LeaderEffects'].split(",")[6]} />
                                <MffH4 text={data[dataID]['LeaderEffects'].split(",")[7]} />
                                <MffH4 text={data[dataID]['LeaderEffects'].split(",")[8]} />
                                <MffH4 text={data[dataID]['LeaderEffects'].split(",")[9]} />
                                <MffH4 text={data[dataID]['LeaderEffects'].split(",")[10]} />
                                <MffH4 text={data[dataID]['LeaderEffects'].split(",")[11]} />
                                <MffH4 text={data[dataID]['LeaderEffects'].split(",")[12]} />
                                <MffH4 text={data[dataID]['LeaderEffects'].split(",")[13]} />
                            </div>
                        </div>

                        <Skill6Effects display={localStorage.T3Show} />
                        <SkinSkillEffects display={localStorage.SkinSkillShow} />
                    </div>

                    <div class='SkillCellphone'>
                        <h6 class='SkillCellphoneTitle'></h6>
                        <div class='SkillCellphoneDescription'></div>
                    </div>

                </div>
            }
        }
        let HeroSkinSkillElem = <HeroSkinSkill />;
        ReactDOM.render(
            HeroSkinSkillElem, document.getElementsByClassName('skinDiv')[0]);
        cellphoneSkillDecription();
        HerosMoveScol();
    }
}

// 使用者確認是否登入才可以點like
function checkProcessLike() {
    fetch("/api/userDatas", { method: "GET" })
        .then(response => {
            return response.json()
        })
        .then(res => {
            if (res.data == true) {
                skinEvaluation(res.AccountNumber);
            } else {
                window.location = 'http://127.0.0.1:3000/Registered'
            }
        })
}
// 選擇制服選單
function changeSkinName() {
    let HeroskinName = document.getElementsByClassName('HeroskinName')[0].value
    location = "/Heros/" + HeroskinName;
}

function cellphonModeRelatedSkin() {
    if (document.body.clientWidth < 801) {
        let RelatedSkin = document.getElementsByClassName('RelatedSkin');
        let RelatedDot = document.getElementsByClassName('RelatedDot');
        RelatedSkin[0].style.display = 'block';
        RelatedSkin[1].style.display = 'none';
        RelatedSkin[2].style.display = 'none';
        RelatedSkin[3].style.display = 'none';
        RelatedSkin[4].style.display = 'none';
        RelatedDot[0].style.backgroundColor = '#448899';
    }
    else {
        console.log('正常電腦螢幕')
    }
}

function RelatedSkinDotSelect() {
    let RelatedSkin = document.getElementsByClassName('RelatedSkin');
    let RelatedDot = document.getElementsByClassName('RelatedDot');
    for (let index = 0; index < RelatedSkin.length; index++) {
        RelatedSkin[index].style.display = 'none';
        RelatedDot[index].style.backgroundColor = '#bbe1eb';
    }
    RelatedSkin[localStorage.RelatedDotIndex].style.display = 'block';
    RelatedDot[localStorage.RelatedDotIndex].style.backgroundColor = '#448899';
}

function cellphonModeChainedSkin() {
    if (document.body.clientWidth < 801) {
        let ChainedDiv = document.getElementsByClassName('ChainedDiv');
        let ChainedDot = document.getElementsByClassName('ChainedDot');
        let ChainedText = document.getElementsByClassName('ChainedText');
        for (let x = 0; x < ChainedDiv.length; x++) {
            ChainedDiv[x].style.display = 'none';
            if (ChainedText[x].innerHTML == ' ; undefined') {
                ChainedDot[x].style.display = 'none'
            }
        }
        ChainedDiv[0].style.display = 'block';
        ChainedDot[0].style.backgroundColor = '#448899';
    }
    else {
        let ChainedDiv = document.getElementsByClassName('ChainedDiv');
        let ChainedText = document.getElementsByClassName('ChainedText');
        for (let x = 0; x < ChainedDiv.length; x++) {
            if (ChainedText[x].innerHTML == ' ; undefined') {
                ChainedDiv[x].style.display = 'none'
            }
        }
    }
}

function ChainedSkinDotSelect() {
    let ChainedDiv = document.getElementsByClassName('ChainedDiv');
    let ChainedDot = document.getElementsByClassName('ChainedDot');
    for (let index = 0; index < ChainedDiv.length; index++) {
        ChainedDiv[index].style.display = 'none';
        ChainedDot[0].style.backgroundColor = '#bbe1eb';
        ChainedDot[1].style.backgroundColor = '#bbe1eb';
        ChainedDot[2].style.backgroundColor = '#bbe1eb';
        ChainedDot[3].style.backgroundColor = '#bbe1eb';
        ChainedDot[4].style.backgroundColor = '#bbe1eb';
        ChainedDot[5].style.backgroundColor = '#bbe1eb';
        ChainedDot[6].style.backgroundColor = '#bbe1eb';
        ChainedDot[7].style.backgroundColor = '#bbe1eb';
        ChainedDot[8].style.backgroundColor = '#bbe1eb';
    }
    ChainedDiv[localStorage.ChainedDotIndex].style.display = 'block';
    ChainedDot[localStorage.ChainedDotIndex].style.backgroundColor = '#448899';
}

function cellphoneSkillDecription() {
    if (document.body.clientWidth < 801) {
        let SkillCellphoneDescription = document.getElementsByClassName('SkillCellphoneDescription')[0];
        let SkillCellphoneTitle = document.getElementsByClassName('SkillCellphoneTitle')[0];
        let cellphoneSkillSelect = document.getElementsByClassName('cellphoneSkillSelect');
        let DescriptionTitle = document.getElementsByClassName('DescriptionTitle');
        let SkillDescription = document.getElementsByClassName('SkillDescription');
        for (let index = 0; index < cellphoneSkillSelect.length; index++) {
            cellphoneSkillSelect[index].style.backgroundColor = 'gray';
        }

        cellphoneSkillSelect[localStorage.cellphoneSkill].style.backgroundColor = '#448899';
        SkillCellphoneTitle.innerHTML = DescriptionTitle[localStorage.cellphoneSkill].innerHTML
        SkillCellphoneDescription.innerHTML = SkillDescription[localStorage.cellphoneSkill].innerHTML;
    }
}
