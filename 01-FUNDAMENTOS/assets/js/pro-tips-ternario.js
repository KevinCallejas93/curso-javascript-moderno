
//funcion de flecha con operador ternario
const elMayor = (a, b) => (a > b ? a:b);

//funcion de flecha con operador ternario, diferencia clave con la anterior: la palabra 'Miembro' no tiene parentesis porque no hay una condicion (+, =, -, etc.)
const tieneMembresia = ( miembro ) => miembro ? '2 Dólares' : '10 Dólares';

console.log( elMayor(10, 15));
console.log( tieneMembresia( false ));


const amigo = false;
const amigosArr = [
    'Peter', 
    'Tony', 
    'Dr Strange',
    amigo ? 'Thor' : 'Loki',
    (() => 'Nick Fury')(), //Funcion anonima autoinvocada
                            //Es una funcion de flecha que se ejecuta asi misma en la misma linea
                            // Los parentesis externos la convierten en vez de declarar la funcion a ejecutarla de inmediato.
                            //En vez de guardar la funcion se guarda directamente el resultado de la funcion
                            //por eso al imprimir el arreglo vemos ['Peter', 'Tony', 'Dr Strange', 'Loki', 'Nick Fury']
    elMayor(10, 15), //Podemos agregar lo que nosotros querramos
];

console.log(amigosArr);


const nota = 82.5;
const grado = nota >= 95 ? 'A+' : //Podemos usar el operador ternario de esta forma
              nota >= 90 ? 'A' :
              nota >= 85 ? 'B+' :
              nota >= 80 ? 'B' :
              nota >= 75 ? 'C+' :
              nota >= 70 ? 'C' :
              nota >= 65 ? 'D+' :
              nota >= 60 ? 'D' :
              nota >= 55 ? 'E+' :
              nota >= 50 ? 'E' :
              'F';

console.log({ nota, grado });