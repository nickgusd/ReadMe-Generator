const fs = require("fs");
// const axios = require("axios");
const inquirer = require("inquirer");

var generate = require("./generateMarkdown");



inquirer.prompt([

{
    type: "input",
    name: "username",
    message: "What is your Gitub username?"
},

{
    type: "input",
    name: "email",
    message: "what is your email?"
},
{ 
    type: "input",
    name: "Project name",
    message: "what is your project's name?"

},

{
    type: "input",
    name: "Project description",
    message: "Please write a short description of your project"
},
{
    type: "checkbox",
    message: "What kind of license should your project have?",
    name: "stack",
    choices: [
      "MIT", 
      "Apache 2.0", 
      "BSD 3", 
      "none"
    ]
},
{
    type: "input",
    name: "Dependency-Command",
    message: "what command should be run to install dependencies?"

},
{
    type: "input",
    name: "Test-command",
    message: "What command should be run to run tests?"

},
{
    type: "input",
    name: "Repo",
    message: "what does the user need to know about using the repo?"
},
{
    type: "input",
    name: "Contribution",
    message: "what does the user need to know about contributing to the repo?"

}
 
])

.then(function(data) {

    // var filename = data.name.toLowerCase().split(' ').join('') + ".json";

  
    fs.appendFile("NewReadME.md", JSON.stringify(data, null, '\n'), function(err) {
  
      if (err) {
        return console.log(err);
      }
  
      console.log("Success!");
  
    });
  });






// function to write README file
function writeToFile(fileName, data) {


}

// function to initialize program
function init() {
    // console.log("node index.js")
}

// function call to initialize program
init();
