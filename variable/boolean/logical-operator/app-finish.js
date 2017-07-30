
// https://www.w3schools.com/js/js_comparisons.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators

console.log('====================================');
console.log('Logical Operator && (and)');
console.log('====================================');

let username = 'pon';
let password = '1234'; 

if( username === 'pon' && password === '1234' ){
    console.log('Hello, ', username);
} else {
    console.log('Your username or password incorrect, try again!');
}



console.log('====================================');
console.log('Logical Operator || (or)');
console.log('====================================');


let userRole = 'moderator'

if( userRole === 'moderator' || userRole === 'admin' ){
    console.log('Redirecting to Admin panel');
} else {
    console.log('Unauthorized to this area');
}






