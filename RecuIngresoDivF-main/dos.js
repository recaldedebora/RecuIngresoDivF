/*
Realizar el algoritmo que permita ingresar los datos de los 500 alumnos de la UTN FRA, los datos 
solicitados son:
nombre,
carrera("Quimica";"Fisica";"Sistemas"),
sexo (masculino - femenino -no binario),
cantidad de materias(entre 1 y 5),
Nota promedio del alumno(entre 0 y 10),
edad (validar).
Se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo).
b) El nombre de la alumna mas joven.
c) Porcentaje de estudiantes que estudia cada carrera.
d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica.
*/

function mostrar()
{
    let nombre;
    let carrera;
    let cantidadMaterias;
    let nota;
    let edad;
    let sexo;
  
    
    let mejorNotaFisica;
    let nombreMejorNotaFisica;
    let flagFisica=1;
    
    let edadAlumnaMasJoven;
    let nombreAlumnaMasJoven;
    let flagAlumna=1;
  
    let contadorQuimica=0;
    let contadorFisica=0;
    let contadorSistemas=0;
    let contadorTotalAlumnos=0;
  
    let flagMasMateriasFS=1;
    let masMateriasFS;
    let nombreMasMateriasFS;
    let edadMasMateriasFS;
  
    let porcentajeFisica;
    let porcentajeQuimica;
    let porcentajeSistemas;
  
  
  
    for(let i=0; i<500; i++){


        nombre = prompt("Ingrese su nombre");
  
        
        carrera = prompt("Indique su situación Laboral: Quimica, Fisica , Sistemas");
        while ( carrera != "Quimica" && carrera != "Fisica" && carrera != "Sistemas"){
        carrera = prompt("Error. Indique su situación Laboral: Quimica, Fisica , Sistemas")
        }
        
        sexo = prompt("Indique sexo : femenino / masculino / no binario ");
        while ( sexo != "femenino" && sexo != "masculino" && sexo != "no binario"){
        sexo = prompt("Error. Indique sexo : femenino / masculino / no binario");
        }
        
        cantidadMaterias = parseInt(prompt("Indique su cantidad Materias "));
        while (isNaN(cantidadMaterias) || cantidadMaterias <1 || cantidadMaterias >5){
        cantidadMaterias = parseInt(prompt("Error. Indique su cantidad Materias"));
        }
        nota = parseInt(prompt("Indique su nota "));
        while (isNaN(nota) || nota <0 || nota >10){
        nota = parseInt(prompt("Error. Indique su nota"));
        }
  
        
        edad = parseInt(prompt("Indique su edad "));
        while (isNaN(edad) || edad <0 ){
        edad = parseInt(prompt("Error. Indique edad"));
        }
      
  
        //A a) El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo).
        if(carrera == "Fisica" && (flagFisica || mejorNotaFisica < nota)){
        mejorNotaFisica = nota;
        nombreMejorNotaFisica = nombre;
        flagFisica=0;
        }
  
        //B b) El nombre de la alumna mas joven.
        if(sexo == "femenino" && (flagAlumna || edadAlumnaMasJoven > edad)){
        edadAlumnaMasJoven = edad;
        nombreAlumnaMasJoven = nombre;
        flagAlumna=0;
        }
  
  
  
        //C c) Porcentaje de estudiantes que estudia cada carrera.
        if(carrera=="Quimica"){
        contadorQuimica++;  
        }else if (carrera=="Fisica"){
        contadorFisica++;
         }else {
        contadorSistemas++;
        }
  
        contadorTotalAlumnos++;
  
        //D d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica.
        if(carrera != "Quimica" && (flagMasMateriasFS || masMateriasFS < cantidadMaterias)){
        masMateriasFS = cantidadMaterias;
        nombreMasMateriasFS = nombre;
        edadMasMateriasFS = edad;
        flagMasMateriasFS=0;
        }
  
      
    }//Fin for
  
    //RTA A
    if(flagFisica){
    console.log("A-No se ingresaron alumnos de la carrera de Fisica");
    }else{
    console.log("A- El nombre del mejor promedio de la carrera de Fisica es : " + nombreMejorNotaFisica + " con una nota de : " + mejorNotaFisica);
    }
  
    //RTA B
    if(flagAlumna){
    console.log("B-No se ingresaron alumnos del sexo femenino");
    }else{
    console.log("B- El nombre de la alumna mas joven es : " + nombreAlumnaMasJoven + " con una edad de : " + edadAlumnaMasJoven);
    }
  
  
    ///RTA C
    if(contadorFisica != 0){
    porcentajeFisica = contadorFisica * 100 / contadorTotalAlumnos;
    console.log("C-1 El porcentaje de alumnos de Fisisca es " + porcentajeFisica);
    }else {
    console.log("C-1 No se ingresaron alumnos de Fisica " ) ; 
    }
  
    if(contadorQuimica != 0){
    porcentajeQuimica = contadorQuimica * 100 / contadorTotalAlumnos;
    console.log("C-2 El porcentaje de alumnos de Quimica es " + porcentajeQuimica);
    }else {
    console.log("C-2 No se ingresaron alumnos de Quimica " ) ; 
    }
    
    if(contadorSistemas != 0){
    porcentajeSistemas = contadorSistemas * 100 / contadorTotalAlumnos;
    console.log("C-3 El porcentaje de alumnos de Sistemas es " + porcentajeSistemas);
    }else {
    console.log("C-3 No se ingresaron alumnos de Quimica Sistemas " ) ; 
    }    
  
  
    //RTA D
    if(flagMasMateriasFS){
    console.log("D-No se ingresaron alumnos exceptuando la carrera de Química");
    }else{
    console.log("D- El nombre del estudiante que cursa más materias exceptuando la carrera de Química : " + nombreMasMateriasFS + " con una cantidad de materias : " + masMateriasFS);
    }
  
  
}

/*
Se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo).
b) El nombre de la alumna mas joven.
c) Porcentaje de estudiantes que estudia cada carrera.
d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica.
*/
