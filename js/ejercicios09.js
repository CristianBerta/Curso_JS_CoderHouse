//SELECCCION DE ELEMENTOS
//1.Usa `document.getElementById` para seleccionar un elemento con el ID `titulo`
//y muestra su contenido en la consola.
const titulo = document.getElementById("titulo");
console.log(titulo.textContent);

//2.Usa `document.getElementsByClassName` para seleccionar todos los elementos con la clase `item`
//y muestra su número en la consola.
const elementos = document.getElementsByClassName("item");
console.log(elementos.length);

//3.Usa `document.getElementsByTagName` para seleccionar todos los elementos `<p>` y muestra su número en la consola.
const parrafos = document.getElementsByTagName("p");
console.log(parrafos.length);

//4.Usa `document.querySelector` para seleccionar el primer elemento con la clase `item`
//y cambia su color de fondo a azul.
const primerItem = document.querySelector(".item");
primerItem.style.backgroundColor = "blue";

//5.Usa `document.querySelectorAll` para seleccionar todos los elementos con la clase `item`
//y cambia su color de texto a rojo.
const items = document.querySelectorAll(".item");
items.forEach((item) => {
    item.style.color = "red";
});

//CREACION DE ELEMENTOS
//6.Usa `document.createElement` para crear un nuevo `<div>` y añadirlo al cuerpo del documento.
const nuevoDiv = document.createElement("div");
document.body.appendChild(nuevoDiv);

//7.Usa `document.createElement` y `innerText` para crear un nuevo `<p>` con texto y añadirlo al cuerpo del documento.
const nuevoParrafo = document.createElement("p");
nuevoParrafo.innerText = "Nuevo párrafo";
document.body.appendChild(nuevoParrafo);

//8.Usa `document.createElement` y `setAttribute` para crear un nuevo `<img>` con un atributo `src`
//y añadirlo al cuerpo del documento.
const nuevaImagen = document.createElement("img");
nuevaImagen.setAttribute("src", "imagen.jpg");
document.body.appendChild(nuevaImagen);

//9.Crea un nuevo botón `<button>` con el texto "Click me" y añádelo al cuerpo del documento.
const nuevoBoton = document.createElement("button");
nuevoBoton.textContent = "Click me";
document.body.appendChild(nuevoBoton);

//10.Usa `document.createElement` y `appendChild` para crear un nuevo `<li>`
//y añadirlo a una lista `<ul>` existente con el ID `lista`.
const nuevoLi = document.createElement("li");
const lista = document.getElementById("lista");
lista.appendChild(nuevoLi);

//APLICAR ESTILOS
//11.Usa `getElementById` para seleccionar un elemento con el ID `titulo` y cambia su color de fondo a amarillo.
const titulo1 = document.getElementById("titulo");
titulo.style.backgroundColor = "yellow";

//12.Usa `querySelector` para seleccionar un elemento con la clase `item`
//y aplica varios estilos (color de texto, tamaño de fuente, y margen).
const item = document.querySelector(".item");
item.style.color = "blue";
item.style.fontSize = "20px";
item.style.margin = "10px";

//13.Usa `classList.add` para añadir la clase `activo` a un elemento con el ID `titulo`.
const titulo = document.getElementById("titulo");
titulo.classList.add("activo");

//14.Usa `classList.remove` para eliminar la clase `activo` de un elemento con la clase `item`.
const item = document.querySelector(".item");
item.classList.remove("activo");

//15.Usa `classList.toggle` para alternar la clase `activo` en un elemento con el ID `boton`.
const boton = document.getElementById("boton");
boton.classList.toggle("activo");

//CREAR Y MANIPULAR LISTAS
//16.Usa `createElement` para crear una lista `<ul>`
//y añade varios elementos `<li>` con texto, luego añade la lista al cuerpo del documento.
const listaDesordenada = document.createElement("ul");
for (let i = 1; i <= 3; i++) {
    const nuevoLi = document.createElement("li");
    nuevoLi.textContent = `Elemento ${i}`;
    listaDesordenada.appendChild(nuevoLi);
}
document.body.appendChild(listaDesordenada);

//17.Usa `createElement` para crear una lista `<ol>`
//y añade varios elementos `<li>` con texto, luego añade la lista al cuerpo del documento.
const listaOrdenada = document.createElement("ol");
for (let i = 1; i <= 3; i++) {
    const nuevoLi = document.createElement("li");
    nuevoLi.textContent = `Elemento ${i}`;
    listaOrdenada.appendChild(nuevoLi);
}
document.body.appendChild(listaOrdenada);

//18.Dado un array de nombres, usa un bucle para crear una lista `<ul>`
//y añade un `<li>` por cada nombre en el array, luego añade la lista al cuerpo del documento.
const nombres = ["Juan", "María", "Carlos"];
const lista1 = document.createElement("ul");
nombres.forEach((nombre) => {
    const li = document.createElement("li");
    li.textContent = nombre;
    lista.appendChild(li);
});
document.body.appendChild(lista);

//19.Usa `createElement` y `appendChild` para añadir un nuevo `<li>` a una lista `<ul>` existente con el ID `lista`.
const nuevoLi1 = document.createElement("li");
nuevoLi1.textContent = "Nuevo elemento";
const lista2 = document.getElementById("lista");
lista.appendChild(nuevoLi1);

//20.Usa `removeChild` para eliminar el último `<li>` de una lista `<ul>` con el ID `lista`.
const lista3 = document.getElementById("lista");
const ultimoElemento = lista3.lastElementChild;
lista.removeChild(ultimoElemento);

//EJERCICIOS INTERMEDIOS
//21.Crea un formulario con un campo de texto y un botón que permita añadir elementos a una lista de tareas.
//Cada tarea debe tener un botón para eliminarla.
const formulario = document.querySelector("form");
const input = document.querySelector("input");
const lista4 = document.querySelector("ul");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    const tarea = document.createElement("li");
    tarea.textContent = input.value;
    lista4.appendChild(tarea);
    input.value = "";
});

//22.Crea un array de URLs de imágenes y usa un bucle para crear una galería de imágenes en el DOM.
//Cada imagen debe estar dentro de un contenedor `<div>`.
const imagenes = ["imagen1.jpg", "imagen2.jpg", "imagen3.jpg"];
const contenedor = document.getElementById("galeria");

imagenes.forEach((url) => {
    const imagen = document.createElement("img");
    imagen.src = url;
    contenedor.appendChild(imagen);
});

//23.Crea una tabla con una fila de encabezado y varias filas de datos generadas a partir de un array de objetos.
//Añade la tabla al cuerpo del documento.
const datos = [
    { nombre: "Juan", edad: 30 },
    { nombre: "María", edad: 25 },
    { nombre: "Carlos", edad: 35 },
];
const tabla = document.createElement("table");
const encabezado = document.createElement("tr");
for (const key in datos[0]) {
    const th = document.createElement("th");
    th.textContent = key;
    encabezado.appendChild(th);
}
tabla.appendChild(encabezado);
datos.forEach((dato) => {
    const fila = document.createElement("tr");
    for (const key in dato) {
        const celda = document.createElement("td");
        celda.textContent = dato[key];
        fila.appendChild(celda);
    }
    tabla.appendChild(fila);
});
document.body.appendChild(tabla);

//24.Crea un formulario de registro con campos de texto para nombre, email y contraseña.
//Al enviar el formulario, muestra un mensaje de bienvenida que incluya el nombre ingresado.
const formulario1 = document.querySelector("form");
formulario1.addEventListener("submit", function (event) {
    event.preventDefault();
    const nombre = document.querySelector("#nombre").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const mensaje = document.createElement("p");
    mensaje.textContent = `Bienvenido, ${nombre}!`;
    document.body.appendChild(mensaje);
});

//25.Crea una calculadora simple con botones para los números y operaciones básicas (+, -, *, /).
//Muestra el resultado en un campo de texto al presionar el botón de igual (=).
const botonIgual = document.getElementById("igual");
const resultado = document.getElementById("resultado");

botonIgual.addEventListener("click", function () {
    resultado.value = eval(resultado.value);
});

//EJERCICIOS AVANZADOS
//26.Genera una tabla de multiplicar (del 1 al 10) usando elementos `<table>`, `<tr>`, y `<td>`
//y añádela al cuerpo del documento.
const tabla1 = document.createElement("table");
for (let i = 1; i <= 10; i++) {
    const fila = document.createElement("tr");
    for (let j = 1; j <= 10; j++) {
        const celda = document.createElement("td");
        celda.textContent = i * j;
        fila.appendChild(celda);
    }
    tabla1.appendChild(fila);
}
document.body.appendChild(tabla1);

//27.Usa un array de objetos para crear una lista de productos.
//Cada producto debe tener atributos como `nombre`, `precio` y `cantidad`, y mostrarlos en una lista `<ul>`.
const productos = [
    { nombre: "Producto 1", precio: 10, cantidad: 5 },
    { nombre: "Producto 2", precio: 20, cantidad: 3 },
    { nombre: "Producto 3", precio: 15, cantidad: 8 },
];
const lista5 = document.createElement("ul");
productos.forEach((producto) => {
    const li = document.createElement("li");
    li.textContent = `${producto.nombre} - Precio: ${producto.precio} - Cantidad: ${producto.cantidad}`;
    lista5.appendChild(li);
});
document.body.appendChild(lista5);

//28.Crea una página de perfil que muestre la información de un usuario.
//Usa objetos para almacenar la información del usuario y actualiza el DOM para mostrar esta información.
const usuario = {
    nombre: "Juan",
    apellido: "Pérez",
    edad: 30,
    correo: "juan@example.com",
};
const perfil = document.createElement("div");
perfil.innerHTML = `
        <h2>Perfil de Usuario</h2>
        <p>Nombre: ${usuario.nombre}</p>
        <p>Apellido: ${usuario.apellido}</p>
        <p>Edad: ${usuario.edad}</p>
        <p>Correo: ${usuario.correo}</p>
    `;
document.body.appendChild(perfil);

//29.Crea una galería de imágenes donde cada imagen tenga un título.
//Usa arrays para almacenar las URLs y los títulos, y genera el HTML dinámicamente.
const imagenes1 = [
    { url: "imagen1.jpg", titulo: "Imagen 1" },
    { url: "imagen2.jpg", titulo: "Imagen 2" },
    { url: "imagen3.jpg", titulo: "Imagen 3" },
];
const galeria = document.createElement("div");
imagenes1.forEach((imagen) => {
    const contenedor = document.createElement("div");
    const img = document.createElement("img");
    const titulo = document.createElement("h3");
    img.src = imagen.url;
    titulo.textContent = imagen1.titulo;
    contenedor.appendChild(img);
    contenedor.appendChild(titulo);
    galeria.appendChild(contenedor);
});
document.body.appendChild(galeria);

//30.Crea un formulario de contacto con campos para nombre, email, asunto y mensaje.
//Al enviar el formulario, muestra un resumen de los datos ingresados en una nueva sección del DOM.
const formulario2 = document.querySelector("form");
formulario2.addEventListener("submit", function (event) {
    event.preventDefault();
    const nombre = document.querySelector("#nombre").value;
    const email = document.querySelector("#email").value;
    const asunto = document.querySelector("#asunto").value;
    const mensaje = document.querySelector("#mensaje").value;
    const resumen = document.createElement("div");
    resumen.innerHTML = `
        <h2>Resumen del Formulario</h2>
        <p>Nombre: ${nombre}</p>
        <p>Email: ${email}</p>
        <p>Asunto: ${asunto}</p>
        <p>Mensaje: ${mensaje}</p>
    `;
    document.body.appendChild(resumen);
});