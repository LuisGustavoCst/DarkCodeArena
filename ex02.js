// Atividade 2

const readline = require('readline-sync')

let nota = parseFloat(readline.question("Digite a nota do aluno (0 a 10): "))

console.log("\n========== Resultado da Aprovação ==========")
if (nota >= 7) {
    console.log("Aluno aprovado")
} else if (nota >= 5 && nota < 7) {
    console.log("Aluno em recuperação")
} else if (nota < 5 && nota >= 0) {
    console.log("Aluno reprovado")
} else {
    console.log("Nota inválida. Digite um valor entre 0 e 10.")
}
console.log("==========================================\n")