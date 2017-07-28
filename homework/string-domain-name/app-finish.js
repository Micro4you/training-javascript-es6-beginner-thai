
// indexOf()
// lastIndexOf()
// slice()

let website = "https://www.nextflow.in.th";
// website = "http://www.bots.in.th";

// -> https://, http://
let fromIndex = 0;
let toIndex = website.lastIndexOf('/') + 1;
let protocol = website.slice(fromIndex, toIndex);

// -> nextflow.in.th, bots.in.th
fromIndex = website.indexOf(".") + 1;
toIndex = website.length;
let domainName = website.slice( fromIndex, toIndex);

console.log("============");
console.log('Protocal:', protocol);
console.log('Domain name:', domainName);
console.log("============");