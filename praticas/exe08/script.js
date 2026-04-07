console.log("=-=-=-=-=-=-=-=-=-=-=-01=-=-=-=-=-=-=-=-=-=-=-=-=");
// Desafio 01
// Se a fruta tiver mais de 5 letras → MAIÚSCULO]
// Senão → normal
// Use .length: lista[i].length
// Transformar em maiúsculo: lista[i].toUpperCase()

var lista = ["laranja", "maçã", "pera", "jaca", "melancia"];
var listaUl = document.createElement('ul');
var body = document.getElementsByTagName('body');

body[0].appendChild(listaUl);
var listaNoBody = document.getElementsByTagName('ul');
console.log(listaNoBody[0]);

for(var i = 0; i < lista.length; i++){
    var liFor = document.createElement('li');

    var texto;
    if(lista[i].length > 5){
        texto = lista[i].toUpperCase();
    }
    else{
        texto = lista[i];
    }

    var textoLi = document.createTextNode(texto);
    liFor.appendChild(textoLi);
    listaNoBody[0].appendChild(liFor);
}

console.log("=-=-=-=-=-=-=-=-=-=-=-02=-=-=-=-=-=-=-=-=-=-=-=-=");
// Se a fruta começar com a letra "m", coloca: 👉 nome da fruta
// Dica: lista[i][0]  // primeira letra

var lista = ["laranja", "maçã", "pera", "jaca", "melancia"];
var listaUl = document.createElement('ul');
var body = document.getElementsByTagName('body');

body[0].appendChild(listaUl);
var listaNoBody = document.getElementsByTagName('ul');
console.log(listaNoBody[0]);
for(var i = 0; i < lista.length; i++){
    var liFor = document.createElement('li');

    var texto = lista[i];
    if(lista[i].length > 5){
        texto = lista[i].toUpperCase();
    }
    if(lista[i][0] === "M" || lista[i][0] === "m"){
        texto = "👉 "+texto;    
    }

    var textoLi = document.createTextNode(texto);
    liFor.appendChild(textoLi);
    listaNoBody[0].appendChild(liFor);
}

console.log("=-=-=-=-=-=-=-=-=-=-=-03=-=-=-=-=-=-=-=-=-=-=-=-=");
// Se terminar com "a" → adiciona " 🍓" no final
//Dica: lista[i].endsWith("a")

var lista = ["laranja", "maçã", "pera", "jaca", "melancia"];
var listaUl = document.createElement('ul');
var body = document.getElementsByTagName('body');

body[0].appendChild(listaUl);
var listaNoBody = document.getElementsByTagName('ul');
console.log(listaNoBody[0]);
for(var i = 0; i < lista.length; i++){
    var liFor = document.createElement('li');

    var texto = lista[i];
    if(lista[i].length > 5){
        texto = lista[i].toUpperCase();
    }
    if(lista[i][0] === "M" || lista[i][0] === "m"){
        texto = "👉 "+texto;    
    }
    if(lista[i].endsWith("a") || lista[i].endsWith("ã")){
        texto = texto+"🍓";
    }
    if(lista[i].endsWith("ã")){
        texto = texto+"✨";
    }

    var textoLi = document.createTextNode(texto);
    liFor.appendChild(textoLi);
    listaNoBody[0].appendChild(liFor);
}

console.log("=-=-=-=-=-=-=-=-=-=-=-04=-=-=-=-=-=-=-=-=-=-=-=-=");
// Se a fruta tiver mais de 6 letras → adiciona "🔥"
//  Se tiver menos de 5 letras → adiciona "❄️"

var lista = ["laranja", "maçã", "pera", "jaca", "melancia"];
var listaUl = document.createElement('ul');
var body = document.getElementsByTagName('body');

body[0].appendChild(listaUl);
var listaNoBody = document.getElementsByTagName('ul');
console.log(listaNoBody[0]);
for(var i = 0; i < lista.length; i++){
    var liFor = document.createElement('li');

    var texto = lista[i];
    if(lista[i].length > 5){
        texto = lista[i].toUpperCase();
    }
    if(lista[i].length > 6){
        texto += "🔥";
    }
    if(lista[i].length < 5){
        texto += "❄️";
    }
    if(lista[i][0] === "M" || lista[i][0] === "m"){
        texto = "👉 "+texto;    
    }
    if(lista[i].endsWith("a") || lista[i].endsWith("ã")){
        texto = texto+"🍓";
    }
    if(lista[i].endsWith("ã")){
        texto = texto+"✨";
    }

    var textoLi = document.createTextNode(texto);
    liFor.appendChild(textoLi);
    listaNoBody[0].appendChild(liFor);
}
