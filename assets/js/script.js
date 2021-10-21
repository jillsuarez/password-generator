// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


function generatePassword () {
  var userOptions = getUserOptions ();

  // check if upper
    // add a random char from upper

  // check if lower
    // add a random char from lower

  // check if alpha
    // add a random char from alpha

  // check if special
    // add a random char from special

  //for loop the rest randomly to list

  // generate password

  // return password
}

function getUserOptions () {
  // ask the user, using prompts, password criteria

  // ask length
  // calidate between 8-128

  // chose if to include lowercase
  // chose if to include uppercase
  // chose if to include numeric
  // chose if to include and/or special characters
  
  // validate user choses at least one character type
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
