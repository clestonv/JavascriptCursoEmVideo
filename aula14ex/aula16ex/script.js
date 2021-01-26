function gerar() {
    // referenciar os elementos input
    var inInicio = document.getElementById('inInicio');
    var inFim = document.getElementById('inFim')
    var inPasso = document.getElementById('inPasso')
    
    // referenciar div res
    var res = document.getElementById('res')
    var mostra = ''
    // pegando valores dos campos
    var Inicio = Number(inInicio.value)
    var Fim = Number(inFim.value)
    var Passo = Number(inPasso.value)

    // Validacao dos campos
    if (Inicio == '') {
        alert(`Campo Vazio`)
        res.innerHTML = `O Primeiro campo esta vazio`
    } else if (Fim == '') {
        res.innerHTML = 'Compo Fim Vazio !!'
    } else if (Passo == 0) {
        alert(`Passo Zero considerando passo 1`)
        Passo = 1
    }

    for ( var i = Inicio; i <= Fim; i+= Passo) {
        mostra += i + ' &#128073 '
    }
    mostra += ' &#127988'
    res.innerHTML = `${mostra}`
}