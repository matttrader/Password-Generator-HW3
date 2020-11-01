
var lowerString = "abcdefghijklmnopqrstuvwxyz";
var lowerArray = lowerString.split("");
console.log(lowerArray);

var upperArray = lowerString.toUpperCase().split("");
console.log(upperArray);

var numericString = "0123456789";
var numericArray = numericString.split("");
console.log(numericString);

var specialcharString = "!@#$%^&*";
var specialcharArray = specialcharString.split("");
console.log(specialcharString);


function getOptions() {
  var passLength = parseInt(prompt("How many characters do you want in your password? The minimum is 8 characters."));
  if(passLength < 8) {
    alert("invalid");
    return;
  }
  var isLower = confirm("Do you want lower case letters in your password?");
  var isUpper = confirm("Do you want upper case letters in your password?");
  var isNumeric = confirm("Do you want numbers in your password?");
  var isSpecialchar = confirm("Do you want special characters in your password?");

  
  var options = {
    passLength,
    isUpper,
    isLower,
    isNumeric,
    isSpecialchar
  }
 
  return options
}

function generatePassword(){
  var myOptions = getOptions();
  var superArray = [];
   var results = [];

  if(myOptions.isLower === true) {
    superArray = superArray.concat(lowerArray)
    console.log(superArray)
  }
  if(myOptions.isUpper === true) {
    superArray = superArray.concat(upperArray)
    console.log(superArray)
  }
  if(myOptions.isNumeric === true) {
    superArray = superArray.concat(numericArray)
    console.log(superArray)
  }
  if(myOptions.isSpecialchar === true) {
    superArray = superArray.concat(specialcharArray)
    console.log(superArray)
  }



  for(var i = 0; i < myOptions.passLength; i++) {
    var index = Math.floor(Math.random() * superArray.length);
    var digit = superArray[index];
    results.push(digit)
    console.log(digit)
  }
  return results.join("");
}

var generateBtn = document.querySelector("#generate");


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


generateBtn.addEventListener("click", writePassword);
