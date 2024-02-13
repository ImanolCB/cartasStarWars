"use strict";

import * as PJ from "./funciones.js";


$(document).ready(function () {
    // Creación de div que contiene las cartas
    const div = document.createElement("div");
    div.id = "parrafo";
    document.body.appendChild(div);

    // Obtención de los parámetros pasados por URL para pintar la información
    let params = new URLSearchParams(window.location.search);
    let dato = params.get('parametro');
    console.log(dato);
    PJ.getPj(dato);
});

