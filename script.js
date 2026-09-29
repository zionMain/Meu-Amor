const inicio = new Date("2026-08-24T15:30:00");

function actualizarReloj() {
    const ahora = new Date();

    const diferencia = ahora - inicio;

    const segundos = Math.floor(diferencia / 1000);
    const minutos = Math.floor(segundos / 60);
    const horas = Math.floor(minutos / 60);
    const dias = Math.floor(horas / 24);

    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas % 24;
    document.getElementById("minutos").textContent = minutos % 60;
    document.getElementById("segundos").textContent = segundos % 60;
}

setInterval(actualizarReloj, 1000);
actualizarReloj();


// MÚSICA

const reina = new Audio("music/reina.mp3");
const inarow = new Audio("music/inarow.mp3");
const gongoli = new Audio("music/gongoli.mp3");
const ncdbs = new Audio("music/ncdbs.mp3");

let actual = null;

function reproducir(cancion) {

    // Si ya es la canción que está seleccionada
    if (actual === cancion) {

        if (cancion.paused) {
            cancion.play();
        } else {
            cancion.pause();
        }

        return;
    }

    // Si había otra canción sonando, la detenemos
    if (actual !== null) {
        actual.pause();
        actual.currentTime = 0;
    }

    // Guardamos la nueva canción como la actual
    actual = cancion;

    // Y la reproducimos
    cancion.play();
}

document.getElementById("reina").addEventListener("click", function() {
    reproducir(reina);
});

document.getElementById("inarow").addEventListener("click", function() {
    reproducir(inarow);
});

document.getElementById("gongoli").addEventListener("click", function() {
    reproducir(gongoli);
});

document.getElementById("ncdbs").addEventListener("click", function() {
    reproducir(ncdbs);
});


// CARRUSEL

const imagen = document.getElementById("imagenCarrusel");

const imagenes = [
    "img/1.jpg",
    "img/2.jpg",
    "img/3.jpg",
    "img/4.jpg",
    "img/5.jpg",
    "img/6.jpg",
    "img/7.jpg"
];

let indice = 0;

// Coloca la primera imagen
imagen.src = imagenes[indice];

function cambiarImagen() {
    imagen.style.opacity = 0;

    setTimeout(function() {
        indice++;

        if (indice >= imagenes.length) {
            indice = 0;
        }

        imagen.src = imagenes[indice];
        imagen.style.opacity = 1;
    }, 500);
}
setInterval(cambiarImagen, 5000);
