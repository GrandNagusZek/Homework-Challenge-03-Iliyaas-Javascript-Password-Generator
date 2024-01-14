// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passwordSize=prompt("Enter password length, between 8 and 128 characters")
  console.log(passwordSize)
  
if(passwordSize>= 8 && passwordSize<=128){
    var confirmLowerCase=confirm("Do you want to include lowercase characters in the password?");
    console.log(confirmLowerCase);
    var confirmUpperCase=confirm("Do you want to include uppercase characters in the password?");
    var confirmNumeric=confirm("Do you want to include numeric characters in the password?");
    var confirmSpecialCharacters=confirm("Do you want to include special characters in the password?");
}
else{ 
  alert("Invalid entry, Password length must be between 8 and 128 characters");
}

}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
