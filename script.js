// Assignment Code
var generateBtn = document.querySelector("#generate")
generateBtn.addEventListener("click", writePassword);

var numbersArray = ["1234567890"];
var specialArray = ["!@#$%^&*()"];
var uppercaseArray = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var lowercaseArray = ["abcdefghijklmnopqrstuvwxyz"];

var userInput = "";
var result = "";

function passwordOptions(){
    var passwordLength = prompt ("Between 8 and 128, how many characters are required?");
    if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
        alert("Incorrect input. Please enter values in the requested format.");
        console.log("Incorrect input");
        return "Try again.";
    } else {
        console.log(passwordLength);

    var addNumbers = confirm ("Add Numeric Characters?");
    if (addNumbers == true) {
        userInput += numbersArray
        console.log(addNumbers);
    }

    var addSpecial = confirm ("Add Special Characters?");
    if (addSpecial == true) {
        userInput += specialArray
        console.log(addSpecial)
    }

    var addUppercase = confirm ("Add Uppercase Letters?");
    if (addUppercase == true) {
        userInput += uppercaseArray
        console.log(addUppercase);
    }

    var addLowercase = confirm ("Add Lowercase Letters?");
    if (addLowercase == true) {
        userInput += lowercaseArray
        console.log(addLowercase)
    }
    if (addNumbers !== true && addSpecial !== true &&  addUppercase !== true && addLowercase !== true) {
        alert ("Incorrect input. Please enter values in the requested format.")
        return
    } else {
        console.log(userInput);
    }
    for (i = 0; i < passwordLength; ++i) {
        result += userInput[Math.floor(Math.random() * userInput.length)];
        console.log(result);
    }
        return result
    }
}
// Write password to the #password input
function writePassword() {
  var password = passwordOptions();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}