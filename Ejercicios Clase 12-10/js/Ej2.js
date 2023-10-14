//Ejercicio 2: Almacenar y recuperar un objeto JSON

const objeto = {
    nombre : 'Juan',
    edad : '22',
};


const objetoJson = JSON.stringify(objeto);
console.log(objetoJson);
localStorage.setItem('objetoJson', objetoJson);


const objRecuper = JSON.parse(localStorage.getItem('objetoJson'));

console.log(objRecuper);

