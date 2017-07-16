
const randomPassword = require('./password-generator')
const print = require('./print');

let title = "== Password Generator ==";

print(title);
print("Password length = 5: " + randomPassword());
print("Password without number: " + randomPassword(10))
print("Password with number: " + randomPassword(10, true));