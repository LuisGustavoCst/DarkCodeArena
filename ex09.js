// Atividade 9

const readline = require('readline-sync')

let num1 = parseInt(readline.question("Digite o primeiro número: "))
let num2 = parseInt(readline.question("Digite o segundo número: "))
let num3 = parseInt(readline.question("Digite o terceiro número: "))

let maior = num1

if (num2 > maior) {
    maior = num2
}

if (num3 > maior) {
    maior = num3
}

console.log("\n========== Maior Número ==========")
console.log(`O maior número digitado é: ${maior}`)
console.log("===================================\n")