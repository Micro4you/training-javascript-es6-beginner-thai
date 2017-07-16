

let authen = require('./authen');

authen.signIn('Pon','1234');
authen.signOut();

console.log(authen.helper.getKey())