const achievement1 = document.getElementById('ach1')
const achievementvalues = player.achievements
console.log(achievementvalues)


achievement1.addEventListener('click', ach1); {
    if (achievementvalues !== -1) {
        achievementvalues.splice(0, 1, 1);
        achievementvalues.push()
    }
    achievement1.removeEventListener('click', ach1);
}

function achNotice() {
    if (achievementvalues[0] == 1) {
    document.getElementById('achHiddenNotice').classList.toggle('playHidden');
    document.getElementById('ach1').innerHTML = 'Hidden achievement'
    console.log(achievementvalues[0])
    window.achNotice = () => { };
    }
}

  










