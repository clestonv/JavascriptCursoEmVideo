function gerarTabuada() {
    // referenciando o elemento
    var inNumero = document.getElementById('inNumero')
    var seRes = document.getElementById('seRes')

    //converter para numero
    var num = Number(inNumero.value)
    var resultado = ''

    if (num == ' ') {
        seRes.innerHTML = '<option>Campo numero vazio</option>'
    }


    for ( i = 0; i <= 10; i++) {
        console.log(num +' X '+i+' = '+i *  num)
        resultado +=`<option>${num} X ${i} = ${i*num}</option>`
    }

    seRes.innerHTML = resultado
}