window.onload = function () {
        checkProcess();
        indexMoveScol();
};
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
        localStorage.setItem('indexRecordLocation', bodyTop) //將Y座標位置紀錄

})

function indexMoveScol() {
        var scrollo_y = localStorage.indexRecordLocation;
        if (scrollo_y != null) {
                window.scrollTo(100, scrollo_y);
        }
}

