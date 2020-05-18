var inquirer = require('inquirer');
var copy = require('copy-to-clipboard')

inquirer
  .prompt([
    /* Pass your questions in here */
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
  });

 
copy('Text');
 
// Copy with options
copy('Text', {
  debug: true,
  message: 'Press #{key} to copy',
});