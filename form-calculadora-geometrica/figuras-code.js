// Funciones para realizar los calculos

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}

// Funciones para manejar la info en el front

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

/*

Otra forma de realizar el triangulo Isósceles

function altura(lado1, lado2, base){
    if(lado1 === lado2 && lado1 != base){
        alert("isoceles");
        const altura = Math.sqrt(lado1**2 - base**2/ 4)
        console.log(altura)
    }
    else{
        alert("no lo se");
    }
}
altura(6, 6, 4) */

//Triangulo Isósceles
function trianguloIso(){
    let lado1 = document.getElementById("isoLado1");
    let iLado1 = parseFloat(lado1.value);

    let lado2 = document.getElementById("isoLado2");
    let iLado2 = parseFloat(lado2.value);

    let base = document.getElementById("isoBase");
    let iBase = parseFloat(base.value);

    if(iLado1 != iLado2){
        alert("No se puede calcular debido a que los lados son diferentes");
    }else{
        const pequenoLado2 = iBase /2;
        const pequenoBase = iLado1;

        const pequenoLado2Cuadrado = pequenoLado2 * pequenoLado2;
        const pequenoBaseCuadrado = pequenoBase * pequenoBase;

        let pequenoLado1 = Math.sqrt(pequenoBaseCuadrado - pequenoLado2Cuadrado);

        const grandeAltura = pequenoLado1;
        alert(`La altura del triangulo es: ${grandeAltura}cm`);
    }
}