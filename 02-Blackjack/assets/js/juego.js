/**
 * 2C = Two of Clubs 
 * 2D = Two of Diamonds 
 * 2H = Two of Hearts 
 * 2S = Two of Spades 
 */


let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0;
let puntosComputadora = 0;


//Referencias HTML
const btnNuevo = document.querySelector('#btnNuevo');
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');

const puntosHTML = document.querySelectorAll('small');
const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas'); 


// Esta funcion crea una nueva baraja desordenada
const crearDeck = () => {
    for (let i = 2; i <= 10; i++) {

        for (let tipo of tipos) {
            deck.push(i + tipo);
        }

    }

    for (const tipo of tipos) {
        for (const esp of especiales) {
            deck.push(esp + tipo);
        }
    }
    
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
};

crearDeck();

//Esta funcion me permite tomar una carta
const pedirCarta = () => {

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    
    const carta = deck.pop(); // .pop remueve la ultima carta y la devuelve
    return carta;
}

const valorCarta = ( carta ) => {
    
    const valor = carta.substring(0, carta.length - 1);
    // let puntos = 0;

    
    //Tarea Reducir esto con operador ternario
    // if ( isNaN( valor ) ) {
        //     puntos = ( valor === 'A' ) ? 11 : 10;
        // } else {
            //     puntos = valor * 1;
            // }
            
    //Operador Ternario
    return ( isNaN( valor ) ) ? 
        ( valor === 'A' ) ? 11 : 10
        : valor * 1;
          
}

const valor = valorCarta( pedirCarta() ); //Aqui se manda a llamar la funcion pedirCarta, y directamente envia la carta a valorCarta.


//Eventos
btnPedir.addEventListener('click', () => {

    const carta = pedirCarta();

    puntosJugador = puntosJugador + valorCarta( carta );
    console.log({ carta, puntosJugador });

    puntosHTML[0].innerText = puntosJugador;

    const imgCarta = document.createElement('img');
    imgCarta.src = `/02-Blackjack/assets/cartas/${ carta }.png`;
    imgCarta.classList.add('carta');

    divCartasJugador.append( imgCarta );

    if ( puntosJugador > 21 ) {
        console.warn('Lo siento mucho, perdiste');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        
    } else if ( puntosJugador === 21 ) {
        console.warn('21, genial!');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
    }

    
});


    