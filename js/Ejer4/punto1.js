/*
 Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, 
pe. miFuncion(7) devolverá true.
*/

function numeroEsPrimo(numero) {
    let esPrimo = true;
    for (let i = numero - 1; i > 1 && esPrimo === true; i--) {
        if (numero % i === 0) {
            esPrimo = false;
        }
    }

    return esPrimo;
}

module.exports = numeroEsPrimo;