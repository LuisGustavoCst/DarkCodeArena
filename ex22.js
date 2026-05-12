// Atividade 22

const readline = require('readline-sync')

let valorProduto = parseFloat(readline.question("Digite o valor do produto: R$ "))
let imposto = valorProduto * 0.18
let total = valorProduto + imposto

console.log("\n========== Cálculo de Imposto ==========")
console.log(`Valor do imposto: R$ ${imposto}`)
console.log(`Valor total: R$ ${total}`)
console.log("======================================\n")
