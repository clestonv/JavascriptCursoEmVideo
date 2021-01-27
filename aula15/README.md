# Variáveis Compostas

>Você sabe como funciona um array em JavaScript? Sabe qual é a vantagem em usar variáveis compostas em JavaScript? Consegue pensar em uma maneira de simplificar seus códigos em JavaScript, tornando-os menores?

## Variáveis Simples

>Só conseguem armazenar **um valor** por vez.

## Variáveis Compostas

>Devem ser capazes de armazenar **vários valores** em uma mesma estrutura.

## Frase

> Um **array**, um **vetor** ou uma **variável composta** é uma variável que tem vários elementos, cada elemento é composta por seu valor e por uma chave de indentificação.

## Declarando um array

~~~javascript
let num = [5, 8, 4, 7]

console.log(num)
~~~

## Adicionando elementos a um array 1

~~~javascript
num[3] = 6
~~~

## Adicionando elementos a um array 2

~~~javascript
num.push(7)
~~~

## Pegando o tamanho de um array

~~~javascript
num.lenght
~~~

## Ordenar um array em ordem crescente

~~~javascript
num.lenght
~~~

## Percorrendo um array com FOR

~~~javascript
for(let pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
~~~

## Percorrendo um array com FOR IN

~~~javascript
for (let pos in num) {
    console.log(num[pos])
}
~~~

## Procurando um elemento no array com indexOf

~~~javascript
num.indexOf(7) // vai retornar o numero da posição

num.indexOf(3) // vai retornar numero negativo já que não foi encontrado
~~~
