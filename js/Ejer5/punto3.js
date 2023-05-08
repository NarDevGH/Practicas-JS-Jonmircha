/*
 Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, 
pe. miFuncion(new Date(1984,4,23)) devolverá 39 años (en 2023).
*/

function aniosDesdeFecha(fecha) {
    const currentYear = new Date().getFullYear();
    const anioFecha = fecha.getFullYear();
    return currentYear - anioFecha;
}

module.exports = aniosDesdeFecha;