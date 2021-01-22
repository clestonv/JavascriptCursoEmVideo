function carregar () {
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')

    let data = new Date()
    let hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        img.src = './img/manha.jpg'
        document.body.style.backgroundColor = '#788058'
    } else if (hora >= 12 && hora < 18) {
        img.src = './img/tarde.jpg'
        document.body.style.backgroundColor = '#B07F73'
    } else {
        img.src = './img/noite.jpg'
        document.body.style.backgroundColor = '#183138'
    }
}



