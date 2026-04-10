console.log("==============Desafio 01==============");
// 🥇 Desafio 1 — Cadastro simples
// Crie uma função que receba uma string assim: " Ana , 25 , 1.68 "
// Regras:
// Use split() para separar os dados
// Use trim() para limpar espaços
// Use parseInt() e parseFloat()
// Retorne um objeto

function cadastro(dados){
    var partes = dados.split(",");

    var nome = partes[0].trim();
    var idade = parseInt(partes[1]);
    var altura = parseFloat(partes[2]);

    return {
        nome: nome,
        idade: idade,
        altura: altura
    };
}

console.log(cadastro(" Ana , 25 , 1.68 "));

console.log("==============Desafio 02==============");
// 🥈 Desafio 2 — Analisador de texto
// Crie uma função que receba uma frase: "Aprender JavaScript é muito legal"
// A função deve retornar:
// Quantidade de caracteres (length)
// Posição da palavra "JavaScript" (indexOf)
// Última ocorrência da letra "a" (lastIndexOf)
// A frase em maiúsculo (toUpperCase())

function analisandofrase(){
    var frase = "Aprender JavaScript é muito legal";

    console.log(frase.length);
    console.log(frase.indexOf("JavaScript"));
    console.log(frase.lastIndexOf("a"));
    console.log(frase.toUpperCase());
}
analisandofrase();

console.log("==============Desafio 03==============");
// 🥉 Desafio 3 — Formatar nome
// Crie uma função que receba:"   jOÃO da silva   "
// Saída esperada: "João da Silva"
// Regras:
//Use trim()
// Use toLowerCase()
// Use split()
// Use slice() para capitalizar

function formatarNome(nome){
    var nomeLimpo = nome.trim().toLowerCase();

    var partes = nomeLimpo.split();
    var nomeFormatado = "";

    for(var i = 0; i < partes.length; i++){
        var palavra = partes[i];
        var primeiraLetra = palavra[0].toUpperCase();
        var resto = palavra.slice(1);

        nomeFormatado += primeiraLetra + resto + " ";
    }

    return nomeFormatado.trim();

}
console.log(formatarNome("   jOÃO da silva   "));

console.log("==============Desafio 04==============");
// 🏅 Desafio 4 — Substituir palavras
// Crie uma função que receba: "Eu gosto de maçã, maçã é muito bom"
// Regras: Substitua todas as ocorrências de "maçã" por "banana"

function trocarPalavra(){
    var frase = "Eu gosto de maçã, maçã é muito bom";

    var frutaTrocada = frase.replaceAll("maçã", "banana");
    console.log(frutaTrocada);
}

trocarPalavra();

console.log("==============Desafio 05==============");
// 🎯 Desafio 5 — Sistema de produtos
// Crie uma função que receba um array:
// [
// "Notebook-2500.50",
//   "Celular-1200.00",
//   "Fone-100.99"
// ]
// Regras:
// Use split() para separar nome e preço
// Use parseFloat()
// Crie objetos:
// { nome: "Notebook", preco: 2500.50 }
// Retorne:
// Lista de objetos
// Soma total dos preços

function produtos(lista){
    var resultado = [];
    var soma = 0;

    for(i = 0; i < lista.length; i++){
        var partes = lista[i].split("-");
        var nome = partes[0];
        var preco = parseFloat(partes[1]);

        resultado.push({
            nome: nome,
            preco: preco
        });
        soma += preco;
    }
    return {
        Produtos: resultado,
        Soma: soma
    };
}

console.log(produtos([
 "Notebook-2500.50",
   "Celular-1200.00",
   "Fone-100.99"
]));

console.log("==============Desafio 06==============");
// 🧩 Desafio 6 — Validador de login
// Crie uma função que receba:"   ADMIN@GMAIL.COM "
// Regras: Limpar espaços(splt), Transformar em minúsculo(toLowercase), Verificar se contém "@"
// Retornar:
// {
//   email: "admin@gmail.com",
//   valido: true
// }

function validarLogin(login){
    var email = login.trim().toLowerCase();
    var valido = email.indexOf("@") !== -1;
    return {
        email: email,
        valido: valido
    };
}
console.log(validarLogin("   ADMIN@GMAIL.COM "));