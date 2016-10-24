'use strict'

class Monster {

   constructor(name, cp = 100) {
       this.name = name;
       this.cp = cp;
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
console.log(mon);
console.log(mon.name);

mon.attack();
mon.powerUp();
mon.attack();

let tam = new Monster("Tam");
console.log(tam);
console.log(tam.name);
