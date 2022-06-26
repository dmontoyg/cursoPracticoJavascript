// Cod del cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadro es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadro es: " + areaCuadrado + "cm²");

console.groupEnd();

// Cod del triangulo

console.group("Triangulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log("Los lados del triangulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm");

console.log("La altura del triangulo es de: " + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo
console.log("La perimetro del triangulo es de: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El area del triangulo es: " + areaTriangulo + "cm²");

console.groupEnd();

// Cod del circulo

console.group("Circulo");

// Radio
const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo + "cm");

// Diametro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es: " + diametroCirculo + "cm");

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("La perimetro del circulo es: " + perimetroCirculo + "cm");

// Area
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El area del circulo es: " + areaCirculo + "cm²");



console.groupEnd();