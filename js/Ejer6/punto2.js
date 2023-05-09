/*
 Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
*/

function esNombreValido(nombre) {
    if (nombre.length <= 1) return false;

    nombre = nombre.toLowerCase();
    let expReg = /^[a-zñáéíóú\s]+$/g.test(nombre);
    return expReg
}

module.exports = esNombreValido;