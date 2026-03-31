// desafio 01
var contador = 0;

while(contador < 5){
    console.log("contador "+contador);
    contador += 1;
}

console.log("-----------------------------");
// desafio 02
var contador2 = 0;

while(contador2 <= 10){
    console.log("contador "+contador2);
    contador2 += 2;
}

console.log("-----------------------------");
//desafio 03
var energia = 10;

while(energia >= 0){
    console.log(energia);

    if (energia === 0){
        console.log("Sem energia.")
    }
    energia -= 1;
}

console.log("-----------------------------");
// desafio 04
var soma = 0;
var numero = 1;

while(numero <= 5){
    soma += numero;
    console.log(soma);
    numero += 1; 
}

console.log("-----------------------------");
// desafio 05
var resultado = 1;
var numero = 1;

while(numero <= 5){
    resultado *= numero;
    console.log(resultado);
    numero += 1;
}

console.log("-----------------------------");
// desafio 06
var vida = 10;

while(vida >= 0){
    console.log("Vida atual: "+vida);

    if(vida === 0){
        console.log("Personagem morreu!")
    }
    vida -= 2;
}

console.log("-----------------------------");
// desafio 07
var saldo = 100;

while(saldo >= 0){
    console.log("Seu saldo atual é: "+saldo);

    if(saldo === 0){
        console.log("Saldo esgotado!")
    }
    saldo -= 25;
}

console.log("-----------------------------");
// desafio 08
var nivel = 1;
var xp = 0;

while(nivel <= 5){
    xp += 10;
    console.log("Nível: "+nivel, " || XP: "+xp);
    nivel += 1;
}

console.log("-----------------------------");
// desafio 09
var vida = 20;
var dano = 2;

while(vida > 0){
    console.log(vida);
    vida -= dano;
    dano += 1;
}
console.log("inimigo derrotado!");