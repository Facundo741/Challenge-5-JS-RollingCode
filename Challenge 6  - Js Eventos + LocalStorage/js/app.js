  // Inicializar el array de usuarios desde localStorage
  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  document.getElementById("guardarDatos").addEventListener("click", function () {
      // Obtener los valores del formulario
      const nombre = document.getElementById("nombre").value;
      const apellido = document.getElementById("apellido").value;
      const fechaNacimiento = document.getElementById("f_Nacimiento").value;
      const email = document.getElementById("email").value;
      const genero = document.getElementById("genero").value;
      const foto = document.getElementById("foto").value;

      // Validar que los campos no estén vacíos
      if (!nombre || !apellido || !fechaNacimiento || !email || !genero || !foto) {
          alert("Por favor, complete todos los campos.");
          return;
      }

      // Crear un objeto con los datos del usuario
      const usuario = {
          nombre,
          apellido,
          fechaNacimiento,
          email,
          genero,
          foto,
      };

      // Agregar el usuario al array de usuarios
      usuarios.push(usuario);

      // Guardar el array de usuarios en localStorage
      localStorage.setItem("usuarios", JSON.stringify(usuarios));

      // Mostrar las tarjetas de todos los usuarios
      mostrarUsuarios();
  });

  function mostrarUsuarios() {
      const userCards = document.getElementById("userCards");
      userCards.innerHTML = ''; // Limpiar las tarjetas existentes

      // Recorrer el array de usuarios y mostrar una tarjeta por cada uno
      usuarios.map((usuario, i) => {
          const card = document.createElement("div");
          card.className = "user-card";

          // Crear una tarjeta con la información del usuario
          card.innerHTML = `
            
              <h3>${usuario.nombre} ${usuario.apellido}</h3>
              <p><strong>Fecha de Nacimiento:</strong> ${usuario.f_Nacimiento}</p>
              <p><strong>Email:</strong> ${usuario.email}</p>
              <p><strong>Género:</strong> ${usuario.genero}</p>
              <img class= "img-fluid"src="${usuario.foto}" alt="Foto de perfil">
            
          `;

          userCards.appendChild(card);
      });
  }

  // Mostrar las tarjetas de los usuarios almacenados en localStorage al cargar la página
  mostrarUsuarios();
