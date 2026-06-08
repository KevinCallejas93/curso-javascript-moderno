
console.warn('While');

const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];

let i = 0;

while ( i < carros.length ) { 
    
    console.log( carros [i] );
    i++;

}

//hay condiciones que son consideradas falso como null, undefined o false
//Ejemplo console.log( carros [10] ); no existe esa posicion en el arreglo, da undefined, y esto haria que nuestro ciclo se salga o no se ejecute
//por ejemplo este codigo (abajo), a este punto i = 4 por el ciclo anterior y por eso no se ejecuta.

//una forma mas limpia
while ( carros [i] ) { 
    
    console.log( carros [i] );
    i++;

}

i = 0; //hacemos esto porque la i en este punto valia 4 por el primer ciclo for
//Si necesitamos que el ciclo se salga podemos hacerlo asi
while ( carros [i] ) { 
    if ( i === 1 ) { //Debido a esta condicion solo imprimira Ford
        break;
    }

    console.log( carros [i] );
    i++;

}

//si queremos que solo obvie la posicion 1 debemos hacer la condicion de esta forma 
// if ( i === 1 ) { 
//         i++;
//         continue;
//     }


console.warn('Do While');

//Importante mencionar que este ciclo se ejecuta al menos una vez, es como decir, haz esto y luego mientras se cumpla la condicion continua
// si j = 10 se ejecutaria al menos una vez y nos imprimiria undefined 

let j = 0;

do {
    
    console.log( carros [j]);
    j++ //importante para no crear un ciclo infinito

} while ( carros [j] );




