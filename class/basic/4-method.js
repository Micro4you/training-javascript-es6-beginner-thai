
class Pokemon {

   constructor(name) {
       this.name = name;
       this.cp = 100;
   }

   // Let do some attack
   attack() {
       console.log(`Attack ${this.cp} points!`);
   }

   // Let power up!
   powerUp() {
       this.cp += 100;
       console.log("Power Up completed!")
   }
}

let pikachu = new Pokemon("Pikachu");
console.log(pikachu.name);

// Attack!
pikachu.attack();

// Power up and attack!
pikachu.powerUp();
pikachu.attack();