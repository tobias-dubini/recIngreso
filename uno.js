
function mostrar()
{
 let nombre;
 let edad;
 let sexo;
 let puesto;
 let sueldo;
 let seguir;
 let acumP = 0;
 let acumA = 0;
 let acumQ = 0;
 let contP = 0;
 let contA = 0;
 let contQ = 0;
 let promP = 0;
 let promA = 0;
 let promQ = 0;
 let flagSexo = 1;
 let mayorSueldo;
 let sexoMayorSueldo;
 let nombreFemMayorSueldo;
 let flagFemMS = 1;
 let programadoresNB;
 let flagProNB = 1;
 let contNB = 0;

 

	do{
		nombre = prompt("Ingrese su nombre");
		while(isNaN(nombre) == false){
			nombre = prompt("Por favor, Reingrese su nombre");
		}
		edad = parseInt(prompt("Ingrese su edad (mayor a 18): "));
		while(edad < 18 || isNaN(edad)){
		  edad = parseInt(prompt("Por favor, Reingrese edad (mayor a 18): "));
		}
		sexo = prompt("Ingrese nombre femenino/masculino/NoBinario: ").toLowerCase();
     while(sexo != "femenino" && sexo != "masculino" && sexo != "NoBinario"){
	   sexo = prompt("ERROR. Reingrese nombre femenino/masculino/NoBinario: ").toLowerCase();
     }
	    puesto = prompt("Ingrese su puesto (programador, analista o qa): ");
		while(puesto != "programador" && puesto != "analista" && puesto != "qa"){
			puesto = prompt("Por favor, ingrese su puesto (programador, analista o qa: ");
		}
        sueldo = parseInt(prompt("Ingrese su sueldo (entre 15000 y 70000): "));
		while(isNaN(sueldo) || sueldo < 15000 || sueldo > 70000){
			sueldo = parseInt(prompt("Por favor, Reingrese su sueldo (entre 15000 y 70000): "));
		}
        
        if(puesto == "programador"){
			acumP += sueldo;
			contP++;
		  }
		  else if(puesto == "analista"){
			acumA += sueldo;
			contA++;
		  }
		  else{
			acumQ += sueldo;
			contQ++;
		  }
		  if(flagSexo || sueldo > mayorSueldo){

			sexoMayorSueldo = sexo;
			mayorSueldo = sueldo;
			flagSexo = 0;
		}
		if(flagFemMS || (sueldo > nombreFemMayorSueldo && sexo == "f")){
         nombreFemMayorSueldo = nombre;
         flagFemMS = 0;
		}
		if (
			flagProNB ||(sexo == "NoBinario" && sueldo >= 20000 && sueldo <= 55000 && puesto == "programador")) {
			contNB++;
		  }
         seguir = prompt("Desea ingresar otro empleado?: ");
	}while (seguir == 's');
	
	if(contP != 0){
		promP = acumP / contP;
		}
		if(contA != 0){
		promA = acumA / contA;
		}
		if(contQ != 0){
		promQ = acumQ / contQ;
		} 
    if (sexo = "f"){

	}
		alert("a- Promedio P:" + promP + " A " + promA + " Q " + promQ);
        alert("b- El sexo : " + sexoMayorSueldo + " con el sueldo mayor de: " + mayorSueldo);
	    if (flagFemMS){
			alert("c- No se ingreso nombre femenino con maryor sueldo");
		}else{
		alert("c- el nombre del empleado femenino con mas sueldo es: " + nombreFemMayorSueldo);
		}
        if(flagProNB){
			alert("d- No se ingresaron programadores NB")
		}else{
		alert("d- La cantidad de programadores no binarios que cobran entre 20000 y 55000 son: " + programadoresNB);
		}
}


/*
Una software factory registra la siguiente informacion de sus empleados:
Nombre edad (validar)
sexo (masculino - femenino - no binario)
puesto (programador - analista - Qa)
sueldo (entre 15000 y 70000)
La empresa desea saber: se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) promedio de sueldos para cada puesto
b) el sexo del que percibe el mayor sueldo
c) el nombre del empleado femenino con mas sueldo
d) cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000
*/