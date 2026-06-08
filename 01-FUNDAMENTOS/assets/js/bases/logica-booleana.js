

const regresaTrue = () => {
    console.log('Regresa True');
    return true;
};


const regresaFalse = () => {
    console.log('Regresa False');
    return false;
};

console.warn('Not o la negacion'); // El operador NOT (!) se utiliza para negar un valor booleano. Si el valor es true, !true se evaluará como false, y si el valor es false, !false se evaluará como true.
console.log(true); // true
console.log(!true); // false
console.log(!false); // true

console.log(!regresaFalse()); // true


console.warn('And'); // true si todos los valores son verdaderos, de lo contrario, devuelve false.
console.log(true && true); // true
console.log(true && false); // false
console.log(true && !false); // true
console.log(!false && true); // true


console.log('===============');
console.log( regresaFalse() && regresaTrue()); // Regresa False, no se ejecuta regresaTrue() porque el operador AND (&&) devuelve false tan pronto como encuentra un valor falso, por lo que no se ejecuta regresaTrue(). 
console.log('===============');
console.log( regresaTrue() && regresaFalse()); // En este caso, regresaTrue() se ejecuta primero y devuelve true, pero luego regresaFalse() se ejecuta y devuelve false, lo que hace que toda la expresión sea false.
console.log('===============');
console.log( '4 CONDICIONES: ', true && true && true && false ); // False


console.warn('Or'); // true si al menos uno de los valores es verdadero, de lo contrario, devuelve false.
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

console.log('===============');
console.log( regresaTrue() || regresaFalse()); // Regresa True, no se ejecuta regresaFalse() porque el operador OR (||) devuelve true tan pronto como encuentra un valor verdadero, por lo que no se ejecuta regresaFalse().
console.log('===============');
console.log( regresaFalse() || regresaTrue()); // En este caso, regresaFalse() se ejecuta primero y devuelve false, pero luego regresaTrue() se ejecuta y devuelve true, lo que hace que toda la expresión sea true.

console.log( '4 CONDICIONES: ', true || true || true || false ); // True