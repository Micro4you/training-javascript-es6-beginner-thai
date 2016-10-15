'use strict'

class Ball {

   constructor(name) {
       this.name = name;
   }

   catchPokemon() {
       console.log(`${this.name} throwed.`);
   }
}

class PokeBall extends Ball {
   constructor() {
       super("Poke Ball");
   }
}

class GreatBall extends Ball {
    constructor(){
        super("Great Ball");
    }
}

let pokeBall = new PokeBall();
pokeBall.catchPokemon();

let greatBall = new GreatBall();
greatBall.catchPokemon();