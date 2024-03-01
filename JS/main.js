function mostrarLogin() {
    var modal = document.createElement("div");
    modal.className = "modal";
    modal.innerHTML = `
        <div class="modal-contenido">
        <button onclick="cerrarModal()" class="cerrar" ><i class="fa-solid fa-circle-xmark"></i></button>
            <h2>Iniciar Sesión</h2>
            <form class="formulario">
                <label for="correoLogin">Correo Electrónico:</label>
                <input type="email" id="correoLogin" required placeholder="Ingresa Tu Correo Electronico">

                <label for="contrasenaLogin">Contraseña:</label>
                <input type="password" id="contrasenaLogin" required placeholder="Ingresa Tu Contraseña" >
                <p><a href="">¿Has olvidado la contraseña?</a></p>

                <button type="button" onclick="validarLogin()" class="boton">Entrar</button>
            </form>
            <p>¿No tienes una cuenta? <a href="#" onclick="mostrarCrearCuenta()">Crear cuenta</a></p>
        </div>
    `;
    document.body.appendChild(modal);
}
function mostrarCrearCuenta() {
    var modal = document.createElement("div");
    modal.className = "modal";
    modal.innerHTML = `
        <div class="modal-contenido">
        <button onclick="cerrarModal()" class="cerrar" ><i class="fa-solid fa-circle-xmark"></i></button>

            <h2>Crear Cuenta</h2>
            <form class="formulario">
                <label for="nombres">Nombres:</label>
                <input type="text" id="nombres" required>
                <label for="apellidos">Apellidos:</label>
                <input type="text" id="apellidos" required>
                <label for="tipoCedula">Tipo de Cédula:</label>
                <select id="tipoCedula" required>
                    <option value="tarjeta">Tarjeta de Identidad</option>
                    <option value="cedula">Cédula de Ciudadanía</option>
                    <option value="extranjeria">Cédula de Extranjería</option>
                </select>
                <label for="numeroCedula">Número de Cédula:</label>
                <input type="text" id="numeroCedula" required>

                <label for="fechaNacimiento">Fecha de Nacimiento:</label>
                <input type="date" id="fechaNacimiento" required>

                <label for="direccion">Dirección:</label>
                <input type="text" id="direccion" required>

                <label for="correo">Correo Electrónico:</label>
                <input type="email" id="correo" required>

                <label for="contrasena">Contraseña:</label>
                <input type="password" id="contrasena" required>

                <label for="confirmarContrasena">Confirmar Contraseña:</label>
                <input type="password" id="confirmarContrasena" required>

                <button type="submit" onclick="validarRegistro()">Crear Cuenta</button>
            </form>
            <p>¿Ya tienes una cuenta? <a href="#" onclick="mostrarLogin()">Iniciar sesión</a></p>
        </div>
    `;
    document.body.appendChild(modal);
}

function cerrarModal() {
    var modal = document.querySelector(".modal");
    if (modal) {
        modal.remove();
    }
}

function validarLogin() {
    // ... (tu código existente)
}

function validarRegistro() {
    var nombres = document.getElementById("nombres").value;
    var apellidos = document.getElementById("apellidos").value;
    var tipoCedula = document.getElementById("tipoCedula").value;
    var numeroCedula = document.getElementById("numeroCedula").value;
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;
    var direccion = document.getElementById("direccion").value;
    var correo = document.getElementById("correo").value;
    var contrasena = document.getElementById("contrasena").value;
    var confirmarContrasena = document.getElementById(
        "confirmarContrasena"
    ).value;

    if (
        !nombres ||
        !apellidos ||
        !tipoCedula ||
        !numeroCedula ||
        !fechaNacimiento ||
        !direccion ||
        !correo ||
        !contrasena ||
        !confirmarContrasena
    ) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    if (contrasena !== confirmarContrasena) {
        alert("Las contraseñas no coinciden");
        return;
    }
}

// funcion mi carrito

document.addEventListener("DOMContentLoaded", function () {
    var carritoContenedor = document.querySelector(".carrito-contenedor");
    var carritoIcono = document.querySelector(".btn-carrito");

    carritoIcono.addEventListener("click", function (event) {
        event.stopPropagation();
        carritoContenedor.classList.toggle("carrito-abierto");
    });

    document.addEventListener("click", function () {
        carritoContenedor.classList.remove("carrito-abierto");
    });

    carritoContenedor.addEventListener("click", function (event) {
        event.stopPropagation();
    });
});

function comprarProductos() {
    // Implementa la lógica de compra
    alert("Compra realizada con éxito. ¡Gracias por tu compra!");
}

function eliminarProducto(idProducto) {
    // Implementa la lógica para eliminar el producto con el ID proporcionado
    alert("Producto eliminado del carrito");
}
function cerrarCarritoExterno(event) {
    var carritoContenedor = document.querySelector(".carrito-contenedor");
    if (!carritoContenedor.contains(event.target)) {
        carritoContenedor.classList.remove("carrito-abierto");
        document.removeEventListener("click", cerrarCarritoExterno);
    }
}
// menu oculto
function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";

    if (menu.style.display === "block") {
        // Agrega un evento de clic al documento para cerrar el menú al hacer clic fuera de él
        document.addEventListener("click", cerrarMenuExterno);
    } else {
        // Elimina el evento de clic cuando el menú está cerrado
        document.removeEventListener("click", cerrarMenuExterno);
    }
}

function ocultarMenu() {
    var menu = document.getElementById("menu");
    menu.style.display = "none";
}

function cerrarMenuExterno(event) {
    var menu = document.getElementById("menu");
    var icono = document.querySelector(".fa-bars-staggered");

    // Cierra el menú si el clic no proviene del menú ni del icono
    if (!menu.contains(event.target) && !icono.contains(event.target)) {
        ocultarMenu();
    }
}
function ocultarMenu() {
    var menu = document.getElementById("menu");
    menu.style.display = "none";
}

function cerrarMenuExterno(event) {
    var menu = document.getElementById("menu");
    var icono = document.querySelector(".fa-bars-staggered");

    // Cierra el menú si el clic no proviene del menú ni del icono
    if (!menu.contains(event.target) && !icono.contains(event.target)) {
        ocultarMenu();
    }
}

// slider de busqueda
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
let currentIndex = 0;

const changeSlide = () => {
    slides[currentIndex].classList.remove("active");

    currentIndex++;

    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }

    slides[currentIndex].classList.add("active");
};

setInterval(changeSlide, 5000);

// seccion de producto -----------------------------------------------------------------------------------
// seleccionar metodo de envio
document.addEventListener("DOMContentLoaded", function () {
    var opcionesEnvio = document.querySelectorAll('.envio input[type="radio"]');

    for (var i = 0; i < opcionesEnvio.length; i++) {
      opcionesEnvio[i].addEventListener("click", function () {
        for (var j = 0; j < opcionesEnvio.length; j++) {
          if (opcionesEnvio[j] !== this) {
            opcionesEnvio[j].checked = false;
          }
        }
      });
    }
  });
  function incrementarCantidad() {
    var cantidadInput = document.getElementById('cantidad');
    var cantidad = parseInt(cantidadInput.value);
    cantidadInput.value = cantidad + 1;
  }

  function decrementarCantidad() {
    var cantidadInput = document.getElementById('cantidad');
    var cantidad = parseInt(cantidadInput.value);
    if (cantidad > 1) {
      cantidadInput.value = cantidad - 1;
    }
  }
  function comprar() {
    var opcionesEnvio = document.querySelectorAll('.envio input[type="radio"]');
    var formularioCompra = document.getElementById('formularioCompra');
    var modalCompra = document.getElementById('modalCompra');

    var envioSeleccionado = false;
    for (var i = 0; i < opcionesEnvio.length; i++) {
      if (opcionesEnvio[i].checked) {
        envioSeleccionado = true;
        break;
      }
    }

    if (envioSeleccionado) {
      // Muestra el modal de compra
      modalCompra.style.display = 'block';
    } else {
      alert('Selecciona una opción de envío antes de comprar.');
    }
  }

  function finalizarCompra() {
    // Aquí podrías agregar lógica para procesar la compra
    cerrarModalCompra();
    alert('Compra finalizada. ¡Gracias por tu compra!');
  }

  function agregarAlCarrito() {
    var opcionesEnvio = document.querySelectorAll('.envio input[type="radio"]');
    var modalCarrito = document.getElementById('mensajeCarrito');

    var envioSeleccionado = false;
    for (var i = 0; i < opcionesEnvio.length; i++) {
      if (opcionesEnvio[i].checked) {
        envioSeleccionado = true;
        break;
      }
    }

    if (envioSeleccionado) {
      // Muestra el modal del carrito
      modalCarrito.style.display = 'block';
      // Oculta el formulario de compra si estaba visible
      document.getElementById('formularioCompra').classList.add('oculto');
    } else {
      alert('Selecciona una opción de envío antes de añadir al carrito.');
    }
  }

  function cerrarModalCompra() {
    document.getElementById('modalCompra').style.display = 'none';
  }

  function cerrarModalCarrito() {
    document.getElementById('mensajeCarrito').style.display = 'none';
  }

  // Cierra el modal si se hace clic fuera de él
  window.onclick = function (event) {
    var modalCompra = document.getElementById('modalCompra');
    var modalCarrito = document.getElementById('mensajeCarrito');
    if (event.target == modalCompra) {
      modalCompra.style.display = 'none';
    } else if (event.target == modalCarrito) {
      modalCarrito.style.display = 'none';
    }
  };
