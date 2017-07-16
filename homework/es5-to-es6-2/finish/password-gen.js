
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



module.exports.randomPassword = randomPassword;

