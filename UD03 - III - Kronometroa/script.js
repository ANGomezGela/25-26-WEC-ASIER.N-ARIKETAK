// ========== ERLOJUA (RELOJ ACTUAL) ==========
function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");

    document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
updateClock(); // inicializa de inmediato


// ========== KRONOMETROA ==========
let chronoInterval;
let startTime;
let elapsedTime = 0;
let running = false;

function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600).toString().padStart(2, "0");
    const minutes = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, "0");
    const seconds = (totalSeconds % 60).toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
}

function updateChronometerDisplay() {
    const now = Date.now();
    const diff = now - startTime + elapsedTime;
    document.getElementById("chronometer").textContent = formatTime(diff);
}

function startChronometer() {
    if (!running) {
        startTime = Date.now();
        chronoInterval = setInterval(updateChronometerDisplay, 1000);
        running = true;
    }
}

function stopChronometer() {
    if (running) {
        clearInterval(chronoInterval);
        elapsedTime += Date.now() - startTime;
        running = false;
    }
}

function resetChronometer() {
    clearInterval(chronoInterval);
    document.getElementById("chronometer").textContent = "00:00:00";
    elapsedTime = 0;
    running = false;
    document.getElementById("marks").innerHTML = "";
}

function saveMark() {
    const currentDisplay = document.getElementById("chronometer").textContent;
    const li = document.createElement("li");
    li.textContent = currentDisplay;
    document.getElementById("marks").appendChild(li);
}
