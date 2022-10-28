let notas;
let suma = 0;
let x= 1;
let cantidadNotas = 0;
cantidadNotas = prompt("Ingrese la cantidad de notas:");

while (x <= cantidadNotas) {
    let notas = parseInt(prompt("Ingrese nota: " + x));
    suma = suma + notas;
    x= x + 1;
 
    if(notas > 0 && notas <= 3) {
        console.log("No aprobado, sin derecho a examen");
    } else if(notas > 0 && notas <= 6) {
        console.log("A febrero");
    } else if(notas > 0 && notas <= 9) {
        console.log("Aprobado");
    } else if (notas > 0 && notas <= 12) {
        console.log("Excelente Calificacion");
    } else {
        console.log("Nota incorrecta");
    }
    
}
// promedio = suma / (x-1);
promedio = suma / cantidadNotas;

alert("El promedio es: " + promedio);