
function carregar() {

    var msg = document.getElementById('msg')
    var img = document.getElementById('img')

 

    var data = new Date()
    var minuto = data.getMinutes()
    var hora = data.getHours()


    msg.innerHTML = `Agora são ${hora} horas e  ${minuto} minutos `




    if (hora >= 0 && hora < 12) {

        img.src = 'manha.png'
        document.body.style.background = '#e2cd9f'


    } else if (hora >= 12 && hora < 18) {

        img.src = 'tardepng.png'
        document.body.style.background = '#b9846f'

    } else {

        img.src = 'noite.png'
        document.body.style.background = '#515154'


    }
    

}


