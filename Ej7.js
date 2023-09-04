//Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
let num1 = parseInt(prompt("Ingresa el numero 1: "));
let num2 = parseInt(prompt("Ingresa el numero 2: "));
let num3 = parseInt(prompt("Ingresa el numero 3: "));
if ((num1 > num2) && (num1 > num3)) {
    document.write("El " + num1 + " es el numero mas grande");
}
else if((num2 > num1) && (num2 > num3)) {
    document.write("El " + num2 + " es el numero mas grande");
}
else if((num3 > num1) && (num3 > num2)) {
    document.write("El " + num3 + " es el numero mas grande");
}
else{
    document.write("Los 3 numeros ingresados son iguales" );
}