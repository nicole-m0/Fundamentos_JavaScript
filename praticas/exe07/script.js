console.log("-=-=-=-=-=-=Desafio 01-=-=-=-=-=-=-=");
// Crie uma função que receba a vida de um personagem e:
// Se vida > 0 → "Personagem vivo ❤️"
// Se vida === 0 → "Personagem morreu 💀"
// verificarVida(10)

function verificarVida(){
    if(vida > 0){
        console.log("Personagem vivo! ❤️");
    }
    else if(vida === 0){
        console.log("Personagem morto! 💀");
    }
}
var vida = 10;
verificarVida(vida);

console.log("-=-=-=-=-=-=Desafio 02-=-=-=-=-=-=-=");
// Crie uma função que recebe um número e diga:
// "Par ⚖️"
// "Ímpar 🔥"

function verificarNumero(){
    if(n % 2 == 0){
        console.log("Par ⚖️")
    }
    else{
        console.log("Ímpar 🔥")
    }
}
var n = 10;
verificarNumero(n);

console.log("-=-=-=-=-=-=Desafio 03-=-=-=-=-=-=-=");
// contagem regressiva
// Crie uma função que recebe um número e faz um while até 0: quando chegar em zero faz BOOM💥
var i = 10;
function contagemRegressiva(){
    while(i >= 0){
        console.log(i);
        i--;
    }
}
contagemRegressiva(i);
console.log("BOOM💥");

console.log("-=-=-=-=-=-=Desafio 04-=-=-=-=-=-=-=");
// Sistema de dano
// Crie uma função que: Recebe vida e dano
// Enquanto a vida for maior que 0: Diminui a vida
// Mostra a vida atual
// Quando acabar: "Inimigo derrotado 🏆"

function sistemaDano(vida){
    while(vida >= 0){
        console.log("Vidas❤️ - "+vida);
        vida--;
    }
}
sistemaDano(vida);
console.log("Inimigo derrotado 🏆")