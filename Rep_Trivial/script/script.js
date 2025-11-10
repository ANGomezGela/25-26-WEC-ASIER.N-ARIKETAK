//Preguntas y respuestas 
const preguntas = [
    { categoria: "Geografia", pregunta: "¿Capital de Francia?", respuesta: "Paris"},
    { categoria: "Arte", pregunta: "¿Quién pintó la Mona Lisa?", respuesta: "Da Vinci"},
    { categoria: "Cine", pregunta: "¿Actor del 'Titanic'?", respuesta: "DiCaprio"},
    { categoria: "Historia", pregunta: "¿En que año se descubrio América?", respuesta: "1492"},
    { categoria: "Ciencia", pregunta: "¿Cual es la formula del agua?", respuesta: "H2O"},
    { categoria: "Deporte", pregunta: "¿Quien es el mejor jugador de futbol?", respuesta: "Messi"}
];

// Variables de control
let aciertos = 0;
let fallos = 0;

// Mostrar puntuación en pantalla
function actualizarMarcador() {
    document.getElementById("aciertos").textContent = `Respuestas correctas: ${aciertos}`;
    document.getElementById("fallos").textContent = `Respuestas incorrectas: ${fallos}`;
}

// Función principal del juego
function jugar() {
    for (i = 0; i < preguntas.length; i++) {
        const respuestaUsuario = prompt(`${preguntas[i].categoria}: ${preguntas[i].pregunta}`);

        if (respuestaUsuario.trim().toLowerCase() === preguntas[i].respuesta.toLowerCase()) {
            alert("¡Correcto!");
            aciertos++;
        } else {
            alert(`Incorrecto. La respuesta correcta era: ${preguntas[i].respuesta}`);
            fallos++;
        }

        actualizarMarcador();

        // Cortar el bucle si se llega a 4 aciertos o 3 fallos
        if (aciertos >= 4 || fallos >= 3) {
            break;
        }
    }
    let h2 = document.getElementById("informar");
    // Mensaje final
    if (aciertos >= 4) {
        alert("¡Has ganado!");
        h2.textContent = "HAS GANADOOOOOOO";
     } else if (fallos >= 3) {
        alert("Has perdido...");
        h2.textContent = "HAS PERDIDO :(";
    }
}

// Iniciar el juego al cargar la página
window.onload = () => {
    actualizarMarcador();
    jugar();
};