
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwait2Component = async( element ) => {

    //No tiene sentido esto porque ralentiza la app 
    // porque ninguna promesa depende de la otra
    // const value1 = await slowPromise();
    // const value2 = await mediumPromise();
    // const value3 = await fastPromise();

    //Esta forma es mejor, desestructurando los valores
    const [value1, value2, value3] = await Promise.all([
        slowPromise(),
        mediumPromise(),
        fastPromise(),
    ]);

    console.time('Start');

    element.innerHTML = `
        Value1: ${ value1 } <br />   
        Value2: ${ value2 } <br />  
        Value3: ${ value3 } <br /> 
    `;

    console.timeEnd('Start')

};

const slowPromise = () => new Promise ( resolve => {
    setTimeout(() => {
        resolve('Slow Promise');
    }, 2000);
});

const mediumPromise = () => new Promise ( resolve => {
    setTimeout(() => {
        resolve('Midium Promise');
    }, 1000);
});

const fastPromise = () => new Promise ( resolve => {
    setTimeout(() => {
        resolve('Fast Promise');
    }, 500);
});