'use strict'

class Pokemon {

   constructor(name) {
       this.name = name;
       this.cp = 100;
   }

   attack() {
       console.log(`Attack ${this.cp} points!`);
   }

   powerUp() {
       this.cp += 100;
       console.log("Power Up completed!")
   }
}

let pikachu = new Pokemon("Pikachu");
console.log(pikachu.name);

pikachu.attack();

pikachu.powerUp();
pikachu.attack();