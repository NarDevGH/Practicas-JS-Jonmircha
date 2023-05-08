const numeroEsPrimo = require('./punto1');
const esParOImpar = require('./punto2');
const convertirTemperatura = require('./punto3');

describe("Test ejercicios 4.", () => {
    test("7 es primo.", () => {
        expect(numeroEsPrimo(7)).toBe(true);
    })
    test("2 es primo.", () => {
        expect(numeroEsPrimo(2)).toBe(true);
    })
    test("4 no es primo.", () => {
        expect(numeroEsPrimo(4)).toBe(false);
    })
    test("4 es par.", () => {
        expect(esParOImpar(4)).toBe("par");
    })
    test("29 es impar.", () => {
        expect(esParOImpar(29)).toBe("impar");
    })
    test("Pasar 0°C a 32°F.", () => {
        expect(convertirTemperatura(0, "c")).toBe("32°F");
    })
    test("Pasar 32°F a 0°C.", () => {
        expect(convertirTemperatura(32, "f")).toBe("0°C");
    })
})