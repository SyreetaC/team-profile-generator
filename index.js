const inquirer = require("inquirer");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const fs = require("fs");
const generateHTML = require("./src/utils/generateHTML");

// Returns a new instance of the manager class with the prompted managerQuestions
const generateManager = async () => {
  const managerQuestions = [
    {
      type: "input",
      name: "managerName",
      message: "Enter the manager's name:",
    },
    {
      type: "input",
      name: "managerId",
      message: "Enter the manager's employee ID:",
    },
    {
      type: "input",
      name: "managerEmail",
      message: "Enter the manager's e-mail address:",
    },
    {
      type: "input",
      name: "managerOfficeNumber",
      message: "Enter the manager's office number:",
    },
  ];

  const managerObject = await inquirer.prompt(managerQuestions);

  return new Manager(
    managerObject.managerName,
    managerObject.managerId,
    managerObject.managerEmail,
    managerObject.managerOfficeNumber
  );
};

const init = () => {
  console.log("started");
  generateManager();
  generateHTML();
};

init();
