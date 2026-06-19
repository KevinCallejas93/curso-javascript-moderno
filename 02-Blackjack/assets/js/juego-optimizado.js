
//funcion anonima autoinvocada, Patron Modulo
(() => { //Esta funcion no es posible llamarla directamente porque es anonima, no tiene nombre
    'use strict' //Se le pide a js que use el modo estricto, esto ayuda a que el codigo sea mas limpio
    
    let deck = [];
    const tipos = ['C', 'D', 'H', 'S'],
          especiales = ['A', 'J', 'Q', 'K'];

    let puntosJugadores = [];

    //Referencias HTML
    const btnNuevo = document.querySelector('#btnNuevo'),
          btnPedir = document.querySelector('#btnPedir'),
          btnDetener = document.querySelector('#btnDetener');

    const puntosHTML = document.querySelectorAll('small'),
          divCartasJugador = document.querySelector('#jugador-cartas'),
          divCartasComputadora = document.querySelector('#computadora-cartas'); 


    //Esta funcion inicia el juego
    const inicializarJuego = ( numJugadores = 2 ) => {
        deck = crearDeck();
        for (let i = 0; i < numJugadores; i++) {
            puntosJugadores
        }
    };  

    // Esta funcion crea una nueva baraja desordenada
    const crearDeck = () => {

        deck = [];
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
        
        
        return _.shuffle( deck );
    };

    

    //Esta funcion me permite tomar una carta
    const pedirCarta = () => {

        if ( deck.length === 0 ) {
            throw 'No hay cartas en el deck';
        }
        
         // .pop remueve la ultima carta y la devuelve
        return deck.pop();
    }

    const valorCarta = ( carta ) => {
        
        const valor = carta.substring(0, carta.length - 1);
                
        //Operador Ternario
        return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
            
    }

    //Turno de la computadora

    const acumularPuntos = () => { 


      
    };

    const turnoComputadora = ( puntosMinimos ) => {

        do {
            const carta = pedirCarta();

            puntosComputadora = puntosComputadora + valorCarta( carta );

            puntosHTML[1].innerText = puntosComputadora;

            const imgCarta = document.createElement('img');
            imgCarta.src = `/curso-javascript-moderno/02-Blackjack/assets/cartas/${ carta }.png`;
            imgCarta.classList.add('carta');

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

    //Eventos
    btnPedir.addEventListener('click', () => {

        const carta = pedirCarta();

        puntosJugador = puntosJugador + valorCarta( carta );
        console.log({ carta, puntosJugador });

        puntosHTML[0].innerText = puntosJugador;

        const imgCarta = document.createElement('img');
        imgCarta.src = `/curso-javascript-moderno/02-Blackjack/assets/cartas/${ carta }.png`;
        imgCarta.classList.add('carta');

        divCartasJugador.append( imgCarta );

        if ( puntosJugador > 21 ) {
            console.warn('Lo siento mucho, perdiste');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora( puntosJugador ); 
            
        } else if ( puntosJugador === 21 ) {
            console.warn('21, genial!');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora( puntosJugador ); 
        }
        
    });

    btnDetener.addEventListener('click', () => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador ); 
    });


    btnNuevo.addEventListener('click', () => {
        
        console.clear();
        inicializarJuego();
        // deck = [];
        // deck = crearDeck();

        puntosJugador = 0;
        puntosComputadora = 0;

        puntosHTML[0].innerText = 0;
        puntosHTML[1].innerText = 0;
        
        divCartasComputadora.innerHTML = '';
        divCartasJugador.innerHTML = '';

        btnPedir.disabled = false;
        btnDetener.disabled = false;

});

})();



