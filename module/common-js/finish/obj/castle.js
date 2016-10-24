'use strict'

module.exports = class Castle {
    
    constructor(name, level){
        this.name = name;
        this.level = level;
        this.defenders = [];
    }

    addMonster( monster ){
        this.defenders.push(monster);
    }

    whoDefendThisCastle(){
        
        let result = 'Monster in this castle:';

        this.defenders.forEach((monster, index)=>{
            result += ` ${monster.name}`;
        });

        console.log(result);

    }
}