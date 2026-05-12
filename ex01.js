// Atividade 1

const readline = require('readline-sync')

let numero = parseInt(readline.question("Digite um número: "))

console.log("\n========== Resultado ==========")
if (numero > 0) {
    console.log("Número positivo")
} else if (numero < 0) {
    console.log("Número negativo")
} else {
    console.log("Zero")
}
console.log("==============================\n")
