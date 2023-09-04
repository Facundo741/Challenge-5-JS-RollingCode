//Escribe un programa que pida una frase y escriba las vocales que aparecen
let frase = prompt("Ingresa una frase:");
frase = frase.toLowerCase();
let vocales = [];
for (let i = 0; i < frase.length; i++) {
    let caracter = frase.charAt(i);
    if ('aeiou'.includes(caracter)) {
        vocales += caracter;
    }
}
if (vocales) {
    document.write(vocales);
} else {
    document.write("No hay vocales en la frase");
}

