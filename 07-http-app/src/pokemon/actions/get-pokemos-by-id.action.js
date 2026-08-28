
const pokemonCache = new Map(); //utilizamos el new Map() para crear una memoria cache
                                //la idea es que la peticion http no se vuelva a hacer si ya hemos cargado la data antes

/**
 * Fetch Pokemon information from PokeAPI
 * @param { number } id 
 * @returns { Promise <Object> } Pokemon Information
 */
export const getPokemonById = async ( id ) => {

    if ( pokemonCache.has(id)) {
        console.log('Servido de cache');

        return pokemonCache.get( id );
    }

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${ id }`);
    const data = await response.json();
    console.log( {data} );

    const pokemonData = {
        id: data.id,
        name: data.name,
        image: data.sprites.front_default
    }

    pokemonCache.set( id, pokemonData ); //Establecemos el set con id y con pokemonData porque nos pide una key y un value
                                        //En este caso el id es la key y el value el objeto literal
    return pokemonData;

};

