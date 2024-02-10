'use strict'

/**
 * ? Página para consultar los personajes https://swapi.dev/api/people/ --> Como opción añadir al value de cada card la url de cada PJ
 * 
 * TODO: Planeta se obtiene de la consulta a otro enlace (API - Fetch)
 * https://swapi.dev/api/people/?search=${nombre}&format=json
 */


function getNombrePj(pj) {

    $.get(`https://swapi.dev/api/people/${pj}`, function (data, status) {
        console.log(data.name);
        let nombre = data.height;
        return nombre;
    });
}



export {getNombrePj};