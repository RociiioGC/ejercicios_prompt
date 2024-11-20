const prompt = require("prompt-sync")({ sigint: true }); // calculadora simple

// Pedir al usuario que ingrese dos números
let numero1 = parseFloat(prompt("Ingresa el primer número: "));
let numero2 = parseFloat(prompt("Ingresa el segundo número: "));

// Pedir al usuario que elija una operación
let operacion = prompt("Elije que operación realizar (suma, resta, multiplicación, división): ");

// Realizar la operación y mostrar el resultado
let resultado;

if (operacion === "suma") {
  console.log(`resultado: ${numero1 + numero2}`);
} else if (operacion === "resta") {
  console.log(`resultado: ${numero1 - numero2}`);
} else if (operacion === "multiplicación") {
  console.log(`resultado: ${numero1 * numero2}`);
} else if (operacion === "división") {
    console.log(`resultado: ${numero1 / numero2}`);
} 

