// let elemento02 = window.document.getElementsByClassName('souEu');
// for (let contador = 0; contador < elemento02.length; contador++) {   
// }
// elemento02[contador].style.color = "red"

let elementoH2 = window.document.getElementsByClassName('souEu');
let elementoH1 = window.document.getElementsByClassName('souEla');


for (let contador = 0; contador < elementoH2.length; contador++) {
    elementoH2[contador].style.background = "pink"

    contador[elementoH2].innerHTML = "Amém";

    contador[elementoH1].innerHTML = 'É o Flamengo';
}
console.log(typeof elementoH2);
