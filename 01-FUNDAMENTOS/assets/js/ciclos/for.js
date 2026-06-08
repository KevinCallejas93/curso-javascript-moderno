

const heroes = ['Batman', 'Superman', 'Mujer Maravilla', 'Aquaman'];

console.warn('For Tradicional');

for (let i = 0; i < heroes.length; i++) { //En esta condicion no se puede usar const para i a diferencia del for in y for of
    
    console.log( heroes [i]);
    
}

console.warn('For in');

for (let i in heroes) { //Esta condicion es como si tuvieramos la condicion del for tradicional
    
    console.log( heroes [i]);
    
}

console.warn('For of'); //Esta condicion es como si tuvieramos la condicion del for tradicional

for (let heroe of heroes) { //En esta condicion no se acostumbra a nombrar i la variable, sino que se usa el nombre en singular del arreglo
    
    console.log( heroe );
    
}
