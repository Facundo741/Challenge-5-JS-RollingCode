//Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)

let num = prompt("Ingrese el numero: ");
if (num %  2 === 0) {
    document.write("El " + num + " es divisible por 2.");
}
else if (n1 % 3 === 0) {
    document.write("El " + num + " es divisible por 3.");
}
else if (n1 % 5 === 0) {
    document.write("El " + num + " es divisible por 5.");
}
else if (n1 % 7 === 0) {
    document.write("El " + num + " es divisible por 7.");
}
else{
    document.write("El " + num + " es no divisible por 2, 3, 5 ni 7.");
}

