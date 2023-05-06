
/*
 Programa una función que dada una String te devuelva un Array de textos separados por
cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
*/

function separarString(cadena, separador) {
    return cadena.split(separador)
}

module.exports = separarString;