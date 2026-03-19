//desafio 01
var nome = "João";
var idade = 20;

if(idade >= 18){
    console.log(nome+ " é maior de idade");
} else {
    console.log(nome+" ainda é menor de idade");
}

//desafio 02
var idade = 20;
var temCarteira = true;

if(idade >= 18 && temCarteira == true){
    console.log("Pode dirigir");
} else if (idade >= 18 && temCarteira == false){
    console.log("Só pode dirigir com supervisão");
} else {
    console.log("não pode dirigir");
}

//desafio 03
var numero = 210;

if(numero == 0){
    console.log("zerou tudoooo!");
} else if(numero < 0){
    console.log("Tá negativo");
} else{
    console.log("Tudo positivo, tudo certo!");
}

//desafio 04
var nomeProduto = "sabão";
var estoque = 0;

if (estoque > 0){
    console.log(nomeProduto+" ainda está em estoque.");
} else {
    console.log(nomeProduto+ " está esgotado.");
}

//desafio 05
var nota = 4;

if(nota == 7){
    console.log("Aprovado na média.");
} else if(nota > 7){
    console.log("Parabéns! sua nota foi ótima!");
} else if(nota < 7 && nota > 4){
    console.log("Ops...está de recuperação");
} else {
    console.log("Vixi...está reprovado.");
}

//desafio 06
var nomePersonagem = "Guerreito Zelda";
var vidas = 10;

if(vidas == 0){
    console.log(nomePersonagem+ " está derrotado.");
} else {
    console.log(nomePersonagem+" ainda tem "+vidas+" vidas.");
}

// desafio 07
usuario = {
    nome: "Ana",
    idade: 19,
    premium: false
}

if (usuario.premium && idade >= 18){
    console.log("Parabéns "+usuario.nome+"! Você tem acesso total a nossa plataforma!");
}if (usuario.premium && idade < 18) {
    console.log(usuario.nome+" você tem acesso limitado a nossa plataforma pois ainda é de menor.");
}if(!usuario.premium){
    console.log("Acesso negado!")
}