// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input

const questions = [];


    
// TODO: Create a function to write README file
function writeToFile(fileName,data){
    console.log(fileName,data)
    fs.writeFile(path.join(fileName),data,(err)=>{
        err?console.error(err):console.log("README Generated")
    })
}
    
// TODO: Create a function to initialize app
function init() {
    inquirer
       .prompt([
    {
        type: 'input',
        name: 'title',
        message: 'Please title your project?',
    
    
    },
    {
        type: `input`,
        name: `description`,
        message: `please describe the purpose and functionality of this project`,
    },
    {
        type: `input`,
        name: `usage`,
        message: `why did you build this project`,
    },
    
    
    {
        type:`input`,
        name:`instalation`,
        message:`What are the steps required to install this project?`,
    },
    {
        type: `input`,
        name: `problem`,
        message: `what problem does it solve?`,

    }, 


    {
        type: `input`,
        name: `test`,
        message: `Are there any testing application in the project?`,

    },
    {
        type: `input`,
        name: `email`,
        message: `Enter your Email`
    },
    {
        type: `input`,
        name: `contributors`,
        message: `list all collaborators and link to their gitHub profile`,
    },
    {
        type: `list`,
        name: `license`,
        message: `what license did you use?`,
        choices:["MIT","BSD 3.0","APACHE 2.0","NONE"]
    },
    {
        type: `input`,
        name: `github`,
        message: `add your github so users can ask questions`,

    },
])
.then((data) => {
    
    console.log(data);
    writeToFile(`README.md`,generateMarkdown({...data}))
})
}

// Function call to initialize app
init();
