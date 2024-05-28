//OBJETYOS Y VALORES CON ARRAYS
//1 y 2
// const personas = [];
// let persona1 = {
//     nombre: "Cristian",
//     edad: 36
// }
// let persona2 = {
//     nombre: "Mirna",
//     edad: 44
// }
// let persona3 = {
//     nombre: "Norma",
//     edad: 66
// }
// personas.push(persona1);
// personas.push(persona2);
// personas.push(persona3);
// console.log(personas[0].nombre);
// console.log(personas[1].nombre);

// //3 y 4
// const autos = [];
// let auto1 = {
//     marca: "Cristian",
//     anio: 36
// }
// let auto2 = {
//     marca: "Mirna",
//     anio: 44
// }
// let auto3 = {
//     marca: "Norma",
//     anio: 66
// }
// autos.push(auto1);
// autos.push(auto2);
// autos.push(auto3);
// console.log(autos[1].anio);
// let ultimoAuto = autos[autos.length - 1];
// console.log(ultimoAuto.anio);

//OBJETOS CONSTRUCTORES Y CONSTRUCTOR Y NEW CON ARRAYS
//5 6 y 7 (lo mismo pero cambiamos las propiedades y demas)
function Producto(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
}
let productos = [];

productos.push(new Producto("Manzana", 5, 30));
productos.push(new Producto("Banana", 3, 50));
productos.push(new Producto("Naranja", 7, 20));

console.log(productos);

//8 y 9
function Rectangulo(base, altura) {
    this.base = base,
    this.altura = altura
}
function CalcularArea(rectangulo) {
    this.base = rectangulo.base,
    this.altura = rectangulo.altura
    return base * altura
}
const rectangulos = [
    {new Rectangulo:(10, 2)},
    {new Rectangulo:(5, 3)}
]

let areaPrimerRectangulo = rectangulos[0].calcularArea();
console.log("El área del primer rectangulo es: ", areaPrimerRectangulo);