let prompt = require("prompt-sync")();


let numeroInteiro = parseInt(prompt("Informe um numero por gentileza: "))
if(numeroInteiro < 0){ 
    console.log("O número informado é negativo")

}else if(numeroInteiro == 0){
    console.log("o zero é um número neutro (e também é par! ;D )")

}else{console.log("O numero informado é positivo")}




