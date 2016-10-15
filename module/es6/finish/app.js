'use strict'

import Pokemon from './pokemon';
import Gym from './obj/gym';

let pikachu = new Pokemon('Pikachu', 100);

pikachu.attack();

let myGym = new Gym("My Gym", 7);
myGym.addPokemon( pikachu );
myGym.whoDefendThisGym();