console.log("-=-=-=-=-=--=-=--=-=-=-=-=-=-=-=");
// desafio 01:
// Crie um programa que mostre no console os números de 1 até 10 usando for:
for(var i = 0; i <= 10; i++){
    console.log(i);
}

console.log("................................");
// Depois modifica para mostrar de 10 até 1.
for(var i = 10; i >= 1; i--){
    console.log(i);
}

console.log("-=-=-=-=-=--=-=--=-=-=-=-=-=-=-=");
// desafio 02
// Mostre todos os números pares de 0 até 20.
for(var i = 0; i <= 20; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}

console.log("-=-=-=-=-=--=-=--=-=-=-=-=-=-=-=");
// desafio 03
// Crie um loop de 1 até 10, mas: Quando chegar no número 5, o programa deve parar completamente.
for(var i = 0; i <= 10; i++){
    console.log(i);
    if(i === 5){
        break
    }
}

console.log("-=-=-=-=-=--=-=--=-=-=-=-=-=-=-=");
// desafio 04
// Agora faça um loop de 1 até 10, mas: Quando for o número 5, ele NÃO deve aparecer.
var i = 0;

while(i < 10){
    i += 1;
    if(i === 5){
        continue
    }
    console.log(i)
}

console.log("-=-=-=-=-=--=-=--=-=-=-=-=-=-=-=");
// desafio 05
// Crie um programa que soma todos os números de 1 até 100 e mostra o resultado final.
var soma = 0;
for(var n = 1; n <= 100; n++){
    soma += n;
}
console.log(soma);

console.log("-=-=-=-=-=--=-=--=-=-=-=-=-=-=-=");
// desafio 06
// Peça um número (pode colocar fixo por enquanto) e mostre a tabuada dele de 1 até 10.

var n2 = 1;
for(var n = 1; n <= 10; n++){
    var multiplicacao = n * n2;
    console.log(n+" x "+n2+" = "+multiplicacao);
}

console.log("-=-=-=-=-=--=-=--=-=-=-=-=-=-=-=");
// desafio 07
// Mostre números de 1 até 30, mas:
// Se for múltiplo de 3 → escreva "Fizz"
// Se for múltiplo de 5 → escreva "Buzz"
// Se for múltiplo de 3 e 5 → "FizzBuzz"

for(var i = 1; i <= 30; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    } else if(i % 3 === 0){
        console.log("Fizz");
    } else if(i % 5 === 0){
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

console.log("-=-=-=-=-=--=-=--=-=-=-=-=-=-=-=");
// desafio 08
// Você começa com vida = 10. A cada rodada perde 1 de vida. Quando a vida chegar a 0, o loop para automaticamente.
// 👉 Se a vida chegar a 5, mostre: metade da vida!

for(var v = 10; v >= 0; v--){
    if(v == 5){
        console.log("⚠️Metade da vida!");
        continue
    }
    if(v == 0){
        console.log("💀Acabou suas vidas!")
        break
    }
    console.log("❤️Vidas: "+v);
}

console.log("-=-=-=-=-=--=-=--=-=-=-=-=-=-=-=");
// desafio 09
// Mostre números de 1 até 20: Ignore (continue) números pares...Mostre só os ímpares
for(var i = 1; i <= 20; i++){
    if(i % 2 === 0){
        continue;
    }
    console.log(i);
}

console.log("-=-=-=-=-=--=-=--=-=-=-=-=-=-=-=");
// desafio 10
// Vai de 1 até 50
// Para se encontrar o número 37 (break)
// Ignora múltiplos de 4 (continue)
// Mostra os outros números

for(var i = 1; i <= 50; i++){
    if(i === 37){
        break;
    }
    if(i % 4 == 0){
        continue;
    }
    console.log(i);
}

console.log("-=-=-=-=-=--=-=--=-=-=-=-=-=-=-=");
// 💣 DESAFIO: Sistema de batalha simples
// Crie um código onde:
// Você começa com: vida = 10
// Loop roda enquanto vida > 0
// A cada rodada: Mostra a vida atual
// Se vida for múltiplo de 3 → mostrar: "🔥 ataque crítico!"
// Se vida for 5 → mostrar: "⚠️ cuidado!"
// Se vida for 2 → pular essa rodada (continue): 
// Se vida chegar a 0 → mostrar: "💀 derrotado!" e parar
// 👉 A cada rodada: vida--

for( var vida = 10; vida >= 0; vida--){
    if(vida == 2){
        console.log("Pular essa rodada...");
        continue;
    }
    else if(vida === 0){
        console.log("❤️Vida Atual "+vida+" --- 💀 derrotado!");
        break;
    }
    else if(vida % 3 === 0){
        console.log("❤️Vida Atual "+vida+" --- 🔥 ataque crítico!");
    }
    else if(vida === 5){
        console.log("❤️Vida Atual "+vida+" --- ⚠️ cuidado!");
    }
    else{
        console.log("❤️Vida Atual "+vida);
    }
}