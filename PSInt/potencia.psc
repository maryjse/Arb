Algoritmo sin_titulo
	Escribir "Ingrese un numero: "
	Leer num
	Escribir "Ingrese la potencia: "
	Leer pot
	respuesta = num
	Mientras (pot > 1) Hacer
		respuesta = respuesta * num
		pot = pot - 1
	Fin Mientras
	Mostrar "El resultado es: " , respuesta
FinAlgoritmo
