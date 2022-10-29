let notas;
let suma = 0;
let x = 1;
let cantidadNotas = 0;
cantidadNotas = prompt("Ingrese la cantidad de notas:");

do {
    let notas = parseInt(prompt("Ingrese nota: " + x));

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
    x = x + 1;
    suma = suma + notas;
} while (x <= cantidadNotas);


promedio = suma / cantidadNotas;

alert("El promedio es: " + promedio);