let fibo = []; 
let n = 10; 
let a = 0; 
let b = 1; 

let i = 0;

while (i < n) {
    fibo.push(a); 
    let temp = a; 
    a = b; 
    b = temp + b; 
    i++; 
}

console.log(fibo); 