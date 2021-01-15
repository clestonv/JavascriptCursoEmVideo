# Tratamento de dados

>Você já aprendeu a manipular dados em JavaScript? Sabe como guardar o resultado de um prompt dentro de uma variável? Sabe converter String para Número em JavaScript? Consegue formatar um número para que ele se pareça com um valor monetário usando JavaScript?

## String Para Número

~~~javascript
Number.parseInt(n)
Number.parseFloat(n)
Number(n)
~~~

## Número Para String

~~~javascript
String(n)
n.toString()
~~~

## Formatando Strings

~~~javascript
var s = 'JavaScript'
'Eu estou aprendendo s'     // não faz interpolação
'Eu estou aprendendo ' + s  // usa interpolação
`Eu estou aprendendo ${s}`  // usa template string
s.lenght                    // quantos carcteres a string tem
s.toUpperCase()             // tudo para 'CAIXA ALTA'
s.toLowerCase()             // TUDO PARA 'caixa baixa'
~~~

## Formatando Números

~~~javascript
let n1 = 1543.5
n1                                            // imprime 1543.5      
n1.toFixed(2)                                 // imprime 1543.50
n1.toFixed(2).replace('.', ',')               // imprime 1543,50
n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})  // imprime R$ 1.543,50
~~~