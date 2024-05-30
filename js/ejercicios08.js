//Usa forEach para imprimir cada elemento de un array de números
let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 101];
// numeros.forEach((numero) => {
//     console.log(numero)
// });

//Utiliza find para encontrar el primer número mayor que 50 en un array de números.
const primerNumeroMayor50 = numeros.find( (elemento) => elemento > 50);
console.log(primerNumeroMayor50);

//Emplea filter para obtener todos los números pares de un array de números.
const numPares = numeros.filter((elemento) => elemento%2 === 0);
console.log(numPares);

//Utiliza some para verificar si un array de palabras contiene al menos una palabra de más de 10 caracteres.
let palabras = ["cristian", "alejandro", "berta"];
const palabra5Caracteres = palabras.some((elemento) => elemento.length > 5);
console.log(palabra5Caracteres);

//Usa map para duplicar cada elemento de un array de números.
const numDuplicados = numeros.map((elemento) => elemento*2);
console.log(numDuplicados);

//Emplea reduce para obtener la suma de todos los elementos de un array de números.
const numSumados = numeros.reduce((acumulador, elemento) => acumulador + elemento, 0);
console.log(numSumados);

//Utiliza sort (modifica el array original) para ordenar un array de palabras alfabéticamente.
palabras.sort();
console.log(palabras);

//Crea una clase Alumno con las propiedades "nombre", "edad" y "notas" (un array de números).
//Crea varios objetos Alumno y realiza operaciones con ellos
//(calcular promedio de notas, encontrar el alumno con la mejor nota, etc.) utilizando funciones de orden superior.


//Utiliza map para convertir un array de temperaturas en grados Celsius a grados Fahrenheit.


//Emplea filter para obtener todos los objetos de un array de productos que tengan un precio mayor a $50.


//Usa forEach para imprimir la tabla de multiplicar de un número específico (por ejemplo, 5).


//Utiliza find para encontrar el primer objeto producto con un descuento mayor al 30% en un array de productos.


//Emplea some para verificar si hay al menos un alumno con edad menor a 18 años en un array de objetos Alumno.


//Usa reduce para obtener el producto de todos los elementos de un array de números.


//Utiliza sort para ordenar un array de fechas en orden ascendente.


//Emplea map para obtener un array de objetos con las edades de los alumnos en años-luz
//(dividiendo la edad en años por 9.46 trillones, que es la cantidad de kilómetros que recorre la luz en un año).


//Utiliza filter para obtener todos los números primos de un array de números.


//Emplea reduce para obtener el promedio de las edades de un array de objetos Alumno.


//Usa forEach para imprimir todos los días de la semana en inglés.


//Utiliza sort para ordenar un array de objetos producto por precio de forma ascendente.


//Expresar el siguiente script en una sola linea de codigo:
// let total = 0
// for (let i = 1; i <= 10; i++) {
//     total += i
// }
// console.log(total)