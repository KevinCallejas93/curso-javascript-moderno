
//Pasar por valor
let a = 10;
let b = a;

a = 30;

console.log({ a, b });


//Pasar por referencia
let juan = { nombre: 'Juan' };
let ana  = {...juan};
ana.nombre = 'Ana';

console.log({ juan, ana });


const cambiaNombre = ( {...persona} ) => {
  persona.nombre = 'Kevin';
  return persona;

};

let peter = { nombre: 'Peter' };
let kevin = cambiaNombre(peter );

console.log({ peter, kevin });


//Arreglos
const frutas = ['Manzana', 'Pera', 'Piña'];

//forma de probar el tiempo que tarda cada método para hacer una copia del arreglo, slice o spread
console.time('slice');
const otrasFrutas = frutas.slice(); //otra forma de hacer una copia es con el operador spread: const otrasFrutas = [...frutas];
console.timeEnd('slice');

console.time('Spread');
const otrasFrutas2 = [...frutas];
console.timeEnd('Spread');

otrasFrutas.push('Mango');

console.table({ frutas, otrasFrutas });