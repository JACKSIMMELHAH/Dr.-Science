var showrp = document.getElementById("rp")
var newsTimeouts = []
const NEWS_DATA = { m1: ["Newstickers need to be goofy. 🤓"], m2: ["Pov: you think this is a game."], m3: ["Why is this taking so long to make?"] }
function getNews() {
    let possible = Object.values(NEWS_DATA).filter(data => (function () { if (data[1] === undefined) return true; else return data[1](); })()); let txt = ""; if (possible.length == 0) txt = "Sorry, we are out of news for the day... try again later?"; else if (possible.length == 1) txt = possible[0][0]; else { let n = Math.floor(Math.random() * possible.length); txt = possible[n][0]; }
    return txt;
}

function doNews() {
    for (let i = 0; i < newsTimeouts.length; i++) {
        clearTimeout(newsTimeouts[i])
        delete newsTimeouts[i]
    }
    let s = document.getElementById("news"); s.innerHTML = getNews(); let parentWidth = s.parentElement.clientWidth; s.style.transition = ''; s.style.transform = 'translateX(' + parentWidth + 'px)'; newsTimeouts.push(setTimeout(function () { let dist = s.parentElement.clientWidth + s.clientWidth + 20; let rate = 100; let transformDuration = dist / rate; s.style.transition = 'transform ' + transformDuration + 's linear'; let textWidth = s.clientWidth; s.style.transform = 'translateX(-' + (textWidth + 500) + 'px)'; newsTimeouts.push(setTimeout(function () { s.innerHTML = ""; doNews(); }, Math.ceil(transformDuration * 1000))); }, 100));
}
doNews();

function expo(x, f) {
    return Number.parseFloat(x).toExponential(f);
}

function a1() {
    document.getElementById("a1").style.display = "none";
    if (p.rp >= 100) {
        p.rp = p.rp - 100
        showrp.innerText = p.rp++
        setInterval(function () {
            showrp.innerText = p.rp++
        }, 1000)
    }
}

/*
window.addEventListener('load', () => {

    showrp.innerText = p.rp

    
        setInterval(function saveGame() {
            localStorage.setItem('p', btoa(JSON.stringify(p)));
        }, 500)
    
    
        p = JSON.parse(atob(localStorage.getItem('p')));
    
        
        var { rp } = p;
        var newp = localStorage.getItem('p');
        var obj = JSON.parse(newp);
        console.log(obj.rp)
        

    
    setInterval(function saveGame() {
        localStorage.setItem('rp', btoa(JSON.stringify(p.rp)));
    }, 1000)

    p.rp = JSON.parse(atob(localStorage.getItem('rp')));
    document.getElementById("rp").innerHTML = p.rp
    

});


function clearGame() {
    localStorage.clear()
    window.location.reload();
}

const btns = document.querySelectorAll('.btn');

const getBtnState = function (btns) {
    [].forEach.call(btns, function (btn) {
        if (window.localStorage.getItem(btn.id) == 'disabled') {
            btn.disabled = true
        }
    })
};

const resetBtnState = function (btns) {
    [].forEach.call(btns, function (btn) {
        btn.disabled = false
        window.localStorage.setItem(btn.id, '')
    })
};

[].forEach.call(btns, function (btn) {
    btn.addEventListener('click', function () {
        btn.disabled = true
        window.localStorage.setItem(btn.id, 'disabled')
    })
});

getBtnState(btns);

*/