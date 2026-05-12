// Atividade 20

const readline = require('readline-sync')

let salario = parseFloat(readline.question("Digite o salário atual: R$ "))
let novoSalario = salario

if (salario <= 2000) {
    novoSalario = salario * 1.10
} else {
    novoSalario = salario * 1.05
}

console.log("\n========== Aumento do Salário ==========")
console.log(`Novo salário: R$ ${novoSalario}`)
console.log("========================================\n")
