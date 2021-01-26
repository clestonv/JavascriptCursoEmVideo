let idade = 67

console.log(`Você tem ${idade} anos`)

if (idade < 16) {
    console.log('Não Vota')
} else if (idade < 18 || idade > 65) {
    console.log('Voto opcional')
} else {
    console.log('Voto Obrigatorio !!!')
}