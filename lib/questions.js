// These questions will be used by the npm inquirer prompt

const questions = [
    {
        type:'list',
        name:'shape',
        message:'Please choose a shape',
        choices:['Square', 'Circle', 'Triangle']
    },
    {
        type:'input',
        name:'shapeColor',
        message:'Please enter the color you would like your shape to be. You may enter the name of the color or the hexadecimal number.'
    },
    {
        //Assisted by Xpert Learning Assistant on how to use validate to limit the user response to three characters
        type:'input',
        name:'text',
        message:'Please enter up to three characters to be displayed within your chosen shape.',
        validate: (shapeText) => {
            if (shapeText.length <= 3) {
                return true;
            } else {
                return console.log('You may only enter up to three characters, please try again.')
            }
        }
    },
    {
        type:'input',
        name:'textColor',
        message:'Please enter the color you would like your text to be. You may enter the name of the color or the hexadecimal number.'
    }
]

module.exports = questions;