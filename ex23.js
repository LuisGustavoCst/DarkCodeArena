// Atividade 23

const readline = require('readline-sync')

let homens = parseInt(readline.question("Digite a quantidade de homens: "))
let mulheres = parseInt(readline.question("Digite a quantidade de mulheres: "))
let total = homens + mulheres

let percentualHomens = (homens / total) * 100
let percentualMulheres = (mulheres / total) * 100

console.log("\n========== Percentual de Gênero ==========")
console.log(`Percentual de homens: ${percentualHomens}%`)
console.log(`Percentual de mulheres: ${percentualMulheres}%`)
console.log("========================================\n")
