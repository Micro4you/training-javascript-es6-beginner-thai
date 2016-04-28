'use strict'

// let sayHi = function(){
//   console.log('Hello, Pon!');
// }

let sayHi = () => console.log('Hello, Pon!');

sayHi();


// let printText = function(message){
//   console.log(message);
// }

let printText = message => console.log(message);

printText('Teerasej');


// let plus = function(first, second){
//   return first + second;
// }

let plus = (first,second) => first + second;

console.log(plus(1,2));


let amount = 0;

// setInterval(function addMore() {
//     amount++;
//     console.log(amount);
// }, 1000)

setInterval(() => {
  amount++;
  console.log(amount);
},1000);
