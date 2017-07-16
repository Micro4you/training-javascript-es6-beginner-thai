

class Player {

    constructor(name = "Hero", hp = 100 , power = 100){
        this.name = name;
        this.hp = 100;
        this.power = power;

        this.ability = this.randomAbility();
    }

    randomAbility(){

        let abilities = ["Fire", "Water", "Darkness", "Rock", "Wind"];

        let randomIndex = Math.floor(Math.random() * (abilities.length - 0));

        return abilities[randomIndex];

    }

    attack(){
        console.log(this.name + " attacks " + this.power + " points.");
    }


}

let man = new Player("Pon",500, 200);
man.attack();
console.log(man.ability)
