

class Persona {
    static _conteo = 0;
    
    static get conteo(){ 
        return `${ Persona._conteo} instancias` 
    }

    static mensaje(){
        console.log( this.nombre );
        console.log('Hola soy un metodo estatico');
    }

    nombre = ''; 
    codigo = ''; 
    frase = '';
    comida = '';

    constructor( nombre = 'Sin Nombre', codigo = 'Sin Codigo', frase = 'Sin Frase' ) { 

        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;    

        Persona._conteo++;
    }

    set setComidaFavorita( comida ){ 
        this.comida = comida.toUpperCase();
    }
    get getComidaFavorita(){
        return `La comida favorita de ${ this.nombre } es ${ this.comida }`
    }

    quienSoy(){
        console.log(`Soy ${ this.nombre } y mi identidad es ${ this.codigo }`);
    }

    miFrase() {
        
        this.quienSoy();
        console.log(`${ this.codigo } dice: ${ this.frase }`);
        
    }

}

//subclasses
class Heroe extends Persona{ //con el extend puedo usar las propiedades de la clase padre o clase Persona
    clan = 'Sin Clan';

    constructor( nombre, codigo, frase ){

        super( nombre, codigo, frase ); //Importante llamar el super antes del this, sino esto nos dara error
        this.clan = 'Avengers';
    
    }

    quienSoy() { //Podemos 'Sobreescribir' el metodo de la clase padre pero tambien podemos mantener ambos
        console.log(`Soy ${ this.nombre }, ${ this.clan } `);
        super.quienSoy(); //De esta forma mandamos a llamar el otro metodo de la clase padre
    }

}

// const spiderman = new Persona( 'Peter Parker', 'Spidey', 'Soy Spiderman' );
const spiderman = new Heroe( 'Peter Parker', 'Spidey', 'Soy Spiderman' );
// const spiderman = new Heroe();

console.log( spiderman );
spiderman.quienSoy();