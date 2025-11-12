const form = document.getElementById("formularioExamen");
const nombre = document.getElementById("nombre");
const apl1 = document.getElementById("apellido1");
const apl2 = document.getElementById("apellido2");
const nacimiento = document.getElementById("fechaNacimiento");
const tlf = document.getElementById("telefono");
const email = document.getElementById("email");

const modal = document.getElementById("modal");
const mensajeModal = document.getElementById("mensajeModal");
const btnOk = document.getElementById("btnModalOk");
const btnCorregir = document.getElementById("btnModalCorregir");

form.addEventListener("submit", validarDatos);

function validarDatos(e) {
    e.preventDefault();
    const erroresTexto = [];
    const erroresElemento = [];

    // Limpiar estilos previos
    [nombre, apl1, apl2, nacimiento, tlf, email].forEach(el => el.style.backgroundColor = "white");

    // Nombre
    if (!/^[a-zA-Z]+$/.test(nombre.value)) {
        erroresTexto.push("\nNombre: solo letras");
        erroresElemento.push(nombre);
    }
    // Apellido 1
    if (!/^[a-zA-Z]+$/.test(apl1.value)) {
        erroresTexto.push("\nApellido 1: solo letras");
        erroresElemento.push(apl1);
    }
    // Apellido 2 (opcional)
    if (apl2.value !== "" && !/^[a-zA-Z]+$/.test(apl2.value)) {
        erroresTexto.push("\nApellido 2: solo letras");
        erroresElemento.push(apl2);
    }
    // Fecha nacimiento
    if (!/^([0-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/.test(nacimiento.value)) {
        erroresTexto.push("\nFecha: formato DD/MM/YYYY");
        erroresElemento.push(nacimiento);
    } else {
        const partes = nacimiento.value.split("/");
        const fecha = new Date(partes[2], partes[1] - 1, partes[0]);
        const hoy = new Date();
        if (fecha >= hoy) {
            erroresTexto.push("\nFecha: debe ser anterior a hoy");
            erroresElemento.push(nacimiento);
        }
    }
    // Telefono (opcional)
    if (tlf.value !== "" && !/^\d{9}$/.test(tlf.value)) {
        erroresTexto.push("\nTeléfono: 9 dígitos");
        erroresElemento.push(tlf);
    }
    // Email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        erroresTexto.push("\nEmail: formato incorrecto");
        erroresElemento.push(email);
    }

    // Marcar errores
    erroresElemento.forEach(el => el.style.backgroundColor = "red");

    // Mostrar modal
    if (erroresTexto.length === 0) {
        mensajeModal.textContent = "Formulario correcto ✅";
        btnOk.style.display = "inline-block";
        btnCorregir.style.display = "none";
        modal.style.display = "flex";
    } else {
        mensajeModal.textContent = "Corrige los errores:\n" + erroresTexto.join("\n");
        btnOk.style.display = "none";
        btnCorregir.style.display = "inline-block";
        modal.style.display = "flex";
    }
}

// Botones modal
btnOk.addEventListener("click", () => {
    modal.style.display = "none";
    form.reset();
    [nombre, apl1, apl2, nacimiento, tlf, email].forEach(el => el.style.backgroundColor = "white");
});

btnCorregir.addEventListener("click", () => {
    modal.style.display = "none";
});