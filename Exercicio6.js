let prompt = require("prompt-sync")()

let nota1 = parseFloat(prompt("Informe a primeira nota, por gentileza: "))
let nota2 = parseFloat(prompt("Informe a segunda nota, por gentileza: "))
let nota3 = parseFloat(prompt("Informe a terceira nota, por gentileza: "))
let nota4 = parseFloat(prompt("Informe a quarta nota, por gentileza: "))

let media = ((nota1 + nota2 + nota3 + nota4) / 4)

if(media >= 7){console.log("Você foi Aprovado!")}
else if(media <= 5){console.log("Você foi Reprovado.")}
else{console.log("Você se encontra em Recuperação.")}