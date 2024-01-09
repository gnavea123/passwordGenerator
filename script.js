// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// var specialCharacters
// var numericCharacters
// var lowerCasedCharacters
// var upperCasedCharacters

console.log("This is where the code begins : ");
var length = 8; // Need to change this to range of length

var allCharacters =
  upperCasedCharacters +
  lowerCasedCharacters +
  numericCharacters +
  specialCharacters;

//console.log("All characters are:  " + allCharacters);

console.log(" length of pw is: " + length);

// Function to prompt user for password options
function getPasswordOptions() {}

// Function for getting a random element from an array
function getRandom(arr) {}

// Function to generate password with user input

//var passwordBox = document.getElementById("#password");
var passwordText = document.querySelector("#password");

function generatePassword() {
  var pwd = "";
  console.log("The new password  initial value:   " + pwd);

  pwd +=
    upperCasedCharacters[
      Math.floor(Math.random() * upperCasedCharacters.length)
    ];

  pwd +=
    lowerCasedCharacters[
      Math.floor(Math.random() * lowerCasedCharacters.length)
    ];
  pwd +=
    numericCharacters[Math.floor(Math.random() * numericCharacters.length)];
  pwd +=
    specialCharacters[Math.floor(Math.random() * specialCharacters.length)];

  while (length > pwd.length) {
    pwd += allCharacters[Math.floor(Math.random() * allCharacters.length)];
  }

  //passwordBox.value = pwd;
  passwordText.value = pwd;

  console.log("The new password is:  " + pwd);
  return;
}
//generatePassword();
console.log("The password has been generated:  ");

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  var newPassword = generatePassword();
  //var newPassword = generatePassword.pwd;
  //var passwordText = document.querySelector("#password");
  //var newPassword = (passwordText.value = newPassword);

  var newPassword = passwordText.value;

  console.log("Value of newPassword variable is: ");
  console.log(newPassword);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
