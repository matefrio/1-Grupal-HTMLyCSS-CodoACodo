const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const nav = document.getElementById("nav-Top");
const liGale = document.getElementById("gale");
const liPerf = document.getElementById("perfil");
const menuBtnIcon = menuBtn.querySelector("i");


// Funcion botones en Nav
menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

//funcion para detectar mediaQuery menor a 760px
function esMenor768px() {
  return window.innerWidth < 768;
}


// Función para enviar una solicitud DELETE al servidor
function eliminarUsuario(id) {
    if (confirm('¿Estás seguro de eliminar este usuario?')) {
        fetch(`/admin/eliminar/${id}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (response.ok) {
                alert('Usuario eliminado correctamente');
                // Actualizar la página o hacer cualquier otra acción necesaria
            } else {
                alert('Error al eliminar el usuario');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error al eliminar el usuario');
        });
    }
}


// Funcion animaciones Scroll
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// container
ScrollReveal().reveal(".container__content h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".container__content h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".container__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".socials", {
  ...scrollRevealOption,
  delay: 1500,
});