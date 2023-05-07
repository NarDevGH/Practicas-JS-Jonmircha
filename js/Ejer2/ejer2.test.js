const cadenaConPalabrasInvertidas = require('./punto1');
const aparicionesDePalabraEnCadena = require('./punto2');
const cadenaEsPalindormo = require('./punto3');
const eliminarPatronDeCadena = require('./punto4');

describe("Test Ejercicios 2.", () => {
    test("Invertir palabras en cadena.", () => {
        expect(cadenaConPalabrasInvertidas("Hola Mundo")).toBe("odnuM aloH");
    })
    test("Contar palabras en cadena.", () => {
        expect(aparicionesDePalabraEnCadena("Hola mundo adios mundo", "mundo")).toBe(2);
    })
    test("Cadena es palindromo.", () => {
        expect(cadenaEsPalindormo("Salas")).toBe(true);
    })
    test("Eliminar patron de cadena.", () => {
        expect(eliminarPatronDeCadena("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz")).toBe("1, 2, 3, 4 y 5");
    })
})