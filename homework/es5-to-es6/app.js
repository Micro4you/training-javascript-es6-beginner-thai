
var title = "== Password Generator ==";


var randomPassword = function(length, withNumber) {

  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  if( withNumber ){
    possible += "0123456789";
  }

  if( !length ) {
    length = 6;
  }

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};

var print = function(text) {
    console.log(text);
}

print(title);
print("Password length = 5: " + randomPassword());
print("Password without number: " + randomPassword(10))
print("Password with number: " + randomPassword(10, true));