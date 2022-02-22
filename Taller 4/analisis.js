//helpers

function esPar(numerito) {
    if(numerito % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
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

//Calculadora Mediana

    function medianaSalarios(lista) {

        const mitad = parseInt(lista.length / 2);
    
        if (esPar(lista.length)) {
            const personitaMitad1 = lista[mitad];
            const personitaMitad2 = lista[mitad - 1];
    
            const mediana = calcularMediaAritmetica([personitaMitad1,personitaMitad2]);
            return mediana;
            
        }
        else {
            const personitaMitad = lista[mitad];
            return personitaMitad;
        }
    }


// Mediana General
const salariosCol = colombia.map(
    function(personita) {
        return personita.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function(salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

const medianaGeneralCol = medianaSalarios(salariosColSorted);

//Mediana Del Top 10%
//const arrayEjemplo = [0,1,2,3,4,5,6,7,8,9,10];
//const EJEMPLO = arrayEjemplo.splice(5,2);

const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount,
);

const medianaTop10Col = medianaSalarios(salariosColTop10);


console.log({
    medianaGeneralCol,
    medianaTop10Col,
});