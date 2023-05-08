const numeroAleatorioEntre501Y600 = require('./punto1');
const numeroEsCapicua = require('./punto2');
const factorial = require('./punto3');

describe("Test ejercicios 3.", () => {
    test("Numero aleatorio entre 501 y 600.", () => {
        const pruebas = 100;
        for (let index = 0; index < pruebas; index++) {
            const numeroRandom = numeroAleatorioEntre501Y600()
            expect(numeroRandom).toBeGreaterThanOrEqual(501);
            expect(numeroRandom).toBeLessThanOrEqual(600)
        }
    })
    test("Numero 21012 es capicua.", () => {
        expect(numeroEsCapicua(21012)).toBe(true);
    })
    test("Numero 21011 no es capicua.", () => {
        expect(numeroEsCapicua(21011)).toBe(false);
    })
    test("Factorial de 5 es 120.", () => {
        expect(factorial(5)).toBe(120);
    })
    test("Factorial de 6 es 720.", () => {
        expect(factorial(6)).toBe(720);
    })
})