
console.log(player.achievements)


tabs[2].addEventListener('click', () => {
    if (player.achievements !== -1) {
        player.achievements.splice(0, 1, 1);
        console.log(player.achievements)

        if(player.achievements.indexOf(1) !== -1) {


            alert('WTF ?? YOU GOT ?? ACHIEVEMENT ?? HOW')
            document.getElementById("achieve").style = "display: block"
        
            
        }
    }
})

