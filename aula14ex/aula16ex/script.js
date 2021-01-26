function gerar() {
    // referenciar os elementos input
    let inInicio = document.getElementById('inInicio');
    let inFim = document.getElementById('inFim')
    let inPasso = document.getElementById('inPasso')
    
    // referenciar div res
    let res = document.getElementById('res')
    let mostra = ''

    // pegando valores dos campos
    let Inicio = Number(inInicio.value)
    let Fim = Number(inFim.value)
    let Passo = Number(inPasso.value)

    // Validacao dos campos
    if (inInicio.value.length == 0 || inFim.value.length == 0 || inPasso.value.length == 0) {
        alert('[ERRO]\n Faltam dados!')
    } else {
        if (Passo <= 0) {
            window.alert('Passo Inválido!\n Considerando PASSO 1')
            Passo = 1
        }

        if (Inicio < Fim) {
            // Contagem crescente
            for ( let i = Inicio; i <= Fim; i += Passo) {
               res.innerHTML += ` ${i} \u{1F449}`
            }                        
        } else {
            // Contagem regressiva
            for ( let i = Inicio; i >= Fim; i -= Passo) {
               res.innerHTML += ` ${i} \u{1F449}`
            }               
        }
        res.innerHTML += `\u{1F3C1}`
    }

    

    
    

    
}