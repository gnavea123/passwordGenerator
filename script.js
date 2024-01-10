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

var allCharacters =
  upperCasedCharacters +
  lowerCasedCharacters +
  numericCharacters +
  specialCharacters;

//console.log("All characters are:  " + allCharacters);

// Function to prompt user for password options
function getPasswordOptions() {
  var pwdLength = 8; // Need to change this to range of length
  console.log(" length of pw Options function is: " + pwdLength);
}
//getPasswordOptions();
//var pwdLength = 8;
console.log(pwdLength);

// Function for getting a random element from an array
//function getRandom(arr) {}

// Function to generate password with user input

let pLen = prompt("Please enter lnegth of PWD", "min 8 max 128");
if (pLen >= 8 && pLen <= 128) {
  //"Hello " + pLen + "is valid";
  console.log(pLen);
} else console.log("length is invalid try again");

var pwdLength = pLen;
console.log("Value of pLen is: ");
console.log(pLen);

let charType = prompt(
  "Please enter Character Type: LowerCase (L) or UpperCase (U) or Numeric (N) or Special (S)"
);

if (
  charType !== "L" &&
  charType !== "U" &&
  charType !== "N" &&
  charType != "S"
) {
  charType = prompt("Select again.");
} else {
  console.log("selected correctly: ") + charType;
}

var typeChar = charType;
console.log("Value of charType is: ");
console.log(charType);

//var passwordBox = document.getElementById("#password");
var passwordText = document.querySelector("#password");

function generatePassword() {
  //var pwdLength = 8;
  var getPwdLength = getPasswordOptions();
  //console.log("Value of pwdLength is: ");
  //console.log(getPasswordOptions);

  var getPwdLength = pwdLength;
  var pwd = "";
  console.log("The new password  initial value:   " + pwd);
  // console.log(" length of pw is: " + getPwdLength);
  console.log(" pwLength is: " + getPwdLength);

  if (charType === "U") {
    pwd +=
      upperCasedCharacters[
        Math.floor(Math.random() * upperCasedCharacters.length)
      ];
    while (pLen > pwd.length) {
      pwd +=
        upperCasedCharacters[
          Math.floor(Math.random() * upperCasedCharacters.length)
        ];
    }
  } else if (charType === "L") {
    pwd +=
      lowerCasedCharacters[
        Math.floor(Math.random() * lowerCasedCharacters.length)
      ];

    while (pLen > pwd.length) {
      pwd +=
        lowerCasedCharacters[
          Math.floor(Math.random() * lowerCasedCharacters.length)
        ];
    }
  } else if (charType === "N") {
    pwd +=
      numericCharacters[Math.floor(Math.random() * numericCharacters.length)];
    while (pLen > pwd.length) {
      pwd +=
        numericCharacters[Math.floor(Math.random() * numericCharacters.length)];
    }
  } else if (charType === "S") {
    pwd +=
      specialCharacters[Math.floor(Math.random() * specialCharacters.length)];

    while (pLen > pwd.length) {
      pwd +=
        specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    }
  }

  // while (pLen > pwd.length) {
  //   pwd += allCharacters[Math.floor(Math.random() * allCharacters.length)];
  // }

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
  // console.log(newPassword);
  //var newPassword = generatePassword.pwd;
  //var passwordText = document.querySelector("#password");
  //var newPassword = (passwordText.value = newPassword);

  var newPassword = passwordText.value;
  //var getPasswordOptions = getPasswordOptions.pwdLength;

  console.log("Value of newPassword variable is: ");
  console.log(newPassword);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
