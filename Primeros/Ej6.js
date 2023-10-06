//Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
let num1 = parseInt(prompt("Ingresa el numero 1: "));
let num2 = parseInt(prompt("Ingresa el numero 2: "));
if (num1 > num2) {
    console.log("El " + num1 + " es el numero mas grande");
}
else if(num2 > num1){
    document.write("El " + num2 + " es el numero mas grande");
}
else{
    document.write("Los dos numeros son iguales");
}