let prompt = require("prompt-sync")()

console.log("Exercício 3")

let numeroInformado1 = parseInt(prompt("Por favor, informe o primeiro número: "))
let numeroInformado2 = parseInt(prompt("Informe o segundo número: "))
let numeroInformado3 = parseInt(prompt("Informe o terceiro número: "))

if(numeroInformado1 < numeroInformado2 && numeroInformado2 < numeroInformado3 && numeroInformado1 < numeroInformado3){
    console.log("Os números estão em ordem crescente.")

} else {console.log("Os números não se encontram em ordem crescente")}

