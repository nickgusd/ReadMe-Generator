// function to generate markdown for README
const fs = require("fs");


function generateMarkdown(data) {
  fs.appendFile("NewReadME.md", `## User Name \n${data}`, function(err) {
  
    if (err) {
      return console.log(err);
    }

    console.log(`${data}`);
    

  });
};
//   return `# ${data.title}

// `;
 

module.exports = generateMarkdown;
