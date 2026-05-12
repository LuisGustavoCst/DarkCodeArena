// Atividade 21

const readline = require('readline-sync')

let custo = parseFloat(readline.question("Digite o custo do produto: R$ "))
let precoVenda = custo * 1.35

console.log("\n========== Cálculo do Preço de Venda ==========")
console.log(`Preço de venda: R$ ${precoVenda}`)
console.log("==============================================\n")
