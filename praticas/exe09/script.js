console.log("==============Desafio 01==============");
// 🥇 Desafio 1 — Cadastro simples
// Crie uma função que receba uma string assim: " Ana , 25 , 1.68 "
// Regras:
// Use split() para separar os dados
// Use trim() para limpar espaços
// Use parseInt() e parseFloat()
// Retorne um objeto

function cadastro(){
    var pessoaCadastro = "nome: Ana, idade: 25, altura: 1.68 ";
    console.log(pessoaCadastro.split(", "));

    var pcTrim = pessoaCadastro.trim();
    console.log(pcTrim);

    console.log(parseFloat("25"));
    console.log(parseInt(1.68));    
}
cadastro();

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

function formatarNome(){
    var nome = "   jOÃO da silva   ";

    var nomeTrim = nome.trim();
    console.log(nomeTrim);

    console.log(nome.toLowerCase());
    console.log(nome.split(", "));
    
    var nomeNovo = nome.replace("jOÃO da silva", "João da Silva");
    console.log(nomeNovo);

    var primeiroNome = nomeNovo.slice(0, 3);
    console.log(primeiroNome);
}

formatarNome();

console.log("==============Desafio 04==============");
// 🏅 Desafio 4 — Substituir palavras
// Crie uma função que receba: "Eu gosto de maçã, maçã é muito bom"
// Regras: Substitua todas as ocorrências de "maçã" por "banana"

function trocarPalavra(){
    var frase = "Eu gosto de maçã, maçã é muito bom";

    var frutaTrocada = frase.replace("maçã", "banana");
    console.log(frutaTrocada);
}

trocarPalavra();