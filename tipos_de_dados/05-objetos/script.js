var obj = {
    nome: "Zaza",
    idade: 29,
    profissao: "cozinheira",
    estaTrabalhando: true,
}

console.log(obj);
console.log(typeof obj);

console.log(obj.nome);
console.log(obj.idade);
console.log(obj.profissao);
console.log(obj.estaTrabalhando);

console.log("O meu nome é: " + obj.nome);

obj.nome = "Maria";
console.log(obj.nome);

obj.graduacao = true;
console.log(obj);