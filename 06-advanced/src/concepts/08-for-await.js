import { heroes } from '../data/heroes';
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const forAwaitComponent = async( element ) => {

    const id = '5d86371f2343e37870b91ef1';
    const heroIds = heroes.map( hero => hero.id );

    const heroPromises = getHeroesAsync( heroIds );

    for await( const hero of heroPromises ){
        element.innerHTML += `${ hero.name } <br/>` //El += acumula los nombres no elimina el render del que va pasando.
    } //Si lo hicieramos con = y no += solo verian los nombres por turnos

}

/**
 * 
 * @param {Array<String>} heroIds 
 * @returns {Array<Promise>}
 */
const getHeroesAsync = ( heroIds ) => {
    
    const heroPromises = [];

    heroIds.forEach( id => {
        heroPromises.push( getHeroAsync(id) );
    });

    return heroPromises;
}

const getHeroAsync = async( id ) => {

    await new Promise(( resolve ) => {
        setTimeout(() => resolve(), 1000)
    });

    return heroes.find( hero => hero.id === id );
}