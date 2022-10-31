let suma = 0;
const cantidadNotas = prompt("Ingrese la cantidad de notas:");
for (i = 1; i <= cantidadNotas; i++) {
    let notas = parseInt(prompt("Ingrese nota " + i));
    suma = suma + notas;

if(notas > 12){
    console.log("nota incorrecta");
}else if(notas >= 10){
    console.log("excelente nota");
}else if(notas >= 7){
    console.log("aprobado");
} else if (notas >= 4){
    console.log("a febrero");
}else if (notas >= 1){
    console.log("no aprueba");
}else {
    console.log("nota incorrecta");
}

}
promedio = suma / cantidadNotas;

if (promedio >= 1 && promedio <= 12){
    console.log("El promedio es: " + promedio);
}else {
    console.log("error de promedio");
}

// alert("El promedio es: " + promedio);
// console.log("El promedio es: " + promedio);