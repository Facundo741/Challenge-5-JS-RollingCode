/*Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
*/



const verficarTexto = () =>  {

    let text = prompt ('Ingrese el texto: ');
    
    if (text === text.toLowerCase()) {
        document.write ('La cadena de texto contiene MINUSCULAS');  
    }
    else if (text === text.toUpperCase()) {
        document.write ('La cadena de texto contiene MAYUSCULAS');
    }
    else {
        document.write('La cadena de texto contiene una mezcla de mayúsculas y minúsculas');
    }
}

verficarTexto();