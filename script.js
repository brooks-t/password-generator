// Assignment Code
//DO NOT CHANGE THIS CODE
var generateBtn = document.querySelector("#generate");


  //TODO: your code here
function generatePassword(){
  function funcLength {
    var passLength = prompt("How long would you like your password to be? Please choose a number between 8 and 128.");
    if (isNaN(passLength)) {
      alert("Please enter a number between 8 and 128");
      generatePassword();
    } else if (passLength < 8 || passLength > 128) {
      alert("Please enter a number between 8 and 128");
    }
  }



  var passSpecial = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "<", ">", "=", "?", "@", "^", "{", "}", "~"];
  var passNumeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var passUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var passLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  
  






}

// Write password to the #password input
/* DO NOT CHANGE THIS CODE!  This function is going to call your generatePassword() function and whatever is returned from that function will be put onto the page */
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// DO NOT CHANGE THIS CODE
generateBtn.addEventListener("click", writePassword);


/* for testing the arrays...  
  console.log(passLength);
  console.log(passSpecial);
  console.log(passNumeric);
  console.log(passUppercase);
  console.log(passLowercase);
  */