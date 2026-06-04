
//PRO TIP 1
function crearPersona(nombre, apellido) {
    return {
        nombre, // si el nombre de la propiedad es igual al nombre del valor, se puede omitir el valor 
        apellido, // Osea es equivalente a escribir => nombre: nombre, apellido: apellido
    }
}

const persona1 = crearPersona('Juan', 'Pérez');
console.log(persona1);


//Ahora como funcion de flecha
const crearPersona2 = (nombre, apellido) => {
    return {
        nombre,
        apellido
    }
};

const persona2 = crearPersona2('Juan', 'Pérez');
console.log(persona2);


//ahora como funcion de flecha en una sola linea
const crearPersona3 = (nombre, apellido) => ({nombre, apellido});

const persona3 = crearPersona3('Juan', 'Pérez');
console.log(persona3);


//PRO TIP 2
//Objeto arguments 
function imprimirArgumentos() {
    console.log(arguments);
}

imprimirArgumentos(10, true, false, 'Hola', {a: 1, b: 2}, [1, 2, 3]);


//Ahora con funcion de flecha
const imprimirArgumentos2 = () => {
    console.log(arguments);
};

imprimirArgumentos2(10, true, false, 'Hola', {a: 1, b: 2}, [1, 2, 3]); //Esta función no tiene acceso al objeto arguments, por lo que se genera un error


//solucion a la funcion anterior
const imprimirArgumentos3 = (...args) => { //El operador rest (...) permite capturar los argumentos en un array llamado args, lo que soluciona el problema de la función de flecha anterior
    console.log(args); //Importante: después del operador rest no puede haber ningún otro parámetro, ya que el operador rest captura todos los argumentos restantes en un array. Si se colocara otro parámetro después del operador rest, se generaría un error de sintaxis.
};  

imprimirArgumentos3(10, true, false, 'Hola', {a: 1, b: 2}, [1, 2, 3]); //Ahora si funciona correctamente, ya que se utiliza el operador rest para capturar los argumentos en un array llamado args

//si necesitamos obtener un argumento anterior al rest, podemos hacerlo de la siguiente manera
const imprimirArgumentos4 = (edad, ...args) => { //En este caso, el primer argumento se asigna a la variable edad, y el resto de los argumentos se capturan en el array args
    console.log(edad);
    console.log(args);
};

imprimirArgumentos4(30, 10, true, false, 'Hola', {a: 1, b: 2}, [1, 2, 3]); //En este caso, el primer argumento (30) se asigna a la variable edad, y el resto de los argumentos se capturan en el array args
