// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = lowercase.toUpperCase();
var numeric = "0123456789";
var specialCharacters = "!@#$%^&*_-~=+";

function generatePassword() {
  var savedPassword = "";
  var passwordSize = prompt("Enter password length, between 8 and 128 characters")

  if (passwordSize >= 8 && passwordSize <= 128) {
    var confirmLowerCase = confirm("Do you want to include lowercase characters in the password?");
    var confirmUpperCase = confirm("Do you want to include uppercase characters in the password?");
    var confirmNumeric = confirm("Do you want to include numeric characters in the password?");
    var confirmSpecialCharacters = confirm("Do you want to include special characters in the password?");



    for (var i = 0; i < passwordSize; i++) {




      if (confirmLowerCase && savedPassword.length < passwordSize) {
        var randomIndex = Math.floor(Math.random() * lowercase.length)  // Math.random() * 26 => extends the range from 0 to 1 => 0 to 26, this includes decimals. Math.floor round it down, ex. 2.8 => 2
        console.log(randomIndex);


        savedPassword = savedPassword + lowercase[randomIndex]

      }

      if (confirmUpperCase && savedPassword.length < passwordSize) {
        var randomIndex = Math.floor(Math.random() * uppercase.length)  // Math.random() * 26 => extends the range from 0 to 1 => 0 to 26, this includes decimals. Math.floor round it down, ex. 2.8 => 2
        console.log(randomIndex);


        savedPassword = savedPassword + uppercase[randomIndex]

      }

    }

  }
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
