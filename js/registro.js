// Hemos omitido los acentos en los comentarios por compatibilidad
function validar(formulario) {

  if (formulario.nombres.value.trim().length == 0) {
    alert("Nombre obligatorio");
    return false;
  }

  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(formulario.email.value)) {
    alert("Email inválido");
    return false;
  }

  if (formulario.contrasena.value.trim().length == 0) {
    alert("Contraseña obligatorio");
    return false;
  }
  if (formulario.contrasena.value.trim().length < 7) {
    alert("Contraseña debe ser mas de 7 caracteres");
    return false;
  }


  if (formulario.contrasena.value != formulario.confirmacion.value) {
    alert("Confirmación no coincide");
    return false;
  }

  if (formulario.tipo.value == "-1") {
    alert("Seleccione un tipo de usuario");
    return false;
  }

  if (!formulario.acepto.checked) {
    document.getElementById("errorAcepto").innerHTML ="Debe seleccionar la casilla para continuar"
    return false;
  }

  return false;
}
