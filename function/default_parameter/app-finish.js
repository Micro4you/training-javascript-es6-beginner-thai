'use strict'

// let plus = (first, second) => { return first + second }

// Assign default parameter with 'p = ...'
let plus = (first = 1, second = 1) => { return first + second }


console.log('Call plus() only:', plus() );
console.log('Call plus() with first parameter:', plus(9) );

