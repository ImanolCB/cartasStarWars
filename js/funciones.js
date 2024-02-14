"use strict";

/**
 * 
 * @param {*} pj 
 * @returns Devuelve la estructura html con los datos de cada personaje
 */
function getPj(pj) {
  // Realiza la solicitud GET a la API
  return $.get(
    `https://swapi.dev/api/people/?search=${pj}&format=json`,
    function (data, status) {
      mostrarInfo(data);
    }
  );
}

/**
 * 
 * @param {*} inf Parametro con el json del personaje encontrado
 */
function mostrarInfo(inf) {
  let div = $("<div>").addClass("caracteristicas");
  let caracteristica = inf.results[0];
  console.log(inf.results[0]);

  //Recorre cada caracteristica contenida en el tipo de dato del personaje
  for (const datoPersonaje in caracteristica) {

    // Comprobacion del tipo de dato que contiene cada caracteristica, si es de tipo array se hará otra consulta
    // console.log(Array.isArray(datoPersonaje[caracteristica])|| (datoPersonaje[caracteristica]).includes("https"));
    if ((Array.isArray(caracteristica[datoPersonaje]) || (caracteristica[datoPersonaje]).includes("https"))) {

      //Por cada tipo de dato correspondiente a los siguientes buscara el nombre de esa caracteristica
      switch (datoPersonaje) {
        case "homeworld", "vehicles", "starships":
          $.get(`${caracteristica[datoPersonaje]}`,
            function (data, status) {
              let datosPj = $("<p>").text(datoPersonaje + ": " + data.name);
              datosPj.appendTo(div);
            }
          );
          break;

        case "film":
          $.get(`${caracteristica[datoPersonaje]}`,
            function (data, status) {
              let datosPj = $("<p>").text(datoPersonaje + ": " + data.title);
              datosPj.appendTo(div);
            }
          );
          break;

        default:
          break;
      }
    }

    //Si el contenido del tipo de dato no contiene un http entonces se creará la estructura de datos 
    else {
      let datosPj = $("<p>").text(datoPersonaje + ": " + caracteristica[datoPersonaje]);
      datosPj.appendTo(div);
    }
  }

  let parrafo = document.getElementById("parrafo");
  div.appendTo(parrafo);
};


export { getPj, mostrarInfo };
