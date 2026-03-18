// exercício 01
var pessoa = {
    nome: "mônick",
    idade: 18,
    cidade: "Carapicuíba",
    estudante: true,
}

console.log("----------Perfil 01---------");
console.log("nome: "+ pessoa.nome);
console.log("idade: "+pessoa.idade);
console.log("cidade: "+pessoa.cidade);
console.log("é estudante? "+pessoa.estudante);
console.log("----------------------------");

// exercício 02
var frutas  = ["maçã", "pêra", "ameixa", "manga", "banana", "acerola"];

console.log("------Arrays de frutas-----");
console.log(frutas);
console.log("Primeira fruta: "+frutas[0]);
console.log("Segunda fruta: "+frutas[1]);
console.log("----------------------------");

// exercício 03
var telefone;
console.log("--------undefined-----------");
console.log("telefone: "+ telefone);
console.log("----------------------------");

// exercício 04
var endereco = null;
console.log("-----------null-------------");
console.log("Endereço: "+ endereco);
console.log("----------------------------");

// exercício 05
var produto = {
    nome: "Placa Mãe",
    preco: 300,
    categoria: "Peças de computador",
    estoque: 200,
}

console.log("------Produto-----");
console.log("Nome: "+produto.nome);
console.log("Preço: "+produto.preco);
console.log("Categoria: "+produto.categoria);
console.log("Estoque: "+produto.estoque);
console.log("------------------");

// exercício 06
var livros = [
    {titulo: "Livro1", autor: "Autor A", ano: 2000},
    {titulo: "Livro2", autor: "Autor B", ano: 2001},
    {titulo: "Livro3", autor: "Autor C", ano: 2002}
]


console.log("------Tabela de livros-----");
console.log("Primeiro livro: ");
console.log("Título: "+livros[0].titulo);
console.log("Autor: "+livros[0].autor);
console.log("Ano de publicação: "+livros[0].ano);
console.log("---------------------------");

console.log("segundo livro: ");
console.log("Título: "+livros[1].titulo);
console.log("Autor: "+livros[1].autor);
console.log("Ano de publicação: "+livros[1].ano);
console.log("---------------------------");

console.log("Terceiro livro: ");
console.log("Título: "+livros[2].titulo);
console.log("Autor: "+livros[2].autor);
console.log("Ano de publicação: "+livros[2].ano);
console.log("---------------------------");

// exercício 07
var personagens = [
    {nome: "Guerreiro Zendaya", nivel: 5, vidas: 100},
    {nome:"Mago de Oz", nivel: 3, vidas: 70},
    {nome: "Arqueiro", nivel: 4, vidas: 50}
]

console.log("----------Personagens----------");
console.log("personagem  1");
console.log("Nome: "+personagens[0].nome);
console.log("nível: "+personagens[0].nivel);
console.log("Vidas: "+personagens[0].vidas);

console.log("-------------------------------");
console.log("personagem  2");
console.log("Nome: "+personagens[1].nome);
console.log("nível: "+personagens[1].nivel);
console.log("Vidas: "+personagens[1].vidas);


console.log("-------------------------------");
console.log("personagem  3");
console.log("Nome: "+personagens[2].nome);
console.log("nível: "+personagens[2].nivel);
console.log("Vidas: "+personagens[2].vidas);
console.log("-------------------------------");