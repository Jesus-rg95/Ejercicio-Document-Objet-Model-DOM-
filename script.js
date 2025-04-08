let encabezado1 = document.getElementById("encabezado1");
let encabezado2 = document.getElementById("encabezado2");
let lista = document.getElementsByTagName("ul");
let elementos = document.getElementsByClassName("list-group-item");
let otroElemento = document.querySelector("ul>li");
let otrosElementos = document.querySelectorAll("ul>li");
let btnMostrar = document.getElementById("btnMostrar");

let contador=0;

console.log(lista.length);//2
//console.log(listas[0]);

console.log(lista.item(1));

console.log(elementos.item(2));

console.log(elementos.length);//10


function modifica(){
    encabezado2.innerHTML += "<em>Ejercicio</em>DOM";
    encabezado1.innerText = ++contador;

}

// console.log(encabezado1.innerText);

btnMostrar.addEventListener("click", function(event){
    event.preventDefault(); //no hagas lo que haces por defecto
    console.log("Botón btnModificar presionado");

    let element = document.createElement("li");
    element.innerText= "Another item";// <li> Anoter item </li>
    element.classList.add("list-group-item");
    
    let element2 = element.cloneNode(true);

   // listas.item(0).before(element);
   // listas.irem(0).prepend(element2);

    listas.item(0).append(element);
    listas.irem(0).after(element2);



});
