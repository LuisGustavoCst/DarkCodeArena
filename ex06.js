// Atividade 6

const readline = require('readline-sync')

let numero = parseInt(readline.question("Digite um número inteiro: "))

console.log(`\n========== Tabuada do ${numero} ==========`)
for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`)
}

console.log("================================\n")