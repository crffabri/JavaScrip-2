//media aluno;
//nota01 e nota02;
// function calculadarMedia(nota1, nota2) {
//     let media = (nota1 + nota2) / 2
//     console.log(`Sua média é ${media}`);
// }

// function calculadarMedia(nota1 =0, nota2=0) {
//     let media = (nota1 + nota2) / 2
//     console.log(`Sua média é ${media}`);
// }

// function calculadarMedia(nota1 = 0, nota2 = 0) {
//     let media = (nota1 + nota2) / 2
//     return media
// }

//  console.log(`A média do aluno é: ${calculadarMedia(9, 8).toFixed(2)}`);

function calculadarMedia(nota1 = 0, nota2 = 0) {
    let media = (nota1 + nota2) / 2
    return `A média do aluno é: ${media}`
}

console.log(calculadarMedia(6,9));

// calculadarMedia(10,8)

// console.log(null);
// console.log(typeof NaN);