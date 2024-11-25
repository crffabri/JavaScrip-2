
function jogar() {

    const numeroSorteado = 3;
    let numeroChutado = 5;

    while (numeroChutado !== numeroSorteado) {

        numeroChutado = parseInt(prompt("Digite um número de 0 a 10:"));


        if (isNaN(numeroChutado) || numeroChutado < 0 || numeroChutado > 10) {
            alert("Por favor, digite um número válido entre 0 e 10.");
            continue;
        }

        if (numeroChutado === numeroSorteado) {
            alert("Parabéns, você acertou!");
        } else {
            alert("Tente novamente");
        }
    }
}

jogar();
