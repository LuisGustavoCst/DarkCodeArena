// Atividade 11

const readline = require('readline-sync')

let numero = parseInt(readline.question("Digite um número inteiro positivo: "))
let fatorial = 1

for (let i = 1; i <= numero; i++) {
    fatorial *= i
}

console.log("\n========== Cálculo do Fatorial ==========")
console.log(`O fatorial de ${numero} é: ${fatorial}`)
console.log("========================================\n")
