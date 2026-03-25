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
    energia -= 1;

    if (energia === 0){
        console.log("Sem energia.")
    }
}

console.log("-----------------------------");
// desafio 04
var soma = 0;
var numero = 1;

while(numero <= 5){
    console.log(soma += numero);
}

console.log("-----------------------------");
// desafio 05
var resultado = 1;
var numero = 1;

while(numero <= 5){
    console.log(numero *= resultado);

}