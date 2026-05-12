// Atividade 8

const readline = require('readline-sync')

let numero = parseInt(readline.question("Digite um número inteiro: "))

console.log("\n========== Verificação Par ou Ímpar ==========")
if (numero % 2 === 0) {
    console.log("O número é par")
} else {
    console.log("O número é ímpar")
}
console.log("================================================\n")
