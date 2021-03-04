function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
    //alert ("Obrigado por Clicar");
}

function redirecionar(){
    window.open("https://www.linkedin.com/in/rilber-alves/");
    //window.location.href = "https://www.linkedin.com/in/rilber-alves/";
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";

}

function load(){
    alert ("Página carregada");
}

function functionChange (elemento){
    console.log(elemento.value)
}

/*
-----Aula 1-----

var nome = "Rilber Rodriges"
idade = 29;
var n1 = 5;
var n2 = 3;
var frase = "Japão é o melhor time do mundo";
alert (nome + " tem " + idade + " anos!")
alert (n1 * n2);
console.log(nome);
console.log(n1 * n2);
console.log(frase.toLowerCase());
alert(frase.replace("Japão", "Brasil"));

-----Aula 2-----

var fruta = {nome:"Maçã" , cor:"Vermelha"}
console.log(fruta.nome);
alert(fruta.cor);

var lista = ["maçã" , "pêra", "laranja"];
lista.push("uva");
lista.pop("banana");


console.log(lista);
console.log(lista.toString());
console.log(lista.join(" - "))


var frutas = [{nome:"maçã", cor: "vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome)

-----Aula 3-----

var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++
};

var count;
for(count=0; count <= 5; count++){
    alert(count);
};

var d = new Date();
alert (d);
alert(d.getDay())
alert(d.getHours());
alert(d.getMinutes());

-----Aula 4-----

function soma(n1,n2){
    return n1 + n2;
}

var validar = 0
function validaIdade(idade){
    if(idade >=18){
        validar=true
    }else{
        validar = false
    }
    return validar
}

var idade = prompt ("Qual é sua idade");
validaIdade(idade)
console.log(validar);

*/
