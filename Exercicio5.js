let prompt = require("prompt-sync")()

let informeNumero1 = parseFloat(prompt("Informe o primeiro número, por gentileza: "))
let informeNumero2 = parseFloat(prompt("Informe o segundo número, por gentileza: "))
if(informeNumero1 > informeNumero2){console.log("O número maior é o: " + informeNumero1 + ".")}
else if(informeNumero1 == informeNumero2){console.log("Os números informados são iguais.")}
else{console.log("O número maior é o: " + informeNumero2 + ".")}