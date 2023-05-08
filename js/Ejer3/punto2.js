/*
 Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro),
pe. miFuncion(2002) devolverá true.
*/

function numeroEsCapicua(numero) {
    let cadena = numero.toString();
    let esCapicua = true;
    for (let index = 0; index < cadena.length / 2 && esCapicua; index++) {
        if (cadena[index] != cadena[cadena.length - 1 - index]) {
            esCapicua = false;
        }
    }
    return esCapicua;
}

module.exports = numeroEsCapicua;