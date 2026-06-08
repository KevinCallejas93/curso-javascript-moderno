
/**
 * Dias de semana abrimos a las 11,
 * pero los fines de semana abrimos a las 9
 */

//Entra a un sitio web, para consultar si esta abierto hoy...

const dia = 0; //domingo

const horaActual = 8;

let horaApertura;
let mensaje = ''; //Esta abierto, Esta Cerrado, hoy abrimos a las X



//SIN OPERADOR TERNARIO
// if ( dia === 0 || dia === 6 ) { //Primer ejemplo sin el metodo includes

// if ( [0, 6].includes( dia ) ) { // el metodo includes devuelve un true si los dias estan dentro de los valores en el arreglo y un false si no
//     console.log('Fin de semana');
//     horaApertura = 9;
// } else {
//     console.log('Dia de semana');
//     horaApertura = 11;
// }

//CON OPERADOR TERNARIO
horaApertura = ( [0, 6].includes( dia ) ) ? 9 : 11; //Con el operador ternario


//MENSAJE SIN OPERADOR TERNARIO
// if ( horaActual >= horaApertura ) {
//     mensaje = 'Esta abierto';
// } else {
//     mensaje = `Esta cerrado, hoy abrimos a las ${horaApertura}`;
// }

//CON OPERADOR TERNARIO
mensaje = ( horaActual >= horaApertura ) ? 'Esta abierto' : `Esta cerrado, hoy abrimos a las ${horaApertura}`;



console.log({ horaApertura, mensaje });



