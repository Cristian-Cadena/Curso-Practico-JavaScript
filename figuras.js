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

function perimetroTriangulo (l1,l2,b3) {

    return l1+ l2 + b3;

}

//console.log("El Perimetro del triangulo es: " + perimetroTriangulo + " CM");

function areaTriangulo (b3,h) {

    return (b3 * h) /  (2);

} 

//console.log("El Area del triangulo es: " + areaTriangulo + " CM**2");

console.groupEnd();
//Códido del Triangulo

//Código de la Circulos
console.group("Circulos"); 

//const radioCirculo = 4;
function diametroCirculo (radio) {

    return radio*2;

} 

const PI = Math.PI;

//console.log("PI es: " + PI + " CM");



function perimetroCirculo (radio) {

    const diametro = diametroCirculo(radio);
    return diametro * PI;

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
    alert (perimetro);

}

function calcularAreaCuadrado() {
    
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert (area);

}