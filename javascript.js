document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const enviarBtn = document.querySelector(".btn-primary");

  // Define un array con los nombres de las clases de tus checkboxes
  const clasesCheckbox = ['.form-check-input', '.form-check-inputwo'];

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
      label.textContent += " *";
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

    // Recorre el array de clases de checkbox
    clasesCheckbox.forEach(function(clase) {
      const checkboxes = document.querySelectorAll('.' + clase);
      let algunCheckboxMarcado = Array.from(checkboxes).some(checkbox => checkbox.checked);
      checkboxes.forEach(function (checkbox) {
        validarCampo(checkbox, algunCheckboxMarcado);

        if (!checkbox.classList.contains("valid")) {
          camposValidos = false;
        }
      });
    });

    if (camposValidos) {
      form.submit();
      alert("Formulario enviado correctamente");
    } else {
      alert("Por favor complete todos los campos obligatorios.");
    }
  });
});



/*document.addEventListener("DOMContentLoaded", function () {
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
      label.textContent += " *";
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
    let algunCheckboxMarcado = Array.from(checkboxesClaseObra).some(
      (checkbox) => checkbox.checked
    );
    checkboxesClaseObra.forEach(function (checkbox) {
      validarCampo(checkbox, algunCheckboxMarcado);

      if (!checkbox.classList.contains("valid")) {
        camposValidos = false;
      }
    });

    if (camposValidos) {
      form.submit();
      alert("Formulario enviado correctamente.");
    } else {
      alert("Por favor, complete todos los campos obligatorios.");
    }
  });

  var checkboxes = document.querySelectorAll(".form-check-input");

  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
      if (this.checked) {
        checkboxes.forEach(function (otroCheckbox) {
          if (otroCheckbox !== checkbox) otroCheckbox.checked = false;
        });
      }
    });
  });

  var checkboxes2 = document.querySelectorAll(".form-check-input");

  checkboxes2.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
      if (this.checked) {
        checkboxes2.forEach(function (otroCheckbox) {
          if (otroCheckbox !== checkbox) otroCheckbox.checked = false;
        });
      }
    });
  });
});
*/