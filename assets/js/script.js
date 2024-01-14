// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercase="abcdefghijklmnopqrstuvwxyz";
var uppercase=lowercase.toUpperCase();
var numeric="0123456789";
var specialCharacters="!@#$%^&*_-~=+";


function generatePassword() {
  var passwordSize=prompt("Enter password length, between 8 and 128 characters");
  console.log(passwordSize)
  var savedPassword=("");




if(passwordSize>=8 && passwordSize<=128){
   var confirmLowerCase=confirm("Include lowercase characters in the password?")
   console.log(confirmLowerCase);
   var confirmUpperCase=confirm("Include Uppercase characters in the password?")
   var confirmNumeric=confirm("Do you want numeric characters included in the password?")
   var confirmSpecialCharacters=confirm("Do you want special characters included in the password?")
}

   for (var i=0; i < passwordSize; i++) {}

    if (confirmLowerCase && savedPassword.length < passwordSize) {
  var randomIndex= Math.floor(Math.random() * lowercase.length) 

console.log(randomIndex);

savedPassword = savedPassword + lowercase[randomIndex]

}

if(confirmUpperCase && savedPassword.length < passwordSize) {
  var randomIndex= Math.floor(Math.random() * uppercase.length) 

  console.log(randomIndex);
  
  savedPassword= savedPassword+uppercase[randomIndex]
}

if(confirmNumeric && savedPassword.length < passwordSize) {
  var randomIndex= Math.floor(Math.random() * numeric.length)
}

if(confirmSpecialCharacters && savedPassword.length < passwordSize){
  var randomIndex= Math.floor(Math.random() * specialCharacters.length)
}

if(savedPassword.length < passwordSize) {
  alert("Invalid Entry. Password length must be between 8 and 128 characters");


return savedPassword

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
