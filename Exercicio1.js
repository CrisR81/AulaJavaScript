console.log("Exercicio 01")
let prompt = require("prompt-sync")();

let nomeFuncionario = prompt("Digite o nome do funcionario: ")
let cargoFuncionario = prompt("Digite o cargo do funcionario: ")
let salarioFunc = parseFloat(prompt("Digite o salario do funcionario: ") )


if(salarioFunc < 1000){
let salarioFinal = (salarioFunc * 0.1) + salarioFunc
console.log("O salario final do funcionario " + nomeFuncionario, "com o cargo de " + cargoFuncionario, "é: R$ " + salarioFinal) 

}else{
console.log("O salario final do funcionario " + nomeFuncionario, "com o cargo de " + cargoFuncionario, "é: R$ " + salarioFunc)}

