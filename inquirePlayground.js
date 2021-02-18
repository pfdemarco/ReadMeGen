const inquire = require("inquirer");
const fs = require("fs");
function mockAsyncPromise() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
        return resolve({data: "some date from an api"});
        return reject(`this promise failed! ${exp.message}`);
    }, 250);
  })
}



function writeTemplateToFile(object) {
  // write to file
  template = `USERNAME: ${object.username} \nTITLE: ${object.title}`
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log(template);
      return resolve();
    }, 250);
  })
}

function createLicenseFileSync() {
  // fs.writeFileSync("location", "daata")
  console.log("CREATED LICENSE FILE!");
}

function initApp() {
  inquire.prompt([
    {
      type: "input",
      name: "username",
      message: "Enter github username"
    },
    {
      type: "input",
      name: "title",
      message: "Enter a title"
    },
    {
      type: "input",
      name: "year",
      message: "enter a 4 digit year: ",
      validate: function(userInput) {
        const isValid = /^\d{4}/.test(userInput);
        if (isValid) {
          return true;
        }
        return "You must enter a 4 digit year!!!";
      }
    }
  ])
  .then(function(response) {
    // remember to return a promise if you want to chain another .then()
    return writeTemplateToFile(response);
  })
  .then(() => {
    createLicenseFileSync();
    return Promise.resolve();
  })
  .then(() => console.log("THIRD THEN!"))
  .catch((message) => console.log(message));
}

initApp();