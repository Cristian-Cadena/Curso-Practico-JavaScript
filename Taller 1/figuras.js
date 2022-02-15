//Codigo del Cuadrado
console.group("Cuadrados");

//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + " CM");

function perimetroCuadrado (lado) {

    return lado * 4;

} 
//console.log("El Perimetro del cuadrado es: " + perimetroCuadrado + " CM");

function areaCuadrado (lado) {

    return lado ** 2;

} 
//console.log("El Area del cuadrado es: " + areaCuadrado + " CM**2");

console.groupEnd();
//Codigo del Cuadrado


//Código del Triangulo
console.group("Triangulos"); 

//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo3 = 4;
const h = 5.5;

/*
console.log(
  "Los lados del triangulo miden: " +
    ladoTriangulo1 +
    " CM," +
    ladoTriangulo2 +
    " CM," +
    baseTriangulo3 +
    " CM"
);

console.log("La altura del triangulo es de: " + alturaTriangulo + " CM")
*/

function perimetroTriangulo (l1, l2, b3) {

    return (Number(l1) + Number(l2) + Number(b3));

}

//console.log("El Perimetro del triangulo es: " + perimetroTriangulo + " CM");

function areaTriangulo (b3,h) {

    return Number((b3 * h) /  (2));

} 

//console.log("El Area del triangulo es: " + areaTriangulo + " CM**2");

console.groupEnd();
//Códido del Triangulo

//Código de la Circulos
console.group("Circulos"); 

//const radioCirculo = 4;
function diametroCirculo (radio) {

    return Number(radio*2);

} 

const PI = Math.PI;

//console.log("PI es: " + PI + " CM");



function perimetroCirculo (radio) {

    const diametro = diametroCirculo(radio);
    return Number(diametro * PI);

} 

//console.log("El Perimetro del Circulo es: " + perimetroCirculo + " CM");

function areaCirculo (radio){

    return PI * radio**2;

} 

//console.log("El Area del Circulo es: " + areaCirculo + " CM**2");

console.groupEnd();
//Códido del Triangulo

//Aqui interactuamos con el HTML

function calcularPerimetroCuadrado() {

    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert ("Tu Perimetro es: " + perimetro);

}

function calcularAreaCuadrado() {
    
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert ("Tu Area es: " + area);

}

function calcularPerimetroTriangulo() {

    const input = document.getElementById("InputTriangulo");
    const value1 = 6;
    const value2 = 6;
    const value3 = input.value;

    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert ("Tu Perimetro es: " + perimetro);

}

function calcularAreaTriangulo() {
    
    const input = document.getElementById("InputTriangulo");
    const h = 6;
    const value3 = input.value;

    const area = areaTriangulo(value3,h);
    alert ("Tu Area es: " + area);

}

function calcularPerimetroCirculo() {

    const input = document.getElementById("InputCirculo");
    const value1 = input.value;

    const perimetro = perimetroCirculo(value1);
    alert ("Tu Perimetro es: " + perimetro);

}

function calcularAreaCirculo() {
    
    const input = document.getElementById("InputCirculo");
    const value1 = input.value;

    const area = areaCirculo(value1);
    alert ("Tu Area es: " + area);

}