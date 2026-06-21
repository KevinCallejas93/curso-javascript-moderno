
//Sintaxis de las clases en js y utilizamos Upper Camel Case
class Name {
    constructor(parameters) {
        
    }
}

// Ejemplo Practico: Primero se ejecuta el constructor y luego nos regresa la instancia de clase
class Persona {
    //Por defecto las clases vienen con use strict implementado de modo obligatorio
    nombre = ''; //Notese que utilizamos ; en vez de , porque en js no es permitido usarlas.
    codigo = ''; //Recuerda que esto no es inicializar variables, estamos inicializando propiedades de una clase
    frase = '';
    comida= '';

    //El constructor es el unico objeto que retorna una instancia y no undefined aunque hagamos hagamos return undefined
    constructor( nombre = 'Sin Nombre', codigo = 'Sin Codigo', frase = 'Sin Frase' ) { //En otros lenguajes esto marca error, en js no
        console.log('Hola Mundo');
        //codigo = 'ABC'; //Esto da error por el use strict, codigo no es de este scope {}
        this.nombre = nombre; //forma correcta, el this da acceso y hace referencia a codigo definido fuera de este scope
        this.codigo = codigo;
        this.frase = frase;    
    }
    //Lo siguiente es un metodo y se acostumbra crearlos despues del contructor aunque no es obligatorio, se pueden crear antes del constructor.
    quienSoy(){
        console.log(`Soy ${ this.nombre } y mi identidad es ${ this.codigo }`);
    }

    miFrase() {
        
        this.quienSoy();
        console.log(`${ this.codigo } dice: ${ this.frase }`);
        
    }

}

//La idea principal de las clases es que podemos tener propiedades 
// y metodos que sean comunes en todas las instancias de esa misma clase Persona();
const spiderman = new Persona( 'Peter Parker', 'Spidey', 'Soy Spiderman' ); //Estos Argumentos reemplazan a los parametros en la clase Persona();
const ironman = new Persona( 'Tony Stark', 'Ironman', 'Soy Ironman' ); //La ventaja de esto es que si quiero otro objeto con las mismas propiedades, solo lo creo de esta forma
console.log( spiderman, ironman );

//Llamamos al metodo, sin parentesis hacemos referencia pero no ejecutamos el metodo.
// spiderman.quienSoy();
// ironman.quienSoy();

spiderman.miFrase();
ironman.miFrase();