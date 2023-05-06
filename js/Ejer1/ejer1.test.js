
const lenght = require('./punto1')
const recortarCadena = require("./punto2")
const separarString = require("./punto3")
const repetirCadena = require("./punto4")

describe("test ejercicio 1", () => {
    test("Punto 1: contar cantidad de caracteres.", () => {
        const cadena = "Hola Mundo";
        const largoCadena = cadena.length
        expect(lenght(cadena)).toBe(largoCadena)
    });

    test("Punto 2: recortar cadena.", () => {
        const cadena = "Hola Mundo";
        const cadenaRecortada = "Hola"
        const largo = cadenaRecortada.length
        expect(recortarCadena(cadena, largo)).toBe(cadenaRecortada)
    })

    test("Punto 3: separar string.", () => {
        expect(separarString("hola como estas", " ")).toEqual(["hola", "como", "estas"])
    })

    test("Punto 4: repetir cadena.", () => {
        expect(repetirCadena("Hola Mundo", 4)).toBe("Hola Mundo Hola Mundo Hola Mundo Hola Mundo")
    })
});