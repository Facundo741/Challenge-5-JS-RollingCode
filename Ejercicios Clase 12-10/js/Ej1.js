//Ejercicio 1: Almacenar y recuperar un valor simple

localStorage.setItem('user', 'Facundo');

const user = localStorage.getItem('user');
console.log(user);