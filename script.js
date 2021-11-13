// Assignment Code
var generateBtn = document.querySelector("#generate");


var numbersArray = ["1, 2, 3, 4, 5, 6, 7, 8, 9, 0"];
var specialArray = ["!, @, #, $, %, ^, &, *, (, )"];
var uppercaseArray = ["A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z"];
var lowercaseArray = ["a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z"];

var result = [];
var userEnter = [];

var onlyNumbers = prompt ("Between 8 and 128, how many characters are required?");

function passwordOptions(onlyNumbers) {
    if (isNaN(onlyNumbers)) {
        alert("Enter only numeric values.");
        return false;
    } else if (parseInt (useNumCharacters) < 8) {
        alert("Password must be at least 8 characters.");
        return false;
    } else if (parseInt (useNumCharacters) >= 128) {
        return false;
        }
    return true;
    }

var validPassword === passwordOptions;

    if onlyNumbers = validPassword {
        var addNumbers = confirm ("Add Numbers?");
        var addSpecial = confirm ("Add Special Characters?");
        var addUppercase = confirm ("Add Uppercase Letters?");
        var addLowercase = confirm ("Add Lowercase Letters?");

        if (addNumbers){
            resultArray = resultArray.concat(numbersArray); 
          }
        if (addSpecial){
            resultArray = resultArray.concat(specialArray); 
          }
        if (addUppercase){
            resultArray = resultArray.concat(numbersArray); 
          }
    }

chosenWord = words[Math.floor(Math.random() * collection.length)];
lettersInChosenWord = chosenWord.split("");
numBlanks = lettersInChosenWord.length;
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


