document.addEventListener("DOMContentLoaded", function () {
  var campos = document.querySelectorAll(
    'input[type="text"], input[type="number"], input[type="email"], select'
  );

  campos.forEach(function (campo) {
    campo.addEventListener("blur", function () {
      if (campo.value === "") {
        campo.style.border = "1px solid red";
      } else {
        campo.style.border = "1px solid green";
      }
    });
  });

  var selectPermiso = document.getElementById("permiso");
  var otroPermisoInput = document.getElementById("otro-input");

  selectPermiso.addEventListener("change", function () {
    if (selectPermiso.value === "otro") {
      otroPermisoInput.disabled = false;
    } else {
      otroPermisoInput.disabled = true;
      otroPermisoInput.value = "";
    }
  });

  var enviarBtn = document.querySelector(".btn-primary");
  enviarBtn.addEventListener("click", function () {
    var camposVacios = false;
    campos.forEach(function (campo) {
      if (campo.value === "") {
        campo.style.border = "1px solid red";
        camposVacios = true;
      } else {
        campo.style.border = "1px solid green";
      }
    });

    if (camposVacios) {
      alert("Por favor, complete todos los campos del formulario.");
      return false;
    } else {
      alert("Formulario enviado exitosamete.");
    }

    document.querySelector("form").submit();
  });
});
