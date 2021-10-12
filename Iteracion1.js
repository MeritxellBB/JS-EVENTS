/*Iteración 1: Creando Events
Dado el siguiente HTML:
1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
evento click que ejecute un console log con la información del evento del click*/

let myButton = document.createElement("button");
myButton.innerHTML = "Haz click aqui";
document.body.appendChild(myButton);
myButton.setAttribute("id","btnToClick");
myButton.addEventListener("click", function(event){console.log(event)}); 

/*1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.*/

let myInput = document.querySelector(".focus");
myInput.addEventListener("focus", function(event){console.log(event)}); 


/*1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.*/

let myValueInput = document.querySelector(".value");
myValueInput.addEventListener("input", function(event){console.log(event)}); 