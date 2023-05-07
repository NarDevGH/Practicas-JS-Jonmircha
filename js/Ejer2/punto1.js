/*
 Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
*/

function cadenaConPalabrasInvertidas(cadena) {
    let cadenaInvertida = [...cadena]
    for (let index = 0; index < cadenaInvertida.length / 2; index++) {
        let aux = cadenaInvertida[index];
        cadenaInvertida[index] = cadenaInvertida[cadenaInvertida.length - 1 - index];
        cadenaInvertida[cadenaInvertida.length - 1 - index] = aux;
    }
    return cadenaInvertida.join(""); // Array to String
}

module.exports = cadenaConPalabrasInvertidas;