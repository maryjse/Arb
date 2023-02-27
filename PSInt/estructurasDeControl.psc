Algoritmo estructurasDeControl
	//if/ else
	Definir numeroIngresado Como Entero
	Escribir "Ingrese un numero del 1 al 10"
	Leer numeroIngresado
	
	si (numeroIngresado <= 10) Entonces
		Mostrar "Correcto"
	SiNo
		Mostrar "Incorrecto"
	FinSi
	
	//switch
	//Antes de los dos puntos puede ser cualquier dato, que seria lo que se guarda en la variable.
	//No necesariamente tienen que ser 3 opciones, sino que son todas las que quiera.
	Escribir "Elija una opcion para el semaforo: 1 = Rojo, 2 = Amarillo, 3 =  Verde"
	Leer opcionElejida
	
	Segun opcionElejida Hacer
		1: 
			Mostrar "Semaforo en Rojo, NO puedes avanzar"
		2:
			Mostrar "Semaforo en Amarillo, PRECAUCION"
		3:
			Mostrar "Semaforo en Verde, PUEDES avanzar"
		De Otro Modo:
			Mostrar "Tienes que elegir un numero del 1 al 3"
	Fin Segun
	
	//while
	numero = 0
	
	Mientras (numero <= 5 ) Hacer
		Mostrar "Vuelta numero: " , numero
		numero = numero+1
	FinMientras
FinAlgoritmo
