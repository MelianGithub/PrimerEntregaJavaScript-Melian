let cantidadNotas = prompt("Ingrese la cantidad de notas:");
let notas;
let suma = 0;

for (i = 0; i < cantidadNotas; i++) {
    let notas = parseInt(prompt("Ingrese primera nota:" + i));
    suma = suma + notas;

    if (notas <= 3) {
        console.log("No aprobado, sin derecho a examen");
    } else if(notas <= 6) {
        console.log("A febrero");
    } else if(notas <= 9) {
        console.log("Aprobado");
    } else if (notas <= 12) {
        console.log("Excelente Calificacion");
    } else {
        console.log("Nota incorrecta");
    }
}
promedio = suma / cantidadNotas;

alert("El promedio es: " + promedio);

