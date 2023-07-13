let prompt = require("prompt-sync")()

let InformeNumero = parseFloat(prompt("Informe um número por gentileza: "))
if(InformeNumero == 2 % 0) {console.log("Esse número é par.")}
else{console.log("Esse número é ímpar.")}