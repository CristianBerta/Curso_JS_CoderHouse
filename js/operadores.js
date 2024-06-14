// SPREAD

// const nombresDePersonas = ["Alejandro", "Benicio", "Rodrigo", "Damian", "Johan", "Valentin"]; 
// const nombresDePersonas2 = ["Paula", "Felipe", "Jazmin", "Ramiro"]; 

// console.log(nombresDePersonas[0]);
// console.log(nombresDePersonas[1]);
// console.log(nombresDePersonas[2]);
// console.log(nombresDePersonas[3]);
// console.log(nombresDePersonas[4]);
// console.log(nombresDePersonas[5]);
// console.log(nombresDePersonas);
// console.log("Alejandro", "Benicio", "Rodrigo", "Damian", "Johan", "Valentin");
// console.log(...nombresDePersonas);

// const numeros = [12, 56, 99, -5, -200, 412, 256];
// console.log(numeros);

// // console.log(12, 56, 99, -5, -200, 412, 256);
// // console.log(...numeros);

// console.log(Math.max(...numeros)); // Spread Operator
// console.log(Math.min(...numeros));

// // // Spread de arrays

// const nombres = [...nombresDePersonas, ...nombresDePersonas2];
// console.log(nombres);

// const objetoDeNombres = {
//     ...nombres
// }
// console.log(objetoDeNombres);

// Spread de objetos

// const alumno = {
//     nombre: "Cristopher",
//     edad: 34,
//     nacionalidad: "Argentino",

// }
// const cursos = {
//     desarrolloWeb: "Aprobado",
//     javascript: "En Curso"
// }
// // console.log(...alumno); // No es Iterable porque no es un Array
// // console.log(...cursos);

// const alumnoDePrueba = {
//     ...cursos,
//     ...alumno,
//     email: "alumno@coderhouse.com",
//     ojos: "Verdes"
// }
// console.log(alumnoDePrueba);

const numeros = [12, 56, 99, -5, -200, 412, 256];
// console.log(numeros);
// console.log(...numeros);

// function sumarArray(...num) { /// Como parametros se pasa un Spread de Array
//     console.log(num); // Imprime el Array original
// }

function sumar(...num) {
    return console.log(num.reduce((acumulador, number) => acumulador + number, 0))
}

sumar(...numeros);
sumar(12, 5, 50, 1);