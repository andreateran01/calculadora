
const propietario = document.getElementById("propietario");
const grupos = document.getElementById("grupos");
const otros = document.getElementById("otros");
const input = document.getElementById("permiso");

function actualizarPermiso() {
  input.value = propietario.value + grupos.value + otros.value;
}

propietario.addEventListener("change", actualizarPermiso);
grupos.addEventListener("change", actualizarPermiso);
otros.addEventListener("change", actualizarPermiso);

input.addEventListener("keypress", (e) => {
  if (!/[0-7]/.test(e.key)) {
    e.preventDefault();
  }
});

input.addEventListener("input", () => {
  input.value = input.value.replace(/[^0-7]/g, "");

  const val = input.value;

  if (val.length === 3) {
    propietario.value = val[0];
    grupos.value = val[1];
    otros.value = val[2];
  }
});

actualizarPermiso();
