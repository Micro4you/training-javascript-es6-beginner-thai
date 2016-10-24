'use strict'

let Monster = require('./monster');
let Castle = require('./obj/castle');

let mon = new Monster('Mon', 100);

mon.attack();

let myCastle = new Castle("My Castle", 7);
myCastle.addMonster( mon );
myCastle.whoDefendThisCastle();