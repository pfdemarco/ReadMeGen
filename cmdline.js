const inq = require("inquirer");
const fileSys = require("fs");

const makeHTMLPage = (cmdLineVals) =>
//make a standard readme file amount of header / titles
//PIC how do I handle trhis better?
//para just stick the text in there

//if license = gnu then make license.txt with that in it
//else if license = mit then make license.txt with that in it
//else if license = community then make license.txt with that in it
//you can do \n for new lines
`##${cmdLineVals.header}

![pic](${cmdLineVals.pic})

${cmdLineVals.para}

${cmdLineVals.license}
`;

//an array of prompts in this sequence. I dont get how I would keep going or make 3,4,5,6 
inq
  .prompt([
    {
      type: 'input',
      name: 'header',
      message:"What is the header for this section?",
    },
    {
      type: 'input',
      name: 'pic',
      message:"Enter URL for image here",
    },
    {
      type: 'input',
      name: 'para',
      message:"The body of this section",
    },
    {
      type: 'input',
      name: 'license',
      message:"Do you have a license you want at the end?",
    },
  ])


  .then((cmdLineVals) => {
    const htmlPageContent = makeHTMLPage(cmdLineVals);

    fileSys.writeFile('ReadME.md', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created ReadME.md!')
    );
  });
