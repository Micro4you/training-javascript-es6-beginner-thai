const readline = require("readline");
const randomPassword = require("./password-generator");

let rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt("How long is password you need?");
rl.prompt();

rl
  .on("line", line => {
    
    let password = randomPassword(line);
    console.log(password);
    
    rl.prompt();
  })
  .on("close", () => {
    process.exit(0);
  });
