// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercase="abcdefghijklmnopqrstuvwxyz";
var uppercase=lowercase.toUpperCase();

function generatePassword(){
var passwordSize=prompt("Enter password length between 8 and 128 characters")
console.log(passwordSize)

if(passwordSize>=8 && passwordSize<=128){
   var confirmLowerCase=confirm("Include lowercase characters in the password?")
   console.log(confirmLowerCase);
   var confirmUpperCase=confirm("Include Uppercase characters in the password?")
   var confirmNumeric=confirm("Do you want numeric characters included in the password?")
   var confirmSpecialCharacters=confirm("Do you want special characters included in the password?")
}
else{
  alert("Invalid Entry. Password length must be between 8 and 128 characters")
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
