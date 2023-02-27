// var - let - const

    var juegoFavorito;
    juegoFavorito = "Mario Bross";

// o tambien puedo: var juegoFavorito = "Mario Bross"

    juegoFavorito = "Batman"; // Puedo cambiar el valor de mi variable

    let box = "M. ALI"; // Las variables let funcionan de manera local al bloque de codigo, en cambio var es global.
    if (true) {
        let nombre = "Maria";
        console.log(nombre);
    } // este es un bloque de codigo
    let nombre = "Jose"; // y este es otro
    console.log(nombre);

// Variable constante:
    const EMAIL = "mi.email@gmail.com" // no se puede redeclarar, y tambien es local a un bloque de codigo