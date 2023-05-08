/*
 Programa una función que obtenga un numero aleatorio entre 501 y 600.
*/

function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function numeroAleatorioEntre501Y600() {
    return randomRange(501, 600)
}

module.exports = numeroAleatorioEntre501Y600;