if (localStorage.getItem('Gender') == null && localStorage.getItem('HeroAttributes') == null && localStorage.getItem('Race') == null && localStorage.getItem('Camp') == null && localStorage.getItem('Ability') == null) {
    localStorage.setItem("Gender", ' ');
    localStorage.setItem("HeroAttributes", ' ');
    localStorage.setItem("Race", ' ');
    localStorage.setItem("Camp", ' ');
    localStorage.setItem("Ability", ' ');
    localStorage.setItem("Present", '預設');
    Herolist();
    optionShow();
}
else {
    Herolist();
    optionShow();
}

// =====英雄列表ICON製造區=====
function Herolist() {
    fetch("/api/HeroIcon?preset=" +localStorage.Present+
        "&Gender=" + localStorage.Gender+
        "&HeroAttributes=" + localStorage.HeroAttributes +
        "&Race=" + localStorage.Race + 
        "&Camp=" + localStorage.Camp +
        "&Ability=" + localStorage.Ability )
        .then(response => {
            return response.json();
        })
        .then(r => {
            heroIconList(r.data)
        }).catch(function (error) {
            console.log(error)
        });
    function heroIconList(data) {
        let icons = [];
        for (let n = 0; n < data.length; n++) {
            icons.push(<a className={n} href={data[n].url}>
                <div>
                    <img src={data[n].bgImg}></img>
                    <h6 className='heroName'>{data[n].name}</h6>
                </div></a>)
        }
        ReactDOM.render(
            icons, document.getElementsByClassName('HeroListIcon')[0]);
            HeroListMoveScol();
    }
}

function HeroListMoveScol() {
    var scrollo_y = localStorage.HeroListRecordLocation;
    if (scrollo_y != null) {
        window.setTimeout(( () => window.scrollTo(100, scrollo_y) ), 1000);
        
    }
}
