let num = document.querySelector('input#inNumero')
let lista = document.querySelectorAll('select#lista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
} 

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        alert('OK')
    } else {
        alert('Valor invárlido ou já encontrado na lista')
    }
}