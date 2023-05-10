/*
 Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, 
pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
*/

function maxMin(arreglo) {
    return [Math.max(...arreglo), Math.min(...arreglo)]
}

module.exports = maxMin;