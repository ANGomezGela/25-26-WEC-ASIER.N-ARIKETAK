// 1️⃣ Creamos la función constructora para una persona
function DatuPer(nan_in, izen_in, telf_in, adin_in) {
    this.nan = nan_in;
    this.izen = izen_in;
    this.telefonoa = telf_in;
    this.adina = adin_in;

    // Método para mostrar los datos de la persona
    this.imprimirDatos = function() {
        console.log(`NAN: ${this.nan}`);
        console.log(`Izena: ${this.izen}`);
        console.log(`Telefonoa: ${this.telefonoa}`);
        console.log(`Adina: ${this.adina}`);
    }
}

// 2️⃣ Creamos el array que almacenará varias personas
const agenda = [];

// 3️⃣ Añadimos 4 personas al array
agenda[0] = new DatuPer("11111111A", "Kepa", "677234523", 25);
agenda[1] = new DatuPer("22222222B", "Ane", "688112233", 30);
agenda[2] = new DatuPer("33333333C", "Jon", "699445566", 22);
agenda[3] = new DatuPer("44444444D", "Maria", "600778899", 28);

// 4️⃣ Función para buscar una persona por su NAN y mostrar sus datos
function mostrarDatosPorNAN(nanBuscado) {
    // Buscamos en el array la persona con ese NAN
    const persona = agenda.find(p => p.nan === nanBuscado);
    
    if(persona) {
        persona.imprimirDatos();
    } else {
        console.log(`No se ha encontrado ninguna persona con el NAN ${nanBuscado}`);
    }
}

// 5️⃣ Ejemplo de uso
mostrarDatosPorNAN("22222222B"); // Imprime los datos de Ane
mostrarDatosPorNAN("55555555E"); // No encontrada
