function verificar() {
    // referenciar os elementos
    var fano = document.getElementById('txtano') 
    var res = document.getElementById('res')
    // pegar ano atual
    var data = new Date()
    var ano = data.getFullYear()

    // verificar se ano está correto
    if (fano.value.length == 0 || fano.value > ano) {
        alert(`Ano ${fano.value} incorreto`)
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'

            if(idade >= 0  && idade < 10) {
                img.setAttribute('src','./img/bebe.jpg')
            } else if (idade < 21) {
                img.setAttribute('src','./img/jovem-m.jpg')
            } else if (idade < 50) {
                img.setAttribute('src','./img/adulto-m.jpg')
            } else {
                img.setAttribute('src','./img/idoso-m.jpg')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'

            if(idade >= 0 && idade < 10) {
                img.setAttribute('src', './img/bebe.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', './img/jovem-f.jpg')
            } else if (idade < 50) {
                img.setAttribute('src','./img/adulto-f.jpg')
            } else {
                img.setAttribute('src','./img/idoso-g.jpg')
            }
        }
    }

    res.innerHTML = `Dectamos ${genero} com ${idade} anos`
    res.appendChild(img)
}
   