

/**
 * Fetch Pokemon information from PokeAPI
 * @param { number } id 
 * @returns { Promise <Object> } Pokemon Information
 */
export const getPokemonById = async ( id ) => {

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${ id }`);
    const data = await response.json();
    console.log( {data} );

    const pokemonData = {
        id: data.id,
        name: data.name,
        imagen: data.sprites.front_default
    }
    console.log( {pokemonData} );

    return pokemonData;
  
    //Forma mas tediosa y asi se hacia antes, aun podemos encontrar codigo asi
    // fetch(`https://pokeapi.co/api/v2/pokemon/${ id }`)
    // .then( response => { 
        // console.log({response});
        // throw new Error('Pokemon not found');
        
    //     return response.json();

    // })
    // .then ( data => {
    //     console.log( {data} );
    // })
    // .catch ( 
    //     error => {
        // console.error(error);
    //     })

    // return {}

};

