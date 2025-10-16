window.addEventListener("load",inicio,true);

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
    let mesPresente = document.getElementById("presenteMes").value.toUpperCase();
    let diaPresente = parseInt(document.getElementById("presenteDia").value);
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
    let segundosTotales = Math.abs(Math.floor(diferencia / 1000));

    let segundos = segundosTotales % 60;
    let minutosTotales = Math.floor(segundosTotales / 60);
    let minutos = minutosTotales % 60;
    let horasTotales = Math.floor(minutosTotales / 60);
    let horas = horasTotales % 24;
    let diasTotales = Math.floor(horasTotales / 24);

    let urteak = Math.floor(diasTotales / 365);
    let egunak = diasTotales % 365;

    // Creamos el mensaje 
    let mensaje = `Denbora-${direccion} ${urteak} urte, ${egunak} egun, ${horas} ordu, ${minutos} minutu eta ${segundos} segundo bidaiatuko duzu.`;

    // Lo mandamos al index
    document.getElementById("mensaje").textContent = mensaje;
}