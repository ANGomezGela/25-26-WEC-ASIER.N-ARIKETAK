window.addEventListener("load",inicio,true); // Que cuando este la pagina cargada empiece la funcion inicio

function inicio(){
    document.getElementById("calcular").addEventListener("click", calcularFechas);
}

function calcularFechas(){
  // Para saber que mes es, porque el Date solo funciona con numeritos
    const meses = {
        JAN: 0, FEB: 1, MAR: 2, APR: 3, MAY: 4, JUN: 5,
        JUL: 6, AUG: 7, SEP: 8, OCT: 9, NOV: 10, DEC: 11
    };

    // Pasamos lo de los imputs a variables
    let mesPresente = document.getElementById("presenteMes").value.toUpperCase(); //no lo hacemos int porque lo vamos a hacer despues 
    let diaPresente = parseInt(document.getElementById("presenteDia").value); //Si se ponen letras en el input no pasa nada el parseint solo guarda los numeros pero el Nunber(tiraria error)
    let anoPresente = parseInt(document.getElementById("presenteAno").value);
    let horaPresente = parseInt(document.getElementById("presenteHora").value);
    let minutoPresente = parseInt(document.getElementById("presenteMinuto").value);

    let mesDestino = document.getElementById("destinoMes").value.toUpperCase();
    let diaDestino = parseInt(document.getElementById("destinoDia").value);
    let anoDestino = parseInt(document.getElementById("destinoAno").value);
    let horaDestino = parseInt(document.getElementById("destinoHora").value);
    let minutoDestino = parseInt(document.getElementById("destinoMinuto").value);

    // Miramos si lo introducido es un mes 
    if (!(mesPresente in meses) || !(mesDestino in meses)) {
        document.getElementById("mensaje").textContent = "Mes no válido. Usa abreviaturas en inglés (ej: OCT)";
        return;
    }

    // Creamos los dos DATE
    let fechaPresente = new Date(anoPresente, meses[mesPresente], diaPresente, horaPresente, minutoPresente);
    let fechaDestino = new Date(anoDestino, meses[mesDestino], diaDestino, horaDestino, minutoDestino);

    // Miramos la diferencia de tiempo que hemos viajado, en milisegundos
    let diferencia = fechaDestino.getTime() - fechaPresente.getTime();

    //miramos si hemos viajo
    if (diferencia === 0) {
        document.getElementById("mensaje").textContent = "Ez zara inora bidaiatuko. Denbora berean zaude.";
        return;
    }

    // Miramos si hemos ido hacia el futuro o hacia atras como paletos al pasado
    var direccion = "";
    if (diferencia > 0) {
        direccion = "etorkizunera";
    } else {
        direccion = "iraganera";
        diferencia = diferencia * -1;
    }

    // Pasamos los milisegundos a segundos, minutos, horas, dias, años con el Math floor para que redondee todo hacia abajo
    let ms = Math.abs(diferencia); // diferencia en milisegundos

    let segundos = String(Math.floor(ms / 1000) % 60).padStart(2, "0");
    let minutos = String(Math.floor(ms / (1000 * 60)) % 60).padStart(2, "0");
    let horas   = String(Math.floor(ms / (1000 * 60 * 60)) % 24).padStart(2, "0");
    let diasTotales = Math.floor(ms / (1000 * 60 * 60 * 24));

    let urteak = Math.floor(diasTotales / 365);
    let egunak = diasTotales % 365;


    // Creamos el mensaje 
    let mensaje = `Denbora-${direccion} ${urteak} urte, ${egunak} egun, ${horas} ordu, ${minutos} minutu eta ${segundos} segundo bidaiatuko duzu.`;

    // Lo mandamos al index
    document.getElementById("mensaje").textContent = mensaje;
}