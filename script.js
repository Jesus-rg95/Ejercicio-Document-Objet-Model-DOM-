let btnMostrar = document.getElementById("btnMostar");
let encabezado1 = document.getElementById("encabezado1");
let encabezado2= document.getElementById("encabezado2");
let listas = document.getElementsByClassName("ul");

let elementos = document.getElementsByClassName("list-group-item");

let otroElemento = document.querySelector("ul>li");//primero que encuentra
console.log("otroElemento:", otroElemento);

let otrosElementos =document.querySelectorAll("ul>li");//todos


console.log(listas.length);//2
//console.log(listas[0]);

console.log(listas.item(1));

console.log(elementos.item(2));

console.log(elementos.length);//10

let contador=0;
function modifica(){
    encabezado2.innerHTML += "<em>Ejercicio</em>DOM";
    encabezado1.innerText = ++contador;

}

// console.log(encabezado1.innerText);

btnMostrar.addEventListener("click", function(event){
    event.preventDefault(); /// no hagas lo que haces por defecto

});
