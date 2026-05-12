// Atividade 13

const readline = require('readline-sync')

let peso = parseFloat(readline.question("Digite o seu peso em kg: "))
let altura = parseFloat(readline.question("Digite a sua altura em metros: "))
let imc = peso / (altura * altura)

console.log("\n========== Cálculo do IMC ==========")
if (imc < 18.5) {
    console.log("Abaixo do peso")
} else if (imc < 25) {
    console.log("Peso normal")
} else if (imc < 30) {
    console.log("Sobrepeso")
} else {
    console.log("Obesidade")
}
console.log("===================================\n")
