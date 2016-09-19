'use strict'

let plus = (first, second) => { return first + second }

// With all assigned parameters' value
// console.log( plus(9,10) );

// Assign default parameter with 'p = ...'
plus = (first = 1, second = 1) => { return first + second }
console.log(plus());