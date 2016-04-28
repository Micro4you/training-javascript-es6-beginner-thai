'use strict'

console.log('## Simple function with no parameter');
// let sayHi = function(){
//   console.log('Hello, Pon!');
// }

let sayHi = () => console.log('Hello, Pon!');
sayHi();


console.log('## Simple function with a parameter');
// let printText = function(message){
//   console.log(message);
// }

let printText = message => console.log(message);
printText('Teerasej');


console.log('## Simple function with multiple parameters');
// let plus = function(first, second){
//   return first + second;
// }

let plus = (first,second) => first + second;
console.log(plus(1,2));



console.log('## Simple function that return object');
// let createUser = function(){
//   return { name:'Pon'};
// }

let createUser = () => ({ name:'Pon' });

let result = createUser();
console.log(result.name);



console.log('Start counting...');
let amount = 0;

// setInterval(function addMore() {
//     amount++;
//     console.log(amount);
// }, 1000)

setInterval(() => {
  amount++;
  console.log(amount);
},1000);
