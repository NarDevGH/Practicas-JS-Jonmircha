/*
 Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, 
pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
*/

const vocales = ["a", "e", "i", "o", "u"]
const consonantes = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "ñ", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]

function cantVocalesYConsonantes(cadena) {
    let cantVocales = 0;
    let cantConsonantes = 0;
    let array = [...cadena.toLowerCase()]
    array.forEach(caracter => {
        if (vocales.includes(caracter)) {
            cantVocales++;
        }
        else if (consonantes.includes(caracter)) {
            cantConsonantes++;
        }
    })
    return [cantVocales, cantConsonantes];
}

module.exports = cantVocalesYConsonantes;