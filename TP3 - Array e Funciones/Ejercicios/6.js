/*
Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)
*/

let lado1 = parseInt(prompt('Ingresa el lado 1: '));
let lado2 = parseInt(prompt('Ingresa el lado 2: '));



const formulario = () => {

    const p = 2 * (lado1 + lado2);
    document.write(`El perimetro es ${p}`);

};

formulario();