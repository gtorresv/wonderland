// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of the project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'What is the description for your project?',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What is the installation process?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'What would be the usage for the project?',
        name: 'usage'
    },
    {
        type: 'list',
        message: 'Choose a license.',
        name: 'license',
        choices: ['MIT', 'GPL', 'BSD', 'Apache', 'None']
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        //console.log(data)
        const markdown = generateMarkdown(data);
        console.log(markdown);
        fs.writeFileSync('./generatedREADME.md', markdown);
    })
}

// Function call to initialize app
init();
