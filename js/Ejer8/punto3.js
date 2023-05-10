/*
 Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
*/

function promedio(arreglo) {
    return arreglo.reduce((total, numero) => total + numero, 0) / arreglo.length;
}

module.exports = promedio;