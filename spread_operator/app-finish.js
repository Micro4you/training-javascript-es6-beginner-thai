'use strict'

let levelOnePokemons = ['Pikachu','Magikarp','Balbasaur'];

// Insert array to another array
let allPokemons = ['Meowth', 'Poliwag', ...levelOnePokemons];

console.log(allPokemons);

let pikachuName = "Pikachu";

// Split into literal array with spread operator
let arrayWords = [...pikachuName];

console.log(arrayWords);