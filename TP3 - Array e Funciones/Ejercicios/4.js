/* Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.
*/



const numero = () => {
    let num = parseInt(prompt("Ingrese el numero: "));

    if (num % 2 === 0) {
        document.write(`El numero  ${num} es par ` );
    }
    else {
        document.write(`El numero  ${num} no es par ` );
    }
};

numero ();

