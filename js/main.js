///////////////////////////Elementos Dom/////////////////////////////////

// -----------------Nav----------------//
// Botones para Nav en deshuso por css con MediaQuery

// const menuBtn = document.getElementById("menu-btn");
// const navLinks = document.getElementById("nav-links");
// const menuBtnIcon = menuBtn.querySelector("i");


// -----------------Tienda----------------//
// Botones para cards del inicio de Tienda

const btnTienda = document.querySelectorAll(".nav__tienda");

// Cards del Expositor de inicio

const navExpo = document.querySelectorAll(".dropdown-item");
const simpleCard = document.querySelectorAll(".card");
const inicioCard = document.querySelectorAll(".ini__card");

// Containers de Expositor

const containerCard = document.querySelectorAll(".container__card");
const expIniContainer = document.getElementById("exp-ini");
const expVarContainer = document.getElementById("exp-var");
const expCombContainer = document.getElementById("exp-comb");
const expSabContainer = document.getElementById("exp-sab");
const expInstruContainer = document.getElementById("exp-instru");
const expProduContainer = document.getElementById("exp-produ");



//////////////////////////////Funciones////////////////////////////////////


// Funcion botones en Nav en deshuso por css con MediaQuery 

// menuBtn.addEventListener("click", (e) => {
//   navLinks.classList.toggle("open");

//   const isOpen = navLinks.classList.contains("open");
//   menuBtnIcon.setAttribute(
//     "class",
//     isOpen ? "ri-close-line" : "ri-menu-3-line"
//   );
// });

// navLinks.addEventListener("click", (e) => {
//   navLinks.classList.remove("open");
//   menuBtnIcon.setAttribute("class", "ri-menu-3-line");
// });


// Funciones de Navegación con Cards dentro del Expositor

inicioCard.forEach(ini => {
  ini.addEventListener("click", (e) => {
    switch (ini.id) {
      case "ini-var":
        containerCard.forEach(container => { container.style.display = "none"; });
        expVarContainer.style.display = "flex";
        console.log("Variedades");
        break;
      case "ini-comb":
        containerCard.forEach(container => { container.style.display = "none"; });
        expCombContainer.style.display = "flex";
        console.log("Combinaciones");
        break;
      case "ini-sab":
        containerCard.forEach(container => { container.style.display = "none"; });
        expSabContainer.style.display = "flex";
        console.log("Sabores");
        break;
      case "ini-instru":
        containerCard.forEach(container => { container.style.display = "none"; });
        expInstruContainer.style.display = "flex";
        console.log("Instrucciones");
        break;
      default:
        console.log("ID no reconocido");
    }
  });
});

simpleCard.forEach(card => {
  card.addEventListener("click", (e) => {
    if (!card.classList.contains("ini__card")) {
      containerCard.forEach(container => { container.style.display = "none"; });
      expProduContainer.style.display = "flex";
      console.log("Productos");
    } 
  });
});

navExpo.forEach(nav => {
  nav.addEventListener("click", (e) => {
    containerCard.forEach(container => { container.style.display = "none"; });
    expProduContainer.style.display = "flex";
    console.log("Productos");
  });
});

// Funciones de Navegación a Expositor desde Index con Container selecto display flex

function VarTienda() {
  const paramTienda = "var"
  window.location.href = `tienda.html?parametro=${paramTienda}`;
}

function CombTienda() {
  const paramTienda = "comb"
  window.location.href = `tienda.html?parametro=${paramTienda}`;
}

function BarTienda() {
   const paramTienda = "bar"
  window.location.href = `tienda.html?parametro=${paramTienda}`;
}

function InstruTienda() {
   const paramTienda = "instru"
  window.location.href = `tienda.html?parametro=${paramTienda}`;
}

window.onload = function() {
  const urlParams = new URLSearchParams(window.location.search);
  const parametro = urlParams.get('parametro');

  switch (parametro) {
    case "var":
      containerCard.forEach(container => { container.style.display = "none"; });
      expVarContainer.style.display = "flex";
      console.log("Variedades");
      break;
    case "comb":
      containerCard.forEach(container => { container.style.display = "none"; });
      expCombContainer.style.display = "flex";
      console.log("Combinaciones");
      break;
    case "bar":
      containerCard.forEach(container => { container.style.display = "none"; });
      expSabContainer.style.display = "flex";
      console.log("Sabores");
      break;
    case "instru":
      containerCard.forEach(container => { container.style.display = "none"; });
      expInstruContainer.style.display = "flex";
      console.log("Instrucciones");
      break;
    default:
      console.log("ID no reconocido");
  }
};

//funcion para detectar mediaQuery menor a 760px

// function esMenor768px() { return window.innerWidth < 768; }


// Función para enviar una solicitud DELETE al servidor

function eliminarUsuario(id) {
  if (confirm("¿Estás seguro de eliminar este usuario?")) {
    fetch(`/admin/eliminar/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          alert("Usuario eliminado correctamente");
          // Actualizar la página o hacer cualquier otra acción necesaria
        } else {
          alert("Error al eliminar el usuario");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error al eliminar el usuario");
      });
  }
}


// Funcion animaciones Scroll

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".socials", {
  ...scrollRevealOption,
  delay: 1000,
});


// Validar inputs del form

document
  .querySelector(".contact-form")
  .addEventListener("submit", function (e) {
    var form = e.target;
    var nombre = form.nombre.value.trim();
    var telefono = form.telefono.value.trim();
    var email = form.email.value.trim();
    var contactPreference = form.contactPreference.value;
    var reason = form.reason.value;
    var mensaje = form.mensaje.value.trim();
    var terms = form.terms.checked;

    if (
      !nombre ||
      !telefono ||
      !email ||
      !contactPreference ||
      !reason ||
      !mensaje ||
      !terms
    ) {
      alert("Todos los campos son obligatorios");
      e.preventDefault();
    }
  });