// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Please provide a brief description of your project explaining the what, why, and how. What was the reason for creating your project and what does it solve?',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What is the installation process step-by-step?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Provide a set of instructions and examples of how to use your project.',
        name: 'usage'
    },
    {
        type: 'list',
        message: 'Choose a license.',
        name: 'license',
        choices: ['MIT', 'GPL', 'BSD', 'Apache', 'None']
    },
    {
        type: 'input',
        message: 'What are the contribution guidelines?',
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'What are the test instructions?',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username'
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email'
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
