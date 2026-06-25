//Singleton es una instancia unica de mi clase, pueden ser una unica instancia global en mi app.
//Aunque se inicialicen las clases muchas veces, siempre se va regresar la misma instancia

class Singleton {

    static instancia; //Esto retorna undefined, es porque la definimos pero no asignamos valor
    nombre = '';

    constructor( nombre = '', ) {
        // console.log( Singleton.instancia ); //Se hace referencia a Singleton porque instancia es static

        if ( !!Singleton.instancia ) { // de esta forma evitamos que el valor sea undefined, porque en este caso[! = true, !!= false]
            return Singleton.instancia; //Basicamente decimos que si ya existe la instancia haga un return
        }
        //recordemos que despues del return la app se sale ya no ejecuta nada mas
        Singleton.instancia = this;//si no existe la asignamos asi
        this.nombre = nombre;

        // return this; //Funciona sin el retorno del this, lo importante es saber que el constructor lo retorna

    }
}

//todas estas instancias apuntan al mismo objeto
const instancia1 = new Singleton('Ironman');
const instancia2 = new Singleton('Spiderman');
const instancia3 = new Singleton('Black Panther');

console.log(`Nombre en la instancia 1 es: ${instancia1.nombre}`);
console.log(`Nombre en la instancia 2 es: ${instancia2.nombre}`);
console.log(`Nombre en la instancia 3 es: ${instancia2.nombre}`);

