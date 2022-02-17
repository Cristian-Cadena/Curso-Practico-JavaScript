// let lista = [100,200,500,400000000,300,12,1000,456];
// //let lista = [-1, 48, 59, 8, 1, 5, 6, 20, 201, 84, 789, 3458, 87, 545, 211, 0];
// let i = lista.length;
// let lista1 = [];

// for (i; i > 0; i--) {
// let min = Math.min(lista);
// let find = lista.indexOf(min);
// lista1.push(min);
// lista.splice(find, 1);
// }

//let lista1 = [100,200,500,400000000,300,12,1000,456];
//var numbers = [4, 2, 5, 1, 3];

let lista1;

function crearlista (lista1) {

    lista1.sort(function(a, b) {
    return a - b;
    });
    console.log(lista1);
    
}


function calcularMediaAritmetica(lista) {
    
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    
    const promedioLista = sumaLista / lista.length;
    
    return promedioLista;
    
    }

const mitadLista1 = parseInt(lista1.length / 2);

function esPar (numerito) {

    if (numerito%2 === 0) {
        return true;
    }
    else {
        return false;
    }

}

let mediana;

if (esPar(lista1.length)) {
    elemento1 = lista1 [mitadLista1];
    elemento2 = lista1 [mitadLista1 - 1];

    elemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);

    mediana = elemento1y2;

}
else {
    mediana = lista1[mitadLista1];
}