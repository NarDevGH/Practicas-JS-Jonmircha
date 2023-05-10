/*
 Programa una función que dado un arreglo de elementos, elimine los duplicados, 
pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
*/

function unicos(arreglo) {

    let arregloSinRepetidos = []
    arreglo.forEach(element => {
        if (!arregloSinRepetidos.includes(element)) {
            arregloSinRepetidos.push(element)
        }
    });
    return arregloSinRepetidos
}

module.exports = unicos;