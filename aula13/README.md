# Repetições (Parte 1)

>Você sabe como utilizar as estruturas while e do..while em JavaScript? Sabe como realizar repetições ou laços em JavaScript? Sabe como fazer um mesmo código ser executado várias vezes em um mesmo programa?

## While

> Estrutura de repetição com teste lógico no inicio

~~~javascript
// Declaração
    while (condição) {

    }
 //
    function comerPizza() {
        while(temfatia()) {
            comerFatia()
        }
    }

  // Exemplo
    let c = 1
    while (c < 6) {
        console.log('Tudo bem? ' + c)
        c++
    }
~~~

## Do While

> Estrutura de repetição com teste lógico no final

~~~javascript
// Declaração
    do {

    } while (condição)

 // 
    function comerPizza() {
        do {
            comerFatia()
        } while(temfatia())
    }

  // Exemplo
    let c = 1
    do {
        console.log('Tudo bem? ' + c)
        c++
    } while (c < 6)
~~~