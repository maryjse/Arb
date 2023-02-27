//Variables: let - var - const
var nombre = "Jose"; //string
let apellido = "San Martin"; //string
let edad = 40; //numer
let heroe = true; //boolean
let heroes = ["San Martin", "Belgrano", "Juana Azurduy"] //array

//en psint Mostrar/Escribir == (console.log / documento)
console.log(heroes);

//funcion
function Suma (num1, num2) {
    let nombre = "Julieta";
    resultado = num1 + num2;
    console.log(nombre + " el resultado es: " + resultado);
}
Suma(10, 20);
console.log(nombre);

//Scope - var vs let
var saludo = "Hola, que tal?" //global
function NuevaFuncion() {
    var hola = "Hola" // local, no podemos acceder a esta variable fuera de la funcion
}
var saludar = "Nuevo saludo"
//Si intento modificar un let, tendre un error, en cambio con var no.
console.log(saludar);

//Hoisting 
console.log(hoisting);
var hoisting = "Hola" //undefined, porque estoy ejecutando una variable antes de declararla.
console.log(hoisting);

//metodo string
let fruta = "kiwi"
console.log(fruta.length);

// opciones de js con html
let numeroSitio = Number(prompt("Escribe un numero"));
let nombreSitio = prompt("Dime tu nombre"); //Funciona como el Leer Psint
alert(nombreSitio + " Bienvenido!");
document.write(nombreSitio + " la suma de la cantidad de letras de tu nombre mas tu numero elegido es " + (nombreSitio.length + numeroSitio));
