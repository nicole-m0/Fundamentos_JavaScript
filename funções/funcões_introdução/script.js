function primeiraFuncao(){
    console.log("Hello World das Funções");
}

primeiraFuncao();

function dizerNome(nome){
    console.log("o nome é "+nome);
}

dizerNome("Maria");
dizerNome("Pedro");
dizerNome("José");

var nomeBancodados = "João";
dizerNome(nomeBancodados);

function soma(a, b){
    var soma = a + b;
    return soma;
}

var somaUm = soma(2, 5);
console.log(somaUm);

var somaDois = soma(5, 5);
console.log(somaDois);

console.log(soma(4, 5));