var inquirer = require('inquirer');
//var copy = require('copy-to-clipboard')

function askForRequirements(){
 inquirer
  .prompt([
    /* Pass your questions in here */  
    {
        type: 'number',
        message: 'How long would you like your password (Choose a number between 8 and 25)?',
        name: 'password',
    }, 


    { 
        type: 'checkbox',
        message: 'Which type of characters would you like to include in your password?',
        name: 'Character Types',
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
            name: 'Special Characters (@#$%)'
          },
       
    ]
    }
])
  .then(answers => {
    // Use user feedback for... whatever!!
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