let persona = {
    nombre: "Jose",
    apellido: "San Martin",
    saludar: function() {
        return "Hola, me llamo " + this.nombre
    }   //Una funcion dentro de un objeto se llama METODO.
}
console.log(persona.saludar());

// Funcion constructora
function Celular(marca, modelo){
    this.marca = marca;
    this.modelo = modelo;
}
//instanciar el objeto:
let celular1 = new Celular("Motorola", "A71"); //Tenemos una intancia del objeto Celular.
let celular2
console.log(celular1);