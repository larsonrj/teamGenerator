// Set up all required modules for the script
const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const team = [];
var id = 1;

// Create function to ask the user to create a team
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

// Initialize the script when node index.js is input
startTeam();

// If the user decides to add another team member they will be asked for either an engineer or intern
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

// The manager is the first member of the team created
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
      if (response.new) {
        id += 1;
        teamInput();
      } else {
        createHTML();
      }
    });
}

// This function prompts the user for information on the engineer
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
      if (response.new) {
        id += 1;
        teamInput();
      } else {
        createHTML();
      }
    });
}

// This function prompts the user for information on the intern
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
      if (response.new) {
        id += 1;
        teamInput();
      } else {
        createHTML();
      }
    });
}

// This function creates the html from the user input
function createHTML() {
  const card = [];
  team.forEach((item) => {
    if (item.getRole() === "Manager") {
      text = `<div class="col-4">
          <div class="card">
            <div class="card-header bg-primary text-white">
              <h5 class="card-title mb-2">${item.name}</h5>
              <p class="card-subtitle mt-2 mb-2">${item.getRole()}</p>
            </div>
            <ul class="m-2 list-group"><li class="list-group-item">ID:  ${
              item.id
            }</li>
            <li class="list-group-item">Email:  <a href="mailto:${
              item.email
            }">${item.email}</a></li>
          <li class="list-group-item">Office Number:  ${
            item.officeNumber
          }</li></ul>
          </div>
        </div>`;
      card.push(text);
    }
    if (item.getRole() === "Engineer") {
      text = `<div class="col-4">
          <div class="card">
            <div class="card-header bg-primary text-white">
              <h5 class="card-title mb-2">${item.name}</h5>
              <p class="card-subtitle mt-2 mb-2">${item.getRole()}</p>
            </div>
            <ul class="m-2 list-group"><li class="list-group-item">ID:  ${
              item.id
            }</li>
            <li class="list-group-item">Email:  <a href="mailto:${
              item.email
            }">${item.email}</a></li>
          <li class="list-group-item">Github: <a href="https://github.com/${
            item.github
          }">${item.github}</a></li></ul>
          </div>
        </div>`;
      card.push(text);
    }
    if (item.getRole() === "Intern") {
      text = `<div class="col-4">
          <div class="card">
            <div class="card-header bg-primary text-white">
              <h5 class="card-title mb-2">${item.name}</h5>
              <p class="card-subtitle mt-2 mb-2">${item.getRole()}</p>
            </div>
            <ul class="m-2 list-group"><li class="list-group-item">ID:  ${
              item.id
            }</li>
            <li class="list-group-item">Email:  <a href="mailto:${
              item.email
            }">${item.email}</a></li>
          <li class="list-group-item">School:  ${item.school}</li></ul>
          </div>
        </div>`;
      card.push(text);
    }
  });
  cardText = card.join("");
  console.log(card);
  htmlText = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Team Roster</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <header class="bg-success text-white text-center p-3 fs-2">
      Team Roster
    </header>
    <div class="container mt-4">
    <div class="row justify-content-center">
${cardText}
      </div>
    </div>
</div>
  </body>
</html>`;
  fs.writeFile("./render/index.html", htmlText, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}
