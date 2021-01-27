let num = [5, 8, 2, 9, 3]

console.log(num) // Vetor normal
num.push(1)
num.sort()
console.log('Vetor em ordem crescente ' +num) // Vetor em ordem crescente
console.log(`O vetor tem ${num.length} posições`)
console.log(`O Primeiro valor do vetor é ${num[1]}`)

let pos = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos}`)