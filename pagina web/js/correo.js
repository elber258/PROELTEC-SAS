/*document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Obtener el valor del correo electrónico ingresado
    var email = document.getElementById('email-input').value;
  
    // Enviar una solicitud HTTP al backend para enviar el correo
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'elber_258@yahoo.eshttps://mail.yahoo.com/d/folders/1?guce_referrer=aHR0cHM6Ly9sb2dpbi55YWhvby5jb20v&guce_referrer_sig=AQAAAItNPaTQpawALIhgU4F7QIXFaRce78dIWVPU9QeaOYO9_FtvMDcIKxQlA_jhhCTv4BDR5lfenpA7dxWpl2WcZnBDsRrNHWpApqRx_IRqHDq78gf4zNl928opC5Djh4z5ggq1P_kaFXf3bomE_GTZO2frqB7AfO4TH2P02WZtmT35', true); // Reemplaza 'enviar_correo.php' con la URL de tu servicio o script de envío de correo
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        alert('Correo enviado exitosamente.');
        // Restablecer el formulario o hacer cualquier otra acción después de enviar el correo
      }
    };
    xhr.send('email=' + encodeURIComponent(email)); // Envía el correo electrónico como parámetro en la solicitud
  
    // Restablecer el formulario o hacer cualquier otra acción mientras se envía el correo
    document.getElementById('contact-form').reset();
  });*/
  
  
  /*function enviarCorreo() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;
    
    var destinatario = "elber_258@yahoo.es"; // Reemplaza con tu dirección de correo electrónico
    var asunto = "Nuevo mensaje del formulario de contacto";
    var cuerpo = "Nombre: " + nombre + "\nEmail: " + email + "\nMensaje: " + mensaje;
    
    var mailtoURL = "mailto:" + destinatario + "?subject=" + encodeURIComponent(asunto) + "&body=" + encodeURIComponent(cuerpo);
    
    window.location.href = mailtoURL;
  }*/
  
  
  