/*
Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista los doce nombres del arreglo.
*/

let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

document.write("<h1>Lista de Meses</h1>");
document.write("<ul>");


for (let i = 0; i <= 11 ; i++) {
    document.write('<li>' + meses[i] + '</li>');
}