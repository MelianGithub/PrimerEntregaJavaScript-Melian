let notas;
let suma = 0;
let x = 1;
let cantidadNotas = 0;
cantidadNotas = prompt("Ingrese la cantidad de notas:");

do {
    let notas = parseInt(prompt("Ingrese nota: " + x));

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
    
    x = x + 1;
    suma = suma + notas;
} while (x <= cantidadNotas);


promedio = suma / cantidadNotas;

alert("El promedio es: " + promedio);