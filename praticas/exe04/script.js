// desafio 01
var numero = 10;
var texto = "10";

if(numero === texto){
    console.log("São iguais");
} else {
    console.log("São diferentes");
}

// desafio 02
var usuario = "Maria";
var bloqueado = false;

if (!bloqueado){
    console.log("Acesso permitido");
} else {
    console.log("Acesso negado!");
}

//desafio 03
var idade = 16;
var temAutorizacao = true;

if (idade >= 18 || temAutorizacao == true){
    console.log("Você está autorizado a utilizar o sistema");
} else {
    console.log("Você não está autorizado ao acesso.");
}

// desafio 04
var saldo = 50;
var preco = 60;

if(saldo >= preco){
    console.log("pode comprar");
} else {
    console.log("não pode comprar");
}

// desafio 05
var usuario = "admin";
var senha = 1234;

if (usuario === "admin" && senha === 1234){
    console.log("Login OK");
}else if(usuario === "admin" && senha !== 1234){
    console.log("Senha incorreta. Tente novamente!");
}else {
    console.log("usuário inválido!");
}

// desafio 06
var idade = 20;
var premium = true;

if (idade >= 18 && !premium){
    console.log("Acesso básico");
} else if(idade >= 18 && premium){
    console.log("Acesso VIP");
} else {
    console.log("Acesso negado!");
}

// desafio 07
var temperatura = 39;
var doente = true;

if(temperatura >= 38 || doente){
    console.log("procurar médico");
} else {
    console.log("tudo ok");
}

// desafio 08
var usuario = {
    nome: "carlos",
    idade: 17,
    premium: false,
    ativo: true,
}  

if (usuario.ativo && usuario.premium){
    console.log("Acesso completo");
} else if (usuario.ativo && !usuario.premium && usuario.idade >= 18){
    console.log("Acesso parcial");
} else if (usuario.ativo && usuario.idade < 18){
    console.log("Acesso restrito");
} else {
    console.log("Conta inativa");
}