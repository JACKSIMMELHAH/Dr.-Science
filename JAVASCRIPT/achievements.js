const achievementvalues = player.achievements
console.log(achievementvalues)


tabs[2].addEventListener('click', arc1);

function arc1() {
    if (achievementvalues !== -1) {
        achievementvalues.splice(0, 1, 1);
        achievementvalues.push()
    }
    tabs[2].removeEventListener('click', arc1);
}

if (achievementvalues.indexOf(1)) {
    document.getElementById("achieve").style = "display: block"

}



function achNotice() {
    document.getElementById('box').classList.toggle('play');
    document.getElementById('ach1').innerHTML = 'Hidden achievement'
    window.achNotice = () => { };
}

  










