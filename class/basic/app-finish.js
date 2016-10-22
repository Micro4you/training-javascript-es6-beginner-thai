'use strict'

class Monster {

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

let mon = new Monster("My Mon");
console.log(mon.name);

mon.attack();

mon.powerUp();
mon.attack();