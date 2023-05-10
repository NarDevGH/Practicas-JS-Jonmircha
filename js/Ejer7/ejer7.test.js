
const arrayPow2 = require('./punto1')
const maxMin = require('./punto2')
const paresEImpares = require('./punto3')

describe("Test Ejercicio 7.", () => {
    test("Elevar valores del array al cuadrado.", () => {
        expect(arrayPow2([1, 4, 5])).toEqual([1, 16, 25]);
    })
    test("Obtener el Max y el Min.", () => {
        expect(maxMin([1, 4, 5, 99, -60])).toEqual([99, -60]);
    })
    test("Obtener objeto con Pares e Impares de un Arreglo.", () => {
        expect(paresEImpares([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toEqual({ pares: [2, 4, 6, 8, 0], impares: [1, 3, 5, 7, 9] })
    })
})