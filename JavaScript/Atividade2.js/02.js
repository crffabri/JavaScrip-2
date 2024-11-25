function verificarIdade() {
    const idade = parseInt(prompt("Digite sua idade, por favor:"));
    if (idade >= 18) {
        alert("Você já pode dirigir");
    } else {
        alert("Você ainda não pode dirigir");
    }
}
verificarIdade();