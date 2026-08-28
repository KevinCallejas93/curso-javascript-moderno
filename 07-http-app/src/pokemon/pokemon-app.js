import { getPokemonById } from "./actions/get-pokemos-by-id.action";



/**
 * Esta funcion crea la aplicacion en el div enviado
 * @param { HTMLDivElement } element 
 */
export const PokemonApp = ( element ) => {

    document.title = 'Pokemon App';
    const titleElement = document.querySelector('#app-tittle');

    //tittleElement && (titleElement.innerHTML = 'Pokemon App)';
    if ( titleElement ) titleElement.innerHTML = 'Pokemon App';


    console.log('Hola Mundo');
    console.log( element );

    getPokemonById ( 1 );


};