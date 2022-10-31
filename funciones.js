let notas;
let suma = 0;
let x = 1;
let cantidadNotas = prompt("Ingrese la cantidad de notas:");

function promedio(suma, cantidadNotas) {
    while (parseInt(cantidadNotas) != undefined && x <= parseInt(cantidadNotas)) {
        let notas = parseInt(prompt("Ingrese nota: " + x));
        suma = suma + notas;
        x = x + 1;
        promedio = suma / cantidadNotas;

        if (notas > 12) {
            console.log("nota incorrecta");
        } else if (notas >= 10) {
            console.log("excelente nota");
        } else if (notas >= 7) {
            console.log("aprobado");
        } else if (notas >= 4) {
            console.log("a febrero");
        } else if (notas >= 1) {
            console.log("no aprueba");
        } else {
            console.log("nota incorrecta");
        }
    }


    if (promedio >= 1 && promedio <= 12) {
        alert("El promedio es: " + promedio.toFixed(2));
    } else {
        alert("error de promedio");
    }
}
// Llamo a la funcion
promedio(suma, cantidadNotas);

