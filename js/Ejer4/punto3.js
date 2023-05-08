/*
 Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
*/

function celsiusAFarenheight(temp) {
    return Math.floor((temp * 1.8) + 32);
}
function farenheightACelcius(temp) {
    return Math.floor((temp - 32) / 1.8);
}

function convertirTemperatura(temperatura, tipo) {
    if (tipo === 'f') {
        return `${farenheightACelcius(temperatura)}°C`
    }
    else if (tipo === 'c') {
        return `${celsiusAFarenheight(temperatura)}°F`
    }
}

module.exports = convertirTemperatura;