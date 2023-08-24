// Página JS Externa

const getInput = document.getElementById('nombre');
const mostrarResultado = document.querySelector('.resultado');

const renderNombre = () => {
    let nombrePersona = getInput.value.trim();
    let contieneNumeros = false;

    for (let i = 0; i < nombrePersona.length; i++) {
        if (!isNaN(nombrePersona[i])) {
            contieneNumeros = true;
            break;
        }
    }

    if (nombrePersona == '') {
        mostrarResultado.style.color = 'red';
        mostrarResultado.innerHTML = `No ha ingresado un nombre válido, intente nuevamente por favor.`;
        mostrarResultado.style.animation = 'none';
        void mostrarResultado.offsetWidth; // Reinicia la animación
        mostrarResultado.style.animation = 'fade 1.3s ease-in-out';
    }
    else if (contieneNumeros) {
        mostrarResultado.style.color = 'red';
        mostrarResultado.innerHTML = `No está permitido ingresar números en el campo. Por favor, intente nuevamente utilizando solo letras.`;
        mostrarResultado.style.animation = 'none';
        void mostrarResultado.offsetWidth; // Reinicia la animación
        mostrarResultado.style.animation = 'fade 1.3s ease-in-out';
    }
    else {
        mostrarResultado.style.color = 'black';
        mostrarResultado.innerHTML = `Su nombre es: '${nombrePersona}'`;
        mostrarResultado.style.animation = 'none';
        void mostrarResultado.offsetWidth; // Reinicia la animación
        mostrarResultado.style.animation = 'fade 1.3s ease-in-out';
    }
}

// FIN PÁGINA JS EXTERNA.

function sumaValor() {
    let a = 1;

    a++; // Suma a en 1: a = 1 (++) a = 1 || RESULTADO: a = 2 //

    let b = 1;

    console.log(`El valor de a es: ${a}. `);
}

sumaValor();