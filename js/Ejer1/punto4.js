
/*
 Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) 
devolverá Hola Mundo Hola Mundo Hola Mundo.
*/

function repetirCadena(cadena, cantVeces) {
    let res = `${cadena}`;
    for (let index = 1; index < cantVeces; index++) {
        res += ` ${cadena}`;
    }
    return res;
}

module.exports = repetirCadena;