// Array de objetos: cada alumno tiene nombre y notas por asignatura
const alumnos = [
    { nombre: "Alumno1", notas: { Math: 7, Physics: 8, Chemistry: 5, Biology: 6 } },
    { nombre: "Alumno2", notas: { Math: 9, Physics: 6, Chemistry: 8, Biology: 7 } },
    { nombre: "Alumno3", notas: { Math: 5, Physics: 7, Chemistry: 6, Biology: 4 } }
];

// 1️⃣ Alumno con mejor promedio
let mejorPromedio = -1;
let alumnoMejor = "";
alumnos.forEach(alumno => {
    const valores = Object.values(alumno.notas);
    const promedio = valores.reduce((a,b) => a+b, 0) / valores.length;
    if (promedio > mejorPromedio) {
        mejorPromedio = promedio;
        alumnoMejor = alumno.nombre;
    }
});
console.log(`Batez besteko nota onena duen ikaslea: ${alumnoMejor} (${mejorPromedio.toFixed(2)})`);

// 2️⃣ Nota más alta de todas
let notaMax = -1;
alumnos.forEach(alumno => {
    Object.values(alumno.notas).forEach(nota => {
        if (nota > notaMax) notaMax = nota;
    });
});
console.log(`Nota guztien notarik altuena: ${notaMax}`);

// 3️⃣ Mejor nota de un alumno específico
const nombreAlumno = "Alumno2";
const alumnoSeleccionado = alumnos.find(a => a.nombre === nombreAlumno);
let mejorNotaAlumno = -1;
let asignaturaMejorAlumno = "";
for (const [asignatura, nota] of Object.entries(alumnoSeleccionado.notas)) {
    if (nota > mejorNotaAlumno) {
        mejorNotaAlumno = nota;
        asignaturaMejorAlumno = asignatura;
    }
}
console.log(`${nombreAlumno}: nota altuena = ${mejorNotaAlumno} (${asignaturaMejorAlumno})`);

// 4️⃣ Mejor nota en una asignatura específica
const asignaturaSeleccionada = "Chemistry";
let mejorNotaAsignatura = -1;
let alumnoMejorAsignatura = "";
alumnos.forEach(alumno => {
    const nota = alumno.notas[asignaturaSeleccionada];
    if (nota > mejorNotaAsignatura) {
        mejorNotaAsignatura = nota;
        alumnoMejorAsignatura = alumno.nombre;
    }
});
console.log(`${asignaturaSeleccionada}: nota altuena = ${mejorNotaAsignatura} (${alumnoMejorAsignatura})`);
