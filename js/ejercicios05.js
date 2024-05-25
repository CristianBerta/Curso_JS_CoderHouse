//OBJETOS Y OBTENER VALORES
//1
const persona = 
{
    nombre : "Cristian",
    edad : 35,
    ciudad : "Florencio Varela"
}
console.log(persona.nombre);

//2
persona.telefono = 123456789;
console.log(persona.telefono);

//3
const coche =
{
    marca: "Ford",
    modelo: "Falcon",
    anio: 1988
}
console.log(coche.modelo);

//4
coche.color = "Azul";
console.log(coche.color);

//OBJETOS CONSTRUCTORES Y CONSTRUCTOR Y NEW
//5
function producto (nombre, precio, cantidad)
{
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
}
const azucar = new producto("Azucar", 1300, 2);

//6
// function persona (nombre, edad, ciudad)
// {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.ciudad = ciudad;
// }
// const cristian = new persona("Cristian", 35, "Florencio Varela");

//7
function libro (titulo, autor, anio)
{
    this.titulo = titulo;
    this.autor = autor;
    this.anio = anio;
}
const libro1 = new libro("El visitante", "Stephen King", 2000);

//USO DE THIS
//8
const rectangulo = 
{
    base : 2,
    altura : 3
}
function CalcularArea(rectangulo) {
    this.base = rectangulo.base,
    this.altura = rectangulo.altura
    return base * altura
}
console.log(CalcularArea(rectangulo));

//9