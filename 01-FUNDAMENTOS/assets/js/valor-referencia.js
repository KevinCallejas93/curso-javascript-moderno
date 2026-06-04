
//Pasar por valor
let a = 10;
let b = a;

a = 30;

console.log({ a, b });


//Pasar por referencia
let juan = { nombre: 'Juan' };
let ana  = juan;

ana.nombre = 'Ana';

console.log({ juan, ana });


const cambiaNombre = ( persona ) => {
  persona.nombre = 'Kevin';
  return persona;

};

let peter = { nombre: 'Peter' };
let kevin = cambiaNombre( peter );

console.log({ peter, kevin });