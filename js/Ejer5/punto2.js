/*
 Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, 
pe. miFuncion(1000, 20) devolverá 800.
*/

function montoConDescuento(monto, descuento) {
    return monto - Math.floor(monto / Math.floor(100 / descuento));
}

module.exports = montoConDescuento;