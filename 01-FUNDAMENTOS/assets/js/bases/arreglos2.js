

let juegos = ["Zelda", "Mario", "Metroid", "Call of Duty"]

console.log('Largo: ', juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length - 1];

console.log({primero, ultimo});

//forEach para iterar sobre los elementos del arreglo, 
// recibe una función callback con tres argumentos: 
// el elemento actual, el índice del elemento y el arreglo completo
juegos.forEach((elemento, indice, arr) => {
    console.log({elemento, indice, arr});
});


//push para agregar un elemento al final del arreglo, 
// devuelve la nueva longitud del arreglo
let nuevaLongitud = juegos.push('F-Zero');
console.log({ nuevaLongitud, juegos });


//unshift para agregar un elemento al inicio del arreglo, 
// devuelve la nueva longitud del arreglo
nuevaLongitud = juegos.unshift('Fire Emblem');
console.log({ nuevaLongitud, juegos });


//shift para eliminar el primer elemento del arreglo, 
// devuelve el elemento eliminado
// let juegoBorrado = juegos.shift();
// console.log({ juegoBorrado, juegos });


//pop para eliminar el último elemento del arreglo, devuelve el elemento eliminado
let juegoBorrado = juegos.pop();
console.log({ juegoBorrado, juegos });


//splice para eliminar elementos del arreglo, 
// recibe el índice de inicio y la luego la cantidad de elementos a eliminar, 
// devuelve un arreglo con los elementos eliminados
let pos = 1;
console.log( juegos );
let juegosBorrados = juegos.splice(pos, 2);
console.log({ juegosBorrados, juegos });


let metroidIndex = juegos.indexOf('Metroid'); //Case-sensitive si no encuentra el elemento devuelve -1
console.log({ metroidIndex });




