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
// function Producto(nombre, precio, cantidad) {
//     this.nombre = nombre;
//     this.precio = precio;
//     this.cantidad = cantidad;
// }
// let productos = [];

// productos.push(new Producto("Manzana", 5, 30));
// productos.push(new Producto("Banana", 3, 50));
// productos.push(new Producto("Naranja", 7, 20));

// console.log(productos);

//USO DE THIS CON ARRAYS
//8 y 9
// const rectangulo = {
//     base: 10,
//     altura: 5
// }
// function CalcularArea(rectangulo) {
//     this.base = rectangulo.base,
//     this.altura = rectangulo.altura
//     return base * altura
// }
// const Rectangulos = [
//     {base: 10, altura: 5},
//     {base: 15, altura: 2},
//     {base: 20, altura: 10}
// ]
// let areaPrimerRectangulo = CalcularArea(Rectangulos[1]);
// console.log("El área del primer rectangulo es: ", areaPrimerRectangulo);

//10
// const estudiante = {
//     nombre: "Cristian",
//     edad: 36,
//     curso: "Java"
// }
// function Presentarse(estudiante) {
//     this.nombre = estudiante.nombre,
//     this.curso = estudiante.curso
//     console.log("Hola me llamo " + nombre + " y estoy hacciendo el curso de " + curso)
// }
// const Estudiantes = [
//     {nombre: "Cristian", edad: 36, curso: "Java"},
//     {nombre: "Alejandro", edad: 36, curso: "C#"},
//     {nombre: "Berta", edad: 36, curso: "Web"}
// ]
// for (let i = 0; i < Estudiantes.length; i++) {
//     Presentarse(Estudiantes[i])
// }

//METODOS Y OPERACIONES CON OBJETOS Y ARRAYS
//11 y 12
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
// const Cuentas = [
//     cuentaBancaria,
//     {saldo: 2000, titular: "Alejandro"},
//     {saldo: 3000, titular: "Cristian"}
// ]
// console.log(Depositar(Cuentas[0]));

// function Retirar(cuentaBancaria) {
//     this.saldo = cuentaBancaria.saldo,
//     this.monto = 2000
//     return saldo - monto
// }
// console.log(Retirar(Cuentas[1]));

//13 y 14
// const Agenda = 
// {
//     contactos: [],
//     agregarContacto(contacto) {
//         this.contactos.push(contacto)
//     },
//     buscarContacto(nombre) {
//         for (let i = 0; i < this.contactos.length; i++) {
//             if (this.contactos[i].nombre === nombre) {
//                 return this.contactos[i];
//             }
//         }
//         return null
//     }
// }
// const Agendas = [
//     {contactos: [], agregarAgenda: Agenda.agregarContacto, buscarContacto: Agenda.buscarContacto},
//     {contactos: [], agregarAgenda: Agenda.agregarContacto, buscarContacto: Agenda.buscarContacto},
//     {contactos: [], agregarAgenda: Agenda.agregarContacto, buscarContacto: Agenda.buscarContacto}
// ]
// let contacto = {
//     nombre: "Cristian",
//     telefono: 12345678
// }
// let contacto1 = {
//     nombre: "Alejandro",
//     telefono: 87654321
// }
// Agendas[0].agregarAgenda(contacto);
// Agendas[0].agregarAgenda(contacto1);
// Agendas[1].agregarAgenda(contacto);
// console.log(Agendas);
// console.log(Agendas[1].buscarContacto("Cristian"));

//OPERADOR IN Y FOR...IN CON ARRAYS
//15
// const frutas = {
//     manzana: 5,
//     pera: 5,
//     naranja: 10
// }
// console.log("manzana" in frutas);
// const Frutas = ["manzana", "pera", "naranja"];
// console.log(Frutas.includes("naranja"));

//16
// for (const fruta in frutas){
//     console.log(fruta)
// }
// for (const fruta in Frutas){
//     console.log(Frutas[fruta])
// }

//CLASES Y METODOS CON ARRAYS
//17 18 19
// class Rectangulo {
//     constructor(base, altura){
//         this.base = base,
//         this.altura = altura
//     }
//     calcularArea(){
//         console.log(this.base * this.altura);
//     }
// }
// const Rectangulos = [
//     new Rectangulo(10, 2),
//     new Rectangulo(5, 3),
//     new Rectangulo(8, 2)
// ]
// console.log(Rectangulos);
// let rectangulo = Rectangulos[0]
// rectangulo.calcularArea();

//CONSTRUCTOR Y NEW CON ARRAYS
//20 21 22
// class Producto {
//     constructor(nombre, precio, cantidad){
//         this.nombre = nombre,
//         this.precio = precio,
//         this.cantidad = cantidad
//     }
// }
// const Productos = [];
// const producto = new Producto("Televisor", 700000, 5);
// const producto1 = new Producto("Tele", 700000, 5);
// const producto2 = new Producto("Smart", 700000, 5);
// Productos.push(producto);
// Productos.push(producto1);
// Productos.push(producto2);
// console.log(Productos);

//OBJETOS Y OBTENER VALORES CON ARRAYS
//23 24 25 26
// class Producto {
//     constructor(nombre, precio, cantidad){
//         this.nombre = nombre,
//         this.precio = precio,
//         this.cantidad = cantidad
//     }
// }
// let productos = [
//     new Producto("Cristian", 500, 5),
//     new Producto("Alejandro", 50, 10),
//     new Producto("Berta", 1500, 50)
// ]
// console.log(productos[1].nombre);
// productos.push(new Producto("Roberto", 15500, 510));
// console.log(productos[2].precio);

//OBJETOS CONSTRUCTORES Y CONSTRUCTOR Y NEW CON ARRAYS
//27 28 29
// class CuentaBancaria {
//     constructor(saldo, titular){
//         this.saldo = saldo,
//         this.titular = titular
//     }
// }
// let Cuentas = [
//     new CuentaBancaria(1000, "Cristian"),
//     new CuentaBancaria(2000, "Alejandro"),
//     new CuentaBancaria(3000, "Berta")
// ]
// console.log(Cuentas);

//USO DE THIS CON ARRAYS
//30 31 32
// class Triangulo {
//     constructor(lado1, lado2, lado3, altura){
//         this.lado1 = lado1,
//         this.lado2 = lado2,
//         this.lado3 = lado3
//     }
//     calcularPerimetro(){
//         console.log("El perimetro es de: " + (this.lado1 + this.lado2 + this.lado3))
//     }
// }
// let Triangulos = [
//     new Triangulo(10, 20, 30),
//     new Triangulo(100, 200, 300),
//     new Triangulo(101, 202, 303),
//     new Triangulo(105, 205, 305),
// ]
// console.log(Triangulos[2].calcularPerimetro());

//METODOS Y OPERACIONES CON OBJETOS Y ARRAYS
//33 34 35
// const Playlist = 
// {
//     canciones: [],
//     agregarCancion(cancion) {
//         this.canciones.push(cancion)
//     },
//     eliminarCancion(cancion) {
//         const a = this.canciones.indexOf(cancion);
//         if (a > -1) {
//             this.canciones.splice(a, 1);
//         }
//         else{
//             console.log("No existe");        
//         }
//     }
// }
// let Canciones = [
//     {canciones: [], agregarCancion: Playlist.agregarCancion, eliminarCancion: Playlist.eliminarCancion},
//     {canciones: [], agregarCancion: Playlist.agregarCancion, eliminarCancion: Playlist.eliminarCancion},
//     {canciones: [], agregarCancion: Playlist.agregarCancion, eliminarCancion: Playlist.eliminarCancion},
// ]
// Canciones[0].agregarCancion("cancion1");
// Canciones[0].agregarCancion("cancion2");
// Canciones[1].agregarCancion("cancion3");
// Canciones[1].agregarCancion("cancion4");
// Canciones[2].agregarCancion("cancion5");
// Canciones[2].agregarCancion("cancion6");
// console.log(Canciones);
// Canciones[1].eliminarCancion("cancion3");
// console.log(Canciones);

//OPERADOR IN Y FOR..IN CON ARRAYS
//36 37
// const colores = {
//     rojo: 5,
//     verde: 5,
//     azul: 10
// }
// console.log("verde" in colores);
// const Colores = ["rojo", "verde", "azul"];
// console.log(Colores.includes("verde"));

// for (const color in colores){
//     console.log(color)
// }
// for (const color in Colores){
//     console.log(Colores[color])
// }

//CLASES Y METODOS CON ARRAYS
//38 39 40
// class Cuadrado {
//     constructor(lado){
//         this.lado = lado
//     }
//     calcularArea(){
//         console.log(this.lado * 4);
//     }
// }
// const Cuadrados = [
//     new Cuadrado(10),
//     new Cuadrado(3),
//     new Cuadrado(82)
// ]
// console.log(Cuadrados);
// let cuadrado = Cuadrados[0]
// cuadrado.calcularArea();

//Ejercicio Integrado de JavaScript con Objetos, Clases y Arrays
//41 Crea una clase llamada `TiendaOnline` que contenga arrays de productos y clientes.
//Los productos deben tener propiedades como `nombre`, `precio` y `cantidad`,
//mientras que los clientes deben tener propiedades como `nombre`, `email` y `dirección`.
//Agrega métodos a la clase `TiendaOnline` para agregar un producto nuevo, agregar un cliente nuevo,
//realizar una venta (que disminuya la cantidad disponible del producto)
//y enviar un correo electrónico de confirmación al cliente después de una venta.
//Luego, crea una instancia de `TiendaOnline`, agrega algunos productos y clientes,
//realiza una venta y envía un correo electrónico de confirmación al cliente.
class TiendaOnline {
    constructor() {
        this.productos = [];
        this.clientes = [];
    }
    //Funcion para agregar un producto nuevo
    agregarProducto(nombre, precio, cantidad) {
        this.productos.push({nombre, precio, cantidad});
        console.log("Producto añadido: " + nombre + " Precio: " + precio + " Cantidad: " + cantidad);
    }
    //Funcion para agregar un cliente nuevo
    agregarCliente(nombre, email, direccion) {
        this.clientes.push({nombre, email, direccion});
        console.log("Cliente añadido: " + nombre + " Email: " + email + " Direccion: " + direccion);
    }
    //Funcion para enviar un email
    enviarEmail(nombreCliente, nombreProducto) {
        const cliente = this.clientes.find(c => c.nombre === nombreCliente);
        if (cliente) {
            console.log("Correo de confirmación enviado a " + cliente.email);
        } else {
            console.log("Cliente no encontrado: " + nombreCliente);
        }
    }
    //Funcion para realizar una venta
    venta(nombreProducto, nombreCliente) {
        // Buscar el producto
        const producto = this.productos.find(p => p.nombre === nombreProducto);
        if (producto && producto.cantidad > 0) {
            // Disminuir la cantidad disponible del producto
            producto.cantidad--;
            console.log("Venta realizada: " + nombreProducto + " Cantidad: " + producto.cantidad);
            // Enviar correo de confirmación al cliente
            this.enviarEmail(nombreCliente, nombreProducto);
        } else {
            console.log("Producto no disponible o fuera de stock: " + nombreProducto);
        }
    }
}
const tienda = new TiendaOnline();

tienda.agregarProducto("Laptop", 1000, 5);
tienda.agregarProducto("Smart", 500, 10);
tienda.agregarProducto("Tablet", 300, 7);

tienda.agregarCliente("Juan", "juan@gmail", "Calle 123");
tienda.agregarCliente("Maria", "maria@gmail", "Avenida 456");

tienda.venta("Laptop", "Juan");