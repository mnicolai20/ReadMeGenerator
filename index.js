const fs = require("fs");
const inquirer = require("inquirer");
const markDown = require("./utils/generateMarkdown.js");

const questions = [

];

function writeToFile(fileName, data) {
}

function init() {
inquirer.prompt(questions).then(userResponses => {
    console.log("searching...")
})

}

init();
