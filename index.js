const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./lib/questions.js');
const createShape = require('./lib/createshape.js');

// Function to write the file
function createLogoFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log ('Generated logo.svg')
    );
};

// Function to initialize the app
function init() {
    inquirer.prompt(questions).then((response) => {
        const svgLogo = createShape(response);
        createLogoFile('./examples/logo.svg', svgLogo);
    });
}

// Calling the init function
init();