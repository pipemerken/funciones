

let colorGlobal = '';
// Función para manejar el evento keydown
let fondo = 0;

function cambiarColor(event) {
    const key = event.key.toLowerCase(); // Obtener la tecla presionada en minúsculas
    const keyDiv = document.getElementById('fondo');

    const keyDiv2 = document.getElementById('fondo2')

    // Asignar el color según la tecla presionada
    if (key === 'a') {
        colorGlobal = 'pink';
        fondo = 1
    } else if (key === 's') {
        colorGlobal = 'orange';
        fondo = 1
    } else if (key === 'd') {
        colorGlobal = 'skyblue';
        fondo = 1
    } else if (key === 'q') {
        colorGlobal = 'purple';
        fondo = 2
    } else if (key === 'w') {
        colorGlobal = 'grey'
        fondo = 2
    } else if (key === 'e') {
        colorGlobal ='brown'
        fonde = 2
        
    }


    // Cambiar el color del div si es una tecla válida
    if (colorGlobal && fondo == 1) {
        keyDiv.style.backgroundColor = colorGlobal;
    } else {
        keyDiv2.style.backgroundColor = colorGlobal;
    }
}

// Agregar el event listener para el evento keydown
document.addEventListener('keydown', cambiarColor);