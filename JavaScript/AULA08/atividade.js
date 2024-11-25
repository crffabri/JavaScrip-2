function calculadarMedia() {
    let nota1 = Number(prompt(`Qual é sua primeira nota?`))
    let nota2 = Number(prompt(`Qual sua segunda nota?`))
    let media = (nota1 + nota2) / 2
    return `A média do aluno é: ${media}`
}

alert(calculadarMedia())