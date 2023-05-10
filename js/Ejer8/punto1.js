/*
 Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en
 forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
*/

function ascendenteYDescendente(arreglo) {
    return { // Entre corchetes estoy devolviendo un objeto.
        asc: [...arreglo].sort(), // Creo copia del array y lo ordeno con sort.
        desc: [...arreglo].sort().reverse()
    };
}

module.exports = ascendenteYDescendente;