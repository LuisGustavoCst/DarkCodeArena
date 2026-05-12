// Atividade 10

const readline = require('readline-sync')

let quantidadeAlunos = parseInt(readline.question("Digite a quantidade de alunos: "))

let notas = []
let soma = 0

for (let i = 1; i <= quantidadeAlunos; i++) {
    let nota = parseFloat(readline.question(`Digite a nota do aluno ${i}: `))
    notas.push(nota)
    soma += nota
}

let media = soma / quantidadeAlunos

let acimaMedia = 0
let abaixoMedia = 0

for (let nota of notas) {
    if (nota > media) {
        acimaMedia++
    } else if (nota < media) {
        abaixoMedia++
    }
}

console.log("\n========== Média da Turma ==========")
console.log(`Média final da turma: ${media}`)
console.log(`Alunos acima da média: ${acimaMedia}`)
console.log(`Alunos abaixo da média: ${abaixoMedia}`)
console.log("====================================\n")