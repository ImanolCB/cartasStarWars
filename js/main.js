'use strict'

import {getNombrePj} from './personaje.js';

const contenedorCartas = document.createElement("div");
const div = document.createElement("div");
div.className = "contenedor"

for (let i = 1; i <= 6; i++) {
    let enlace = document.createElement("a");
    let tituloCarta = document.createElement("h3");
    let imagenCarta = document.createElement("img");
    
    enlace.src= `https://swapi.dev/api/people/${i}`;
    enlace.id = i;
    tituloCarta.textContent = getNombrePj(i);
    imagenCarta.src = `../img/${i}.jpeg`;
    
    enlace.appendChild(tituloCarta);
    enlace.appendChild(imagenCarta);
    div.appendChild(enlace);
}

document.body.appendChild(div);


