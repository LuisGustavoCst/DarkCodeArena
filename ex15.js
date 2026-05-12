// Atividade 15

const readline = require('readline-sync')

let valorConta = parseFloat(readline.question("Digite o valor da conta: R$ "))
let gorjeta = valorConta * 0.10
let total = valorConta + gorjeta

console.log("\n========== Cálculo da Gorjeta ==========")
console.log(`Gorjeta de 10%: R$ ${gorjeta}`)
console.log(`Valor total a pagar: R$ ${total}`)
console.log("========================================\n")
