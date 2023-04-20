// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  password = null; //password is set to null to allow for new itterations of password generation, without them overriding one another
  generatePassword(); //password is automatically passed through function
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

//generatePassword() will return the password variable to be displayed within the passwordText.

function generatePassword() {

  //function starts by asking for user input on the character length
  let userInputLength = prompt("The program will ask some questions to understand under what conditions you want your password generated under. To begin - Select a length of your password between 8 and 128:")
  let passwordLength = parseInt(userInputLength); //String inputs are converted to integers
  let tempInt = 128; //tempInt checks against the datatype of input by user - If they enter nothing or a special character, program fails. If they enter an integer with special characters, it is ignored.

  
  if (passwordLength > 8 && passwordLength < 128 || passwordLength === 8 || passwordLength === 128) { //if statement checks to make sure conditions are fulfilled (Between 8 and 128)
    let lengthConfirmation = confirm("Valid input. Your selection was " + passwordLength + ". Is this number correct?");
    if (lengthConfirmation) {
        calcCharacters(passwordLength); //if conditions are fulfilled, collect character preferences from user
    }
  } else if (passwordLength < 8) { //integers less than 8 fail
    alert("Your input was too low. Only integers ranging from 8 to 128 are valid. Please try again.");
    generatePassword();
  } else if (passwordLength > 128) { //integers greater than 128 fail
    alert("Your input was too high. Only integers ranging from 8 to 128 are valid. Please try again.")
    generatePassword();
  } else if (passwordLength != typeof tempInt || passwordLength == null) { //special characters only or null values fail.
    alert("Invalid input. Suggested revisions: \n Did you include a special character? \n Restarting program.")
    generatePassword();
  } else {
  }

  function calcCharacters (passwordLength) { //calcCharacters takes in user inputs for character preferences

    alert("When prompted, please confirm your choices for character:");
    var passwordLowercase = confirm("Include lowercase characters?");
    var passwordUppercase = confirm("Include uppercase characters?");
    var passwordNumeric = confirm("Include numerical values?");
    var passwordSpecial = confirm("Include special characters? (examples: !,@,#,$,%,&,*)");


    //confirms user selections and passes through preferences to the generateArray function, which builds the foundation of the password generation
    let valid = confirm("Do the following selections look correct?" + "\nInclude lowercase characters: " + passwordLowercase + "." + "\nInclude uppercase characters: " + passwordUppercase + "." + "\nInclude numerical values: " + passwordNumeric + "." + "\nInclude special characters: " + passwordSpecial + "." + "\nPassword Length (Characters): " + passwordLength + ".")

      if (valid && passwordLowercase || valid && passwordUppercase || valid && passwordNumeric || valid && passwordSpecial) {
        generateArray(passwordLowercase, passwordUppercase, passwordNumeric, passwordSpecial, passwordLength);
      } else if (valid && !passwordLowercase && !passwordUppercase && !passwordNumeric && !passwordSpecial) { 
        //checks to make sure at least one selection is made, comparing the boolean values of the four character type inputs.
        alert("At least one selection of the character types must be made. Please re-confirm character selection: ")
        calcCharacters(passwordLength); //passwordLength is passed into function to retain user input, otherwise, returns undefined.
      } else {
          let reset = confirm("Reconfiguring parameters. Would you like to redefine the length of your password? \nSelect 'OK' to redefine password length and character set. \nSelect 'Cancel' to redefine character set only.") //gives choice of starting over from the character set input or length input
          if (reset) { //resets from beginning 
          generatePassword();
        } else { //resets from character preferences
          calcCharacters(passwordLength); //passwordLength is passed into function to retain user input, otherwise, returns undefined
        }
      }
  }

  //function generates the baseArray, which acts as the vertebre for our password. Values of baseArray[i] will be substituted with random characters from chosen character type arrays
  function generateArray(passwordLowercase, passwordUppercase, passwordNumeric, passwordSpecial, passwordLength) {


  const letters = (() => {
    const caps = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
    return caps.concat(caps.map(letter => letter.toLowerCase())); //going to level with you: ripped from Stack Overflow. Understood the principle. Cleaner than manually listing off an array of lower and uppercase letters. letters[0-25] Uppercase, letters[26-52] Lowercase.
  })();
  const numbers = ["1","2","3","4","5","6","7","8","9","0"] //Array of numerical values
  const special = [" ","!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","_","`","{","|","}","~"] //Array of special characters
  

  function genRandomInt(max) { //math function to calculate a random number from 0 to argument passed through (max)
    return Math.floor(Math.random() * max);
  }


  function genRanIntArrayRange(max, min) { //math function to calculate a random number between a minimum (min) and maxiumum value (max)
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


  var baseArray = []; //baseArray creates values from 0-3, proportionate to the passwordLength declared earlier in the function. 
  for (var i = 0; i < passwordLength; i++) {
    baseArray[i] = genRandomInt(4);
    while (!passwordLowercase && baseArray[i] === 0 || !passwordUppercase && baseArray[i] === 1 || !passwordNumeric && baseArray[i] === 2 || !passwordSpecial && baseArray[i] === 3) {
     //while loop ensures that the values of baseArray will correspond correctly to the chosen character sets defined by the user, through randomization. 
      baseArray[i] = genRandomInt(4);
  }
  }

//now that the baseArray has been generated, random values from the const arrays above (i.e. letters, numbers, special) will replace baseArray values at each position of baseArray[i])

  for (var i = 0; i < baseArray.length; i++) {
    if (baseArray[i] === 0) {
      baseArray[i] = letters[genRanIntArrayRange(51,26)]; //0 values in baseArray correspond to lowercase letters, stored in the second half of the letters array
    } else if (baseArray[i] === 1) {
      baseArray[i] = letters[genRanIntArrayRange(25,0)]; //1 values in baseArray correspond to uppercase letters, stored in the first half of the letters array
    } else if (baseArray[i] === 2) {
      baseArray[i] = numbers[genRandomInt(numbers.length)]; //2 values in baseArray correspond to numerical values, stored in the numbers array
    } else if (baseArray[i] === 3) {
      baseArray[i] = special[genRandomInt(special.length)]; //3 values in baseArray correspond to special characters, stored in the special array
    } else {
    }
  }


password = (baseArray.join("")) //password was moved to the bottom to make writePassword() more readable and promote better testing through console.log().
alert("Your password has been generated.") //alerts user that password has been generated
return password; //returns password so it can represent the /value of passwordText.
}
}