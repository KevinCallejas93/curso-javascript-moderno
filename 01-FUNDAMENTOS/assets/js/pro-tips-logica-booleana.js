
console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true  && 'Hola Mundo'; //En este caso la asignacion es 'Hola Mundo' porque asigna el valor del ultimo valor verdadero, si el primer valor es falso, asigna ese valor
const a2 = false  && 'Hola Mundo'; //En este caso la asignacion es false porque el primer valor es falso, y no ejecuta el segundo ya que basta con que uno de los valores sea falso para que toda la expresion sea falsa

const a3 = 'Hola' && 'Mundo'; //En este caso la asignacion es 'Mundo' porque ambos valores son verdaderos, entonces asigna el valor del ultimo valor verdadero
const a4 = 'Hola' && 'Mundo' && false; //En este caso la asignacion es false porque el ultimo valor es falso, y la condicion es que todos los valores deben ser verdaderos


const a5 = soyFalso || 'Ya no soy falso'; //En este caso la asignacion es 'Ya no soy falso' porque el primer valor es falso, entonces asigna el valor del segundo valor verdadero
const a5 = soyFalso || soyUndefined || soyNull ||'Ya no soy falso de nuevo'; //En este caso la asignacion es 'Ya no soy falso de nuevo' porque el primer valor es falso, el segundo valor es undefined, el tercer valor es null, entonces asigna el valor del cuarto valor verdadero
const a5 = soyFalso || soyUndefined || soyNull ||'Ya no soy falso de nuevo' || true; //El true ya no se ejecuta porque el operador OR (||) devuelve true tan pronto como encuentra un valor verdadero


console.log({ a1, a2, a3, a4, a5});