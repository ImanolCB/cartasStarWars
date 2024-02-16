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
  let divG = $("<div>").addClass("CaracteristicasGenerales");

  let caracteristica = inf.results[0];
  // console.log(inf.results[0]);
  //Recorre cada caracteristica contenida en el tipo de dato del personaje
  let datosPj;
  for (const datoPersonaje in caracteristica) {
    // Comprobacion del tipo de dato que contiene cada caracteristica, si es de tipo array se hará otra consulta
    // console.log(Array.isArray(datoPersonaje[caracteristica])|| (datoPersonaje[caracteristica]).includes("https"));
    if (Array.isArray(caracteristica[datoPersonaje]) || caracteristica[datoPersonaje].includes("https")
    ) {
      //Por cada tipo de dato correspondiente a los siguientes buscara el nombre de esa caracteristica
      switch (datoPersonaje) {
        case "homeworld":
          let divH = $("<div>").addClass("homeworld");
          $.get(`${caracteristica[datoPersonaje]}`, function (data, status) {
            // datosPj = $("<p>").append(datoPersonaje.toLocaleUpperCase() + ": " + data.name);
            console.log(data);
            let valor = data;
            for (const clave in valor) {
              console.log(clave + " " + valor);
              if (clave != "residents" && clave != "films" && clave != "url") {
                datosPj = $("<p>").append(clave.toLocaleUpperCase() + ": " + valor[clave]);
                datosPj.appendTo(divH);
              }
            }
            divH.appendTo(div)
          });

          break;
        case "starships":
          let divS = $("<div>").addClass("starship");
          //Recorre cada uno de las naves espaciales y las pinta
          let starship = [];
          caracteristica[datoPersonaje].forEach((element) => {
            $.get(`${element}`, function (data, status) {
              starship.push("<br>" + data.name);

              if (starship.length === caracteristica[datoPersonaje].length) {
                datosPj = $("<p>").append(starship);
                datosPj.appendTo(divS);
              }
              divS.appendTo(div);
            });
          });

          break;
        case "vehicles":
          let divV = $("<div>").addClass("vehicles");
          let vehicles = [];
          caracteristica[datoPersonaje].forEach((element) => {
            $.get(`${element}`, function (data, status) {
              vehicles.push("<br>" + data.name);

              if (vehicles.length === caracteristica[datoPersonaje].length) {
                datosPj = $("<p>").append(vehicles);
                datosPj.appendTo(divV);
              }
              divV.appendTo(div)
            });
          });
          break;

        case "films":
          let divF = $("<div>").addClass("films");
          let film = [];
          caracteristica[datoPersonaje].forEach((element) => {
            $.get(`${element}`, function (data, status) {
              film.push("<br>" + data.title);

              if (film.length === caracteristica[datoPersonaje].length) {
                datosPj = $("<p>").append( film);
                datosPj.appendTo(divF);
              }
              divF.appendTo(div);
            });
          });

          break;

        default:
          break;
      }
    }

    //Si el contenido del tipo de dato no contiene un http entonces se creará la estructura de datos con las caracteristicas
    else {
      datosPj = $("<p>").append( datoPersonaje.toLocaleUpperCase() + ": " + caracteristica[datoPersonaje]);
      datosPj.appendTo(divG);
    }
    divG.appendTo(div);
  }
  //Se añade la informacion completa de los datos al div
  let parrafo = $("#parrafo");
  div.appendTo(parrafo);
}

export { getPj, mostrarInfo };
