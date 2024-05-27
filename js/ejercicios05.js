//OBJETOS Y OBTENER VALORES
//1
// const persona = 
// {
//     nombre : "Cristian",
//     edad : 35,
//     ciudad : "Florencio Varela"
// }
// console.log(persona.nombre);

//2
// persona.telefono = 123456789;
// console.log(persona.telefono);

//3
// const coche =
// {
//     marca: "Ford",
//     modelo: "Falcon",
//     anio: 1988
// }
// console.log(coche.modelo);

//4
// coche.color = "Azul";
// console.log(coche.color);

//OBJETOS CONSTRUCTORES Y CONSTRUCTOR Y NEW
//5
// function producto (nombre, precio, cantidad)
// {
//     this.nombre = nombre;
//     this.precio = precio;
//     this.cantidad = cantidad;
// }
// const azucar = new producto("Azucar", 1300, 2);

//6
// function persona (nombre, edad, ciudad)
// {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.ciudad = ciudad;
// }
// const cristian = new persona("Cristian", 35, "Florencio Varela");

//7
// function libro (titulo, autor, anio)
// {
//     this.titulo = titulo;
//     this.autor = autor;
//     this.anio = anio;
// }
// const libro1 = new libro("El visitante", "Stephen King", 2000);

//USO DE THIS
//8
// const rectangulo = 
// {
//     base : 2,
//     altura : 3
// }
// function CalcularArea(rectangulo) {
//     this.base = rectangulo.base,
//     this.altura = rectangulo.altura
//     return base * altura
// }
// console.log(CalcularArea(rectangulo));

//9
// const circulo = 
// {
//     radio : 3
// }
// function CalcularPerimetro(circulo) {
//     this.radio = circulo.radio
//     return 2 * 3.14 * radio
// }
// console.log(CalcularPerimetro(circulo));

//10
// const estudiante = 
// {
//     nombre : "Cristian",
//     edad : 36,
//     curso : "JavaScript"
// }
// function Presentarse(estudiante) {
//     this.nombre = estudiante.nombre,
//     this.edad = estudiante.edad,
//     this.curso = estudiante.curso
//     return "Hola me llamo " + nombre + " tengo " + edad + " años, y estoy haciendo el curso de " + curso
// }
// console.log(Presentarse(estudiante));

//METODOS Y OPERACIONES CON OBJETOS
//11
// const cuentaBancaria = 
// {
//     saldo : 100000,
//     titular : "Berta"
// }
// function Depositar(cuentaBancaria) {
//     this.saldo = cuentaBancaria.saldo,
//     this.monto = 50000
//     return monto + saldo
// }
// console.log(Depositar(cuentaBancaria));
// cuentaBancaria.saldo = Depositar(cuentaBancaria);

//12
// function Retirar(cuentaBancaria) {
//     this.saldo = cuentaBancaria.saldo,
//     this.monto = 25000
//     return saldo - monto
// }
// console.log(Retirar(cuentaBancaria));

//13
// const agenda = 
// {
//     contactos : []
// }
// let contacto = {
//     nombre: "Cristian",
//     telefono: 12345678
// }
// function agregarContacto(contacto) {
//     agenda.contactos.push(contacto)
// }
// let contacto1 = {
//     nombre: "Alejandro",
//     telefono: 87654321
// }
// function agregarContacto(contacto) {
//     agenda.contactos.push(contacto)
// }
// agregarContacto(contacto);
// agregarContacto(contacto1);
// console.log(agenda.contactos);

//14
// function buscarContacto(nombre) {
//     for (let i = 0; i < agenda.contactos.length; i++) {
//         if (agenda.contactos[i].nombre === nombre) {
//             return agenda.contactos[i];
//         }
//     }
//     return null
// }
// console.log(buscarContacto("Cristian"));

//OPERADOR IN Y FOR...IN
//15
// const frutas = {
//     manzana: 5,
//     pera: 5,
//     naranja: 10
// }
// console.log("manzana" in frutas);

//16
// for (const fruta in frutas){
//     console.log(fruta)
// }

//CLASES Y METODOS
//17
// class Rectangulos {
//     constructor(base, altura){
//         this.base = base,
//         this.altura = altura
//     }
//     calcularArea(){
//         console.log(this.base * this.altura);
//     }
// }
// const rectangulo = new Rectangulos(10, 2);
// console.log(rectangulo);
// rectangulo.calcularArea();

// //18
// class Circulos {
//     constructor(radio){
//         this.radio = radio
//     }
//     calcularPerimetro(){
//         console.log(2 * 3.14 * this.radio);
//     }
// }
// const circulo = new Circulos(3);
// console.log(circulo);
// circulo.calcularPerimetro();

// //19
// class Empleado {
//     constructor(nombre, edad, cargo){
//         this.nombre = nombre,
//         this.edad = edad,
//         this.cargo = cargo
//     }
//     promocionar(cargo){
//         this.cargo = cargo
//     }
// }
// const empleado = new Empleado("Cristian", 36, "Crew");
// console.log(empleado);
// empleado.promocionar("Entrenador");
// console.log(empleado);

//CONSTRUCTOR Y NEW
//20
// class Producto {
//     constructor(nombre, precio, cantidad){
//         this.nombre = nombre,
//         this.precio = precio,
//         this.cantidad = cantidad
//     }
// }
// const producto = new Producto("Televisor", 700000, 5);
// console.log(producto);

// //21
// class Estudiante {
//     constructor(nombre, edad, curso){
//         this.nombre = nombre,
//         this.edad = edad,
//         this.curso = curso
//     }
// }
// const estudiante = new Estudiante("Cristian", 35, "Java");
// console.log(estudiante);

// //22
// class Libro {
//     constructor(titulo, autor, anio){
//         this.titulo = titulo,
//         this.autor = autor,
//         this.anio = anio
//     }
// }
// const libro = new Libro("El visitante", "Brerta", 2010);
// console.log(libro);

//METODOS Y OPERACIONES CON OBJETOS
//23
// class Agenda {
//     constructor(){
//         this.contactos = []
//     }
//     agregarContactos(contacto){
//         this.contactos.push(contacto)
//     }
//     buscarContacto(nombre){
//         for (let contacto of this.contactos) {
//             if (contacto.nombre === nombre) {
//                 return contacto;
//             }
//         }
//         return null;
//     }
// }
// const agenda = new Agenda();
// let contacto1 = {
//     nombre: "Cristian",
//     telefono: 12345678
// }
// let contacto2 = {
//     nombre: "Ale",
//     telefono: 89456
// }
// agenda.agregarContactos(contacto1);
// agenda.agregarContactos(contacto2);
// console.log(agenda);
// console.log(agenda.buscarContacto("Ale"));

// //24 y 25
// class Vehiculo {
//     constructor(marca, modelo, anio){
//         this.marca = marca,
//         this.modelo = modelo,
//         this.anio = anio
//     }
//     detalles(){
//         console.log("Marca: " + this.marca + " Modelo: " + this.modelo + " Año: " + this.anio);
//     }
//     acelerar(){
//         console.log("El vehiculo esta acelerando")
//     }
// }
// const auto = new Vehiculo("Ford", "Falcon", 1988);
// auto.detalles();
// auto.acelerar();

// //27 y 28
// class Triangulos {
//     constructor(lado1, lado2, lado3, altura){
//         this.lado1 = lado1,
//         this.lado2 = lado2,
//         this.lado3 = lado3,
//         this.altura = altura
//     }
//     calcularArea(){
//         console.log("El area es de: " + this.lado1 * this.altura / 2)
//     }
//     calcularPerimetro(){
//         console.log("El perimetro es de: " + (this.lado1 + this.lado2 + this.lado3))
//     }
// }
// const triangulo = new Triangulos(10, 20, 30, 40);
// triangulo.calcularArea();
// triangulo.calcularPerimetro();

//OPERADOR IN Y FOR...IN
//29
const computadoras = {
    marca: 5,
    modelo: 5,
    procesador: 10
}
console.log("procesador" in computadoras);

//30
for (const computadora in computadoras){
    console.log(computadora)
}

//CLASES Y METODOS
//31
class Circulos {
    constructor(radio){
        this.radio = radio
    }
    calcularArea(){
        console.log("El area es: " + 3.14 * this.radio * this.radio);
    }
}
const circulo = new Circulos(10);
console.log(circulo);
circulo.calcularArea();

//32
class TrianguloEquilatero {
    constructor(lado){
        this.lado = lado
    }
    calcularPerimetro(){
        console.log("El perimetro es de: " + this.lado * 3)
    }
}
const triangulo = new TrianguloEquilatero(10);
triangulo.calcularPerimetro();