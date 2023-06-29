// Assignment code here
// Variables available in global scope
const numberSet = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const letterSetUpper = ["a", "b", 'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const letterSetLower = ['A', 'B', 'C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const specialCharacters = [',', '.', '/', ';', "'", '=', '-', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '`', '~', "'", '{', '}'];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Adding more references for generated elements
let eraseBTN = document.querySelector('#erase');
let copyBTN = document.querySelector('#copy');

function optionPassword() {
  //prompt asking how many characters the user would like to use
  let passLength = parseInt(prompt('How many characters use? We can only use between 8 and 128 characters.'));

  //gives a series of confirms to user for conditionals
  if (passLength>7 && passLength<129){
    let uppercase = confirm("Are we using uppercase letters?");
    let lowercase = confirm("Are we using lower letters?");
    let numbers = confirm("Are we using numbers?");
    let special = confirm("Are we using special characters?");
  

  //stores users inputs
  let options ={
    passLength: passLength,
    numbers: numbers,
    lowercase: lowercase,
    uppercase: uppercase,
    special: special
  };
  //completes information gather and sends out
  return options;
  } else{
  alert('That is not a number between 8 and 128. Please enter a valid number.');
  }
}


// function that generates password that is requested in writePassword
function generatePassword(){
  let passwordUserChoice = optionPassword();
  let userChoice = '';
  let password = '';

  // if statement that evaluates choices and will implement based on input
  if (passwordUserChoice.uppercase){
    userChoice += letterSetUpper;
  }
  if (passwordUserChoice.lowercase){
    userChoice += letterSetLower;
  }
  if (passwordUserChoice.numbers){
    userChoice += numberSet;
  }
  if (passwordUserChoice.special){
    userChoice += specialCharacters;
  }
  // for to generate random number
  for (var i=0; i < passwordUserChoice.passLength; i++){
    let random = Math.floor(Math.random() * userChoice.length);
    password += userChoice.charAt(random);

    console.log(random);
  }

  //returns password out of function
  return password;
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Erases password that was generated 
function erasePassword(){
  document.getElementById('password').innerHTML= "";
}

// Copies password onto clipboard
function copyPassword(){

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Event added when erase button is clicked
generateBtn.addEventListener('click', erasePassword);

// Event added to copy generated password
generateBtn.addEventListener('click', copyPassword);

// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters

// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
