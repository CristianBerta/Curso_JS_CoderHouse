//Arrays y Métodos de Array
//1.Crea un array con los números del 1 al 5 y muéstralo en la consola
let numeros = [1, 2, 3, 4, 5, 6];
console.log(numeros);

//2.Usa push para agregar el número 6 al final del array numeros
// numeros.push(6);
// console.log(numeros);

//3.Usa pop para eliminar el último elemento del array numeros
// numeros.pop();
// console.log(numeros);

//4.Usa unshift para agregar el número 0 al inicio del array numeros
// numeros.unshift(0);
// console.log(numeros);

//5.Usa shift para eliminar el primer elemento del array numeros
// numeros.shift();
// console.log(numeros);

//Funciones de Orden Superior
//6.Usa `map` para crear un nuevo array que contenga cada número del array `numeros` multiplicado por 2
// const numDuplicados = numeros.map((elemento) => elemento*2);
// console.log(numDuplicados);

//7.Usa `filter` para crear un nuevo array que contenga solo los números pares del array `numeros`
// const numPares = numeros.filter((elemento) => elemento%2 === 0);
// console.log(numPares);

//8.Usa `find` para encontrar el primer número mayor que 3 en el array `numeros`
// const primerNumeroMayor3 = numeros.find( (elemento) => elemento > 3);
// console.log(primerNumeroMayor3);

//9.Usa `some` para verificar si algún número en el array `numeros` es mayor que 4.
// const numerosMayor4 = numeros.some((elemento) => elemento > 4);
// console.log(numerosMayor4);

//10.Usa `reduce` para multiplicar todos los números en el array `numeros`
// const numMultiplicados = numeros.reduce((acumulador, elemento) => acumulador * elemento, 1);
// console.log(numMultiplicados);

//Retornar Funciones y Recibir Funciones por Parámetro
//11.Crea una función que retorne otra función que sume un número dado
//const sumar = x => y => x + y;
//const sumar5 = sumar(5);
//console.log(sumar5(3));

//12.Crea una función que reciba una función como parámetro y la ejecute con un valor dado
// const ejecutarFuncion = (funcion, valor) => funcion(valor);
// console.log(ejecutarFuncion(Math.sqrt, 25));

//Métodos de Búsqueda y Transformación
//13.Usa `indexOf` para encontrar el índice del número 3 en el array `numeros`
//console.log(numeros.indexOf(3));

//14.Usa `includes` para verificar si el número 4 está en el array `numeros`
//console.log(numeros.includes(4));

//15.Usa `sort` para ordenar los números del array `numeros` en orden ascendente
//console.log(numeros.sort((a, b) => b - a));

//El Objeto Math
//16.Usa `Math.random` y `Math.floor` para generar un número aleatorio entre 0 y 100
//let numeroAle = Math.floor(Math.random()*101);
//console.log(numeroAle);

//17.Usa `Math.round` para redondear el número 4.7 al entero más cercano
//console.log(Math.round(4.7));

//18.Usa `Math.max` para encontrar el máximo de los números 1, 2, 3, 4 y 5
//console.log(Math.max(1, 2, 5, 9));

//19.Usa `Math.min` para encontrar el mínimo de los números 1, 2, 3, 4 y 5
//console.log(Math.min(1, 2, 5, 9));

//20.Usa `Math.sqrt` para calcular la raíz cuadrada de 16
//console.log(Math.sqrt(16));

//La Clase Date
//21.Crea una instancia de `Date` y muestra la fecha y hora actual
//const fecha = new Date();
//console.log(fecha);

//22.Usa `getFullYear` para obtener el año actual
//console.log(fecha.getFullYear());

//23.Usa `getMonth` para obtener el mes actual (recuerda que los meses comienzan en 0)
//console.log(fecha.getMonth());

//24.Usa `getDate` para obtener el día del mes actual
//console.log(fecha.getDate());

//25.Usa `getDay` para obtener el día de la semana actual (0 es domingo)
//console.log(fecha.getDay());

//Ejercicios Integradores
//26.Crea un array de fechas y ordénalas en orden ascendente.
let fechas = [
    new Date('2023-12-17'),
    new Date('2021-06-25'),
    new Date('2022-08-14'),
    new Date('2020-01-01'),
    new Date('2024-03-05')
];
//console.log(fechas.sort((a, b) => a - b));

//27.Crea una función que reciba un array y un número,
//y devuelva un nuevo array con los números mayores que el valor dado.
function mayoresQue(array, num) {
    return array.filter(numero => numero > num);
}
let numMayores = mayoresQue(numeros, 3);
console.log(numMayores);

//28.Crea una función que reciba un array de números y devuelva el promedio
function promedio(array) {
    const suma = array.reduce((acumulador, num) => acumulador + num, 0);
    return suma / array.length;
}
console.log(promedio(numeros));

//29.Crea una función que reciba una fecha y un número de días, y devuelva la nueva fecha con los días agregados
function agregarDias(fecha, dias) {
    let nuevaFecha = new Date(fecha);
    nuevaFecha.setDate(nuevaFecha.getDate() + dias);
    return nuevaFecha;
}
let nuevaFecha = agregarDias('2024-06-01', 7);
console.log(nuevaFecha);

//30.Crea una función que reciba un array y devuelva un nuevo array con los números duplicados
function obtenerDuplicados(array) {
    let numerosDuplicados = array.map((elemento) => elemento * 2);
    return numerosDuplicados;
}
console.log(obtenerDuplicados(numeros));

//31.Crea una función que reciba un array de fechas y
//devuelva un nuevo array con las fechas en formato legible (ej. 'dd/mm/yyyy')
const formatoLegible = fechas => fechas.map(fecha => fecha.toLocaleDateString());
console.log(formatoLegible(fechas));

//32.Crea una función que reciba una fecha de nacimiento y devuelva la edad
function calcularEdad(fechaNacimiento) {
    let hoy = new Date();
    let nacimiento = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    let mes = hoy.getMonth() - nacimiento.getMonth();
    // Ajustar la edad si el mes y el día de hoy son anteriores al mes y día de nacimiento
    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }
    return edad;
}
console.log("Tu edad es de: " + calcularEdad('1988-05-25'));

//33.Crea una función que reciba un array de arrays de números y devuelva la suma de todos los elementos
function sumaElementos(array) {
    let sumados = array.reduce((acumulador, elemento) => acumulador + elemento, 0);
    return sumados
}
console.log("La suma de todos los elementos es de: " + sumaElementos(numeros));

//34.Crea una función que reciba un array de números y devuelva un objeto con el mayor y el menor número
const mayorMenor = array => {
    const mayor = Math.max(...array);
    const menor = Math.min(...array);
    return { mayor, menor };
};
console.log(mayorMenor(numeros));

//35.Crea una función que reciba un array de números y devuelva la cantidad de números pares
function cantPares(array) {
    let numPares = array.filter((elemento) => elemento % 2 === 0);
    return numPares.length;
}
console.log("La cantidad de numeros pares son: " + cantPares(numeros));

//36.Crea una función que reciba un array de números y devuelva la desviación estándar
const calcularDesviacionEstandar = array => {
    const media = array.reduce((sum, num) => sum + num, 0) / array.length;
    const varianza = array.reduce((sum, num) => sum + Math.pow(num - media, 2), 0) / array.length;
    return Math.sqrt(varianza);
};
console.log(calcularDesviacionEstandar(numeros));

//37.Crea una función que reciba un array de nombres y los ordene alfabéticamente
function ordenarNombres(array) {
    array.sort();
    return array
}
let nombres = ["mirna", "cristian", "ana", "yuli"];
console.log(ordenarNombres(nombres));

//38.Crea una función que reciba un array de números y
//devuelva un objeto con dos arrays: uno con los números pares y otro con los impares
function obtenerParesImpares(array) {
    let numPares = array.filter((elemento) => elemento % 2 === 0);
    let numImpares = array.filter((elemento) => elemento % 2 != 0);
    let conjunto = [numPares, numImpares];
    return conjunto
}
console.log(obtenerParesImpares(numeros));

//39.Crea una función que reciba un array y devuelva un nuevo array sin elementos duplicados
const sinDuplicados = array => [...new Set(array)];
console.log(sinDuplicados([1, 1, 2, 2, 3, 3, 4, 4]));

//40.Crea una función que reciba un array de fechas y devuelva la fecha más reciente
const fechaReciente = fechas => new Date(Math.max(...fechas));
console.log("La fecha más reciente es: " + fechaReciente(fechas));