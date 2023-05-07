/*
 Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios
mundo", "mundo") devolverá 2
*/

function aparicionesDePalabraEnCadena(cadena, palabra) {
    let contador = 0;
    while (cadena.includes(palabra)) {
        cadena = cadena.substring(cadena.indexOf(palabra) + palabra.length - 1)
        contador++;
    }
    return contador;
}

module.exports = aparicionesDePalabraEnCadena;