// Assignment Code
var generateBtn = document.querySelector("#generate");

// these variables provide values for the generatePassword function to know which characters are accepted to create a password from
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = lowercase.toUpperCase();
var numeric = "0123456789";
var specialCharacters = "!@#$%^&*_-~=+";


// the generatePassword function creates prompts for the user to input which types of characters they would like to include in the password as well as password length
function generatePassword() {
  var savedPassword = "";
  var passwordSize = prompt("Enter password length, between 8 and 128 characters")

  if (passwordSize >= 8 && passwordSize <= 128) {
    var confirmLowerCase = confirm("Do you want to include lowercase characters in the password?");
    var confirmUpperCase = confirm("Do you want to include uppercase characters in the password?");
    var confirmNumeric = confirm("Do you want to include numeric characters in the password?");
    var confirmSpecialCharacters = confirm("Do you want to include special characters in the password?");



    for (var i = 0; i < passwordSize; i++) {



      // the following if statements allow the generatePassword to select random characters from each desired character type while also adhering to the users desired password character length
      if (confirmLowerCase && savedPassword.length < passwordSize) {
        var randomIndex = Math.floor(Math.random() * lowercase.length)  // Math.random() * 26 => extends the range from 0 to 1 => 0 to 26, this includes decimals. Math.floor round it down, ex. 2.8 => 2
        console.log(randomIndex);


        savedPassword = savedPassword + lowercase[randomIndex]

      }

      if (confirmUpperCase && savedPassword.length < passwordSize) {
        var randomIndex = Math.floor(Math.random() * uppercase.length)
        console.log(randomIndex);


        savedPassword = savedPassword + uppercase[randomIndex]

      }

      if (confirmNumeric && savedPassword.length < passwordSize) {
        var randomIndex = Math.floor(Math.random() * numeric.length)
        console.log(randomIndex);


        savedPassword = savedPassword + numeric[randomIndex]

      }

      if (confirmSpecialCharacters && savedPassword.length < passwordSize) {
        var randomIndex = Math.floor(Math.random() * specialCharacters.length)
        console.log(randomIndex);


        savedPassword = savedPassword + specialCharacters[randomIndex]

      }
    }

  }
  // this else statement provides an alert to the user when they input a password length outside of the acceptable password length.
  else {
    alert("Invalid entry, Password length must be between 8 and 128 characters");
  }

  return savedPassword

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
