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
console.log("Inimigo derrotado 🏆");

console.log("-=-=-=-=-=-=Desafio 05-=-=-=-=-=-=-=");
// Sem usar *, crie uma função que multiplica dois números usando while.
// 👉 Exemplo: multiplicar(3, 4) // 12
// Dica: soma repetida
function multiplicar(a, b){
    var resultado = 0;
    var i = 0;

    while(i < b){
        resultado += a;
        i++;
    }

    console.log(resultado);
}
multiplicar(3,4);

console.log("-=-=-=-=-=-=Desafio 06-=-=-=-=-=-=-=");
// Crie uma função que recebe 3 números e retorna o maior.
function maiorNumero(n1, n2, n3){
    if(n1 > n2 && n1 > n3){
        console.log(n1+" é maior que "+n2+" e "+n3);
    }
    else if(n1 < n2 && n2 > n3){
        console.log(n2+" é maior que "+n1+" e "+n3);
    }
    else if(n3 > n2 && n3 > n1){
        console.log(n3+" é maior que "+n1+" e "+n2)
    }
}

maiorNumero(2,3,4);

console.log("-=-=-=-=-=-=Desafio 07-=-=-=-=-=-=-=");
// Sistema de login simples
// Crie uma função que recebe: usuario e senha
// Se for "admin" e "1234" → "Acesso liberado 🔓"
// Senão → "Acesso negado 🚫"

function login(usuario, senha){
    if(senha === 1234){
        console.log(usuario+" ,Acesso liberado!🔓")
    }
    else{
        console.log("Acesso Negado!🚫")
    }
}
login("Marcos", 2234);

console.log("-=-=-=-=-=-=Desafio 08-=-=-=-=-=-=-=");
// Crie uma função que: Recebe um número
// Soma todos os números de 1 até ele

var soma = 0;
function somaNumero(){
    for(var n = 1; n <= 5; n++){
        soma += n;
    }
    console.log(soma);
}
somaNumero();

console.log("-=-=-=-=-=-=Desafio 09-=-=-=-=-=-=-=");
// Contador de pares
// Crie uma função que: Recebe um número
// Conta quantos números pares existem de 0 até ele
function somarPares(n){
    var Contador = 0;
    var i = 0;

    while(i <= n){
        if(i % 2 === 0){
            Contador++;
        }
        i++
    }
    console.log("Quantidade de pares é: "+Contador);
}
somarPares(10);

console.log("-=-=-=-=-=-=Desafio 10-=-=-=-=-=-=-=");
// Mini sistema de batalha
// Crie uma função que simula uma batalha:
// Vida começa com valor recebido
// A cada rodada: perde 2 de vida
// se vida % 3 === 0 → "💥 ataque crítico!"
// se vida === 5 → "⚠️ cuidado!"
// Quando vida chegar a 0: "💀 derrotado!"

function batalha(vida){
    while(vida > 0){
        vida -= 2;

        if(vida === 0){
            console.log(vida+ "💀 derrotado!");
        }
        else if(vida % 3 === 0){
            console.log(vida+" 💥 ataque crítico!");
        }
        else if(vida % 5 === 0){
            console.log(vida+" ⚠️ cuidado!");
        }
        else{
            console.log(vida);
        }
    }
}
batalha(20);

console.log("-=-=-=-=-=-=Desafio 11-=-=-=-=-=-=-=");
function somarParesImpares(n){
    var soma = 0;
    var i = 1;
    var impares = 0;
    var pares = 0;
    
     while(i <= n){
        soma += i;

        if(i % 2 === 0){
            pares++;
        } else {
            impares++;
        }

        i++;
    }

    console.log("Soma:", soma);
    console.log("Pares:", pares);
    console.log("Ímpares:", impares);
}

somarParesImpares(10);

console.log("-=-=-=-=-=-=Desafio 11-=-=-=-=-=-=-=");
// Modifica sua função pra também mostrar:
// 👉 quantos números são múltiplos de 3
// Exemplo esperado: Múltiplos de 3: 3

function somarMultuplos(n){
    var contador = 0;
    var i = 1;

    while(i <= n){
        if(i % 3 === 0){
            contador++;
        }
        i++
    }
    console.log("A quantidade de números múltiplos de 3 é: "+contador);
}
somarMultuplos(10);