"use strict";

/**
 * ? Página para consultar los personajes https://swapi.dev/api/people/ --> Como opción añadir al value de cada card la url de cada PJ
 * https://swapi.dev/api/people/?search=${nombre}&format=json
 */


function getPj(pj) {
  console.log("Entro" + pj);
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
      console.log("GESTIONAR OTRO FETCH");
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

// getPj("Yoda")



export { getPj, mostrarInfo };
