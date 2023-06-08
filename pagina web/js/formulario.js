// Obtener referencia a los elementos del DOM
const form = document.getElementById('contact-form');
const nameInput = document.getElementById('nombre');
const emailInput = document.getElementById('correo');
const messageInput = document.getElementById('mensaje');

// Función para validar el formulario de contacto
function validateForm() {
  // Obtener los valores de los campos de entrada
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  // Validar que todos los campos estén completos
  if (name === '' || email === '' || message === '') {
    alert('Por favor complete todos los campos.');
    return false;
  }

  // Validar el formato del correo electrónico
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Por favor ingrese un correo electrónico válido.');
    return false;
  }

  // Aquí puedes agregar más validaciones según tus necesidades

  // Si todas las validaciones pasan, se puede enviar el formulario
  alert('Formulario enviado exitosamente.');
  return true;
}

// Agregar evento de envío al formulario de contacto
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Evitar el envío del formulario por defecto
  validateForm();
});
