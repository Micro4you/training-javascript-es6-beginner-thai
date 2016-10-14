'use strict'

let levelOnePokemons = ['Pikachu','Magikarp','Balbasaur'];

// Insert array to another array
let allPokemons = ['Meowth', 'Poliwag', ...levelOnePokemons];

console.log(allPokemons);


// Split into literal array with spread operator
let pikachuName = "Pikachu";
let arrayWords = [...pikachuName];

console.log(arrayWords);