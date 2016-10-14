'use strict'

let Pokemon = require('./pokemon');
let Gym = require('./obj/gym');

let pikachu = new Pokemon('Pikachu', 100);

pikachu.attack();

let myGym = new Gym("My Gym", 7);
myGym.addPokemon( pikachu );
myGym.whoDefendThisGym();