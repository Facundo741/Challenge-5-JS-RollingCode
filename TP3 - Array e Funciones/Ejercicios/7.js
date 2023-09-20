/* 
Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.
*/

function mostrarTablaMultiplicar() {
    const numero = parseInt(prompt('Ingrese un número para ver su tabla de multiplicar:'));

    
    if (isNaN(numero)) {
        alert('Por favor, ingrese un número válido.');
        return;
    }

    document.write(`<h2>Tabla de multiplicar del ${numero}:</h2>`);
    document.write('<ul>');
    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        document.write(`<li>${numero} x ${i} = ${resultado}</li>`);
    }
    document.write('</ul>');
}

mostrarTablaMultiplicar();
