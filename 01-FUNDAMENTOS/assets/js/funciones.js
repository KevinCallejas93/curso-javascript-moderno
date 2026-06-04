

function saludar() { // Declaración de función
    console.log('Hola Mundo');
    return 1;
}

saludar();

const saludar2 = () => { //Funcion flecha
  console.log('Hola Mundo 2');
};

saludar2();

const saludar3 = function() { // Función anónima
  console.log('Hola Mundo 3');//Beneficio, no hay manera de que esta funcion pueda ser reutilizado en mi app
};

saludar3();

const saludo4 = ( nombre ) => { // Función flecha con parámetros
  console.log(`Hola ${nombre}`);
};

saludo4('Kevin');

function saludar5(nombre) {
    console.log( arguments ); // Pero si agrego esto, este Objeto 'arguments' contiene todos los argumentos pasados a la función
    console.log(`Hola ${nombre}`);
}

saludar5('Kevin', 40, true, 'El Salvador'); // Solo se toma el primer argumento, los demás son ignorados

// Funcion de ejemplo para mostrar que una funcion puede retornar algo, en este caso un 1
const saludar6 = (nombre) => {
  console.log(`Hola ${nombre}`); 
  return 1; //Si no retornamos nada, la función retornará 'undefined' por defecto.
};

const retornoSaludar6 = saludar6('Kevin');
console.log({retornoSaludar6}); // Imprime el valor retornado por la función, en este caso 1

const saludar7 = (nombre) => {
  console.log(`Hola ${nombre}`); 
  return 1;
  
  console.log('Esto no se ejecutará'); // Este código no se ejecutará porque está después del return
}

const retornoSaludar7 = saludar7('Kevin');
console.log({retornoSaludar7});

//Ejemplo de función que retorna un array con dos elementos, 1 y 2
const saludar8 = (nombre) => {
  console.log(`Hola ${nombre}`);
  return [1, 2]; // Retorna un array con dos elementos, 1 y 2
};

const retornoSaludar8 = saludar8('Kevin');
console.log(retornoSaludar8 [0], retornoSaludar8 [1]); // Imprime los valores retornados por la función, en este caso 1 y 2