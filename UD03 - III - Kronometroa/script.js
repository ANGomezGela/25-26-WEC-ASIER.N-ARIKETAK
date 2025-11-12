// ========== RELOJ ACTUAL ==========
function actualizarReloj() {
    // Creamos un objeto Date con la hora actual
    const ahora = new Date();

    // Obtenemos horas, minutos y segundos y los convertimos a string con 2 dígitos
    const horas = ahora.getHours().toString().padStart(2, "0");
    const minutos = ahora.getMinutes().toString().padStart(2, "0");
    const segundos = ahora.getSeconds().toString().padStart(2, "0");

    // Mostramos la hora en el elemento con id "clock"
    document.getElementById("clock").textContent = `${horas}:${minutos}:${segundos}`;
}

// Actualizamos el reloj cada segundo
setInterval(actualizarReloj, 1000);
// Inicializamos de inmediato para que no espere un segundo
actualizarReloj();


// ========== CRONÓMETRO ==========
let intervaloCronometro;  // Guardará el setInterval del cronómetro
let tiempoInicio;          // Momento en que se ha iniciado la sesión actual
let tiempoAcumulado = 0;   // Tiempo total acumulado en sesiones anteriores
let corriendo = false;     // Estado del cronómetro

// Convierte milisegundos a formato HH:MM:SS
function formatearTiempo(ms) {
    const horas = String(Math.floor(ms / (1000 * 60 * 60))).padStart(2, "0");
    const minutos = String(Math.floor((ms / (1000 * 60)) % 60)).padStart(2, "0");
    const segundos = String(Math.floor((ms / 1000) % 60)).padStart(2, "0");
    return `${horas}:${minutos}:${segundos}`;
}

// Actualiza la pantalla del cronómetro
function actualizarCronometro() {
    const ahora = Date.now();
    // Diferencia = tiempo desde inicio de esta sesión + tiempo acumulado
    const diferencia = ahora - tiempoInicio + tiempoAcumulado;
    document.getElementById("chronometer").textContent = formatearTiempo(diferencia);
}

// Inicia el cronómetro
function iniciarCronometro() {
    if (!corriendo) {
        tiempoInicio = Date.now();  // Guardamos el momento de inicio
        intervaloCronometro = setInterval(actualizarCronometro, 1000);
        corriendo = true;
    }
}

// Detiene el cronómetro
function detenerCronometro() {
    if (corriendo) {
        clearInterval(intervaloCronometro);
        // Guardamos el tiempo que ha corrido en esta sesión
        tiempoAcumulado += Date.now() - tiempoInicio;
        corriendo = false;
    }
}

// Reinicia el cronómetro
function reiniciarCronometro() {
    clearInterval(intervaloCronometro);
    document.getElementById("chronometer").textContent = "00:00:00";
    tiempoAcumulado = 0; // Borramos el tiempo acumulado
    corriendo = false;
    document.getElementById("marks").innerHTML = ""; // Borramos marcas
}

// Guardar marca de tiempo
function guardarMarca() {
    const tiempoActual = document.getElementById("chronometer").textContent;
    const li = document.createElement("li");
    li.textContent = tiempoActual;
    document.getElementById("marks").appendChild(li);
}
