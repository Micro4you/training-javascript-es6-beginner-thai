
const passwordGenerator = require('./password-gen')
const terminal = require('./terminal');

let title = "== Password Generator ==";

terminal.print(title);
terminal.print("Password length = 5: " + passwordGenerator.randomPassword());
terminal.print("Password without number: " + passwordGenerator.randomPassword(10))
terminal.print("Password with number: " + passwordGenerator.randomPassword(10, true));