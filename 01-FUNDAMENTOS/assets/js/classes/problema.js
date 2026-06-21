
//Primer problema: Codigo complicado de mantener, si tuvieramos mas objetos se vuelve tedioso.
const kevin = {
  nombre: "Kevin",
  edad: 33,
  imprimir(){
    console.log(`Nombre: ${this.nombre} - Edad: ${ this.edad }`);
  }
};

const pedro = {
  nombre: "Pedro",
  edad: 25,
  imprimir(){
    console.log(`Nombre: ${this.nombre} - Edad: ${ this.edad }`);
  }
};
 
kevin.imprimir();
pedro.imprimir();

//Implementacion:Funcion tradicional con lower camel case (Esto nos indica que es una funcion para crear instancias)
//es decir, un objeto creado a partir de una clase o funcion
//Importante mencionar que esto era el standard ANTES para crear instancias 
// las llamadas FUNCIONES CONSTRUCTORAS, LOS CONSTRUCTORES pa los compas
function Persona( nombre , edad ) {
  console.log('******************');
  this.nombre = nombre;
  this.edad = edad;

  this.imprimir = function(){
    console.log(`Nombre: ${this.nombre} - Edad: ${ this.edad }`);
  }

}

//De esta forma se creaban las instancias al constructor
const maria = new Persona('Maria', 18); //Agregamos la palabra reservada new, esta palabra le indica a js que queremos crear una nueva instancia
console.log( maria ); //Esta impresion es adicional, solo para ver el objeto creado
maria.imprimir();

//si necesitamos crear una nueva instancia la creamos asi
const melissa = new Persona('Melissa', 30); 
melissa.imprimir();
