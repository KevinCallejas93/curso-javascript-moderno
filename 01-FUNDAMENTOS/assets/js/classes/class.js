
//Sintaxis de las clases en js y utilizamos Upper Camel Case
// class Name {
//     constructor(parameters) {
        
//     }
// }
//Flujo buenas practicas: 1.Propiedades y Metodos Estaticos, 2. Constructor, 3. Set y Gets, 4. Metodos 5. Todo lo privado al final
// Ejemplo Practico: Primero se ejecuta el constructor y luego nos regresa la instancia de clase
class Persona {
    static _conteo = 0; //Las propiedades estaticas nos permiten obtenerlas sin necesidad de instanciarlas
    
    static get conteo(){ //Se pueden crear get staticos tambien y para utilizarlos no es necesario instanciarlos
        return `${ Persona._conteo} instancias` 
    }

    static mensaje(){
        console.log( this.nombre );//Esto dara undefined porque al hacer un metodo estatico no utilizamos instancias
        console.log('Hola soy un metodo estatico');
    }

    //Por defecto las clases vienen con use strict implementado de modo obligatorio
    nombre = ''; //Notese que utilizamos ; en vez de , porque en js no es permitido usarlas.
    codigo = ''; //Recuerda que esto no es inicializar variables, estamos inicializando propiedades de una clase
    frase = '';
    comida= '';

    //El constructor es el unico objeto que retorna una instancia y no undefined aunque hagamos hagamos return undefined
    constructor( nombre = 'Sin Nombre', codigo = 'Sin Codigo', frase = 'Sin Frase' ) { //En otros lenguajes esto marca error, en js no
        // console.log('Hola Mundo');
        //codigo = 'ABC'; //Esto da error por el use strict, codigo no es de este scope {}
        this.nombre = nombre; //forma correcta, el this da acceso y hace referencia a codigo definido fuera de este scope
        this.codigo = codigo;
        this.frase = frase;    

        Persona._conteo++;
    }

    //Set: Establecer un valor
    set setComidaFavorita( comida ){ //aunque podemos recibir mas argumentos, usualmente el set solo recibe uno
        this.comida = comida.toUpperCase();
    }
    //Get: Recuperar un valor
    get getComidaFavorita(){
        return `La comida favorita de ${ this.nombre } es ${ this.comida }`
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
// console.log( spiderman, ironman );

//Llamamos al metodo, sin parentesis hacemos referencia pero no ejecutamos el metodo.
spiderman.quienSoy();
// ironman.quienSoy();

spiderman.miFrase();
// ironman.miFrase();

spiderman.setComidaFavorita = 'El pie de cereza de la tia May';
// console.log( spiderman );
// console.log( spiderman.getComidaFavorita );

console.log( Persona._conteo );//Estamos utilizando la propiedad sin instanciar

console.log( Persona.conteo ); //Estamos utilizando el get sin instanciar
Persona.mensaje();

//Tambien se pueden definir metodos estaticos fuera de la clase 
// pero eso no lo haremos porque es mejor definirlos dentro