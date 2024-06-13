//OPERADORES TERNARIOS
//1
// let x = 9;
// let resultado = (x > 10) ? 'x es mayor que 10' : 'x es menor que 10';
// console.log(resultado);
//2
// let edad = 20;
// let mensaje = (edad > 18) ? 'Es mayor de edad' : 'Es menor de edad';
// console.log(mensaje);
//3
// const persona = {
//     nombre: "",
//     edad: 36
// }
// let disponibilidad = (persona.nombre) ? 'Nombre disponible' : 'Nombre no disponible';
// console.log(disponibilidad);
//4
// let nota = 5;
// let evaluacion = (nota >= 6) ? 'Aprobado' : 'Reprobado';
// console.log(evaluacion);
//5
// let isActive = false;
// let estado = (isActive) ? 'Activo' : 'Inactivo';
// console.log(estado);

//OPERADOR LOGICO && o AND
//6
// let a = true;
// let b = true;
// a === b && console.log("Son verdaderas");
//7
// let a = "tiene valor";
// let b = a && 8 ;
// console.log(b);
//8
// let email = "qwer";
// let password = 1234;
// let validacion = email && password && 'Enviar formulario';
// console.log(validacion);
//9
// let user = "Cris";
// function logIn() {
//     console.log("funcion logIn");
// }
// user && logIn();
//10
// const config = {
//     nombre: "Cristian",
//     edad: 36
// }
// config && console.log(config.edad);

//OPERADORES LOGICOS || o OR
//11
// let username = "";
// let usuario = username || "usuario";
// console.log(usuario);
//12
// let opcion1 = "opcion1";
// let opcion2 = "opcion2";
// let seleccion = opcion1 || opcion2;
// console.log(seleccion);
//13
// let connection = "";
// let variable = connection || "valor por defecto";
// console.log(variable);
//14
// let variable1 = "";
// let variable2 = variable1 || "valor por defecto";
// console.log(variable2);
//15
// const settings = {
//     nombre: "cris"
// };
// let variable = settings.nombre || "valor por defecto";
// console.log(variable);

//OPERADOR LOGICO ?? o NULLISH
//16
// let username = "";
// let usuario = username ?? "usuario";
// console.log(usuario);
//17
// let variable1 = "";
// let variable2 = variable1 ?? "valor por defecto";
// console.log(variable2);
//18
// let dato = "";
// let variable = dato ?? "valor por defecto";
// console.log(variable);
//19
// let input = "input";
// let seleccion = opcion1 ?? "sin datos";
// console.log(seleccion);
//20

//ACCESO CONDICIONAL A UN OBJETO
//21
//let persona;
// const persona = {
//     nombre: "cristian"
// }
// console.log(persona?.nombre || "No existe");
//22
//let user;
// const user = {
//     getDatails: function() {
//         return "funcion get"
//     }
// }
// let funcion = user?.getDatails() || "No existe";
// console.log(funcion);
//23
//let usuario;
// const usuario = {
//     direccion: {
//         ciudad: "varela"
//     }
// }
// console.log(usuario?.direccion?.ciudad || "No existe");
//24
// const cliente = {
//     email: "alhsc"
// }
// let estado = cliente?.email? 'email disponible' : 'email no disponible';
// console.log(estado);
//25
// let items = [];
// let items = [1, 2, 3];
// let elem =  items?.[0];
// console.log(elem);

//DESESTRUCTURACION DE OBJETOS
//26
// const persona = {
//     nombre: "cristian",
//     edad: 36
// }
// let {nombre, edad} = persona;
// console.log(nombre);
// console.log(edad);
//27
// const auto = {
//     marca: "cristian",
//     modelo: 36
// }
// let {marca: autoMarca, modelo: autoModelo} = auto;
// console.log(autoMarca);
//28
// const usuario = {
//     pais: "",
//     modelo: 36
// }
// let {pais, modelo} = usuario;
// pais = "desconocido";
// console.log(pais);
//29
// const cliente = {
//     direccion: {
//         ciudad: "varela"
//     }
// }
// let {direccion: {ciudad}} = cliente;
// console.log(ciudad);
//30
// let persona = {
//     nombre: 'Carlos',
//     edad: 30,
//     ocupacion: 'Ingeniero',
//     ciudad: 'Madrid'
// };
// let { nombre, ...resto } = persona;
// console.log(nombre);
// console.log(resto);

//DESESTRUCTURACION DE OBJETOS EN PARAMETROS

//DESESTRUCTURACION DE ARRAYS