let loremLista = document.querySelectorAll(".lorem");
let contenidoUno = document.querySelector(".contenido-uno");
let contenidoDos = document.querySelector(".contenido-dos");
let contenidoTres = document.querySelector(".contenido-tres");
let contenidoCuatro = document.querySelector(".contenido-cuatro");
let contenidoCinco = document.querySelector(".contenido-cinco");
let contenidoSeis = document.querySelector(".contenido-seis");
let contenidoSiete = document.querySelector(".contenido-siete");
let contador = 3;
let leer = document.querySelector(".read");

for (let i = 0; i < loremLista.length; i++) {
    let lorem = loremLista[i];
    cambiarEstado(lorem);
};

function cambiarEstado(lorem) {
    if (lorem.style.display === "none") {
        lorem.style.display = "block";
        lorem.style.background = "#bae8e8";
        contadorFuncion(lorem);
    } else {
        lorem.style.display = "none";
    }
}

function contadorFuncion(lorem) {
    if (lorem == loremLista[0] || lorem == loremLista[1] || lorem == loremLista[2]) {
        contador--;
        read(contador);
        if (contador < 0) {
            contador = 0;
        }
    }
}

let contadorElement = document.querySelector(".contador");
contadorElement.textContent = contador;

function read(contador) {
    if (contador == 0) {
        leer.style.opacity = 0.6;
    }
}

contenidoUno.addEventListener("click", function () {
    cambiarEstado(loremLista[0]);
    contenidoUno.style.background = "#fff";
    contadorElement.textContent = contador;
});

contenidoDos.addEventListener("click", function () {
    cambiarEstado(loremLista[1]);
    contenidoDos.style.background = "#fff";
    contadorElement.textContent = contador;
});

contenidoTres.addEventListener("click", function () {
    cambiarEstado(loremLista[2]);
    contenidoTres.style.background = "#fff";
    contadorElement.textContent = contador;
});

contenidoCuatro.addEventListener("click", function () {
    cambiarEstado(loremLista[3]);
});

contenidoCinco.addEventListener("click", function () {
    cambiarEstado(loremLista[4]);
});

contenidoSeis.addEventListener("click", function () {
    cambiarEstado(loremLista[5]);
});

contenidoSiete.addEventListener("click", function () {
    cambiarEstado(loremLista[6]);
});

