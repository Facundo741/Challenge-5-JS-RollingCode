/*Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random 
para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. 
Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

*/

const randomNum = () => {
    return Math.floor(Math.random() * 6) + 1; 
}


const tirarDados = () => {

    let dado1 = new Array();
    let dado2 = new Array();
    let suma = 0;
    let result = new Array();

    for (let i = 1 ; i <= 50; i++){
    
        dado1.push(randomNum());
        dado2.push(randomNum());

        suma = dado1 + dado2;
        result [suma] ++ ; 
    }
    
    console.log(result);

}








