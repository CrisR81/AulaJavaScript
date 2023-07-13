
let prompt = require('prompt-sync')()

console.log("Exercicio 02")


let informeSalario = parseFloat(prompt("Informe seu salário por gentileza: "))
if(informeSalario < 500){
let salarioFinal = (informeSalario * 0.3) + informeSalario 
console.log("O seu salário teve reajuste, e a partir de agora será: R$ " + salarioFinal )
} else {console.log("O seu salario é R$ " + informeSalario + " e por esse motivo não houve reajuste.")}


