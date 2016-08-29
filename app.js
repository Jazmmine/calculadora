var calculadora = parseInt(prompt("Escoja la opcion que desee realizar: \n" +
	"1. Suma \n "+
	"2. Resta \n "+
	"3. Multiplicación \n "+
	"4. División \n "+
	"5. Mayor que \n "+
	"6. Menor que \n"+
	"7. Resto-Modulo \n "));

var num1 = parseInt(prompt("Ingrese el primer número"));
var num2 = parseInt(prompt("Ingrese el segundo número"));

switch(calculadora){
	case 1:
		var suma = num1 + num2;
		window.alert("La suma es igual a: " + suma);
		break;
	case 2:
		var resta = num1 - num2;
		window.alert("La resta es igual a: " + resta);
		break;
	case 3:
		var multiplicacion = num1 * num2;
		window.alert("La multiplicacion es igual a: " + multiplicacion);
		break;
	case 4:
		var division = num1 / num2;
		window.alert("La división es igual a: " + division);
		break;
	case 5:
		var mayor = Math.max(num1, num2);
		window.alert("El número mayor es:" + mayor);
		break;
	case 6:
		var menor = Math.min(num1, num2);
		window.alert("La número menor es:" + menor);
		break;
	case 7:
		var residuo = (num1/100)*num2;
		window.alert("El residuo es:" + residuo);
		break;
		
	default:
		window.alert("Error");
		break;
	
}

