function calculadarMedia() {

    let peso = parseFloat(prompt(`Digite seu peso:`));
    let altura = parseFloat(prompt(`Digite sua altura:`));
    let imc = peso / (altura * altura);

    if (imc < 16.9) {
        alert("Você esta muito abaixo do peso.");
    }
    else if (imc < 18.4) {
        alert("Abaixo do peso.");
    }
    else if (imc < 24.9) {
        alert("Seu peso está normal.");
    }
    else if (Imc < 29.9) {
        alert("Você está acima do peso.");
    }
    else if (Imc < 34.9) {
        alert("Obesidade grau I.");
    }
    else if (imc < 40) {
        alert("Obesidade grau II.");
    }
    else {
        alert("Obesidade grau III.")
    }
}
calculadarMedia()


