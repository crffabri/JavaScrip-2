// windo 
//html
//document.getElementById
let elemento01 = window.document.getElementById("tituloPrin");

elemento01.style.color = 'red';
elemento01.innerHTML = "Gracielle";

// let elemento02 = window.document.getElementsByClassName("elementoParagrafo");
// elemento02[0].style.color = "red";

let elemento02 = window.document.getElementsByClassName('elementoParagrafo');
for (let contador = 0; contador < elemento02.length; contador++) {
    // elemento02[contador].style.color = "red"
    elemento02[contador].innerHTML = 'marcelo'
}

console.log(typeof elemento02);


