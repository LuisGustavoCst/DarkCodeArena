// Atividade 14

const readline = require('readline-sync')

let totalVendido = parseFloat(readline.question("Digite o valor total vendido: R$ "))
let comissao = totalVendido * 0.05

console.log("\n========== Cálculo da Comissão ==========")
console.log(`Valor da comissão: R$ ${comissao}`)
console.log("========================================\n")
