let idade = Number(prompt('Qual sua idade?'))

let contador = 0;

do {
idade= prompt(`Coloque uma idade válida!`);
idade = Number(idade);
} while (idade <= 0 || isNaN(idade));

alert(`idade válida!`)
