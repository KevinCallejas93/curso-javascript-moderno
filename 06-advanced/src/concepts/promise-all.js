import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseAllComponent = ( element ) => {

    const renderTwoHeroes = ( hero1, hero2 ) => {
        element.innerHTML = `
            <h3>${ hero1.name }</h3>
            <h3>${ hero2.name }</h3>           
        `;
    };

    const renderError = ( error ) => {
        element.innerHTML = `
            <h1>Error: </h1>
            <h3>${ error }</h3>
            `;
    };

    const id1 = '5d86371f25a058e5b1c8a65e';
    const id2 = '5d86371f233c9f2425f16916';

    //! Promise All
    Promise.all([
        findHero(id1),
        findHero(id2),
    ]).then(([hero1, hero2]) => renderTwoHeroes( hero1, hero2 )) 
    // desestructuramos el arreglo, en vez de .then((arregloDeValores)
    .catch( renderError );

};

/**
 * 
 * @param {String} id 
 * @returns {Promise}
 */
const findHero = ( id ) => {


    return new Promise(( resolve, reject ) => {

        const hero = heroes.find(hero => hero.id === id );

        if ( hero ) {
            resolve (hero);
            return;
        }
        
        reject(`Hero with id ${ id } not found`);


    });


};