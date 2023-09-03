// Manejador de eventos para el botón
const miBoton = document.getElementById('saludarBtn');
miBoton.addEventListener('click', function(event) {
    event.stopPropagation(); // Detiene la propagación del evento
    alert('¡Hiciste clic en el botón!');
});

// Manejador de eventos para el div
const divSaludo = document.querySelector('div');
divSaludo.addEventListener('click', function() {
    alert('¡Hola! Soy el div');
});