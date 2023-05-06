const holaMundo = require("./index")

test("if returns 'Hola Mundo'", () => {
    expect(holaMundo()).toBe('Hola Mundo')
})