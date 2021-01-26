# Eventos DOM

>ocê já entendeu como funciona o DOM com JavaScript? Sabe criar funções em JavaScript? Consegue ligar uma função a um evento em um formulário HTML5 usando JavaScript? Sabe como pegar valores dentro de caixas de texto e fazer cálculos com eles? 

## Eventos

* mouseenter
* mousemove
* mousedown
* mouseup
* click
* mouseout

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