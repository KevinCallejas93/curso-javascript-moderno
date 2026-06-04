

const personaje = {
    nombre: "Goku",
    codeName: "Kakaroto",
    vivo: false,
    edad: 50,
    poderes: ["Kamehameha", "Genkidama", "Kaioken"],
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Gi tradicional', 'Gi de entrenamiento', 'Armadura Saiyajin', 'Gi de batalla'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Saitama, Japón'
    },
    'ultima-pelicula': 'Dragon Ball Super: Broly' //si queremos usar un guion en el nombre de la propiedad, debemos usar comillas para definirla, ya que el guion js lo toma como resta.
};

console.log( personaje );
console.log( 'Nombre: ', personaje.nombre );
console.log( 'Nombre: ', personaje['nombre'] ); //segunda forma de acceder a las propiedades del objeto
console.log( 'Edad: ', personaje['edad'] );
console.log( 'traje: ', personaje.trajes[1] );
console.log( 'Latitud: ', personaje.coords['lat']);

//Tarea, numero de trajes y el ultimo traje
console.log( 'Numero de trajes de Goku: ', personaje.trajes.length );
console.log('Ultimo traje: ', personaje.trajes[personaje.trajes.length - 1] );


//otra forma de acceder a las propiedades del objeto, usando una variable
const x = 'vivo';
console.log( 'Vivo: ', personaje[x] ); 

//al usar la variable en los corchetes, esta va a buscar la propiedad al objeto personaje
//que tenga el mismo nombre que el valor de la variable, 
// en este caso 'vivo' y nos va a devolver el valor de esa propiedad, que es false.

console.log('Ultima pelicula: ', personaje['ultima-pelicula'] );


//mas detalles
delete personaje.edad; //elimina la propiedad edad del objeto personaje
console.log( personaje );


personaje.casado = true; //agrega una nueva propiedad casado al objeto personaje con el valor true

const entriesPares = Object.entries( personaje ); //devuelve un array con las propiedades y valores del objeto personaje
console.log( entriesPares );

console.log(personaje);

Object.freeze( personaje ); //congelar el objeto, no se pueden agregar, eliminar o modificar propiedades

personaje.dinero = 1000000; //no se puede agregar una nueva propiedad al objeto personaje porque esta congelado
console.log( personaje );

personaje.direccion.ubicacion = 'Nueva York, USA'; //si congelamos el objeto, no se pueden modificar las propiedades del objeto, pero si las propiedades de las propiedades del objeto, en este caso la propiedad ubicacion del objeto direccion.
console.log( personaje );

const propiedades = Object.getOwnPropertyNames( personaje ); //devuelve un array con las propiedades del objeto personaje
const valores = Object.values( personaje ); //devuelve un array con los valores del objeto personaje
console.log( { propiedades, valores } );
