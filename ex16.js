// Atividade 16

const readline = require('readline-sync')

let totalQuestoes = parseInt(readline.question("Digite a quantidade total de questões: "))
let acertos = parseInt(readline.question("Digite a quantidade de acertos: "))
let percentual = (acertos / totalQuestoes) * 100

console.log("\n========== Percentual de Acertos ==========")
console.log(`Percentual de acertos: ${percentual}%`)
console.log("=========================================\n")
