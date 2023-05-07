/*
 Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), 
pe. mifuncion("Salas") devolverá true.
*/

function cadenaEsPalindormo(cadena) {
    cadena = cadena.toLowerCase()
    let esPalindromo = true;
    for (let index = 0; index < cadena.length / 2 && esPalindromo; index++) {
        if (cadena[index] != cadena[cadena.length - 1 - index]) {
            esPalindromo = false;
        }
    }
    return esPalindromo;
}

module.exports = cadenaEsPalindormo;