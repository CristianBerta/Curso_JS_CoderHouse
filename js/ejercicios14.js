const boton = document.getElementById('boton');
//SWEETALERT
//1
// boton.addEventListener('click', () => {
//     Swal.fire("Hola mundo");
// })
//2
// Swal.fire({
//     title: "Titulo",
//     text: "texto perzonalizado"
// });
//3
// boton.addEventListener('click', () => {
//     Swal.fire({
//         title: '¿Estás seguro?',
//         text: "Esta acción no se puede deshacer",
//         icon: 'warning',
//         showCancelButton: true,
//         confirmButtonColor: '#3085d6',
//         cancelButtonColor: '#d33',
//         confirmButtonText: 'Sí, estoy seguro',
//         cancelButtonText: 'Cancelar'
//     }).then((result) => {
//         if (result.isConfirmed) {
//             // Aquí va la acción que quieres realizar al confirmar
//             realizarAccionEspecifica();
//         }
//     })
// });
// function realizarAccionEspecifica() {
//     // Acción específica a realizar
//     alert("Acción realizada");
// }
//4
// boton.addEventListener("click", function() {
//     Swal.fire({
//         title: '¡Hola!',
//         text: 'Esta es una alerta con una imagen personalizada.',
//         imageUrl: 'img/img1.jpg', // Reemplaza con la URL de tu imagen
//         imageWidth: 150,
//         imageHeight: 150,
//         imageAlt: 'Imagen personalizada',
//         confirmButtonText: '¡Entendido!'
//     });
// });
//5
// boton.addEventListener("click", function() {
//     Swal.fire({
//         title: 'Ingresa un texto',
//         input: 'text',
//         inputPlaceholder: 'Escribe algo aquí...',
//         showCancelButton: true,
//         confirmButtonText: 'Enviar',
//         cancelButtonText: 'Cancelar'
//     }).then((result) => {
//         if (result.isConfirmed) {
//             const textoIngresado = result.value;
//             Swal.fire({
//                 title: 'Tu texto:',
//                 text: textoIngresado,
//                 confirmButtonText: '¡Entendido!'
//             });
//         }
//     });
// });

//TOASTIFY
// boton.addEventListener("click", function () {
    //6
    // Toastify({
    //     text: "¡Bienvenido a la página!",
    //     duration: 3000, // Duración en milisegundos
    //     gravity: "top", // Posición: top o bottom
    //     position: "right", // Posición: left, center o right
    //     backgroundColor: "#4CAF50", // Color de fondo
    //     stopOnFocus: true // Detener la desaparición al pasar el ratón sobre la notificación
    // }).showToast();
    //7
    // Toastify({
    //     text: "Haga clic en el botón",
    //     duration: -1, // La notificación no desaparecerá automáticamente
    //     gravity: "top", // Posición: top o bottom
    //     position: "right", // Posición: left, center o right
    //     backgroundColor: "#4CAF50", // Color de fondo
    //     stopOnFocus: true, // Detener la desaparición al pasar el ratón sobre la notificación
    //     close: true,
    //     onClick: function () { // Evento de clic
    //         Toastify({
    //             text: "¡Has hecho clic en el botón de acción!",
    //             duration: 1000, // Duración en milisegundos
    //             gravity: "top", // Posición: top o bottom
    //             position: "right", // Posición: left, center o right
    //             backgroundColor: "#FF5733", // Color de fondo
    //             stopOnFocus: true // Detener la desaparición al pasar el ratón sobre la notificación
    //         }).showToast();
    //     }
    // }).showToast();
    //8
    // Toastify({
    //     text: "Error: Ha ocurrido un problema",
    //     duration: 2000, // Duración en milisegundos
    //     gravity: "top", // Posición: top o bottom
    //     position: "center", // Posición: left, center o right
    //     backgroundColor: "#FF0000", // Color de fondo (rojo para error)
    //     stopOnFocus: true, // Detener la desaparición al pasar el ratón sobre la notificación
    //     className: "toastify-error"
    // }).showToast();
    //9
    // Toastify({
    //     text: "Esta es una notificación con una imagen",
    //     duration: 2000, // Duración en milisegundos
    //     gravity: "top", // Posición: top o bottom
    //     position: "right", // Posición: left, center o right
    //     backgroundColor: "#4CAF50", // Color de fondo
    //     stopOnFocus: true, // Detener la desaparición al pasar el ratón sobre la notificación
    //     className: "toastify-notification",
    //     avatar: "img/img2.jpg" // URL de la imagen
    // }).showToast();
// });
//10
// document.getElementById("btnIzquierda").addEventListener("click", function() {
//     Toastify({
//         text: "Notificación en la izquierda",
//         duration: 3000, // Duración en milisegundos
//         gravity: "top", // Posición: top o bottom
//         position: "left", // Posición: left, center o right
//         backgroundColor: "#4CAF50", // Color de fondo
//         stopOnFocus: true // Detener la desaparición al pasar el ratón sobre la notificación
//     }).showToast();
// });

// document.getElementById("btnCentro").addEventListener("click", function() {
//     Toastify({
//         text: "Notificación en el centro",
//         duration: 3000, // Duración en milisegundos
//         gravity: "top", // Posición: top o bottom
//         position: "center", // Posición: left, center o right
//         backgroundColor: "#FF5733", // Color de fondo
//         stopOnFocus: true // Detener la desaparición al pasar el ratón sobre la notificación
//     }).showToast();
// });

// document.getElementById("btnDerecha").addEventListener("click", function() {
//     Toastify({
//         text: "Notificación en la derecha",
//         duration: 3000, // Duración en milisegundos
//         gravity: "top", // Posición: top o bottom
//         position: "right", // Posición: left, center o right
//         backgroundColor: "#2196F3", // Color de fondo
//         stopOnFocus: true // Detener la desaparición al pasar el ratón sobre la notificación
//     }).showToast();
// });

//SWIPER
//11
// var swiper = new Swiper('.swiper-container', {
//     loop: true, // Hacer que el carrusel se repita en bucle
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
// });
//12
var swiper = new Swiper('.swiper-container', {
    loop: true, // Hacer que el carrusel se repita en bucle
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidePerView: 'auto',
    spaceBetween: 30,
});