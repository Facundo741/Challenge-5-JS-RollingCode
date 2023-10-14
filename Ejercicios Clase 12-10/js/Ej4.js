//Ejercicio 4: Manejar múltiples valores y eventos con objetos.Este ejercicio incluye un formulario con dos campos de entrada (nombre y edad), un botón para guardar los datos y un párrafo para mostrar los datos guardados. Al hacer clic en el botón, se almacenan los datos en localStorage y se actualiza la interfaz.

const guardar = document.getElementById("guardar");


guardar.addEventListener ("click", (e) => {

    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    
    e.preventDefault();
    
    localStorage.setItem("nombre",JSON.stringify(nombre));
    localStorage.setItem("edad",JSON.stringify(edad));

    actualizar(localStorage.getItem("nombre"))
    actualizar(localStorage.getItem("edad"))


});

const actualizar  = (data) => {
    const resultadoName = document.getElementById("name");
    const resultadoAge = document.getElementById("age");

    const nombre = JSON.parse(localStorage.getItem("nombre")); 
    const edad = JSON.parse(localStorage.getItem("edad")); 

    resultadoName.innerHTML = `Nombre: ${nombre}`;
    resultadoAge.innerHTML = `Edad: ${edad}`;
};