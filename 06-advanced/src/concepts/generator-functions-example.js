
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorFunctionsComponentExample = ( element ) => {

    const genID = idGenerator();
    console.log( genID.next() );

    const button = document.createElement ('button');
    button.innerHTML = 'Click Me';

    element.append ( button );

    const renderButton = () => {
      const { value } = genID.next();
      button.innerText = `Click ${ value }`;
    };

    button.addEventListener ('click', renderButton );

};

function* idGenerator(year) {
  let currentID = 0;

  while ( true ) {
    yield ++currentID;
  }
}

function* myFirstGeneratorFunction() {
  yield 'Primer Valor';
  yield 'Segundo Valor';
  yield 'Tercer Valor';
  yield 'Cuarto Valor';

  return 'Ya no hay mas valores';

  yield 'Este ya no se ejecuta';
}