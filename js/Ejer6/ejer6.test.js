const cantVocalesYConsonantes = require("./punto1")
const esNombreValido = require("./punto2")
const emailValido = require("./punto3")

describe("Test ejercicios 6.", () => {
    test("Cantidad de vocales y consonantes de 'Hola Mundo' es 4 y 5.", () => {
        expect(cantVocalesYConsonantes("Hola Mundo")).toEqual([4, 5])
    })
    test("Jonathan MirCha es un nombre valido.", () => {
        expect(esNombreValido("Jonathan MirCha")).toBe(true)
    })
    test("Jonath123an MirCha no es un numbre valido.", () => {
        expect(esNombreValido("Jonath123an MirCha")).toBe(false)
    })
    test("Jonathan Mi*rCha no es un numbre valido.", () => {
        expect(esNombreValido("Jonathan Mi*rCha")).toBe(false)
    })
    test("jonmircha@gmail.com es un Email Valido.", () => {
        expect(emailValido("jonmircha@gmail.com")).toBe(true)
    })
})