
let title = "== Password Generator ==";


let randomPassword = (length = 6, withNumber = false) => {

  let text = "";
  let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  if( withNumber ){
    possible += "0123456789";
  }

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};

let print = text => {
    console.log(text);
}

print(title);
print("Password length = 5: " + randomPassword());
print("Password without number: " + randomPassword(10))
print("Password with number: " + randomPassword(10, true));