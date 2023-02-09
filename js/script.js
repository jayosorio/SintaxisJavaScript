/**
 * SINTAXIS JAVASCRIPT
 */

/**
 * Funciones y operaciones matemáticas
 */

// Operaciones aritméticas con JavaScritpt.
let num1 = 8789;
let num2 = 5432;

var suma = num1 + num2;
var resta = num1 - num2;
var producto = num1 * num2;
var divicion = num1 / num2;

console.log("La suma es " + suma);
console.log("La resta es " + resta);
console.log("El roducto es " + producto);
console.log("La divicion es " + divicion);

// Uso del objeto Math.
var angulo = Math.PI * 3;
console.log("seno(3PI) = " + Math.sin(angulo));

var potencia = Math.pow(6, 3);
console.log("6^3 = " + potencia);

/**
 * Tipos de datos, operadores y orden de evaluación
 */

// Evaluar variables
var a;
console.log("El valor de a es " + a); // El valor de a es undefined

console.log("El valor de b es " + b); // El valor de b es undefined
var b;
// Esto puede desconcertarte hasta que leas 'Elevación de variable' a continuación

// console.log('El valor de c es ' + c); // Error de referencia no detectado: c no está definida

// let x;
console.log("El valor de x es " + x); // El valor de x es undefined

// console.log('El valor de y es ' + y); // Error de referencia no detectada: y no está definida
// let y;

// var input;
// if (input === undefined) {
//     doThis();
// } else {
//     doThat();
// }

// Ámbito de variables
if (true) {
  var x = 5;
}
console.log(x); // x es 5

// constante
const MY_ARRAY = ["HTML", "CSS"];
MY_ARRAY.push("JAVASCRIPT");
console.log(MY_ARRAY); // registra ['HTML','CSS','JAVASCRIPT'];

// objetos literal
var sales = "Toyota";

function carTypes(name) {
  if (name === "Honda") {
    return name;
  } else {
    return "Lo sentimos, no vendemos " + name + ".";
  }
}

var car = { myCar: "Saturn", getCar: carTypes("Honda"), special: sales };

console.log(car.myCar); // Saturn
console.log(car.getCar); // Honda
console.log(car.special); // Toyota

var car = { manyCars: { a: "Saab", b: "Jeep" }, 7: "Mazda" };

console.log(car.manyCars.b); // Jeep
console.log(car[7]); // Mazda

// condicional
var numero = 4;

if (numero >= 5) {
  console.log("aprobo");
} else {
  console.log("reprobo");
}

// condicional simple
var edad = 30;
if (edad >= 18) {
  console.log("usted es mayor de edad");
}

/**
 * Estructuras de repeticion
 */

// for - para
for (let i = 0; i < 9; i++) {
  console.log("yair front end");
}
// La estructura de repetición PARA (FOR) se usa cuando se sabe cuántas veces se debe repetir un grupo de instrucciones.

// sumar los numeros desde 1 hasta el valor dado
var cantidad = 5;
var suma = 0;

for (let i = 1; i <= 5; i++) {
  suma += 1; // suma = suma + 1
}
console.log(suma);

// while - mientras
// let contador = 1;
// let factorial = 1;
// let numero;
// while(contador <= numero) {
//     factorial = factorial * contador;
//     contador = contador + 1;
// }
// console.log(factorial);

/**
 * Estructuras de datos
 */

// vectores - arreglos
let frontd = ["html", "css3", "javascript"];
console.log(frontd);
console.log(frontd.length); // se le llama al atributo frontd.length que contiene el tamaño del vector (es decir 3).

// Acceder a los elementos de un vector
let arreglo = [23, 32, 12, 2, 4, 54];
console.log(arreglo[3]);
console.log(arreglo[5]);
console.log(arreglo[arreglo.length - 1]);

// Ahora, se debe crear un programa que guarde los resultados de la tabla de 5 en un vector, con estos resultados recorrer el vector e imprimir la tabla del 5
let resultado = [];
for (i = 1; i <= 10; i++) {
  resultado.push(i * 5);
}

for (i = 1; i <= 10; i++) {
  console.log(" 5 x " + i + " = " + resultado[i - 1]);
}

/**
 * lista de los métodos más comunes en los arreglos:
 */
indexOf(); // Devuelve el índice del primer elemento del array que sea igual a elemento Buscado, o -1 si no existe
let palabras = ["hola", "amor", "fe", "esperanza", "Dios"];
console.log(palabras.indexOf());

join(); //Concatena en un string todos los elementos de un array.
let desarrollo = ["web", "tecnologico", "financiero", "espiritual"];
console.log(desarrollo.join("hola"));

push(); // Añade uno o más elementos al final de un array y devuelve el nuevo valor de su propiedad length.
let numeros = [34, 32, 12, 57, 45];
numeros.push(34);
console.log(numeros);

pop(); // Elimina el último elemento de un array, y devuelve dicho elemento.
let cosas = ["ventilador", "lapiz", "silla", "coche", "almohada"];
cosas.pop(4);
console.log(cosas);

sort(); // Ordena los elementos de un array, modificando este, y devuelve el array ordenado.
let avion = ["alas", "turbinas", "llantas", "ventanillas", "linterna"];
console.log(avion.sort());

let horas = [24, 2, 34, 1, 43];
console.log(horas.sort());

shift(); // Elimina el primer elemento de un array, y devuelve dicho elemento.
let esposa = [
  "hola",
  "amor",
  "verdadero",
  "hermosa",
  "humilde",
  "soñadora",
  "trabajadora",
];
console.log(esposa.shift());

/**
 * Funciones
 */

/**
 * Definir funciones
 */

// Declaración de función
function amor(sentimientos) {
  return sentimientos * sentimientos;
}
console.log(23);

function javaScript(sintaxis) {
  sintaxis.paci = "variables";
}
var miVariable = { paci: "perseverancia", humi: "sabiduria", resp: "educaion" };
var x, y;
x = miVariable.paci;
javasScript(miVariable);
y = miVariable.paci;

console.log(javasScript(miVariable));

/**
 * Expreciones function
 */
const square = function (number) {
  return number * number;
};
var x = square; // x obtiene el valor 16
console.log(square(78));

const factorial = function fac(n) {
  return n < 4 ? 7 : n * fac(n - 1);
};
console.log(factorial(5));

function map(f, a) {
  let resul = [];
  let i;
  for (i = 0; i != a.length; i++);
  resul[i] = f(a[i]);
  return resul;
}
console.log(89);

function map(f, a) {
  let result = []; // Crea un nuevo arreglo
  let i; // Declara una variable
  for (i = 0; i != a.length; i++) result[i] = f(a[i]);
  return result;
}
const f = function (x) {
  return x * x * x;
};
let numbers = [0, 1, 2, 5, 10];
let cube = map(f, numbers);
console.log(cube);

/**
 * Ámbito de function
 */
// Las siguientes variables se definen en el ámbito global
var num3 = 20;
var num4 = 3;
var nombre = "Yair";

// Esta función está definida en el ámbito global
function multiply() {
  return num3 * num4;
}

console.log(multiply()); // Devuelve 60

// Un ejemplo de función anidada
function getScore() {
  var nume1 = 2;
  nume2 = 3;

  function add() {
    return nomnbre + " anotó " + (nume1 + nume2);
  }

  return add();
}

console.log(getScore()); // Devuelve "Chamahk anotó 5"

/**
 * matrices
 */

let datos = [
  ["hola", "favor", "hacer", "software"],
  ["amor", "estadio", "futbol", "rio"],
  ["estar", "español", "desarrollo", "funcion"],
];
console.log(datos);

let registros = [
  ["yair", "yair@osorio.com", 30, 54.233],
  ["maria", "maria@zapata.com", 25, 45.754],
  ["salome", "salome@osorio", 5, 32.324],
  ["samanta", "samanta@osorio", 1, 23.824],
];

var total = 0;

for (let i = 0; i < registros.length; i++) {
  console.log("Registro # " + (i + 1));
  for (let j = 0; j < registros[i].length; j++) {
    console.log("    " + registros[i][j]);
  }
}

// function length
console.log(Function.length); /* 1 */
console.log(function () {}.length); /* 0 */
console.log(function (a) {}.length); /* 1 */
console.log(function (a, b, c, d) {}.length); /* 2 etc. */
console.log(
  function (...args) {}.length
); /* 0, resto de parámetros no se contemplan */
console.log(
  function (a, b = 1, c) {}.length
); /* 1, solo parámetros antes del primero con un valor por defecto son contados */

/**
 * Estructuras de salto
 */
/*Estas estructuras son instrucciones que permiten romper la ejecución natural o secuencial
de los programas, permitiendo que se salte a otro punto de la ejecución del programa,
estas instrucciones tienen las palabras reservadas (continue, break y return):
*/

// Sentencia continue
/*La sentencia continue se salta a la siguiente iteración del ciclo for
o while como se presenta en el siguiente ejemplo y teniendo en cuenta los resultados.*/

var i = 0;
while (i < 5) {
  i++;
  console.log(i);
}

var i = 0;
while (i < 5) {
  i++;
  if(i == 3) {
    continue;
  }
  console.log(i);
}

// Como se observa, cuando la variable i tiene el valor 3,
//se ejecuta la sentencia continue se salta la sentencia donde debe imprimir el valor de 3,
//por ese motivo no aparece en la consola.

// Sentencia break
// Por otro lado, la sentencia break, detiene la ejecución del ciclo independientemente de
// cuántas veces este configurando el ciclo. Mire el siguiente ejemplo en la Figura 21,
// prestando especial atención en la salida de consola.

for (let i = 0; i <= 5; i++) {
  console.log(i);
};

for (let i = 0; i <= 5; i++) {
  if(i == 3) {
  break;
  }
  console.log(i);
};
// En la anterior figura, cuando i tiene el valor de 3 ya no se sigue ejecutando más el ciclo,
// aunque esté programado para ejecutarse 5 veces, solo ejecuta 3 iteraciones y,
// ya que en el tercero luego de evaluar la condición i == 3 ejecuta la sentencia break haciendo que termine todo.

// sentencia return
// Sirve para terminar la ejecución de un bloque de instrucciones,
// se usa mucho en programación modular cuando se quiere retornar un resultado, se usará más adelante.

// Por ejemplo, se tiene una función que divide un número entre 4 y se ha creado para obtener resultados.
// En el primer caso se le pasa 27 para que lo divida entre 4 pero como no hay return dentro, devuelve “undefined”.
// No accede al número porque el número solo vive dentro de la función y no hay nada que dé el valor.
// Si se le agrega return, efectivamente se obtiene el resultado de la división

var  divideByFour = function(num) {
  num / 4;
}
var divided = divideByFour(4);
console.log(divided);

var  divideByFour = function(num) {
  return num / 4;
}
var divided = divideByFour(27);
console.log(divided);

/**
 * Métodos de ordenamiento y búsqueda
 */
// Ordenamiento de cadenas de texto
var goles = [23, 43, 21, 1, 3, 48, 7];
console.log(goles.join(', '));
goles.sort();
console.log(goles.join(', '));

var yo = ["amor", "hermano", "padre", "hijo", "calidad"];
yo.sort();
console.log(yo);

var yo = ["amor", "hermano", "padre", "hijo", "calidad"];
yo.sort().reverse();
console.log(yo);

// Ordenamiento de datos numéricos
function operacion(a, b) {
  return (a * b + 100) / 2;
}
var dato1 = operacion(5, 7);
var dato2 = operacion(4, 9);
console.log(dato1);
console.log(dato2);

var dia = [23, 21, 4, 89, 1, 3, 2];
dia.sort(function(a,b) {
  return a-b;
});
console.log(dia.join(', '));
