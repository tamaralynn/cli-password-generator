const inquirer = require('inquirer');

let newPass="";
//Set all available options for password in JSON
const allOptions = {
    numbers: "0123456789",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    symbols: "!#$%&'()*+,-./:;<=>?@[\\\"]^_`{|}~",
    };

function askForRequirements() {
 inquirer
  .prompt([
    /* Pass your questions in here */  
    {
        type: 'number',
        message: 'How long would you like your password (Choose a number between 8 and 128)?',
        name: 'length',
    }, 
    { 
        type: 'checkbox',
        message: 'Which type of characters would you like to include in your password?',
        name: 'characters',
        choices: [
          {
            name: 'Uppercase Letters'
          },
          {
            name: 'Lowercase Letters'
          },
          {
            name: 'Numbers'
          },
          {
            name: 'Special Characters'
          },

    ]
    }

]).then(function(response) {
    // Use user feedback for... whatever!!
    const passwordOptions = new GenPassObj(response.length, response.characters);

    let newArr = passwordOptions.generatePassword();
    for (i=1;i<=(response.length);i++) {
        let rand = newArr[Math.floor(Math.random()*newArr.length)];
        newPass = newPass.concat(rand);
    }
    console.log("Your new password: ", newPass);
});
}


 
/* copy('Text');
 
// Copy with options
copy('Text', {
  debug: true,
  message: 'Press #{key} to copy',
}); */

class GenPassObj {
    constructor(length, characters) {
        this.length = length;
        this.characters = characters;
    }

    generatePassword() {

        let passArr = [];

        if (this.length > 8 && this.length < 128) {
            if ((this.characters).includes('Numbers')) {
                passArr = [...passArr, ...allOptions.numbers];
            }
            if ((this.characters).includes('Uppercase Letters')) {
                passArr = [...passArr, ...allOptions.uppercase];
            }
            if ((this.characters).includes('Lowercase Letters')) {
                passArr = [...passArr, ...allOptions.lowercase];
            }
            if ((this.characters).includes('Special Characters')) {
                passArr = [...passArr, ...allOPtions.symbols];
        }
        return passArr ;
        }

         else {
            console.log("Please follow directions and pick a length between 8 and 128, tyvm!");
        }
    }
}

askForRequirements();
