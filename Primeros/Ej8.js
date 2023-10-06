//Escribe un programa que pida un número y diga si es divisible por 2
let num = prompt("Ingresa un numero: ");
if (num % 2 == 0) {
    document.write("El " + num + " es divisible por 2.");
}
else {
    document.write("El " + num + " es no divisible por 2.");
}