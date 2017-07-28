

let name = "Teerasej";
let website = new String("http://www.nextflow.in.th");

console.log(name, website);

// Length of string
console.log(website.length);

// CharAt
console.log("The First Character : ", website.charAt(0));
console.log("Character at the end: ", website.charAt(website.length - 1));

// index of 
let index = website.indexOf("www");
console.log("Index of 'www.':", index);

let lastIndex = website.lastIndexOf(".");
console.log("Last index of '.'", lastIndex);


// slice
console.log('==== Slice =====')
// website = "https://www.bots.in.th";

let fromIndex = website.indexOf(".");
let toIndex = website.indexOf(".in.th");
console.log('Slice from index: ', fromIndex, 'to index:', toIndex );

let sliceWord = website.slice(fromIndex, toIndex);
console.log("Slice word:", sliceWord);
