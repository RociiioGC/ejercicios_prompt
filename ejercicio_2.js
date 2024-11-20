const prompt = require("prompt-sync")({ sigint: true }); // Importa la función prompt

let numero1 = parseFloat(prompt("Ingrese el primer numero: ")); // Pedirle al usuario que ingrese tres números
let numero2 = parseFloat(prompt("Ingrese el segundo numero: ")); // parseFloat Convierte las entradas del usuario a números de punto flotante
let numero3 = parseFloat(prompt("Ingrese el tercer numero: "));

// Determina el número mayor
 let resultado;

if (numero1 >= numero2 && numero1 >= numero3) {
    resultado = numero1;
    console.log(`resultado = ${resultado}`);
  } else if (numero2 >= numero1 && numero2 >= numero3) {
    resultado = numero2;
    console.log(`resultado = ${resultado}`);
  } else if (numero3 >= numero2 && numero3 >= numero1) {
    resultado = numero3;
    console.log(`resultado = ${resultado}`);
  }
  
console.log("El resultado mayor es: ", resultado);
