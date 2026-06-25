//Pro tip para hacer algo parecido a la sobrecarga de construcctores, 
// que no existe en js pero se puede hacer esto

class Persona {

    static porObjeto( {nombre, apellido, pais} ){
        return new Persona( nombre, apellido, pais ); //Aqui retornamos una nueva instancia pero utilizando el metodo estatico
        
    }

    constructor(nombre, apellido, pais) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;

    }

    getInfo(){
        console.log(`Info: ${ this.nombre }, ${ this.apellido }, ${ this.pais }`);
    }
}

const nombre1 = 'Julie', 
      apellido1 = 'Callejas'
      pais1 = 'El Salvador';

const kevin = {
    nombre: 'Kevin',
    apellido: 'Vega',
    Pais: 'Mexico',
}

const persona1 = new Persona ( nombre1, apellido1, pais1 );
const persona2 = Persona.porObjeto(kevin);

persona1.getInfo();
persona2.getInfo();


