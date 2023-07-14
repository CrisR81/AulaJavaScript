let prompt = require("prompt-sync")()

console.log("Exercício 1")
let nomeUsuario = prompt("Digite seu nome por gentileza: ")
let senhaUsuario = prompt("Digite sua senha: ")
if(nomeUsuario == "admin" && senhaUsuario == "senha123"){
    console.log("Login bem sucedido!")}
    else{console.log("Senha inválida.")}