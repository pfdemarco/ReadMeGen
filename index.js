const inq = require("inquirer");
const fileSys = require("fs");

const makeReadME = (cmdLineVals) =>
//make a standard readme file amount of header / titles
//PIC how do I handle trhis better?
//para just stick the text in there

//if license = gnu then make license.txt with that in it
//else if license = mit then make license.txt with that in it
//else if license = community then make license.txt with that in it
//you can do \n for new lines
`
# ${cmdLineVals.title}

### ![License](${licBadge})

## Description
### ${cmdLineVals.description}

## Table of Contents

## * [Installation](#Installation)

## * [Usage](#Usage)

## * [License](#License)

## * [Contributors](#Contributors)

## * [Testing](#Tests)

## * [Technology's Used](#Technology)

# Installation

  ${cmdLineVals.install}

# Usage

   ${cmdLineVals.usage}

# License

   ${cmdLineVals.license}
 
   [${cmdLineVals.license}](${license})

# Contributors

   ${cmdLineVals.contributors}

# Tests

   ${cmdLineVals.test}

# Technology

   ${cmdLineVals.tech}

## Questions
* [GitHub](${cmdLineVals.github}.github.io)
* [Email](${cmdLineVals.email})
`;

//an array of prompts in this sequence. I dont get how I would keep going or make 3,4,5,6 
inq
  .prompt([
    {
      type: 'input',
      name: 'title',
      message:"What is the title for this readme?",
      validate: function(title){
        if (title === null || title === ""){
          return "Please enter a title";
        }
          return true;
      }
    },
    {
      type: 'input',
      name: 'description',
      message:"Enter the description",
      validate: function(description){
        if (description === null || description === ""){
          return "Please enter a description";
        }
          return true;
      }
    },
    {
      type: 'input',
      name: 'install',
      message:"Enter installation information",
      validate: function(install){
        if (install === null || install === ""){
          return "Please enter install info";
        }
          return true;
      }
    },
    {
      type: 'input',
      name: 'usage',
      message:"Enter usage information",
      validate: function(usage){
        if (usage === null || usage === ""){
          return "Please enter usage information";
        }
          return true;
      }
    },
    {
      type: 'input',
      name: 'contributors',
      message:"Enter contributors that you used",
      validate: function(contributors){
        if (contributors === null || contributors === ""){
          return "Enter contributors that you used";
        }
          return true;
      }
    },
    {
      type: 'input',
      name: 'test',
      message:"Enter testing requirements",
      validate: function(test){
        if (test === null || test === ""){
          return "Enter testing info";
        }
          return true;
      }
    },
    {
      type: 'list',
      name: 'license',
      message:"Select a license from the list below",
      choices:['Apache License 2.0', 'GNU General Public License', 'MIT License', 'BSD 2-Clause Simplified License', 'BSD 3-Clause New / Revised License', 'Boost Software License 1.0', 'Create Commons Zero v1.0 Universal', 'Eclipse Public License', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public LIcense v2.1', 'Mozilla Public License 2.0', 'The Unlicense'],
      validate: function(license){
        if (license === null || license === ""){
          return "Select a license from the list below";
        }
          return true;
      }
    },
    {
      type: 'input',
      name: 'github',
      message:"Enter GitHUb username",
      validate: function(github){
        if (github === null || github === ""){
          return "Enter github username info";
        }
          return true;
      }
    },
    {
      type: 'input',
      name: 'email',
      message:"Enter email username",
      validate: function(email){
        if (email === null || email === ""){
          return "Enter email username info";
        }
          return true;
      }
    },
  ])

  .then((cmdLineVals) => {
    
    switch (`${cmdLineVals.license}`) {
      case 'Apache License 2.0':
          licBadge = "https://img.shields.io/badge/License-Apache%202.0-green.svg"
          license = "https://opensource.org/licenses/Apache-2.0"
          break;
      case 'GNU General Public License':
          licBadge = "https://img.shields.io/badge/License-GPLv3-blue.svg"
          license = "https://www.gnu.org/licenses/gpl-3.0"
      case "MIT License": 
          licBadge = "https://img.shields.io/badge/License-MIT-brightgreen.svg"
          license = "https://opensource.org/licenses/MIT"
          break;
      case "BSD 2-Clause Simplified License":
          licBadge = "https://img.shields.io/badge/License-BSD%202--Clause-orange.svg"
          license = "https://opensource.org/licenses/BSD-2-Clause"
          break;
      case "BSD 3-Clause New / Revised License":
          licBadge = "https://img.shields.io/badge/License-BSD%203--Clause-blue.svg"
          license = "https://opensource.org/licenses/BSD-3-Clause"
          break;
      case "Boost Software License 1.0":
          licBadge = "https://img.shields.io/badge/License-Boost%201.0-lightblue.svg"
          license = "https://www.boost.org/LICENSE_1_0.txt"
          break;
      case "Create Commons Zero v1.0 Universal":
          licBadge = "https://licensebuttons.net/l/zero/1.0/80x15.png"
          license = "http://creativecommons.org/publicdomain/zero/1.0/"
          break;
      case "Eclipse Public License":
          licBadge = "https://img.shields.io/badge/License-EPL%201.0-red.svg"
          license = "https://opensource.org/licenses/EPL-1.0"
          break;
      case "GNU Affero General Public License v3.0":
          licBadge = "https://img.shields.io/badge/License-GPLv3-blue.svg"
          license = "https://www.gnu.org/licenses/lgpl-3.0"
          break;
      case "GNU General Public License v2.0":
          licBadge = "https://img.shields.io/badge/License-GPL%20v2-blue.svg"
          license = "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html"
          break;
      case "GNU Lesser General Public LIcense v2.1":
          licBadge = "https://img.shields.io/badge/License-GPL%20v2-blue.svg"
          license = "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html"
          break;
      case "Mozilla Public License 2.0":
          licBadge = "https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg"
          license = "https://opensource.org/licenses/MPL-2.0"
          break;
      case "The Unlicense":
          licBadge = "https://img.shields.io/badge/license-Unlicense-blue.svg"
          license = "http://unlicense.org/"
          break;

          default: "no license badge available"
  }

  const htmlPageContent = makeReadME(cmdLineVals);

    fileSys.writeFile('README.md', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created ReadME.md!')
    );
  });
