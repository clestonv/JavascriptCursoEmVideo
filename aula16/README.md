# Funções

>Você sabe usar funções em JavaScript? Sabe como aplicar o uso de rotinas em seus códigos para torná-los mais simples? Sabe como usar uma função como resposta a um determinado evento? Sabe como realizar a passagem de parâmetros entre códigos JavaScript?

* São **ações** executadas assim que são **chamadas** ou em decorrência de algum **Evento**.
* Uma **função** pode receber **parâmetros** e retornar um **resultado**.

## Declarando uma Função

~~~javascript

function acao(param) {

    return res
}

acao(5)

~~~

## Função ParImpar Exempo

~~~javascript

function parimp() {
    if (n % 2 == 0) {
        return 'par'
    } else {
        return 'impar'
    }
}

let res = parimp(11)

~~~

## Função na variável

~~~javascript
let v = function(x) {
    return x * 2
}

console.log(v(4))
~~~
