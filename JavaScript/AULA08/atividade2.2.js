function ConverterRealParaEuro(valorReal, valorEuro) {
    return valorReal / valorEuro;
}

let valorReal = Number(prompt(`Digite um valor Real:`))
let valorEuro = 6.16;
let valorEmEuro = ConverterRealParaEuro(valorReal, valorEuro);
alert(`R$${valorReal} em Euros é €${valorEmEuro.toFixed(2)}`);