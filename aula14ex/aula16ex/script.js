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

    for ( var i = Inicio; i <= Fim; i+= Passo) {
        mostra += i + ' &#128073 '
    }
    mostra += ' &#127988'
    res.innerHTML = `${mostra}`
}