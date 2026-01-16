function validarUsuario() {
    const usuario = document.getElementById("usuario");
    if (usuario.value.length < 7 || usuario.value.length > 15) {
        alert("El usuario que has metido esta mal, tiene que tener entre 7 y 15 caracteres");
    }
}

const contrasena = document.getElementById("contrasena");
contrasena.addEventListener("focus", () => contrasena.value = "");
contrasena.addEventListener("blur", () => {
    if (!/[a-zA-Z]/.test(contrasena.value) || !/[0-9]/.test(contrasena.value)) {
        alert("Contraseña debe tener al menos una letra y un numero");
    }
});

const b_login = document.getElementById("b_login");
b_login.addEventListener("click", ()=> clearTimeout(aviso));

window.onload = () => {
    const aviso = setTimeout(() =>alert("Mete la contraseña date prisa"), 10000);
};