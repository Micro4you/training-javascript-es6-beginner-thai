

let name = "Teerasej";
let website = new String("http://www.nextflow.in.th");

console.log(name, website);

// Length of string
console.log(name.length);

// CharAt
console.log("Character at: ", website.charAt(0));

// index of 
let index = website.indexOf("www");
console.log("Index of 'www.':", index);

let lastIndex = website.lastIndexOf(".");
console.log("Last index of '.'", lastIndex);

// slice
// website = "https://www.bots.in.th";
let fromIndex = website.indexOf(".") + 1;
let toIndex = website.indexOf(".in.th");

let sliceWord = website.slice(fromIndex, toIndex);
console.log("Slice word:", sliceWord);
