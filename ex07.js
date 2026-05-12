// Atividade 7

const readline = require('readline-sync')

let soma = 0

for (let i = 1; i <= 5; i++) {
    let numero = parseInt(readline.question(`Digite o ${i}º número: `))
    soma += numero
}

console.log("\n========== Resultado da Soma ==========")
console.log(`A soma de todos os números digitados é: ${soma}`)
console.log("======================================\n")