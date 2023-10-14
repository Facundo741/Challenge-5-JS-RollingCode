//Ejercicio 3: Uso de eventos para actualizar la interfaz de usuario. Este ejercicio incluye una página HTML con un campo de entrada, un botón y un párrafo. Al hacer clic en el botón, se guarda el nombre ingresado en localStorage y se actualiza la interfaz.

const guardar = document.getElementById("guardar");

guardar.addEventListener("click", (e) => {

    const nombre = document.getElementById("nombre").value;
    e.preventDefault();
    //alert(nombre);
    localStorage.setItem("nombre", nombre);
    console.log(nombre);
    actualizar(localStorage.getItem("nombre"))

});

const actualizar = (data) => {
    const resultado = document.getElementById("nombreResultado");
    resultado.innerHTML = data;
};


