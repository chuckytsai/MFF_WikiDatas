
function dBtn() {
    localStorage.setItem("Present", '預設');
    localStorage.setItem("Gender", '');
    localStorage.setItem("HeroAttributes", '');
    localStorage.setItem("Race", '');
    localStorage.setItem("Camp", '');
    localStorage.setItem("Ability", '');
    location = "/Herolist";
}

class GenderSelect extends React.Component {
    render() {
        return <span className='HeroLsitOption'>
            <MffP text='性別' />
            <select
                className={"Gender"}
                onChange={() => {
                    localStorage.setItem("Present", ' ');
                    localStorage.setItem("Gender", document.getElementsByClassName('Gender')[0].value);
                    optionShow();
                    Herolist();
                }}>
                <MffOption value="" text={localStorage.Gender} />
                <MffOption value="男性" text='男性' />
                <MffOption value="女性" text='女性' />
                <MffOption value="無性別" text='無性別' />
            </select>
        </span>
    }
}
class HeroAttributesSelect extends React.Component {
    render() {
        return <span className='HeroLsitOption'>
            <MffP text='屬性' />
            <select
                className={"HeroAttributes"}
                onChange={() => {
                    localStorage.setItem("Present", ' ');
                    localStorage.setItem("HeroAttributes", document.getElementsByClassName('HeroAttributes')[0].value);
                    optionShow();
                    Herolist();
                }}>
                <MffOption value="" text={localStorage.HeroAttributes} />
                <MffOption value="近戰" text='近戰' />
                <MffOption value="爆破" text='爆破' />
                <MffOption value="速度" text='速度' />
                <MffOption value="宇宙" text='宇宙' />
            </select>
        </span>
    }
}
class RaceSelect extends React.Component {
    render() {
        return <span className='HeroLsitOption'>
            <MffP text='種族' />
            <select
                className={"Race"}
                onChange={() => {
                    localStorage.setItem("Present", ' ');
                    localStorage.setItem("Race", document.getElementsByClassName('Race')[0].value);
                    optionShow();
                    Herolist();
                }}>
                <MffOption value="" text={localStorage.Race} />
                <MffOption value="人類" text='人類' />
                <MffOption value="X基因" text='X基因' />
                <MffOption value="外星人" text='外星人' />
                <MffOption value="異人族" text='異人族' />
                <MffOption value="生物" text='生物' />
                <MffOption value="不明" text='不明' />
            </select>
        </span>
    }
}
class CampSelect extends React.Component {
    render() {
        return <span className='HeroLsitOption'>
            <MffP text='陣營' />
            <select
                className={"Camp"}
                onChange={() => {
                    localStorage.setItem("Present", ' ');
                    localStorage.setItem("Camp", document.getElementsByClassName('Camp')[0].value);
                    optionShow();
                    Herolist();
                }}>
                <MffOption value="" text={localStorage.Camp} />
                <MffOption value="英雄" text='英雄' />
                <MffOption value="反派" text='反派' />
                <MffOption value="中立" text='中立' />
            </select>
        </span>
    }
}
class AbilitySelect extends React.Component {
    render() {
        return <span className='HeroLsitOption'>
            <MffP text='能力' />
            <select
                className={"Ability"}
                onChange={() => {
                    localStorage.setItem("Present", ' ');
                    localStorage.setItem("Ability", document.getElementsByClassName('Ability')[0].value);
                    optionShow();
                    Herolist();
                }}>
                <MffOption value="" text={localStorage.Ability} />
                <MffOption value="機械" text='機械' />
                <MffOption value="武器專家" text='武器專家' />
                <MffOption value="領導力" text='領導力' />
                <MffOption value="鳳凰之力" text='鳳凰之力' />
                <MffOption value="蜘蛛感應" text='蜘蛛感應' />
                <MffOption value="伽碼射線" text='伽碼射線' />
                <MffOption value="火焰" text='火焰' />
                <MffOption value="邪惡6人組" text='邪惡6人組' />
                <MffOption value="驚奇4超人" text='驚奇4超人' />
                <MffOption value="精神抵抗" text='精神抵抗' />
                <MffOption value="共生體" text='共生體' />
                <MffOption value="捍衛者" text='捍衛者' />
                <MffOption value="闇黑號令" text='闇黑號令' />
                <MffOption value="永恆族" text='永恆族' />
                <MffOption value="黑暗復仇者" text='黑暗復仇者' />
            </select>
        </span>
    }
}
class TypeSelectSpan extends React.Component {
    render() {
        return <span
            className={"typeSelect"}>
            <GenderSelect />
            <HeroAttributesSelect />
            <RaceSelect />
            <CampSelect />
            <AbilitySelect />
            <MffBtn onClick={dBtn} text='清除所有條件' />
        </span>
    }
}

// let heroSelectElem = <TypeSelectSpan />;
// ReactDOM.render(
//     heroSelectElem, document.getElementsByClassName('TypeSelectSpan')[0]);
