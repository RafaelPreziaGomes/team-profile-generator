import inquirer from "inquirer";
import fs from "fs";

import generateTeamPage from "./src/page-template.js";

import Manager from "./lib/Manager.js";

import Engineer from "./lib/Engineer.js";

import Intern from "./lib/Intern.js";

import http from "http";
//  create a function which promps the user to log in or create an account
const loginPrompt = () => {
  return inquirer.prompt([
    {
      type: "list",
      name: "login",
      message: "Would you like to create an account?",
      choices: [ "Create an account"]
    },
  ]);
};

//  if user selects to log in, prompt user for username and password
const loginPrompt2 = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "username",
      message: "What is your username?",
    },
    {
      type: "password",
      name: "password",
      message: "What is your password?",
    },
  ]);
};

//  if user selects to create an account, prompt user for username and password
const loginPrompt3 = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "username",
      message: "What is your username?",
    },

    {
      type: "password",
      name: "password",
      message: "What is your password?",
    },
    {
      type: "password",
      name: "password2",
      message: "Confirm your password",
    },
  ]);
  // save this username to a variable
  const username = answers.username;

  // save this password to a variable
  const password = answers.password;
};

//  create a function to create a file with the user's username and password
const createFile = (username, password) => {
  fs.writeFile(
    `./users/${username}.json`,
    `{
      "username":"${username}",
      "password": "${password}",
      "file-location": "dist/index.html"
    } `,
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
};

//  create a function that validates if user's username and password are correct
const validateUser = (username, password) => {
  // check if there is an error reading the data if so console.log(err);
  fs.readFile(`./users/${username}.json`, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      // parse the data into a JSON object
      const userData = JSON.parse(data);
      // check if the username and password match the userData
      if (userData.username === username && userData.password === password) {
        // if they match, console.log("Welcome!");
        console.log("Welcome!");
      } else {
        // if they don't match, console.log("Invalid username or password");
        console.log("Invalid username or password");
      }
    }
  }
  );
}

    

//  load user website
const loadWebsite = () => {
  return inquirer.prompt([
    {
      type: "list",
      name: "load",
      message: "Would you like to load your website?",
      choices: ["Yes", "No"],
    },
  ]);
};
// if user selects to load website
// load user website
const loadWebsite2 = () => {
  const userWebsite = fs.readFile(`./users/${username}.json`, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const user = JSON.parse(data);
      return user.website;
    }
  });
};
//  respond with the json data of the user's website
const loadWebsite3 = () => {
  return userWebsite;
};
// if user selects to not load website
// respond with a message that the user has been logged out
const loadWebsite4 = () => {
  return "You have been logged out";
};

//  if the user decides to create a new account
//

const team = [];

const getManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter manager name (required):",
        validate: (managerInput) => {
          if (managerInput) {
            return true;
          } else {
            console.log("Please enter the manager's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Enter manager ID (required):",
        validate: (managerInput) => {
          if (managerInput) {
            return true;
          } else {
            console.log("Please enter the manager's ID!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Enter manager email (required):",
        validate: (managerInput) => {
          if (managerInput) {
            return true;
          } else {
            console.log("Please enter the manager's email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "office",
        message: "Enter manager office number (required):",
        validate: (managerInput) => {
          if (managerInput) {
            return true;
          } else {
            console.log("Please enter the manager's office number!");
            return false;
          }
        },
      },
    ])
    .then((data) => {
      //console.log(data);
      const manager = new Manager(data.name, data.id, data.email, data.office);
      team.push(manager);
      userMenu();
    });
};

const userMenu = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "menu",
        message: "What would you like to do?",
        choices: ["add an Engineer", "add an Intern", "finish building team"],
      },
    ])
    .then((menuSelection) => {
      switch (menuSelection.menu) {
        case "add an Engineer":
          console.log("Add Engineer");
          getEngineer();
          break;

        case "add an Intern":
          console.log("Add Intern");
          getIntern();
          break;

        case "finish building team":
          console.log("Team Completed");
          buildTeam();
          break;
      }
    });
};

const getEngineer = () => {
  console.log(`
*******************
* Adding Engineer *
*******************
    `);

  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Engineer's name (required):",
        validate: (engineerInput) => {
          if (engineerInput) {
            return true;
          } else {
            console.log("Please enter the engineer's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Engineer's ID (required):",
        validate: (engineerInput) => {
          if (engineerInput) {
            return true;
          } else {
            console.log("Please enter the engineer's ID!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Engineer's email (required):",
        validate: (engineerInput) => {
          if (engineerInput) {
            return true;
          } else {
            console.log("Please enter the engineer's email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "githubName",
        message: "Engineer's GitHub Username (required):",
        validate: (engineerInput) => {
          if (engineerInput) {
            return true;
          } else {
            console.log("Please enter the engineer's GitHub Username!");
            return false;
          }
        },
      },
    ])
    .then((data) => {
      //console.log(data);
      const engineer = new Engineer(
        data.name,
        data.id,
        data.email,
        data.githubName
      );
      team.push(engineer);
      userMenu();
    });
};

const getIntern = () => {
  console.log(`
*******************
*  Adding Intern  *
*******************
    `);

  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Intern's name (required):",
        validate: (internInput) => {
          if (internInput) {
            return true;
          } else {
            console.log("Please enter the intern's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Intern's ID (required):",
        validate: (internInput) => {
          if (internInput) {
            return true;
          } else {
            console.log("Please enter the intern's ID!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Intern's email (required):",
        validate: (internInput) => {
          if (internInput) {
            return true;
          } else {
            console.log("Please enter the intern's email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "Intern's school (required):",
        validate: (internInput) => {
          if (internInput) {
            return true;
          } else {
            console.log("Please enter the intern's school!");
            return false;
          }
        },
      },
    ])
    .then((data) => {
      //console.log(data);
      const intern = new Intern(data.name, data.id, data.email, data.school);
      team.push(intern);
      userMenu();
    });
};

const buildTeam = () => {
  console.log(`
**********************
* Building Team Page *
**********************
    `);

  fs.writeFile("dist/index.html", generateTeamPage(team), (err) => {
    if (err) throw err;
    console.log("Team page created successfully");

    //  create a http server to serve file form dist folder
    const server = http.createServer((req, res) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(fs.readFileSync("dist/index.html"));
    });
    server.listen(3000, () => {
      console.log(`Server is listening on port 3000`);
    });
  });
};

function init() {
  loginPrompt().then((answers) => {
    if (answers.login == "Log in") {
      loginPrompt2().then((answers) => {
        if ((answers.username, answers.password)) {
          if (validateUser(answers.username, answers.password) === true) {
            console.log("Welcome back!");
            loadWebsite().then(loadWebsite2().then(loadWebsite3()));
          }
          if (validateUser(answers.username, answers.password) === false)
            
            console.log("Invalid username or password");
          }
      }
  )} else {
  loginPrompt3().then((answers) => {

      createFile(answers.username, answers.password);
      getManager();
    })
  }})
}


init();
