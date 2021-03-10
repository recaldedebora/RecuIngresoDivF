/*Ferrete lamparas 2.0 El empleado del negocio ingresa los siguientes datos de cada venta, 
teniendo en cuenta que tenemos varias ventas:
nombre del cliente,
cantidad de lamparas ,
marca (FelipeLamparas - ArgentinaLuz -Illuminatis),
precio por unidad,
precio total de esa compra: dato que se calcula.
Se sabe que si la marca es FelipeLamparas y la cantidad de lamparas supera las 5 unidades, se aplica un descuento del 10% sobre la compra 
Si la marca es ArgentinaLuz y compra 3 o mas unidades, el descuento es del 5%. Ningun otro caso aplica descuento. al terminar la carga de todas las ventas,la empresa desea saber:
a) Cuanto recauda la empresa en concepto de todas las ventas realizadas.
b) Cuanto "perdio" la empresa en concepto de descuentos.
c) El promedio de la cantidad de lamparas vendidas de cada marca.
d) La marca que mas ventas realizo (sin importar la cantidad de lamparas vendidas)
*/



function mostrar()
{

	let nombreCliente;
	let cantidad;
	let marca;
	let precio;
	let seguir;

	let precioPorCompra;
	let descuentoPorCompra;
	let precioCompraConDescuento;
	let acumPrecioSubTotal=0;
	let acumDescuentoPorCompra=0;

	let contadorFel=0;
	let acumCantidadFel=0;
	let promedioCantidadPorFel=0;
	let contadorArg=0;
	let acumCantidadArg=0;
	let promedioCantidadPorArg=0;
	let contadorIllu=0;
	let acumCantidadIllu=0;
	let promedioCantidadPorIllu=0;

	let marcaMasContadorVentas;


	do{

		nombreCliente = prompt("Ingrese su nombre");

		cantidad = parseInt(prompt("Indique cantidad de unidades "));
		while (isNaN(cantidad) || cantidad < 0 ){
		cantidad = parseInt(prompt("Error. Indique cantidad de unidades"));
		}

		marca = prompt("Indique Marca: FelipeLamparas - ArgentinaLuz - Illuminatis");
  		while ( marca != "FelipeLamparas" && marca != "ArgentinaLuz" && marca != "Illuminatis"){
		marca = prompt("Error. Indique Marca: FelipeLamparas - ArgentinaLuz - Illuminatis");
		}

		precio = parseFloat(prompt("Indique el precio "));
  		while ( isNaN(precio) || precio <0){
  		precio = parseFloat(prompt("Error. Indique el precio"));
		}

		
		
		//si la marca es FelipeLamparas y la cantidad de lamparas supera las 5 unidades, 
		//se aplica un descuento del 10% sobre la compra 
		//Si la marca es ArgentinaLuz y compra 3 o mas unidades,el descuento es del 5%. 
		if(marca == "FelipeLamparas" && cantidad >5 ){
			descuento = 10;
		}else if(marca == "ArgentinaLuz" && cantidad >= 3){
			descuento = 5;
		}else{
			descuento = 0;
		}
		
		//Ejercicio A a) Cuanto recauda la empresa en concepto de todas las ventas realizadas.
		precioPorCompra = precio * cantidad;
		descuentoPorCompra= precioPorCompra*descuento/100;
		precioCompraConDescuento= precioPorCompra - descuentoPorCompra;
		acumPrecioSubTotal = acumPrecioSubTotal + precioCompraConDescuento;

		//ejercicio B b) Cuanto "perdio" la empresa en concepto de descuentos.
		acumDescuentoPorCompra= acumDescuentoPorCompra + descuentoPorCompra ;
		//Fin A

		
		
		//Ejercicio C c) El promedio de la cantidad de lamparas vendidas de cada marca.
		if(marca == "FelipeLamparas" ){
			acumCantidadFel = acumCantidadFel + cantidad;
			contadorFel++;
		}else if(marca == "ArgentinaLuz" ){
			acumCantidadArg = acumCantidadArg + cantidad;
			contadorArg++;
		}else{
			acumCantidadIllu = acumCantidadIllu + cantidad;
			contadorIllu++;
		}
	
		
		
		
		
		seguir = ("Desea registrar una nueva compra?");
	}while(seguir == "s");
	


	//Ejercicio A
	
	console.log("A-Lo que recauda la empresa en concepto de todas las ventas realizadas es : $"+ acumPrecioSubTotal);
	

	//ejercicio B
	console.log("B-Lo que perdio la empresa en concepto de descuento es : $"+ acumDescuentoPorCompra);


	//Ejercicio C
	//c) El promedio de la cantidad de lamparas vendidas de cada marca.
	if(contadorFel != 0){
	promedioCantidadPorFel = acumCantidadFel / contadorFel;
	console.log("C-1 El promedio de la cantidad de lamparas vendidas de FelipeLamparas " + promedioCantidadPorFel);
	}else {
	console.log("C-1 No se ingresaron compra de la marca FelipeLamparas" ) ; 
	}

	if(contadorArg != 0){
	promedioCantidadPorArg = acumCantidadArg / contadorArg;
	console.log("C-2 El promedio de la cantidad de lamparas vendidas de ArgentinaLuz " + promedioCantidadPorArg);
	}else {
	console.log("C-2 No se ingresaron compra de la marca ArgentinaLuz" ) ; 
	}

	if(contadorIllu != 0){
	promedioCantidadPorIllu = acumCantidadIllu / contadorIllu;
	console.log("C-3 El promedio de la cantidad de lamparas vendidas de Illuminatis " + promedioCantidadPorIllu);
	}else {
	console.log("C-3 No se ingresaron compra de la marca Illuminatis" ) ; 
	}

	 //D d) La marca que mas ventas realizo (sin importar la cantidad de lamparas vendidas)
	if(contadorFel > contadorArg  && contadorFel > contadorIllu){
		marcaMasContadorVentas = "FelipeLamparas";   
	}
	else if(contadorArg > contadorIllu &&  contadorArg >= contadorFel){
		marcaMasContadorVentas = "ArgentinaLuz";
	}
	else { 
		marcaMasContadorVentas = "Illuminatis";
	 }
	console.log("D-La marca que mas ventas realizo es: " + marcaMasContadorVentas );
}

/*
a) Cuanto recauda la empresa en concepto de todas las ventas realizadas.
b) Cuanto "perdio" la empresa en concepto de descuentos.
c) El promedio de la cantidad de lamparas vendidas de cada marca.
d) La marca que mas ventas realizo (sin importar la cantidad de lamparas vendidas)
*/
