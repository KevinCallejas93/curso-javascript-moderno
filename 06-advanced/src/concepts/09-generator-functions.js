
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorFunctionsComponent = ( element ) => {

    const myGenerator = myFirstGeneratorFunction ();

    console.log( myGenerator.next()); //Valor 1 - done: false
    console.log( myGenerator.next()); //Valor 2 - done: false
    console.log( myGenerator.next()); //Valor 3 - done: false
    console.log( myGenerator.next()); //Valor 4 - done: false
    console.log( myGenerator.next()); //Valor 5 - return - done true
    console.log( myGenerator.next()); // de aqui en delante cada vez que llamemos el valor sera undefined

};

function* myFirstGeneratorFunction() {
  yield 'Primer Valor';
  yield 'Segundo Valor';
  yield 'Tercer Valor';
  yield 'Cuarto Valor';

  return 'Ya no hay mas valores';

  yield 'Este ya no se ejecuta';
}