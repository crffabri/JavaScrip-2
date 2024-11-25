function isPrime(num) {
    if (num <= 1) return false; // Números menores ou iguais a 1 não são primos
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // Se for divisível por i, não é primo
    }
    return true; // Se não for divisível por nenhum número, é primo
}

for (let i = 1; i <= 20; i++) {
    if (isPrime(i)) {
        console.log(i); // Imprime o número primo
    }
}