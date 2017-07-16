'use strict'

let appleProducts = ['iPhone','iPad','MacBook'];

// Insert array to another array
let allProducts = ['Google Pixel', 'Nexus 6P', ...appleProducts];

console.log(allProducts);


// Split into literal array with spread operator
let actionCameraName = "GoPro";
let arrayWords = [...actionCameraName];

console.log(arrayWords);