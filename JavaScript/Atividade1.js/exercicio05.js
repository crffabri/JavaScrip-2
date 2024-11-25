const numero1 = Number(prompt("Digite sua nota na 1° prova:"))
const numero2 = Number(prompt("Digite sua nota na 2° prova:"))
const media = (numero1 + numero2) / 2;
const res = media >= 6 ? "Aprovado!" : "Reprovado!";

alert(`Média do aluno: ${media}`);
alert(`Resultado do aluno: ${res}`);