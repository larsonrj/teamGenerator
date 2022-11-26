const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const team = [];
var id = 1;

function startTeam() {
  inquirer
    .prompt([
      {
        type: "confirm",
        name: "start",
        message: "Would you like to create a new team?",
      },
    ])
    .then((response) => {
      if (response.start) {
        createManager();
      } else {
        return;
      }
    });
}

startTeam();

function teamInput() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What type of employee are you adding?",
        name: "role",
        choices: ["Engineer", "Intern"],
      },
    ])
    .then((response) => {
      if (response.role === "Engineer") {
        createEngineer();
      } else if (response.role === "Intern") {
        createIntern();
      } else {
        return;
      }
    });
}

function createManager() {
  officeNumber = Math.floor(Math.random() * 99) + 1;
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the manager's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the manager's email address?",
        name: "email",
      },
      {
        type: "confirm",
        name: "new",
        message: "Would you like to add another team member?",
      },
    ])
    .then((response) => {
      officeNumber = Math.floor(Math.random() * 99) + 1;
      const manager = new Manager(
        response.name,
        id,
        response.email,
        officeNumber
      );
      team.push(manager);
      console.log(team);
      if (response.new) {
        id += 1;
        teamInput();
      } else {
        return;
      }
    });
}

function createEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the employee's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the employee's email",
        name: "email",
      },
      {
        type: "input",
        message: "What is the employee's github username?",
        name: "github",
      },
      {
        type: "confirm",
        name: "new",
        message: "Would you like to add another team member?",
      },
    ])
    .then((response) => {
      const engineer = new Engineer(
        response.name,
        id,
        response.email,
        response.github
      );
      team.push(engineer);
      console.log(team);
      if (response.new) {
        id += 1;
        teamInput();
      } else {
        return;
      }
    });
}

function createIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the intern's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the intern's email",
        name: "email",
      },
      {
        type: "input",
        message: "Where did the intern go to school?",
        name: "school",
      },
      {
        type: "confirm",
        name: "new",
        message: "Would you like to add another team member?",
      },
    ])
    .then((response) => {
      const intern = new Intern(
        response.name,
        id,
        response.email,
        response.school
      );
      team.push(intern);
      console.log(team);
      if (response.new) {
        id += 1;
        teamInput();
      } else {
        return;
      }
    });
}
