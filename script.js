// Assignment Code
//DO NOT CHANGE THIS CODE
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  //declaring initial variables
  var passLength = 8;
  var passSpec = true;
  var passNum = true;
  var passUpper = true;
  var passLower = true;
  var myPassword = "";

  //building my arrays
  var specArray = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "<", ">", "=", "?", "@", "^", "{", "}", "~"];
  var numArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  //prompt asking for length of password
  function funcLength() {
    passLength = prompt("How long would you like your password to be? Please choose a number between 8 and 128.");
    //checking to make sure it's a number and that it's not too short or too long
    if (isNaN(passLength)) {
      alert("Oops! That's not a number. Please enter a number between 8 and 128");
      funcLength();
      } else if (passLength < 8 || passLength > 128) {
        alert("Oops! That's too short or too long. Please enter a number between 8 and 128");
        funcLength();
      }
      else {
        return passLength;
      } 
  }

  //the following four functions confirm whether or not the user wants to include that character type
  function funcSpecial() {
    passSpec = confirm("Would you like to include special characters in your password?");
    return passSpec;
  }

  function funcNum() {
    passNum = confirm("Would you like to include numbers in your password?");
    return passNum;
  }

  function funcUpper() {
    passUpper = confirm("Would you like to include upper-case letters in your password?");
    return passUpper;
  }

  function funcLower() {
    passLower = confirm("Would you like to include lower-case letters in your password?");
    return passLower;
  }

  //this function makes sure that the user has chosen at least one character type to include
  function passCheck() {
    if (passSpec === false && passNum === false && passUpper === false && passLower === false) {
      alert("Utoh! You must include atleast one character type in your password. Please try again.");
      generatePassword();
    }
    else {
      return;
    }
  }

  //this function is where the magic happens. the password is randomly generated from the four arrays up to the user's desired length
  function randomizePass() {
    var randomCharacter = "";
    for (var i = 0; i < passLength; i++) {
      var randomType = Math.floor(Math.random()*4);
      if (passSpec === true && randomType === 0) {
        randomCharacter = specArray[Math.floor(Math.random()*specArray.length)];
        myPassword = myPassword.concat(randomCharacter);
      } else if (passNum === true && randomType === 1) {
        randomCharacter = numArray[Math.floor(Math.random()*numArray.length)];
        myPassword = myPassword.concat(randomCharacter);
      } else if (passUpper === true && randomType === 2) {
        randomCharacter = upperArray[Math.floor(Math.random()*upperArray.length)];
        myPassword = myPassword.concat(randomCharacter);
      } else if (passLower === true && randomType === 3) {
        randomCharacter = lowerArray[Math.floor(Math.random()*lowerArray.length)];
        myPassword = myPassword.concat(randomCharacter);
      }
    }
    return myPassword;
  }

  //calling functions with logs for debugging
  funcLength();
  console.log("Chosen length: " + passLength);

  funcSpecial();
  console.log("Wants to include special characters: " + passSpec);

  funcNum();
  console.log("Wants to include numbers: " + passNum);

  funcUpper();
  console.log("Wants to include uppercase: " + passUpper);

  funcLower();
  console.log("Wants to include lowercase: " + passLower);

  passCheck();
  console.log("Whew! Made it this far without any issues!");

  randomizePass();
  console.log("G14 Classified Password: " + myPassword);
  return myPassword;
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
