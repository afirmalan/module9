// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require ('fs')
// TODO: Create an array of questions for user input
const questions = [

    {
        type: "input",
        name: "title",
        message: "What is your project title?"
    },
    {
        type: "input",
        name: "description",
        message: "What is your project description?"
    },
    {
        type: "input",
        name: "installation",
        message: "how do you install it?"
    },
    {
        type: "input",
        name: "usage",
        message: "How do you use it?"
    },
    {
        type: "list",
        name: "license",
        message: "Choose the following licenses.",
        choices: ["MIT", "IBM", "Apache", "Other"]

    },
    {
        type: "multiselect",
        name: "tableOfContents",
        message:"What's in the table of contents?",
        choices: [{Title:'Description'},{Title:'Installation'},{Title:'License'},{Title:'Usage'}],
        max: 4,

    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions)
        .then(data => {
            console.log(data)
            fs.writeFileSync("./output/README.md",generateMarkdown(data))
        })
}

// Function call to initialize app
init();
