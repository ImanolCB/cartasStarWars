'use strict'
var diaRegistro;
const day = date.getDate();

/**
 * ? Página para consultar los personajes https://swapi.dev/api/films --> Como opción añadir al value de cada card la url de cada PJ
 * ? Página para consultar la información de - Luke Skywalker -         https://swapi.dev/api/people/1/ 
 * ? Página para consultar la información de - C-3PO -                  https://swapi.dev/api/people/2/ 
 * ? Página para consultar la información de - R2-D2 -                  https://swapi.dev/api/people/3/ 
 * ? Página para consultar la información de - Darth Vader -            https://swapi.dev/api/people/4/ 
 * ? Página para consultar la información de - Leia Organa -            https://swapi.dev/api/people/5/ 
 * ? Página para consultar la información de - Owen Lars -              https://swapi.dev/api/people/6/ 
 * ? Página para consultar la información de - Beru Whitesun lars -     https://swapi.dev/api/people/7/ 
 * ? Página para consultar la información de - R5-D4 -                  https://swapi.dev/api/people/8/ 
 * ? Página para consultar la información de - Biggs Darklighter -      https://swapi.dev/api/people/9/ 
 * ? Página para consultar la información de - Obi-Wan Kenobi -         https://swapi.dev/api/people/10/ 
 * ? Página para consultar la información de - Wilhuff Tarkin -         https://swapi.dev/api/people/12/ 
 * ? Página para consultar la información de - Chewbacca -              https://swapi.dev/api/people/13/ 
 * ? Página para consultar la información de - Han Solo -               https://swapi.dev/api/people/14/ 
 * ? Página para consultar la información de - Greedo -                 https://swapi.dev/api/people/15/ 
 * ? Página para consultar la información de - Jabba Desilijic Tiure -  https://swapi.dev/api/people/16/ 
 * ? Página para consultar la información de - Wedge Antilles -         https://swapi.dev/api/people/18/ 
 * ? Página para consultar la información de - Jek Tono Porkins -       https://swapi.dev/api/people/19/ 
 * ? Página para consultar la información de - Raymus Antilles -        https://swapi.dev/api/people/81/ 
 * 
 * TODO: Planeta se obtiene de la consulta a otro enlace (API - Fetch)
 */

const listaPersonajes = [];

//Creacion de un objeto del personaje que se cargará con los valores obtenidos de JSON
function crearPersonaje(nombre,altura,masa,colorPelo,colorPiel,colorOjo,nacimiento,genero,naves,creado,editado){
    var pj = {
        nombre: nombre,
        altura: altura,
        masa: masa,
        colorPelo: colorPelo,
        colorPiel: colorPiel,
        colorOjo: colorOjo,
        nacimiento: nacimiento,
        genero: genero,
        planeta: getPlaneta(),
        peliculas: getPeliculas(), 
        especies: getEspecies(), 
        vehiculos: vehiculos, 
        naves: naves, 
        creado: creado, 
        editado: editado, 
    }
    listaPersonajes.push(pj);
}

function getPlaneta() {
    
}