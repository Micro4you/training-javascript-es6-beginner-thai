'use strict'

let plus = (first, second) => { return first + second }

// With all assigned parameters' value
console.log( plus() );

// Assign default parameter with 'p = ...'
plus = (first , second ) => { return first + second }
console.log(plus());