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
    //Before inserta el elemento antes de la lista
   // listas.item(0).before(element);
   // prepend inserta elemento al principio de la lista
   // listas.irem(0).prepend(element2);

     // append inserta el elemento al final de la lista
    // listas.item(0).append(element);

    // after inserta el elemento despues de la lista
    //listas.irem(0).after(element2);
    
    // afterbegin inserta el elemento al principio de la lista
    //lista.item(1).insertAdjacentElement("afterbegin", element);

    //beforeend inserta el elemento al final de la lista
   // lista.item(1).insertAdjacentElement("beforeend", element2);

    lista.item(1).insertAdjacentHTML("beforeenbegin",
        `<li class="list-group-item">Before Begin item</li>`
     );

     lista.item(1).insertAdjacentHTML("afterend",
        `<li class="list-group-item">After Enditem</li>`
     );

     lista.item(1).insertAdjacentHTML("afterbegin",
        `<li class="list-group-item">After Begin item</li>`
     );

     lista.item(1).insertAdjacentHTML("beforeend",
        `<li class="list-group-item">Before End item</li>`
     );



});
