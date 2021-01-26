# Eventos DOM

> Você já entendeu como funciona o DOM com JavaScript? Sabe criar funções em JavaScript? Consegue ligar uma função a um evento em um formulário HTML5 usando JavaScript? Sabe como pegar valores dentro de caixas de texto e fazer cálculos com eles?

## Exercicio - Somando Valores

~~~html
    <!-- Parte em HTML -->
    <h1>Somando Valores</h1>
    <input type="number" name="txtn1" id="txtn1"> <strong>+</strong>
    <input type="number" name="txtn2" id="txtn2">
    <input type="button" value="Somar" onclick="somar()">
    <hr>
    <div id="res">Resultado: </div>
~~~

~~~javascript
/** 
 * Parte JavaScript
*/

function somar() {
            // Referenciar os elementos
            let tn1 = document.getElementById('txtn1')
            let tn2 = document.getElementById('txtn2')
            let res = document.getElementById('res')

            // convertendo a string para number
            let n1 = Number(tn1.value)
            let n2 = Number(tn2.value)
            let s = n1 + n2

            console.log(s)
            res.innerHTML = ` A soma entre ${n2} e ${n1} é igual a <strong>${s}</strong>`
        }
~~~