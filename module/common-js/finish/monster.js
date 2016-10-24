'use strict'

module.exports = class Monster {
    
    constructor(name, cp = 100) {
        this.name = name;
        this.cp = cp;
    }

    attack() {
        console.log(`${this.name} attack: ${this.cp}`);
    }
}