'use strict'

import {getNombrePj} from './personaje.js';

const nombres = []
const contenedorCartas = document.createElement("div");
const div = document.createElement("div");
div.className = "contenedor"

for (let i = 1; i <= 5; i++) {
    let enlace = document.createElement("a");
    let tituloCarta = document.createElement("h3");
    let imagenCarta = document.createElement("img");
    
    enlace.href= `https://swapi.dev/api/people/${i}`;
    enlace.id = i;
    console.log(getNombrePj(i));
    tituloCarta.textContent = getNombrePj(i);
    imagenCarta.src = `../img/${i}.jpeg`;
    
    enlace.appendChild(tituloCarta);
    enlace.appendChild(imagenCarta);
    div.appendChild(enlace);
}

document.body.appendChild(div);


