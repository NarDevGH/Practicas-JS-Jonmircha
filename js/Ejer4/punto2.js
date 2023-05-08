/*
 Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
*/

function esParOImpar(numero) {
    if (numero % 2 === 0) {
        return 'par';
    }
    else {
        return 'impar';
    }
}


module.exports = esParOImpar;