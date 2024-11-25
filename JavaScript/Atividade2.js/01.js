function conferirIdade() {
    let idade = parseInt(prompt("Por favor, insira sua idade!"));

    if (isNaN(idade)) {
        alert("Por favor, insira uma idade válida.");
        return;
    }

    if (idade < 18) {
        alert("Você é menor de idade.");
    } else if (idade >= 18 && idade < 60) {
        alert("Você é maior de idade!");
    } else {
        alert("Você é idoso.");
    }
}
conferirIdade();