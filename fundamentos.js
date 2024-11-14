//Variables y tipos de datos

const { WatchDirectoryFlags } = require("typescript");

let nombres = 'Gabriel Montenegro';
let edad = 18;
let MayorEdad = true;
let estatura;

console.log(typeof nombres);
console.log(typeof edad);
console.log(typeof MayorEdad);
console.log(typeof estatura);

let frutas = ['Pera', 'Melon', 'Manzana', 'Mango', 'Durazno']

let auto = {
    placa: 'TML29C',
    marca: 'Chevrolet',
    modelo: 2024,
    tipo: 'Camioneta',
    kilometraje: 2000
}

//CONCATEMAR VARIABLES

console.log('Bienvenido usuario ' + nombres + ' su edad es ' + edad + ' su fruta favorita es ' + frutas[0]);

//Estructuras d control condicional

let edad2 = 999
let genero = 'Femenina'

if (edad2>17 && edad2<26 ){
    
    if(genero== 'Masculino'){
        console.log('Pal camion');
    }
    else{
        console.log('Pa cocinar');
    }
}
else{
    console.log('Se salvo de la trasquilada')
}

let tipoSubscricion = 'Gold'

switch (tipoSubscricion) {
    case 'Bronze':
        console.log('Maldito pobre')
        break;
    case 'Silver':
        console.log('Sigue siendo pobre jaja')
        break;
    case 'Gold':
        console.log('ud es amigo de uribe, bn ahi')
        break;
    default:
        console.log('no existe este tipo de suscribcion retrasado')
        break;
}

//ESTRUCTURA DE CONTROL DE BUCLES

let contador = 0;

while (contador<11){
    console.log('El contador es el numero ' + contador);
    contador = contador + 1;
}

for(let i=100; i>1; i = i - 10){
    console.log('El contador con for es ' + i);
}