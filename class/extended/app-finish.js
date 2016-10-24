'use strict'

class Ball {

   constructor(name) {
       this.name = name;
   }

   catchMonster() {
       console.log(`${this.name} threw.`);
   }
}

class MonBall extends Ball {
   constructor() {
       super("Poke Ball");
   }
}

class SuperBall extends Ball {
    constructor(){
        super("Great Ball");
    }
}

let monBall = new MonBall();
mokeBall.catchMonster();

let superBall = new SuperBall();
superBall.catchMonster();