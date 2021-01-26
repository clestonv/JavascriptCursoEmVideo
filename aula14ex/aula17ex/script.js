function gerarTabuada() {
    // referenciando o elemento
    let inNumero = document.getElementById('inNumero')
    let seRes = document.getElementById('seRes')
    let err = document.getElementById('err');

    // validação do campo
    if (inNumero.value.length == 0) {        
        err.innerText = 'Campo numero vazio'
        err.style.color = '#FFF'
        err.style.backgroundColor = '#5279CE'
        err.style.textAlign = 'center'
        inNumero.focus()
    } else {
        //converter para numero
        let num = Number(inNumero.value)
        //let resultado = ''
        let i = 1
        seRes.innerHTML = ''

        while (i <= 10) {
            let item = document.createElement('option')
            item.text = `${num} \u{2716} ${i} = ${num * i}`
            item.value = `seRes${i}`
            seRes.appendChild(item)
            i++
        }
        // for ( i = 0; i <= 10; i++) {
        //     console.log(num +' X '+i+' = '+i *  num)
        //     resultado +=`<option>${num} X ${i} = ${i*num}</option>`
        // }
        // seRes.innerHTML = resultado
        // seRes.style.width = 400;
    } 
    
}