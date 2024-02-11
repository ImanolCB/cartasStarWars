"use strict";

$("a").click(function () {
  let personajeSeleccionado = $(this).text();
//   console.log(personajeSeleccionado);
  getPj(personajeSeleccionado);
});
