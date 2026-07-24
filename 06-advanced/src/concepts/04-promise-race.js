
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseRaceComponent = ( element ) => {

    element.innerHTML = 'Loading...';

    const renderValue = ( value ) => {
        element.innerHTML = value;
    };

    Promise.race([ //Igual que Promise.All se envia un arreglo de promesas
        slowPromise(),
        midiumPromise(),
        fastPromise(),
    ]).then( renderValue );

};

const slowPromise = () => new Promise ( resolve => {
    setTimeout(() => {
        resolve('Slow Promise');
    }, 2000);
});

const midiumPromise = () => new Promise ( resolve => {
    setTimeout(() => {
        resolve('Midium Promise');
    }, 1000);
});

const fastPromise = () => new Promise ( resolve => {
    setTimeout(() => {
        resolve('Fast Promise');
    }, 500);
});

