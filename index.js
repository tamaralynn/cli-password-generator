var inquirer = require('inquirer');
//var copy = require('copy-to-clipboard')


function askForRequirements(){
 inquirer
  .prompt([
    /* Pass your questions in here */  
    {
        type: 'number',
        message: 'How long would you like your password (Choose a number between 8 and 128)?',
        name: 'number',
    }, 
   { type: 'confirm',
    message: 'Would you like to include uppercase letters?',
    name: 'wantUppercase'
},
{ type: 'confirm',
message: 'Would you like to include lowercase letters?',
name: 'wantLowercase',
},
{ type: 'confirm',
message: 'Would you like to include numbers?',
name: 'wantNumbers',
},
{ type: 'confirm',
message: 'Would you like to include uppercase symbols?',
name: 'wantSymbols',
},



])
  .then(answers => {
    // Use user feedback for... whatever!!
    console.log(answers)
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  })};

 
/* copy('Text');
 
// Copy with options
copy('Text', {
  debug: true,
  message: 'Press #{key} to copy',
}); */

askForRequirements();