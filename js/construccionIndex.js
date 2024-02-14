"use strict";

$(document).ready(function () {
  //Array que almacena los nombres de los personajes
  const nombres = ["Chewbacca", "Darth Vader", "R2-D2", "C-3PO", "Yoda"];

  //Creación de div que contiene las cartas
  const div = document.createElement("div");
  div.className = "contenedor";

  for (let i = 1; i <= nombres.length; i++) {
    //Creación de etiquetas
    let enlace = document.createElement("a");
    let tituloCarta = document.createElement("h3");
    let imagenCarta = document.createElement("img");

    //Asignación de datos a qcada etiqueta
    enlace.id = i;
    tituloCarta.textContent = nombres[i - 1];
    imagenCarta.src = `../img/${i}.jpeg`;

    //Estructura de elementos creados
    enlace.appendChild(tituloCarta);
    enlace.appendChild(imagenCarta);
    div.appendChild(enlace);
  }
  //Aplicación de la estructura creada al body del index
  document.body.appendChild(div);

  //Funcion on click que detecta la carta sobre la que se hace click y recoge el valor de texto almacenado en la carta para consultar
  $("a").click(function () {
    let personajeSeleccionado = $(this).text();
    console.log(personajeSeleccionado);
    window.location.href = `informacion.html?parametro=${encodeURIComponent(personajeSeleccionado)}`;
  });

});
