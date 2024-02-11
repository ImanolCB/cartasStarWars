"use strict";

/**
 * ? Página para consultar los personajes https://swapi.dev/api/people/ --> Como opción añadir al value de cada card la url de cada PJ
 * https://swapi.dev/api/people/?search=${nombre}&format=json
 */

/**
 * ? Callback
 */

//Funcion callback que al llamarla realiza otra función asincrona.
// Trás obtener el resultado de la consulta se retornará el resultado con el estado
// function getPj(callback, pj) {
//   $.get(`https://swapi.dev/api/people/`, function (data, status) {
//     let info = data.results[pj];
//     callback(info);
//   });
// }
// getPj(function (personaje) {
//   console.log(personaje);
// }, 0);

function getPj(pj) {
  // Realiza la solicitud GET a la API
  return $.get(
    `https://swapi.dev/api/people/?search=${pj}&format=json`,
    function (data, status) {
      mostrarInfo(data);
    }
  );
}

function mostrarInfo(inf) {
  let div = $("<div>").addClass("caracteristicas");
  let caracteristica = inf.results[0];
  console.log(inf.results[0]);

  //Recorre cada caracteristica contenida en el tipo de dato del personaje
  for (const datoPersonaje in caracteristica) {

    // Comprobacion del tipo de dato que contiene cada caracteristica, si es de tipo array se hará otra consulta
    // console.log(Array.isArray(datoPersonaje[caracteristica])|| (datoPersonaje[caracteristica]).includes("https"));
    if (Array.isArray(caracteristica[datoPersonaje]) || (caracteristica[datoPersonaje]).includes("https")) {
      console.log("Es array");
    }

    //Si el 
    else{
      let datosPj = $("<p>").text(datoPersonaje + ": " + caracteristica[datoPersonaje]);
      datosPj.appendTo(div);

    }
  }
    div.appendTo("body");
  };


// Llama a la función getPj con el índice del personaje que quieres obtener
getPj("Yoda");

export { getPj, mostrarInfo };
