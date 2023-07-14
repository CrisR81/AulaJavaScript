let prompt = require("Prompt-sync")()

console.log("Exercício 4")

let anoNascimento = parseInt(prompt("Informe sua data de nascimento: "))
if (anoNascimento >= 18){
    console.log("Vocë é maior de idade")
    } else {console.log("Vocë é de menó!")}