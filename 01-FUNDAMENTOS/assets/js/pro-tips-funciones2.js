
// Funciones con argumentos variables
const imprimeArgumentos = (edad, ...args) => {
    // console.log( edad, args );
    return args;
};

const [ casado, vivo, nombre, saludo ] = imprimeArgumentos( 23, true, false, 'Hola', 'Kevin' ) // en vez de darle un nombre a la constante, se le asigna un nombre a cada valor del arreglo que devuelve la función y se usan [] porque estamos desestructurando un array, si fuera un objeto se usarían {}. Es importante mencionar que el orden de los valores en el arreglo debe coincidir con el orden de las variables a las que se les asignan los valores.
console.log({ casado, vivo, nombre, saludo });



//lo mismo se puede hacer cuando la funcion retorna un objeto
const persona =  ( name, lastName ) => {
    return{ 
        name, 
        lastName,
    };
}
const { name, lastName } = persona ('Kevin', 'Callejas' ); //en este caso se utilizan {} para asignar un nombre a cada propiedad del objeto debido a que se retorna un objeto.
console.log({ name, lastName });

//SI NECESITO SOLO EL APELLIDO, PUEDO HACERLO DE LA SIGUIENTE MANERA
// const { lastName } = persona ('Kevin', 'Callejas' );

//SI QUEREMOS CAMBIAR EL NOMBRE DE LA VARIABLE SOLO LE ASIGNAMOS UN NOMBRE NUEVO DESPUES DE LOS DOS PUNTOS
// const { lastName: apellido } = persona ('Kevin', 'Callejas' ); 


//DESESTRUCTURACION EN FUNCIONES
const goku = {
    nombre: "Goku",
    codeName: "Kakaroto",
    vivo: false,
    // edad: 50,
    poderes: ["Kamehameha", "Genkidama", "Kaioken"],
};

//no es buena practica hacer una funcion debajo del codigo pero lo haremos esta vez asi por fines educativos
//Este codigo es de ejemplo
// const imprimePropiedades = ( goku ) => {

//     console.log( 'nombre: ', goku.nombre);
//     console.log( 'codeName: ', goku.codeName);
//     console.log( 'vivo: ', goku.vivo);
//     console.log( 'edad: ', goku.edad);
//     console.log( 'poderes: ', goku.poderes);

// };

// imprimePropiedades( goku ); 

//Este es el codigo con desestructuracion, es mucho mas limpio y facil de leer

const imprimePropiedades2 = ({ nombre, codeName, vivo, edad = 40, poderes }) => { //en este caso se le asigna un valor por defecto a la propiedad edad, en caso de que no exista en el objeto goku, se le asignara el valor 50.

    console.log({ codeName });
    console.log({ vivo });
    console.log({ edad });
    console.log({ poderes });
};

imprimePropiedades2( goku );
