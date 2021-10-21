// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// array of upperChar
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
// array of lowerChar
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
// array of numericChar
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// array of specialChar
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];


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
  var userChoices = {};
  // ask the user, using prompts, password criteria
  
  // ask length
  // calidate between 8-128
  var length = prompt('How long would you like your password to be (between 8-128 for best security)?')
  
  // to do: validate length

  //assign to userOptions
  userChoices.length = parseInt(length);

  // chose if to include lowercase
  var lowerCase = confirm('Do you want lower case characters in your password?');
  userChoices.lowerCase = lowerCase;

  // chose if to include uppercase
  var upperCase = confirm('Do you want upper case characters in your password?');
  userChoices.upperCase = upperCase;

  // chose if to include numeric
  var numeric = confirm('Do you want numeric characters in your password?');
  userChoices.numeric = numeric;

  // chose if to include and/or special characters
  var special = confirm('Do you want special characters in your password?');
  userChoices.special = special;
  
  // validate user choses at least one character type

  return userChoices;
}


// Write password to the #password input
function writePassword() {
  var userChoices = getUserOptions();
  console.log(userChoices);
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
