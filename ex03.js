// Atividade 3

const readline = require('readline-sync')

let valorCompra = parseFloat(readline.question("Digite o valor da compra: R$ "))

let desconto = 0
let percentual = 0

if (valorCompra > 500) {
    percentual = 20
    desconto = valorCompra * 0.20
} else if (valorCompra >= 200) {
    percentual = 10
    desconto = valorCompra * 0.10
} else {
    percentual = 0
    desconto = 0
}

let valorFinal = valorCompra - desconto

console.log("\n========== Resumo do Desconto ==========")
console.log(`Valor original: R$ ${valorCompra}`)
console.log(`Percentual de desconto: ${percentual}%`)
console.log(`Valor final da compra: R$ ${valorFinal}`)
console.log("======================================\n")