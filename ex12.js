// Atividade 12

const readline = require('readline-sync')

let positivos = 0

for (let i = 1; i <= 10; i++) {
    let numero = parseFloat(readline.question(`Digite o ${i}º número: `))
    if (numero > 0) {
        positivos++
    }
}

console.log("\n========== Contador de Positivos ==========")
console.log(`Quantidade de números positivos: ${positivos}`)
console.log("========================================\n")