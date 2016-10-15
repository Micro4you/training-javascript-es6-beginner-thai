'use strict'

class Gym {
    
    constructor(name, level){
        this.name = name;
        this.level = level;
        this.defenders = [];
    }

    addPokemon( pokemon ){
        this.defenders.push(pokemon);
    }

    whoDefendThisGym(){
        
        let result = 'Pokemon in this gym:';

        this.defenders.forEach((pokemon, index)=>{
            result += ` ${pokemon.name}`;
        });

        console.log(result);

    }
}