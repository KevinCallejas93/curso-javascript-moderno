

let a = 5;

if ( a >= 10 ) {
    console.log('a es mayor o igual que 10');
}
else {
    console.log('a es menor que 10');
}


// console.log( 'Fin del programa' );

const hoy = new Date();

let dia = hoy.getDay(); // 0: Domingo, 1: Lunes, ..., 6: Sábado

console.log( {dia} );

if ( dia === 0 ) {
    console.log('Domingo');
} else if ( dia === 1 ) {
    console.log('Lunes');
} else if ( dia === 2 ) {
    console.log('Martes');
} else {
    console.log('No es ni Domingo, ni Lunes, ni Martes');
}

// Tarea: Sin usar if-else, o switch, imprimir el día de la semana utilizando unicamente objetos

//Primer forma: Objeto literal
const dias ={
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miércoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sábado',
}

console.log( dias [10] || 'Día no válido' );


//Segunda forma: Array
const diaSemana = [ 'Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado' ];

console.log( diaSemana [3] );


