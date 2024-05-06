console.log("Hola cristian");

console.log("-------------------------");

// Declaracion de variables usando ESS

var palabra = "hola cristian";

console.log(palabra); //imprimo palabra

palabra = "como estas";

console.log(palabra); //reasigno palabra y la imprimo

var palabra = "Bien?";

console.log(palabra); //al escribir var creo una nueva variable sin importar que tenga el mismo nombre

// Declaracion de variables usando ES6

let palabra00 = "Nueva palabra con ES6";

console.log(palabra00);

palabra00 = "Reasignacion";

console.log(palabra00);

// let palabra00 = "Hola" no funciona como var en ESS, no se puede volver a declarar el mismo nombre

let palabra01 = "Nueva palabra01";

console.log(palabra01);

// Declaracion de constante

const CONSTANTE00 = "constante01"; // Las constantes siempre en mayuscula
console.log(CONSTANTE00);

// CONSTANTE00 = "constante00" como es constante no se puede reasignar

//Mala practica
let nombre1 = "cristian";
let nombre2 = "alejandro";

//Buena practica usando camelCase
let primerNombre = "cristian"; //siempre se empieza con minuscula y las demas palabras con mayuscula
let segundoNombre = "alejandro";

let nombreCompletoDeLaPersona = "Cristian Alejandro Berta";

const MAYUSCULA = "En mayuscula";

let anio = 2024;
let flotante = 25.5;

// Operaciones basicas
let a = 1;
let b = 2;
const RESULTADO = a + b;
console.log(RESULTADO); //lo mismo para todas las operaciones

const NOMBRE_COMPLETO = nombre1 + " " + nombre2; //concatenacion de palabras
console.log(NOMBRE_COMPLETO);

console.log("--------------------------");