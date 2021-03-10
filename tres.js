function mostrar()
{
    let marca;
    let cantidad;
	let nombre;
	let precio;
	let seguir;
	let total;
	let totalVentas;
	let cantidadDeLamparas;
	let descuento10;
	let descuento5;
	let precioFinal;

do{
	nombre = prompt("Ingrese su nombre");
    while(isNaN(nombre) == false){
        nombre = prompt("Por favor, Reingrese su nombre");
    }
    cantidad = parseInt(prompt("Ingrese cantidad de lamparas: "));
    marca = prompt ("Ingrese marca de lamparas: ").toLowerCase();
	while(marca != "FelipeLamparas" && marca != "ArgentinaLuz" && marca != "Illuminatis"){
		marca = prompt ("Reingrese marca de lamparas: ").toLocaleLowerCase();
	}
	precio = parseInt(prompt("Ingrese el precio por unidad"));
		while (isNaN(precio) || precio <= 0) {
			precio = parseInt(prompt("Error. Ingrese el precio por unidad"));
		}
		total = precio * cantidadDeLamparas;
		totalVentas += total
if (marca == "Felipelamparas" && cantidadDeLamparas > 5) {
			descuento10 = total * 10 / 100
			precioFinal = total - descuento10
			totalDescuento += descuento10
		}
		else if (marca == "argentinaluz" && cantidadDeLamparas >= 3) {
			descuento5 = total * 5 / 100
			precioFinal = total - descuento5
			totalDescuento += descuento5
		}




seguir = prompt("Desea ingresar otra venta?: ")
}while(seguir == 's');





}
  /*
Ferrete lamparas 2.0 El empleado del negocio ingresa los siguientes datos de cada venta, teniendo en cuenta que tenemos varias ventas:
nombre del cliente
cantidad de lamparas marca (FelipeLamparas - ArgentinaLuz - Illuminatis)
precio por unidad total de la compra: dato que se calcula.
Se sabe que si la marca es FelipeLamparas y la cantidad de lamparas supera las 5 unidades, se aplica un descuento del 10% sobre la compra Si la marca es ArgentinaLuz y compra 3 o mas unidades, el descuento es del 5%. Ningun otro caso aplica descuento. al terminar la carga de todas las ventas,la empresa desea saber:
a) Cuanto recauda la empresa en concepto de todas las ventas realizadas.
b) Cuanto "perdio" la empresa en concepto de descuentos.
c) El promedio de la cantidad de lamparas vendidas de cada marca.
d) La marca que mas ventas realizo (sin importar la cantidad de lamparas vendidas)
  */