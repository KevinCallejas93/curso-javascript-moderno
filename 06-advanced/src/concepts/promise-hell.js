import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseHellComponent = ( element ) => {

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

    //! Promise en cadena (refactorizando el promise hell)
    
    let hero1;
    findHero(id1)
        .then(hero => {
            hero1 = hero;
            return findHero(id2); //Retornamos la segunda promise
        }).then( hero2 => { //Nos podemos conectar mediante promise en cadena
          renderTwoHeroes(hero1, hero2);
        })
        .catch( renderError ); //manejamos un unico catch para todos

    //! PROMISE HELL
    // findHero( id1 )
    //     .then( (hero1) => {
          
    //         findHero(id2)
    //             .then( hero2 => {
    //                 renderTwoHeroes(hero1, hero2)
    //             })
    //             .catch( renderError );
    //     })
    //     .catch( renderError );

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