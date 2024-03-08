document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const enviarBtn = document.querySelector(".btn-primary");

  enviarBtn.addEventListener("click", function (event) {
    event.preventDefault();
    const fechaingreso = document.getElementById("fecha-ingreso");
    const nombre = document.getElementById("nombre");
    const apellidos = document.getElementById("apellidos");
    const cedula = document.getElementById("cedula");
    const telefono = document.getElementById("telefono");
    const correo = document.getElementById("correo");
    const direccion = document.getElementById("direccion");
    const distrito = document.getElementById("distrito");
    const barrio = document.getElementById("barrio");
    const direccionExacta = document.getElementById("direccion-exacta");
    const otrassenias = document.getElementById("otras-senias");
    const folioReal = document.getElementById("folio-real");
    const area = document.getElementById("area");
    const metrosCuadrados = document.getElementById("metros-cuadrados");
    const pisos = document.getElementById("pisos");
    const costo = document.getElementById("costo");
    const valorMetros = document.getElementById("valor-metros");
    const nombrepro = document.getElementById("nombre-pro");
    const cedulapro = document.getElementById("cedula-pro");

    // Función para agregar o quitar clases de validación
    function validarCampo(campo, valido) {
      if (valido) {
        campo.classList.remove("invalid");
        campo.classList.add("valid");
      } else {
        campo.classList.remove("valid");
        campo.classList.add("invalid");
      }
    }
    validarCampo(fechaingreso, fechaingreso.value.trim() !== "");
    validarCampo(nombre, nombre.value.trim() !== "");
    validarCampo(apellidos, apellidos.value.trim() !== "");
    validarCampo(cedula, cedula.value.trim() !== "");
    validarCampo(telefono, telefono.value.trim() !== "");
    validarCampo(correo, correo.value.trim() !== "");
    validarCampo(direccion, direccion.value.trim() !== "");
    validarCampo(barrio, barrio.value.trim() !== "");
    validarCampo(distrito, distrito.value.trim() !== "");
    validarCampo(direccionExacta, direccionExacta.value.trim() !== "");
    validarCampo(otrassenias, otrassenias.value.trim() !== "");
    validarCampo(folioReal, folioReal.value.trim() !== "");
    validarCampo(area, area.value.trim() !== "");
    validarCampo(metrosCuadrados, metrosCuadrados.value.trim() !== "");
    validarCampo(pisos, pisos.value.trim() !== "");
    validarCampo(costo, costo.value.trim() !== "");
    validarCampo(valorMetros, valorMetros.value.trim() !== "");
    validarCampo(nombrepro, nombrepro.value.trim() !== "");
    validarCampo(cedulapro, cedulapro.value.trim() !== "");

    // Verificar si hay algún campo inválido
    const camposInvalidos = form.querySelectorAll(".invalid");
    if (camposInvalidos.length === 0) {
      form.submit();
      alert("Formulario enviado correctamente");
    } else {
      alert("Por favor complete todos los campos obligatorios.");
    }
  });
});
