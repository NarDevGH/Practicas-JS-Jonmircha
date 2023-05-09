/*
 Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
*/

function emailValido(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

module.exports = emailValido;