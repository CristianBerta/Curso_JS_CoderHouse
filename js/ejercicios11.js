//ejercicio1
// const boton = document.getElementById('miBoton');
// boton.addEventListener('click', function() {
//     alert("¡Cliqueaste el boton!");
// });

//ejercicio2
// const boton = document.getElementById('miBoton');
// const parrafo = document.getElementById('miParrafo');
// boton.addEventListener('click', function() {
//     parrafo.textContent = '¡El párrafo del ejercicio 2 se modifico!';
// });

//ejercicio3
// const boton = document.getElementById('miBoton');
// const lista = document.getElementById('lista');
// boton.addEventListener('click', function(){
//     const nuevoElemento = document.createElement('li');
//     nuevoElemento.textContent = 'Nuevo Elemento';
//     lista.appendChild(nuevoElemento);
// });

//ejercicio4
// const boton = document.getElementById('miBoton');
// boton.addEventListener('click', function(){
//     document.body.style.background = 'red';
// });

//ejercicio5
// const boton = document.getElementById('miBoton');
// const div = document.getElementById('div');
// boton.addEventListener('click', function() {
//     if (div.style.display === 'none') {
//         div.style.display = 'block';
//     } else {
//         div.style.display = 'none';
//     }
// });

//ejercicio6
// const input = document.getElementById('input');
// const boton = document.getElementById('miBoton');
// const div = document.getElementById('div');
// boton.addEventListener('click', function() {
//     const texto = input.value;
//     div.textContent = texto;
// });

//ejercicio7
// const boton = document.getElementById('miBoton');
// const imagen = document.getElementById('img');
// boton.addEventListener('click', function(){
//     if (imagen.src.endsWith('img/img1.jpg')) {
//         imagen.src = 'img/img2.jpg';
//     } else {
//         imagen.src = 'img/img1.jpg';
//     }
// })

//ejercicio8
// const boton = document.getElementById('miBoton');
// const elemento = document.getElementById('elemento');
// boton.addEventListener('click', function() {
//     elemento.classList.add('nuevoEstilo');
// });

//ejercicio9
// const boton = document.getElementById('miBoton');
// const tabla = document.getElementById('tabla');
// boton.addEventListener('click', function(){
//     const nuevaFila = document.createElement('tr');
//     const nuevaCelda1 = document.createElement('td');
//     const nuevacelda2 = document.createElement('td');
//     nuevaCelda1.textContent = 'Mirna';
//     nuevacelda2.textContent = 'Berta';
//     nuevaFila.appendChild(nuevaCelda1);
//     nuevaFila.appendChild(nuevacelda2);
//     tabla.appendChild(nuevaFila);
// })

//ejercicio10
// const select = document.getElementById('select');
// const boton = document.getElementById('miBoton');
// const parrafo = document.getElementById('parrafo');
// boton.addEventListener('click', function() {
//     const valorSeleccionado = select.value;
//     parrafo.textContent = "Eligio la " + valorSeleccionado;
// });

//ejercicio11 y 12
// const boton = document.getElementById('boton');
// const div = document.getElementById('div')
// boton.addEventListener('click', function(){
//     localStorage.setItem("Elemento", "nuevo elemento");
//     let elementoLocal = localStorage.getItem("Elemento");
// div.textContent = elementoLocal;
// });

//ejercio13 y 14
// const boton = document.getElementById('boton');
// const div = document.getElementById('div')
// boton.addEventListener('click', function(){
//     sessionStorage.setItem("Elemento", "nuevo elemento");
//     let elementoLocal = sessionStorage.getItem("Elemento");
//     div.textContent = elementoLocal;
// });

//ejercicio15 y 16
// const persona = {
//     nombre: "cristian",
//     apellido: "berta"
// }
// const objetoJSON = JSON.stringify(persona);
// localStorage.setItem("persona", objetoJSON);
// const objetoRecuperado = JSON.parse(localStorage.getItem("persona"));
// const div = document.getElementById('div');
// div.textContent = "Nombre: " + objetoRecuperado.nombre + " Apellido: " + objetoRecuperado.apellido;

//ejercicio17 y 18
// localStorage.setItem("animal", "perro");
// localStorage.setItem("color", "rojo");
// const boton = document.getElementById('boton');
// boton.addEventListener('click', function(){
//     localStorage.removeItem("animal");
// });

//ejercicio19 y 20
// const array = [1, 2, 3, 4];
// const lista = document.getElementById('lista');
// localStorage.setItem("lista", JSON.stringify(array));
// const listaRecuperada = JSON.parse(localStorage.getItem("lista"));
// //lista.innerHTML = '';
// listaRecuperada.forEach(element => {
//     const li = document.createElement('li');
//     li.textContent = element;
//     lista.appendChild(li);
// });

//ejercicio21
// const numeros = [1, 3, 2, 5, 4];
// const div1 = document.getElementById('div1');
// const div2 = document.getElementById('div2');
// const div3 = document.getElementById('div3');
// const div4 = document.getElementById('div4');
// const div6 = document.getElementById('div6');
// const div7 = document.getElementById('div7');
// const div8 = document.getElementById('div8');
// const div9 = document.getElementById('div9');
// div1.textContent = numeros;
//22
// numeros.push(6);
// div2.textContent = "Se agrego el numero: " + numeros[numeros.length - 1];
//23
// const numeroEliminado = numeros.pop();
// div3.textContent = "Se elimino el numero: " + numeroEliminado;
//24
// numeros.sort();
// div4.textContent = numeros;
//25
// const lista = document.getElementById('lista')
// numeros.forEach(element => {
//     const li = document.createElement('li');
//     li.textContent = element;
//     lista.appendChild(li);
// });
//26
// const numPares = numeros.filter((element) => element%2 === 0);
// div6.textContent = "Los numeros pares son: " + numPares;
//27
// const numSumados = numeros.reduce((acumulador, element) => acumulador + element, 0);
// div7.textContent = "La suma de todos los nros da: " + numSumados;
//28
// const numMultiplicados = numeros.reduce((acumulador, element) => acumulador * element, 1);
// div8.textContent = "La multiplicacion de todos los nros da: " + numMultiplicados;
//29
// const numDuplicados = numeros.map((element) => element*2);
// div9.textContent = numDuplicados;

//ejercicios sobre objetos
//31
// const estudiante = {
//     nombre: "Cristian",
//     edad: 36,
//     curso: "Java"
// };
// const div1 = document.getElementById('div1');
// div1.textContent = "Nombre: " + estudiante.nombre + " Edad: " + estudiante.edad;
// //32
// estudiante.apellido = "Berta";
// const div2 = document.getElementById('div2');
// div2.textContent = "Propiedad agregada = Apellido: " + estudiante.apellido;
// //33
// const propiedadEliminada = estudiante.apellido;
// delete estudiante.apellido;
// const div3 = document.getElementById('div3');
// div3.textContent = "Propiedad eliminada = Apellido: " + propiedadEliminada;
// //34
// const lista4 = document.getElementById('lista4');
// for(const propiedad in estudiante){
//     const li = document.createElement('li');
//     li.textContent = propiedad + ":" + estudiante[propiedad];
//     lista4.appendChild(li);
// }
// //35
// const estudiantes = [
//     { nombre: 'Cristian', edad: 36, curso: 'Java' },
//     { nombre: 'Ana', edad: 18, curso: 'C#' },
//     { nombre: 'Luis', edad: 21, curso: 'PHP' }
// ];
// const tabla5 = document.getElementById('tabla5');
// estudiantes.forEach(estudiante => {
//     const fila = document.createElement('tr');
//     const celdaNombre = document.createElement('td');
//     celdaNombre.textContent = estudiante.nombre;
//     fila.appendChild(celdaNombre);
//     const celdaEdad = document.createElement('td');
//     celdaEdad.textContent = estudiante.edad;
//     fila.appendChild(celdaEdad);
//     const celdaCurso = document.createElement('td');
//     celdaCurso.textContent = estudiante.curso;
//     fila.appendChild(celdaCurso);
//     tabla5.appendChild(fila);
// })
// //36
// const lista6 = document.getElementById('lista6');
// const mayores18 = estudiantes.filter((estudiante) => estudiante.edad > 18);
// mayores18.forEach(element => {
//     const li = document.createElement('li');
//     li.textContent = "Nombre: " + element.nombre + " Edad: " + element.edad;
//     lista6.appendChild(li)
// });
// //37
// const lista7 = document.getElementById('lista7');
// const nombres = estudiantes.map((element) => element.nombre);
// nombres.forEach(element => {
//     const li = document.createElement('li');
//     li.textContent = "Nombre: " + element;
//     lista7.appendChild(li)
// });
// //38
// localStorage.setItem("estudiante", JSON.stringify(estudiante));
// //39
// const div9 = document.getElementById('div9');
// const estudianteRecuperado = JSON.parse(localStorage.getItem("estudiante"));
// div9.textContent = "Nombre: " + estudianteRecuperado.nombre + " Edad: " + estudianteRecuperado.edad;
// //40
// sessionStorage.setItem("estudiantes", JSON.stringify(estudiantes));
// const estudiantesRecuperado = JSON.parse(sessionStorage.getItem("estudiantes"));
// const tabla10 = document.getElementById('tabla10');
// estudiantesRecuperado.forEach(estudiante => {
//     const fila = document.createElement('tr');
//     const celdaNombre = document.createElement('td');
//     celdaNombre.textContent = estudiante.nombre;
//     fila.appendChild(celdaNombre);
//     const celdaEdad = document.createElement('td');
//     celdaEdad.textContent = estudiante.edad;
//     fila.appendChild(celdaEdad);
//     const celdaCurso = document.createElement('td');
//     celdaCurso.textContent = estudiante.curso;
//     fila.appendChild(celdaCurso);
//     tabla10.appendChild(fila);
// });

//EJERCICIOS INTEGRADOS
//1
//Elementos del DOM
// const agregar = document.getElementById('agregar');
// const tareaNueva = document.getElementById('nuevaTarea');
// const listaTareas = document.getElementById('listaTareas');
// //Funciones
// function guardarTareas(tareas) {
//     localStorage.setItem('tareas', JSON.stringify(tareas));
// }
// function obtenerTareas() {
//     const tareas = localStorage.getItem('tareas');
//     return tareas ? JSON.parse(tareas) : [];
// }
// function agregarTarea(tarea) {
//     const tareas = obtenerTareas();
//     tareas.push({ texto: tarea, completada: false });
//     guardarTareas(tareas);
//     mostrarTareas();
// }
// function eliminarTarea(index) {
//     const tareas = obtenerTareas();
//     tareas.splice(index, 1);
//     guardarTareas(tareas);
//     mostrarTareas();
// }
// function marcarCompletada(index) {
//     const tareas = obtenerTareas();
//     tareas[index].completada = !tareas[index].completada;
//     guardarTareas(tareas);
//     mostrarTareas();
// }
// function mostrarTareas() {
//     const tareas = obtenerTareas();
//     listaTareas.innerHTML = '';
//     tareas.forEach((tarea, index) => {
//         const li = document.createElement('li');
//         li.textContent = tarea.texto;
//         li.classList.toggle('completada', tarea.completada);
//         const completada = document.createElement('button');
//         completada.textContent = 'Completada';
//         completada.addEventListener('click', () => marcarCompletada(index));

//         const eliminarBtn = document.createElement('button');
//         eliminarBtn.textContent = 'Eliminar';
//         eliminarBtn.addEventListener('click', (e) => {
//             e.stopPropagation();
//             eliminarTarea(index);
//         });

//         li.appendChild(completada);
//         li.appendChild(eliminarBtn);
//         listaTareas.appendChild(li);
//     });
// }
// //Configuracion del boton Agregar
// agregar.addEventListener('click', () => {
//     const nuevaTarea = tareaNueva.value.trim();
//     if (nuevaTarea) {
//         agregarTarea(nuevaTarea);
//         tareaNueva.value = '';
//     }
// });
// // Mostrar las tareas al cargar la página
// mostrarTareas();

//2
//Elementos del DOM
// const formulario = document.getElementById('formulario');
// const indiceInput = document.getElementById('indice');
// const nombreInput = document.getElementById('nombre');
// const edadInput = document.getElementById('edad');
// const cursoInput = document.getElementById('curso');
// const listaEstudiantes = document.getElementById('listaEstudiantes');
// const guardarBoton = document.getElementById('guardarBoton');

// //Funciones
// function guardarEstudiantes(estudiantes) {
//     localStorage.setItem('estudiantes', JSON.stringify(estudiantes));
// }
// function obtenerEstudiantes() {
//     const estudiantes = localStorage.getItem('estudiantes');
//     return estudiantes ? JSON.parse(estudiantes) : [];
// }
// function mostrarEstudiantes() {
//     const estudiantes = obtenerEstudiantes();
//     listaEstudiantes.innerHTML = '';
//     estudiantes.forEach((estudiante, index) => {
//         const fila = document.createElement('tr');
//         fila.innerHTML = `
//             <td>${estudiante.nombre}</td>
//             <td>${estudiante.edad}</td>
//             <td>${estudiante.curso}</td>
//             <td>
//                 <button onclick="editarEstudiante(${index})">Editar</button>
//                 <button onclick="eliminarEstudiante(${index})">Eliminar</button>
//             </td>
//         `;
//         listaEstudiantes.appendChild(fila);
//     });
// }

// formulario.addEventListener('submit', function(event) {
//     event.preventDefault();
//     const estudiantes = obtenerEstudiantes();
//     const nombre = nombreInput.value;
//     const edad = edadInput.value;
//     const curso = cursoInput.value;
//     const indice = indiceInput.value;

//     if (indice === '') {
//         // Agregar nuevo estudiante
//         estudiantes.push({ nombre, edad, curso });
//     } else {
//         // Editar estudiante existente
//         estudiantes[indice] = { nombre, edad, curso };
//     }

//     guardarEstudiantes(estudiantes);
//     mostrarEstudiantes();
//     formulario.reset();
//     indiceInput.value = '';
// });

// window.editarEstudiante = function(index) {
//     const estudiantes = obtenerEstudiantes();
//     const estudiante = estudiantes[index];
//     nombreInput.value = estudiante.nombre;
//     edadInput.value = estudiante.edad;
//     cursoInput.value = estudiante.curso;
//     indiceInput.value = index;
//     guardarBoton.textContent = 'Actualizar';
// };

// window.eliminarEstudiante = function(index) {
//     const estudiantes = obtenerEstudiantes();
//     estudiantes.splice(index, 1);
//     guardarEstudiantes(estudiantes);
//     mostrarEstudiantes();
// };

// mostrarEstudiantes();

//3
//Elementos del DOM
// const formulario = document.getElementById('formulario');
// const productoInput = document.getElementById('producto');
// const cantidadInput = document.getElementById('cantidad');
// const listaCarrito = document.getElementById('listaCarrito');
// //Funciones
// function guardarCarrito(carrito) {
//     localStorage.setItem('carrito', JSON.stringify(carrito));
// }
// function obtenerCarrito() {
//     const carrito = localStorage.getItem('carrito');
//     return carrito ? JSON.parse(carrito) : [];
// }
// function mostrarCarrito() {
//     const carrito = obtenerCarrito();
//     listaCarrito.innerHTML = '';
//     carrito.forEach((producto, index) => {
//         const fila = document.createElement('tr');
//         fila.innerHTML = `
//             <td>${producto.nombre}</td>
//             <td>${producto.cantidad}</td>
//             <td>
//                 <button onclick="eliminarProducto(${index})">Eliminar</button>
//             </td>
//         `;
//         listaCarrito.appendChild(fila);
//     });
// }

// formulario.addEventListener('submit', function(event) {
//     event.preventDefault();
//     const carrito = obtenerCarrito();
//     const nombre = productoInput.value;
//     const cantidad = parseInt(cantidadInput.value);
//     // Verificar si el producto ya existe
//     const productoExistente = carrito.find(producto => producto.nombre === nombre);
//     if (productoExistente) {
//         // Actualizar la cantidad del producto existente
//         productoExistente.cantidad += cantidad;
//     } else {
//         // Agregar un nuevo producto al carrito
//         carrito.push({ nombre, cantidad });
//     }
//     guardarCarrito(carrito);
//     mostrarCarrito();
//     formulario.reset();
// });
// window.eliminarProducto = function(index) {
//     const carrito = obtenerCarrito();
//     carrito.splice(index, 1);
//     guardarCarrito(carrito);
//     mostrarCarrito();
// }
// mostrarCarrito();

//4
// Seleccionar elementos del DOM
const encuestaForm = document.getElementById('encuestaForm');
const resumenRespuestas = document.getElementById('resumenRespuestas');

// Función para guardar las respuestas en el Session Storage
function guardarRespuestas(respuestas) {
    sessionStorage.setItem('respuestasEncuesta', JSON.stringify(respuestas));
}

// Función para obtener las respuestas del Session Storage
function obtenerRespuestas() {
    const respuestas = sessionStorage.getItem('respuestasEncuesta');
    return respuestas ? JSON.parse(respuestas) : null;
}

// Función para mostrar el resumen de respuestas
function mostrarResumen() {
    const respuestas = obtenerRespuestas();
    if (respuestas) {
        resumenRespuestas.innerHTML = `
            <h2>Resumen de Respuestas</h2>
            <p><strong>1. ¿Cómo calificarías nuestro servicio?</strong> ${respuestas.pregunta1}</p>
            <p><strong>2. ¿Cómo calificarías la calidad de nuestros productos?</strong> ${respuestas.pregunta2}</p>
            <p><strong>3. ¿Recomendarías nuestros productos a otros?</strong> ${respuestas.pregunta3}</p>
        `;
    } else {
        resumenRespuestas.innerHTML = '';
    }
}

// Función para manejar el envío del formulario
encuestaForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const respuestas = {
        pregunta1: document.querySelector('input[name="pregunta1"]:checked').value,
        pregunta2: document.querySelector('input[name="pregunta2"]:checked').value,
        pregunta3: document.querySelector('input[name="pregunta3"]:checked').value
    };

    guardarRespuestas(respuestas);
    mostrarResumen();
    encuestaForm.reset();
});

// Mostrar el resumen de respuestas al cargar la página
mostrarResumen();
