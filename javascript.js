document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const enviarBtn = document.querySelector(".btn-primary");

  const checkboxesClaseObra = document.querySelectorAll(".form-check-input");

  function validarCampo(campo, valido) {
    var id = campo.id;
    var label = document.querySelector('label[for="' + id + '"]');
    
    if (valido) {
      campo.classList.remove("invalid");
      campo.classList.add("valid");
      label.classList.remove("invalid-label"); // quita la clase del color rojo
    } else {
      campo.classList.remove("valid");
      campo.classList.add("invalid");
      label.classList.add("invalid-label"); // agrega la clase del color rojo
      label.textContent += ' *';
    }
  }

  enviarBtn.addEventListener("click", function (event) {
    event.preventDefault();

    const camposAValidar = [
      "fecha-ingreso",
      "nombre",
      "apellidos",
      "cedula",
      "telefono",
      "correo",
      "direccion",
      "distrito",
      "barrio",
      "direccion-exacta",
      "otras-senias",
      "folio-real",
      "area",
      "metros-cuadrados",
      "pisos",
      "costo",
      "valor-metros",
      "nombre-pro",
      "cedula-pro",
      "fecha-desde",
      "fecha-hasta",
    ];

    let camposValidos = true;

    camposAValidar.forEach(function (campoId) {
      const campo = document.getElementById(campoId);
      validarCampo(campo, campo.value.trim() !== "");

      if (!campo.classList.contains("valid")) {
        camposValidos = false;
      }
    });

    // Validar las casillas de verificación
    checkboxesClaseObra.forEach(function (checkbox) {
      validarCampo(checkbox, checkbox.checked);

      if (!checkbox.classList.contains("valid")) {
        camposValidos = false;
      }
    });

    if (camposValidos) {
      form.submit();
      alert("Formulario enviado correctamente");
    } else {
      alert("Por favor complete todos los campos obligatorios.");
    }
  });
});
