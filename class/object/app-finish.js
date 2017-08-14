
// class Monster {

//    constructor(name, cp = 100) {
//        this.name = name;
//        this.cp = cp;
//    }

//    attack() {
//        console.log(`Attack ${this.cp} points!`);
//    }

//    powerUp() {
//        this.cp += 100;
//        console.log("Power Up completed!")
//    }
// }

let monster = { 
    name: undefined,
    cp: 100,
    attack() {
        console.log("Attack", this.cp, 'points');
    },
    powerUp() {
        this.cp += 100;
        console.log("Power up completed!");
    }
}


console.log('Monster name:', monster.name);
console.log("Monster's power:", monster.cp);
monster.attack();
monster.powerUp();