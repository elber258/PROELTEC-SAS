// Obtener referencia a los elementos del DOM
const ctaButton = document.querySelector('.cta-button');
const navLinks = document.querySelectorAll('nav ul li a');

// Función para desplazarse suavemente a una sección al hacer clic en el enlace del menú
function scrollToSection(event) {
  event.preventDefault();

  const targetSection = document.querySelector(this.getAttribute('href'));
  const offsetTop = targetSection.offsetTop;

  window.scrollTo({
    top: offsetTop,
    behavior: 'smooth'
  });
}

// Agregar eventos de desplazamiento suave a los enlaces del menú
navLinks.forEach((link) => {
  link.addEventListener('click', scrollToSection);
});

// Función para mostrar u ocultar el formulario de contacto al hacer clic en el botón "Solicitar Presupuesto"
function toggleContactForm() {
  const contactForm = document.getElementById('contacto');
  contactForm.classList.toggle('hidden');
}

// Agregar evento de clic al botón "Solicitar Presupuesto"
ctaButton.addEventListener('click', toggleContactForm);


