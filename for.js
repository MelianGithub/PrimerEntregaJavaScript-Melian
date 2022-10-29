let cantidadNotas;
cantidadNotas = prompt("Ingrese la cantidad de notas:");
let notas;
let suma = 0;

for (i = 1; i <= cantidadNotas; i++) {
    let notas = parseInt(prompt("Ingrese nota " + i));
    suma = suma + notas;

    if (notas <= 12 && notas >= 10) {
        console.log("Excelente Calificacion");
    } else if (notas <= 9 && notas >= 7) {
        console.log("Aprobado");
    } else if (notas >= 4 && notas <= 6) {
        console.log("A febrero");
    } else if (notas > 0 && notas <= 3) {
        console.log("No aprueba, sin derecho a examen");
    } else {
        console.log("Nota incorrecta");
    }
}
promedio = suma / cantidadNotas;

alert("El promedio es: " + promedio);