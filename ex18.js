// Atividade 18

const readline = require('readline-sync')

let valorMeta = parseFloat(readline.question("Digite o valor da meta: R$ "))
let valorVendido = parseFloat(readline.question("Digite o valor vendido: R$ "))
let percentual = (valorVendido / valorMeta) * 100

console.log("\n========== Meta de Vendas ==========")
console.log(`Percentual da meta atingida: ${percentual}%`)
console.log("====================================\n")
