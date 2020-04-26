const fs = require("fs");
const inquirer = require("inquirer");
const connector = require("./utils/api.js");
const markDown = require("./utils/generateMarkdown.js");


const questions = [
        {
            type: "input",
            name: "username",
            message: "What is your github username?"
        },

        {
            type: "input",
            name: "email",
            message: "What is your email address?"
        },

        {
            type: "input",
            name: "URL",
            message: "What is the URL to your project?"
        },

        {
            type: "input",
            name: "projectName",
            message: "What is the name of your project?"
        },

        {
            type: "input",
            name: "description",
            message: "Please provide a short description of your project:"
        },

        {
            type: "list",
            name: "license",
            message: "What kind of license will be needed to use this project?",
            choices:["MIT", "Apachi2.0", "GPL 3.0", "ESD3", "None"]
        },

        {
            type: "input",
            name: "dependencies",
            message: "What command should be run to install dependencies?"
        },

        {
            type: "input",
            name: "tests",
            message: "What command should be run to run tests?"
        },

        {
            type: "input",
            name: "usage",
            message: "What does your user need to know about using this repo?"
        },

        {
            type: "input",
            name: "contributing",
            message: "What does your user need to know to be able to contribute to this repo?"
        },
    ];

function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)
}

function init() {
inquirer.prompt(questions).then(userResponses => {
    
    connector.getInfo(userResponses.username).then(function(data){
        writeToFile("readme.md", markDown(userResponses))
        console.log("Successfully created file")
    });
})
}

init();
