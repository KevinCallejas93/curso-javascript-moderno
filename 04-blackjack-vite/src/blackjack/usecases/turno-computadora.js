import { pedirCarta, valorCarta, crearCartaHTML } from './';

/**
 * Turno de la computadora
 * @param {Number} puntosMinimos Puntos minimos que necesita la computadora para ganar
 * @param {HTMLElement} puntosHTML Elemento para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora Elemento para mostrar las cartas
 * @param {Array<String>} deck 
 */
//Turno de la computadora
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = [] ) => {

     if ( !puntosMinimos ) throw new Error('puntosMinimos son necesarios');
     
     if ( !puntosHTML ) throw new Error('puntosHTML son necesarios');

     let puntosComputadora = 0;

    do {
        const carta = pedirCarta( deck );

        puntosComputadora = puntosComputadora + valorCarta( carta );

        puntosHTML.innerText = puntosComputadora;

        const imgCarta = crearCartaHTML( carta );

        divCartasComputadora.append( imgCarta );

        if ( puntosMinimos > 21 ) {
            break;
        }


    } while ( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    setTimeout(() => {
        if ( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana');
        } else if ( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana'); 
        }
    }, 10);

}