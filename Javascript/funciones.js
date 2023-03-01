//Estructura basica de una funcion:
function sumar (num1, num2) {
    return num1 + num2;
}
console.log(sumar(10,20));
console.log(sumar(58,22)) // Lo puedo invocar cuantas veces quiera

//Funciones declaradas
function hacerHelado(cantidad) {
    return "Helado ".repeat(cantidad)
} //funcion que retorna la palabla "Helado" segun el parametro establecido
console.log(hacerHelado(2));

//Funcion Expresada (aquellas que se asignan como valor a una variable)
let hacerTortas = function(cantidad) {
    return "Tortas ".repeat(cantidad)
}
let resultado = hacerTortas(5) //puedo guardar en una variable la invocacion de mi funcion
console.log(resultado)

function saludar (nombre = "Amilca", apellido = "Brusa") {
    return "Hola " + nombre + " " + apellido
}
console.log(saludar("Maria", "Arteaga"))