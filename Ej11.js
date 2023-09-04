//Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)

let num = parseInt(prompt("Ingresa un número:"));
let divisores = [];

if (num % 2 === 0) {
    divisores.push(2);
}
if (num % 3 === 0) {
    divisores.push(3);
}
if (num % 5 === 0) {
    divisores.push(5);
}
if (num % 7 === 0) {
    divisores.push(7);
}

if (divisores.length > 0) {
    document.write(`${num} es divisible por los siguientes números: ${divisores.join(', ')}.`);
} else {
    document.write(`${num} no es divisible por 2, 3, 5 ni 7.`);
}




