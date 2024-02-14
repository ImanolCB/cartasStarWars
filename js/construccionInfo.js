"use strict";

import * as PJ from "./funciones.js";


$(document).ready(function () {
    // Creación de div que contiene las cartas
    const div = $("<div>");
    div.attr("id", "parrafo");
    $("body").append(div);

    // Obtención de los parámetros pasados por URL para pintar la información
    let parametros = new URLSearchParams(window.location.search);
    let dato = parametros.get('parametro');
    PJ.getPj(dato);
});

