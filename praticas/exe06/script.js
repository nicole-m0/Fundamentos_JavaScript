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