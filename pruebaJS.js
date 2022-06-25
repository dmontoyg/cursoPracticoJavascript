/*
Prueba escrita de los conocimientos previos

1. Responda las siguientes preguntas

¿Qué es una variable y para qué sirve?
R// Es un campo que se puede denominar, como un contenedor, donde permite almacenar diferentes tipos de datos: string, number, boolean, etc. Posteriormente, podemos acudir a dicho espacio, para consultar, modificar o eliminar.

¿Cuál es la diferencia entre declarar e inicializar una variable?
R// Declarar, es cuando la variable aun no se ha inicializado, mientras que al momento de inicializarse si, ejemplo:

    let varible; // Estamos declarando
    variable = true; // Estamos inicializando

¿Cuál es la diferencia entre sumar números y concatenar strings?
R// La diferencia es que al sumar los strings no se suman, sino que se añaden ejemplo:
*/

function sumar (a, b){
    return a + b;
}

console.log(sumar(4, 2)); // Resultado 6
console.log(sumar('4', '2')); // Resultado 42

/*
¿Cuál operador me permite sumar o concatenar?
R// El operador es +

2. Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

Nombre = String
Apellido = String
Nombre de usuario en Platzi = String
Edad = Number
Correo electrónico = String
Mayor de edad = Boolean
Dinero ahorrado = Number
Deudas = Number

3. Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

Let nombre = 'Diego';
Let apellido = 'Montoya';
Let userPlatzi = 'dmontoyg';
Let mayorEdad = true;
Let email = 'dmontoyg@gmail.com';
Let dineroAhorrado = 2000;
Let deudas = null;

4. Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

Nombre completo (nombre y apellido)
Dinero real (dinero ahorrado menos deudas)
*/

let nombre = 'Diego Alejandro';
let apellido = 'Montoya';
let dineroAhorrado = 50000;
let deuda = 1500;
let dineroActual;

dineroActual = dineroAhorrado - deuda;

console.log('El nombre completo es: ' + nombre + ' ' + apellido);
console.log('El dinero que se tiene actualmente es: ' + dineroActual);


//PENDIENTES

/*
Funciones
1️⃣ Responde las siguientes preguntas en la sección de comentarios:

¿Qué es una función?
¿Cuándo me sirve usar una función en mi código?
¿Cuál es la diferencia entre parámetros y argumentos de una función?
2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
Condicionales
1️⃣ Responde las siguientes preguntas en la sección de comentarios:

¿Qué es una condicional?
¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
¿Puedo combinar funciones y condicionales?
2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}
3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays y un solo condicional. 😏

Ciclos
1️⃣ Responde las siguientes preguntas en la sección de comentarios:

¿Qué es un ciclo?
¿Qué tipos de ciclos existen en JavaScript?
¿Qué es un ciclo infinito y por qué es un problema?
¿Puedo mezclar ciclos y condicionales?
2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}
for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

Pista: puedes usar la función prompt de JavaScript.

Listas
1️⃣ Responde las siguientes preguntas en la sección de comentarios:

¿Qué es un array?
¿Qué es un objeto?
¿Cuándo es mejor usar objetos o arrays?
¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).


*/