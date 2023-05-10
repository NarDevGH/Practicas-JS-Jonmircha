
const ascendenteYDescendente = require('./punto1')
const unicos = require('./punto2')
const promedio = require('./punto3')

describe("Test Ejercicio 8.", () => {
    test("Devolver objeto con un arreglo ascendente y otro descendente.", () => {
        expect(ascendenteYDescendente([7, 5, 7, 8, 6])).toEqual({ asc: [5, 6, 7, 7, 8], desc: [8, 7, 7, 6, 5] });
    })
    test("Devolver un arreglo sin repetidos.", () => {
        expect(unicos(["x", 10, "x", 2, "10", 10, true, true])).toEqual(["x", 10, 2, "10", true]);
    })
    test("Devolver promedio del arreglo.", () => {
        expect(promedio([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])).toEqual(4.5);
    })
})