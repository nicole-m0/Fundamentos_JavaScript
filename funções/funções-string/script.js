// length
// quantidade de caracteres

var nome = "Lucas";
console.log(nome.length);

var obj = "bola";
console.log(obj.length);

// indexOf
// mostra o índuce de tal caractere ou string

console.log(nome[2]);

var frase = "O rato roeu a roupa do rei de roma";
console.log(frase.indexOf("roeu"));

// slice
// remove uma parte da frase pelo índice
var roeu = frase.slice(7, 11);
console.log(roeu);

// replace
// troca palavra da string

var novaFrase = frase.replace("roeu", "Destruiu");
console.log(novaFrase);


// PARTE 2 -=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// toLowercase e toUpperCase

var frase = "Esta é a frase que vamos manipular";
console.log(frase.toLocaleLowerCase());

var frasecaixaAlta = frase.toLocaleUpperCase();
console.log(frasecaixaAlta)
console.log(frasecaixaAlta.toLocaleLowerCase());

// trim
// serve para dados do usuário em um formulário
// exemplo: nome com muitos espaçoes...ele apara os epaços.

var nome = "       Matheus";
var nomeTrim = nome.trim();

console.log(nome);
console.log(nomeTrim);

// split
// tranforma texto em array e vice versa

console.log(frase.split(" "));
var tags = "PHP, Javascript, HTML, CSS";

console.log(tags.split(", "));

// lastIndexOf
// contrário do indexOf
var fraseDois = "Eu quero a última palavra desta frase de teste";
console.log(fraseDois.lastIndexOf("teste"));