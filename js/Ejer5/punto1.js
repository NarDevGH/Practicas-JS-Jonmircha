/*
 Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
*/

function binarioADecimal(binario) {
    let decimal = 0;
    let valor = 1;
    while (binario >= 1) {
        decimal += (binario % 10) * valor;
        binario = binario != 10 ? binario / 10 : 1;
        valor *= 2;
    }
    return decimal;
}

function decimalABinario(decimal) {
    let binario = [];
    while (decimal > 1) {
        binario.unshift(decimal % 2);
        decimal = Math.floor(decimal / 2);
    }
    if (decimal === 1) {
        binario.unshift(decimal);
    }
    return Number(binario.join(""));
}

function decimal_A_Binario_Y_Viceversa(numero, base) {
    if (numero == 0) {
        return 0;
    }

    let res;
    switch (base) {
        case 2:
            res = binarioADecimal(numero);
            break;
        case 10:
            res = decimalABinario(numero);
            break;
    }
    return res;
}

module.exports = decimal_A_Binario_Y_Viceversa;

