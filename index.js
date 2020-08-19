const fs = require("fs");

const inquirer = require("inquirer");



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
    name: "url",
    message: "What is URL to your project?"
},
{ 
    type: "input",
    name: "projectname",
    message: "what is your project's name?"

},

{
    type: "input",
    name: "description",
    message: "Please write a short description of your project"
},
{
    type: "checkbox",
    message: "What kind of license should your project have?",
    name: "license",
    choices: [
      "MIT", 
      "Apache2.0",
      "ISC", 
      "BSD3",
      "GPL3.0", 
      "none"
    ]
},
{
    type: "input",
    name: "dependencies",
    message: "what command should be run to install dependencies?"

},
{
    type: "input",
    name: "tests",
    message: "What command should be run to run tests?"

},
{
    type: "input",
    name: "repo",
    message: "what does the user need to know about using the repo?"
},
{
    type: "input",
    name: "contribution",
    message: "what does the user need to know about contributing to the repo?"

}
 
])

.then(function(data) {
    
  
    fs.appendFile("ReadMe2.md", `# ${data.projectname}\n ![Github license](https://img.shields.io/badge/license-${data.license}-blue.svg)         
    \n## Description:\n\n${data.description}
    \n## Table of Contents:
    \n\n* [Installation](#installation)
    \n\n* [Usage](#usage)
    \n\n* [License](#license)
    \n\n* [Contributing](#contributing)
    \n\n* [Tests](#tests)
    \n\n* [Questions](#questions)
    \n## Installation:\n\nTo install necessary dependencies, run the following command:\n\n${data.dependencies}
    \n## Usage:\n\n${data.repo}
    \n## License:\n\n This project is licensed under the ${data.license} license
    \n## Contributing:\n\n${data.contribution}
    \n## Tests:\n\nTo run tests, run the following command:\n\n${data.tests}
    \n## Questions\n\nUsername: ${data.username}\n\nhttps://github.com/${data.username}\n\nIf you have any additional questions please reach out to me at ${data.email} 
    `, function(err) {
  
      if (err) {
        return console.log(err);
      }
  
      console.log(`${data.username}`)
      
 
    });
  });


