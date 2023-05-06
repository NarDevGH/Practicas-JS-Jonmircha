
/*
 Programa una función que te devuelva el texto recortado según el número de caracteres
indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
*/

function recortarCadena(cadena, largo) {
    return cadena.substring(0, largo)
}

module.exports = recortarCadena;