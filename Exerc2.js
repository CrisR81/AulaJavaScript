let prompt = require("prompt-sync")()

console.log("Exercício 2")

let escrevaUmNumero = parseInt(prompt("informe um número de 1 a 7: "))
if(escrevaUmNumero == 1){console.log("Hoje é segunda!")}
else if(escrevaUmNumero == 2){console.log("Hoje é terça!")}
else if(escrevaUmNumero == 3){console.log("Hoje é quarta!")}
else if(escrevaUmNumero == 4){console.log("Hoje é quinta!")}
else if(escrevaUmNumero == 5){console.log("Hoje é sexta!")}
else if(escrevaUmNumero == 6){console.log("Hoje é sábado!")}
else if(escrevaUmNumero == 7){console.log("Hoje é domingo!")}
else{console.log("Informe o número correto, por gentileza.")}
