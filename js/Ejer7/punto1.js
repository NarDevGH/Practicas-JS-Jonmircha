/*
 Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, 
pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
*/

function arrayPow2(arreglo) {
    return arreglo.map(number => Math.pow(number, 2));
}

module.exports = arrayPow2;