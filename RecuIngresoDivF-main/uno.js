/*
Una software factory registra la siguiente informacion de sus empleados:
Nombre,
edad (validar),
sexo (masculino - femenino - no binario),
puesto (programador - analista - Qa),
sueldo (entre 15000 y 70000).
La empresa desea saber: se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) promedio de sueldos para cada puesto
b) el sexo del que percibe el mayor sueldo
c) el nombre del empleado femenino con mas sueldo
d) cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000
*/
function mostrar()
{
	let nombre;
	let edad;
	let sexo;
	let puesto;
	let sueldo;

	let acumSueldoProgra=0;
	let contadorProgra=0;
	let promedioProgra;
	let acumSueldoAnalista=0;
	let contadorAnalista=0;
	let promedioAnalista;
	let acumSueldoQa=0;
	let contadorQa=0;
	let promedioQa;

	let flagMayorSueldo=1;
	let mayorSueldo;
	let sexoMayorSueldo;

	let mayorSueldoFemenino;
	let nombreMayorSueldoFemenino;
	let flagMayorSueldoFemenino=1; 

	let contadorPNBentre20y55=0;



	do{

		nombre = prompt("Ingrese nombre del producto");

		edad = parseInt(prompt("Indique su edad "));
  		while (isNaN(edad) || edad <0 ){
  		edad = parseInt(prompt("Error. Indique edad"));
		}

		sexo = prompt("Indique sexo : femenino / masculino / no binario ");
  		while ( sexo != "femenino" && sexo != "masculino" && sexo != "no binario"){
  		sexo = prompt("Error. Indique sexo : femenino / masculino / no binario");
		}
		  
		puesto = prompt("Indique su puesto: programador, analista , Qa");
  		while ( puesto != "programador" && puesto != "analista" && puesto != "Qa"){
		puesto = prompt("Error. Indique su puesto: programador, analista , Qa")
		}
	
		sueldo = parseFloat(prompt("Indique su sueldo "));
  		while (isNaN(sueldo) || sueldo <15000 || sueldo >70000){
  		sueldo = parseFloat(prompt("Error. Indique su sueldo"));
     	}

		 //Aa) promedio de sueldos para cada puesto
        if(puesto=="programador"){
      	contadorProgra++;
      	acumSueldoProgra= acumSueldoProgra + sueldo;
    	}else if ( puesto=="analista"){
      	contadorAnalista++;
      	acumSueldoAnalista= acumSueldoAnalista + sueldo;
    	}else {
      	contadorQa++;
      	acumSueldoQa= acumSueldoQa + sueldo;
	  	}
	  
		//b) el sexo del que percibe el mayor sueldo
	  	if(flagMayorSueldo || mayorSueldo < sueldo){
		mayorSueldo = sueldo;
		sexoMayorSueldo = sexo;
		flagMayorSueldo=0;
	  	}

		//c) el nombre del empleado femenino con mas sueldo
	  	if(sexo=="femenino" && (flagMayorSueldoFemenino || mayorSueldoFemenino < sueldo)){
		mayorSueldoFemenino = sueldo;
		nombreMayorSueldoFemenino = nombre;
		flagMayorSueldoFemenino=0;  
	  	}

		//d) cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000
	  	if(puesto== "programador" && sexo == "no binario" && sueldo > 20000 && sueldo < 55000){
		contadorPNBentre20y55 ++;
	  	}



	  seguir= prompt("Desea realizar un nuevo registro?")
	}while(seguir=="s")
	
	
	//A
	if(contadorProgra != 0){
	promedioProgra = acumSueldoProgra / contadorProgra;
	console.log("A-1 El promedio de sueldo de programación " + promedioProgra);
	}else {
	console.log("A-1 No se ingresaron empleados de programación " ) ; 
	}

	if(contadorAnalista != 0){
	promedioAnalista = acumSueldoAnalista / contadorAnalista;
	console.log("A-2 El promedio de sueldo analistas " + promedioAnalista);
	}else {
	console.log("A-2 No se ingresaron empleados analistas " ) ; 
	}

	if(contadorQa != 0){
	promedioQa = acumSueldoQa / contadorQa;
	console.log("A-3 El promedio de sueldo de Qa " + promedioQa);
	}else {
	console.log("A-3 No se ingresaron empleados de Qa " ) ; 
	}


	//B			
	console.log("B-El sexo del mayor sueldo es " + sexoMayorSueldo + " con un sueldo de " + mayorSueldo);


	//C
	if(flagMayorSueldoFemenino){
	console.log("C-No se ingresaron empleados del sexo femenino");
	}else{
	console.log("C- El nombre del empleado del sexo femenino con mayor sueldo es : " + nombreMayorSueldoFemenino + " con una sueldo de : " + mayorSueldoFemenino);
	}

	//D
	if(contadorPNBentre20y55 != 0){
	console.log("D-La cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000 es: " + contadorPNBentre20y55);
	}else {
	console.log("D- No se ingresaron programadores no binarios que cobran sueldos entre 20000 y 55000 " ) ; 
	}

	
}
