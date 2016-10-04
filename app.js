var numero1;
var numero2;
var calculadora;
var condicion;

condicion = true;

do{

	calculadora = parseInt(prompt("Ingrese la opción que deseea ejecutar : \n" +
	"1. Suma \n" + 
	"2. Resta \n" +
	"3. Multiplicación \n" +
	"4. División \n" +
	"5. Resto \n" +
	"6. Mayor que \n" +
	"7. Menor que \n" +
	"8. Salir \n"));


	if (calculadora < 8) {

		numero1 = parseInt(prompt("Ingrese primer número :"));
		numero2 = parseInt(prompt("Ingrese segundo número :"));

		switch(calculadora){
		case 1:
			var suma = numero1 + numero2;
			alert("La suma es igual a: " + suma);
			break;
		case 2:
			var resta = numero1 - numero2;
			alert("La resta es igual a: " + resta);
			break;
		case 3:
			var multiplicacion = numero1 * numero2;
			alert("La Multiplicación es igual a: " + multiplicacion);
			break;
		case 4:
			var division = numero1/numero2;
			alert("La División es igual a: " + division);
			break;
		case 5:
			var resto = numero1%numero2;
			alert("El resto es igual a: " + resto);
			break;
		case 6:
			if(numero1 == numero2){
				alert(numero1 + " es igual a " + numero2);
			}
			else{
				var numeroMayor = Math.max(numero1, numero2);
				alert("El número mayor es: " + numeroMayor);
			}
			
			break;
		case 7:
			if (numero1 == numero2) {
				alert(numero1 + " es igual a " + numero2);
			}
			else{
			var numeroMenor = Math.min(numero1, numero2);
			alert("El número menor es: " + numeroMenor);			
			}
			break;	
		}
	}

	if(calculadora == 8){
		condicion == false;
		break;
	}

	else{
		alert("Opción incorrecta");
		break;

	}

}while(condicion);


