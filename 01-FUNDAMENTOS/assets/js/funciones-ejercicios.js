
//Escribir una función que reciba dos números como argumentos y retorne la suma de ambos números.
const sumar = (a, b) => {
  return a + b;
};
console.log( sumar (1, 2)); // Imprime 3, porque la función 'sumar' retorna la suma de los dos argumentos pasados a la función.


// Si la función solo tiene una línea de código, podemos omitir las llaves y el 'return', el resultado de esa línea se retornará automáticamente.
const sumar2 = (a, b) => a + b; // Si la función solo tiene una línea de código, podemos omitir las llaves y el 'return', el resultado de esa línea se retornará automáticamente.

console.log( sumar2 (2, 2)); // Imprime 3, porque la función 'sumar2' retorna la suma de los dos argumentos pasados a la función.



//Ejercicio de clase, convertir la función 'getRandom' a una función flecha que retorne un número aleatorio entre 0 y 1, utilizando 'Math.random()'
const getRamdom = () => Math.random(); // Retorna un número aleatorio entre 0 y

console.log( getRamdom() ); // Imprime un número aleatorio entre 0 y 1





