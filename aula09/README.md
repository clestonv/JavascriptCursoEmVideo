# Introdução ao DOM

>Você sabe o que significa a sigla DOM? Sabe para que serve o Document Object Model? Sabe como criar uma árvore DOM para o seu site? Sabe como usar o JavaScript para manipular o DOM? Sabe para que servem os elementos Parent e Child em um DOM? Sabe utilizar os métodos getElementByTagName, getElementById, getElementByName, getElementByClassName, querySelector de acesso ao DOM no JavaScript?

## Árvore DOM

* Aritméticos
* Atribuições
* Relacionais
* Lógicos
* Ternário

## Selecionando

* por Marca
* por ID
* por Nome
* por Classe
* por Seletor

## Marca (TAG)

~~~javascript
/* getElementsByTagName() */
let p1 = document.getElementsByTagName('p')[0]  // referênciando a primeira tag p
document.write('Está escrito assim: '+ p1.innerText)
alert('Está escrito assim: '+ p1.innerText)
~~~

## ID 

~~~javascript
/* getElementsById() */
 document.getElementsByID('p')  // referênciando um ID
~~~

## Name

~~~javascript
/* getElementsByName() */
 document.getElementsByName('msg')[1]  // referênciando um Nome
~~~

## Classe

~~~javascript
/* getElementsByName() */
 document.getElementsByClassName('msg')[1]  // referênciando um Classe
~~~

## Selector

~~~javascript
/* querySelector() e querySelectorAll */
let d = document.querySelector('div#msg') // referênciando uma DIV e ID
d.style.color = 'yellow'  
~~~

~~~html
1. () Parenteses
2. ** Potência
3. * Multiplicação
4. / Divisão
5. % Resto da Divisão
6. + Soma
7. - Subtração
~~~

## Atribução Simples

~~~javascript
let a = 5 + 3             // 5 Mais 3 = 8
let b = a % 8             // 5 Mais 3 = 8
let c = 5 * b**2          // 5 Mais 3 = 8
let d = 10 -1 a /2        // 5 Mais 3 = 8
let e = 6 * 2 / d         // 5 Mais 3 = 8
var f = b % e + 4 / e     // 5 Mais 3 = 8
~~~

>Você já conhece os operadores relacionais e os operadores lógicos em JavaScript? Sabe a diferença entre usar = ou == ou === em JavaScript? Conhece a ordem de precedência dos operadores do JavaScript? Sabe como usar o operador ternário para atribuições em JavaScript?

## Relacionais

~~~javascript
5 > 3 = true             // 5 é maior que 3
7 < 4 = false            // 7 não é menor que 4
8 >= 8 = true            // 8 não é maior mas é igual
9 <= 7 = false           // 9 não é menor que 7
5 == 5 = true            // 5 é igual a 5
4 != 4 = false           // 4 não é diferente de 4
~~~

## Exemplos

~~~javascript
preço >= 2000.50         // o preço é maior ou igual a 200.50:
idade < 18               // a idade é menor do que 18?
curso == 'JavaScript'    // o curso é JavaScript?
n1 != n2                 // o primeiro número é diferente do segundo?
~~~

## Identidade

~~~javascript
5 == 5 = true        // 
5 == '5' = true      // 
5 === '5' = false    // 
5 === 5 = true       // 
~~~

## Lógico

| Operador      | Função        |
| ------------- |:-------------:|
| !             | Negação       |
| &&            | Conjução      |
| II            | Disjução      |

## Exemplos

~~~javascript
idade >= 15 && idade <=17             // a idade está 15 e 17?
estado == 'RJ' || estado == 'SP'      // o estado é RJ ou SP? 
salario > 1500 && sexo != 'M'         // o salário é acima de 1500 e não é um homem
~~~

## Ternário

~~~javascript
teste ? true : false
média >= 7.0 ? "Aprovado" : "Reprovado"    // A média é maior ou igual há 7?
~~~