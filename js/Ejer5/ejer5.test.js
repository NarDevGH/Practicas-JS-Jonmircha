
const decimal_A_Binario_Y_Viceversa = require('./punto1')
const montoConDescuento = require('./punto2')
const aniosDesdeFecha = require('./punto3')

describe("Test ejercicios 5.", () => {
    test("Convertir 100 binario a 4 decimal.", () => {
        expect(decimal_A_Binario_Y_Viceversa(100, 2)).toBe(4)
    })
    test("Convertir 4 decimal a 100 binario.", () => {
        expect(decimal_A_Binario_Y_Viceversa(4, 10)).toBe(100)
    })
    test("Convertir 534 decimal a 1000010110 binario.", () => {
        expect(decimal_A_Binario_Y_Viceversa(534, 10)).toBe(1000010110)
    })
    test("Descontar el 20% a 1000.", () => {
        expect(montoConDescuento(1000, 20)).toBe(800)
    })
    test("Descontar el 50% a 1000.", () => {
        expect(montoConDescuento(1000, 50)).toBe(500)
    })
    test("Descontar el 100% a 1000.", () => {
        expect(montoConDescuento(1000, 100)).toBe(0)
    })
    test("Cantidad de anios desde 1984 hasta la actual.", () => {
        expect(aniosDesdeFecha(new Date(1984, 4, 23))).toBe(39)
    })
    test("Cantidad de anios desde 1900 hasta la actual.", () => {
        expect(aniosDesdeFecha(new Date(1900, 4, 23))).toBe(123)
    })
})