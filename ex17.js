// Atividade 17

const readline = require('readline-sync')

let valorCompra = parseFloat(readline.question("Digite o valor da compra: R$ "))
let cashback = valorCompra * 0.08

console.log("\n========== Cálculo do Cashback ==========")
console.log(`Valor do cashback: R$ ${cashback}`)
console.log("========================================\n")
