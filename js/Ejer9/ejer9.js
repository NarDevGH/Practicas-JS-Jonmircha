/*
Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

    Géneros Aceptados: 
 Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
*/
class Pelicula {
    constructor({ id, titulo, director, estreno, pais, genero, calificacion }) {
        this.id = this.idValido(id);
        this.titulo = this.tituloValido(titulo);
        this.director = this.directorValido(director);
        this.estreno = this.anioEstrenoValido(estreno);
        this.pais = this.paisValido(pais);
        this.genero = this.generoValido(genero);
        this.calificacion = this.calificacionValida(calificacion);
    }

    static get generos() {
        return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary", "Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"]
    }

    idValido(id) {
        if (/^([a-z]){2}([0-9]){7}$/.test(id)) { // Valid ID: ll342586 (starts with 2 letters and ends with 7 numbers from 0 to 9).
            return id;
        }
        else {
            throw "Invalid ID Passed.";
        }
    }
    tituloValido(titulo) {
        if (titulo.length > 0 && titulo.length < 100) {
            return titulo;
        }
        else {
            throw "Invalid Titulo Passed.";
        }

    }
    directorValido(director) {
        if (director.length > 0 && director.length < 50) {
            return director;
        }
        else {
            throw "Invalid Director Passed.";
        }

    }
    anioEstrenoValido(estreno) {
        if (estreno.length > 0 && estreno.length < 5) {
            if (Number(estreno)) { // Is a number.
                return estreno;
            }
        }
        else {
            throw "Invalid Estreno Passed.";
        }
    }
    paisValido(pais) {
        if (Array.isArray(pais)) {
            return pais;
        }
        else {
            throw "Invalid Pais Passed.";
        }
    }
    generoValido(genero) {
        if (Array.isArray(genero)) {
            genero.forEach(x => {
                if (!Pelicula.generos.includes(x)) {
                    throw "Invalid Genero Passed.";
                }
            })
            return genero;
        }
        else {
            throw "Invalid Genero Passed.";
        }
    }
    calificacionValida(calificacion) {
        calificacion = Number(calificacion);
        if (calificacion > 0 && calificacion < 10) {
            return calificacion.toFixed(1); // Devolver con 1 decimal.
        }
        else {
            throw "Invalid calificacion Passed.";
        }
    }

    mostrarFichaTecnica() {
        console.log(`ID: ${this.id}`)
        console.log(`Titulo: ${this.titulo}`)
        console.log(`Director: ${this.director}`)
        console.log(`Año de Estreno: ${this.estreno}`)
        console.log(`Pais o Paises donde fue estrenado: ${this.pais}`)
        console.log(`Genero: ${this.genero}`)
        console.log(`Calificacion: ${this.calificacion}`)
    }
}

const xMens = new Pelicula(
    {
        id: "ll1234567",
        titulo: "Los XMens",
        director: "Jenri",
        estreno: "2022",
        pais: ["Argentina"],
        genero: ["Action"],
        calificacion: 7.1
    })
const avengers = new Pelicula(
    {
        id: "gm7654321",
        titulo: "Avengers",
        director: "Jenri",
        estreno: "2020",
        pais: ["Argentina"],
        genero: ["Action"],
        calificacion: 7.1
    })
const relatosSalvajes = new Pelicula(
    {
        id: "ee1010101",
        titulo: "Relatos Salvajes",
        director: "Jenri",
        estreno: "2019",
        pais: ["Argentina"],
        genero: ["Drama", "Short"],
        calificacion: 7.1
    })

console.info("- X Mens:")
xMens.mostrarFichaTecnica();
console.info("- Avengers:")
avengers.mostrarFichaTecnica();
console.info("- Relatos Salvajes:")
relatosSalvajes.mostrarFichaTecnica();