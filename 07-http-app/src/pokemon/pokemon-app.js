import { getPokemonById } from "./actions/get-pokemos-by-id.action";



/**
 * Esta funcion crea la aplicacion en el div enviado
 * @param { HTMLDivElement } element 
 */
export const PokemonApp = async( element ) => {

    let pokemonID = 1;

    document.title = 'Pokemon App';
    const titleElement = document.querySelector('#app-tittle');

    //tittleElement && (titleElement.innerHTML = 'Pokemon App)';
    if ( titleElement ) titleElement.innerHTML = 'Pokemon App';


   //! Crear los elementos html
   const loadingParagraph = document.createElement('p');
   const pokemonImage = document.createElement('img');
   const nextBtn = document.createElement('button');
   const prevBtn = document.createElement('button');
   

    //! Configuracion
    loadingParagraph.textContent = 'Cargando...';
    nextBtn.textContent = 'Siguiente';
    prevBtn.textContent = 'Anterior';

    element.appendChild(loadingParagraph);
    element.appendChild(pokemonImage);
    element.appendChild(nextBtn);
    element.appendChild(prevBtn);


    //!Listeners de los botones

    nextBtn.addEventListener( 'click', async() => {

        loadingParagraph.textContent = 'Cargando siguiente pokemon...';

        pokemonID++;

        renderPokemon( await getPokemonById( pokemonID ));
    })

    prevBtn.addEventListener('click', async() => {
        
        if (pokemonID === 1) return;

        loadingParagraph.textContent = 'Cargando pokemon anterior...'
        pokemonID--;

        renderPokemon( await getPokemonById( pokemonID ));

        
    })

    //! Renderizar el Pokemon
    const renderPokemon = ( pokemon ) => {

        pokemonImage.src = pokemon.image;
        loadingParagraph.textContent = `Pokemon #${ pokemon.id } ${ pokemon.name }`;

    };

    //!Hacer la peticion inicial

    renderPokemon( await getPokemonById( pokemonID ));


};