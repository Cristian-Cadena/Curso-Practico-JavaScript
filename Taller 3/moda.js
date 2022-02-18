//const lista1 = [1,2,3,1,2,3,1,2,2,2,3,4,4,5];

function crearLista(lista) {

    const lista1 = lista.sort(function(a, b) {
        return a - b;
        });

    const lista1Count = {};

    lista1.map (

    function (elemento){
        if(lista1Count[elemento]){
            //lista1Count [elemento] = lista1Count [elemento] + 1;
            lista1Count [elemento] += 1;
        }
        else {
            lista1Count [elemento] = 1;
        }
    }
);

const lista1Array = Object.entries(lista1Count).sort (
    function(a,b){
        return a[1]-b[1];
    }
)

const moda = lista1Array[lista1Array.length - 1];

return moda;

}
