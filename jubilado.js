const edad = document.getElementById("edad");
const nombre = document.getElementById("lnombre");
const apellido1 = document.getElementById("lapellido1");
const apellido2 = document.getElementById("lapellido2");
const telefono = document.getElementById("ltelefono");
const idhombre = document.getElementById("idhombre");
const provincia = document.getElementById("lsel");
const publicidad = document.getElementById("lpublicidad");
const aceptar = document.getElementById("laceptar");
const form = document.getElementsByName("miForm");
const button = document.getElementsByName("envio");

/* button[0].disabled = true; */
function isEmpty(valor) {
  if (valor >= 0) {
    return false;
  }
}
// # Ejercicio 1
function jubilado() {
  const ijubilado = document.getElementById("jubilado");
  if (!isEmpty(edad.value)) {
    ijubilado.innerHTML = "";
  }
  if (edad.value >= 65) ijubilado.innerHTML = "Enorabuena es Hora de jubilarse";
  if (edad.value < 65 && edad.value > 10)
    ijubilado.innerHTML = "No es hora de jubilarse";
}
edad.addEventListener("input", jubilado);
// # Formato del Telefono
function formatTel(e) {
  var telefono = this.value.replace(/\D/g, ""); // limpio el valor
  var telefonoFormateado = "";

  for (var i = 0; i < telefono.length; i++) {
    if (telefono.length < 10) {
      this.classList.add("error");
    }

    if (telefono.length <= 10) {
      if (i > 0 && i % 3 === 0) {
        telefonoFormateado += "-";
      }
      telefonoFormateado += telefono.charAt(i);
    }
    if (telefonoFormateado.length >= 11) {
      telefonoFormateado = telefonoFormateado.substring(0, 11);
    }
    if (telefono.length === 9) {
      this.classList.remove("error");
    }
  }

  this.value = telefonoFormateado;
}

telefono.addEventListener("input", formatTel);

// # Rango Edad
function rangoedad(e) {
  var valoredad = this.value;
  let onlynum = this.value.replace(/\D/g, "");
  let irenge = document.getElementById("errorrange");
  if (valoredad === "") {
    this.classList.add("error");
    irenge.innerText = "este campo es obligatorio";
    return;
  }

  if (valoredad > 65 || valoredad < 18) {
    this.classList.add("error");
    let format = valoredad.substring(0, 2);
    this.value = format;
    irenge.classList.remove("hiden");
    irenge.innerText = "el rago de edad es entre 18 - 65";
    return;
  }
  if (valoredad != onlynum) {
    this.classList.add("error");
    let format = valoredad.substring(0, 2);
    this.value = format;
    irenge.classList.remove("hiden");
    irenge.innerText = "solo se permiten numero";
    return;
  }
  irenge.classList.add("hiden");
  this.classList.remove("error");
}
edad.addEventListener("input", rangoedad);
// Genero
function genero() {
  const errorGenero = document.getElementById("errorGenero");
  var opcionSeleccionada = form[0].querySelector('input[name="sexo"]:checked');

  if (opcionSeleccionada) {
    console.log("La opción seleccionada es: " + opcionSeleccionada.id);
    errorGenero.classList.add("hiden");
  } else {
    errorGenero.classList.remove("hiden");
  }
}
function inputAceptar() {
  const erroracep = document.getElementById("errorraceptar");
  if (aceptar.checked) {
    console.log("El checkbox está marcado");
    erroracep.classList.add("hiden");
  } else {
    erroracep.classList.remove("hiden");
  }
}
aceptar.addEventListener("change", inputAceptar);
