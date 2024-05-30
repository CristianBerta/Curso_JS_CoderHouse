//Usa forEach para imprimir cada elemento de un array de números
// let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 101];
// numeros.forEach((numero) => {
//     console.log(numero)
// });

//Utiliza find para encontrar el primer número mayor que 50 en un array de números.
//const primerNumeroMayor50 = numeros.find( (elemento) => elemento > 50);
//console.log(primerNumeroMayor50);

//Emplea filter para obtener todos los números pares de un array de números.
// const numPares = numeros.filter((elemento) => elemento%2 === 0);
// console.log(numPares);

//Utiliza some para verificar si un array de palabras contiene al menos una palabra de más de 10 caracteres.
// let palabras = ["cristian", "alejandro", "berta"];
// const palabra5Caracteres = palabras.some((elemento) => elemento.length > 5);
// console.log(palabra5Caracteres);

//Usa map para duplicar cada elemento de un array de números.
// const numDuplicados = numeros.map((elemento) => elemento*2);
// console.log(numDuplicados);

//Emplea reduce para obtener la suma de todos los elementos de un array de números.
// const numSumados = numeros.reduce((acumulador, elemento) => acumulador + elemento, 0);
// console.log(numSumados);

//Utiliza sort (modifica el array original) para ordenar un array de palabras alfabéticamente.
// palabras.sort();
// console.log(palabras);

//Crea una clase Alumno con las propiedades "nombre", "edad" y "notas" (un array de números).
//Crea varios objetos Alumno y realiza operaciones con ellos
//(calcular promedio de notas, encontrar el alumno con la mejor nota, etc.) utilizando funciones de orden superior.
class Alumno {
    constructor(nombre, edad, notas) {
        this.nombre = nombre,
        this.edad = edad,
        this.notas = notas
    }
    calcularPromedio() {
        const suma = this.notas.reduce((acumulador, nota) => acumulador + nota, 0); //acumulador seria la nota que recibe
        return suma / this.notas.length;
    }
    obtenerMejorNota() {
        return Math.max(...this.notas);
    }
}

const alumno1 = new Alumno("Juan Pérez", 20, [8, 7, 9, 6]);
const alumno2 = new Alumno("María García", 33, [6, 7, 9, 9]);
const alumno3 = new Alumno("Carlos López", 67, [10, 9, 9, 10]);

const alumnos = [alumno1, alumno2, alumno3];

// alumnos.forEach(alumno => {
//     console.log("Promedio de notas de " + alumno.nombre + ": " + alumno.calcularPromedio());
// });

// const mejorNota = alumnos.reduce((mejorAlumno, alumnoActual) => {
//     let notaMasAlta;
//     if (alumnoActual.obtenerMejorNota() > mejorAlumno.obtenerMejorNota()) {
//         notaMasAlta = alumnoActual
//     } else {
//         notaMasAlta = mejorAlumno
//     }
//     return notaMasAlta
//     //return (alumnoActual.obtenerMejorNota() > mejorAlumno.obtenerMejorNota()) ? alumnoActual : mejorAlumno;
// });
// console.log("El alumno con la mejor nota es: " + mejorNota.nombre + ", con una nota de: " + mejorNota.obtenerMejorNota());

//Utiliza map para convertir un array de temperaturas en grados Celsius a grados Fahrenheit.
// let tempC = [0, 20, 30, 100];
// let tempF = tempC.map((elemento) => (elemento*9/5)+32);
// console.log(tempF);

//Emplea filter para obtener todos los objetos de un array de productos que tengan un precio mayor a $50.
let productos = [
    { nombre: 'Producto 1', precio: 30 },
    { nombre: 'Producto 2', precio: 60 },
    { nombre: 'Producto 3', precio: 45 },
    { nombre: 'Producto 4', precio: 80 },
    { nombre: 'Producto 5', precio: 50 }
];
// let productosMayor50 = productos.filter((elemento) => elemento.precio > 50);
// console.log(productosMayor50);

//Usa forEach para imprimir la tabla de multiplicar de un número específico (por ejemplo, 5).
// let numeroTabla = parseInt(prompt("ingrese un numero"));
// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// numeros.forEach((numero) => {
//     console.log(numero + "x" + numeroTabla + "=" + numero * numeroTabla)
// });

//Utiliza find para encontrar el primer objeto producto con un descuento mayor al 30% en un array de productos.
// let productos = [
//     { nombre: 'Producto 1', descuento: 30 },
//     { nombre: 'Producto 2', descuento: 20 },
//     { nombre: 'Producto 3', descuento: 45 },
//     { nombre: 'Producto 4', descuento: 80 },
//     { nombre: 'Producto 5', descuento: 50 }
// ];
// const primerProductoMayor30 = productos.find( (elemento) => elemento.descuento > 30);
// console.log(primerProductoMayor30);

//Emplea some para verificar si hay al menos un alumno con edad menor a 18 años en un array de objetos Alumno.
const hayMenoresDeEdad = alumnos.some(alumno => alumno.edad < 18);
if (hayMenoresDeEdad) {
    console.log("Si hay alumnos menores de 18 años");
} else {
    console.log("No hay alumnos menores de 18 años");
}

//Usa reduce para obtener el producto de todos los elementos de un array de números.
// let numeros = [1, 2, 3, 4];
// const productoNum = numeros.reduce((acumulador, elemento) => acumulador * elemento, 1);
// console.log(productoNum);

//Utiliza sort para ordenar un array de fechas en orden ascendente.
// let fechas = [
//     new Date("2024-05-29"),
//     new Date("2023-12-15"),
//     new Date("2025-01-01"),
//     new Date("2023-07-22")
// ];
// fechas.sort();
// console.log(fechas.toLocaleString());

//Emplea map para obtener un array de objetos con las edades de los alumnos en años-luz
//(dividiendo la edad en años por 9.46 trillones, que es la cantidad de kilómetros que recorre la luz en un año).
const ANIOS_LUZ = 9.46;
const edadesEnAniosLuz = alumnos.map(alumno => {
    return {
        nombre: alumno.nombre,
        edadEnAniosLuz: alumno.edad / ANIOS_LUZ
    };
});
console.log(edadesEnAniosLuz);

//Utiliza filter para obtener todos los números primos de un array de números.
// function esPrimo(num) {
//     if (num <= 1){
//         return false;
//     }
//     if (num === 2){
//         return true;
//     }
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0){
//             return false;
//         }
//     }
//     return true;
// }
// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// let numerosPrimos = numeros.filter(esPrimo);
// console.log(numeros);
// console.log("Números primos en el array: ", numerosPrimos);

//Emplea reduce para obtener el promedio de las edades de un array de objetos Alumno.
const sumaEdades = alumnos.reduce((acumulador, alumno) => acumulador + alumno.edad, 0);
const promedioEdades = sumaEdades / alumnos.length;
console.log("El promedio de las edades es de: ", promedioEdades);

//Usa forEach para imprimir todos los días de la semana en inglés.
// const diasSemanaIngles = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// diasSemanaIngles.forEach(dia => {
//     console.log(dia);
// });

//Utiliza sort para ordenar un array de objetos producto por precio de forma ascendente.
console.log(productos.sort((a, b) => a.precio - b.precio));

//Expresar el siguiente script en una sola linea de codigo:
// let total = 0
// for (let i = 1; i <= 10; i++) {
//     total += i
// }
// console.log(total)