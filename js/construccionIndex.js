"use strict";

$(document).ready(function () {
  //Array que almacena los nombres de los personajes
  const nombres = ["Chewbacca", "Darth Vader", "R2-D2", "C-3PO", "Yoda"];

  //Creación de div que contiene las cartas con la clase contenedor
  const div = $("<div>").addClass("contenedor");


  for (let i = 1; i <= nombres.length; i++) {
    //Creación de etiquetas
    let enlace = $("<a>");
    let tituloCarta = $("<h3>");
    let imagenCarta = $("<img>");

    //Asignación de datos a qcada etiqueta
    enlace.attr("id", i);
    tituloCarta.text(nombres[i - 1]);
    imagenCarta.attr("src", `../img/${i}.jpeg`);

    //Estructura de elementos creados
    enlace.append(tituloCarta);
    enlace.append(imagenCarta);
    div.append(enlace);
  }
  //Aplicación de la estructura creada al body del index
  $("body").append(div);

  //Funcion on click que detecta la carta sobre la que se hace click y recoge el valor de texto almacenado en la carta para consultar
  $("a").click(function () {
    let personajeSeleccionado = $(this).text();
    console.log(personajeSeleccionado);
    window.location.href = `informacion.html?parametro=${encodeURIComponent(personajeSeleccionado)}`;
  });

});
