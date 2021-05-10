const inquirer = require("inquirer");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const fs = require("fs"); //WHY DON'T I NEED THIS?
const generateHTML = require("./src/utils/generateHTML");

// generateManager function to create a new instance of manager
const generateManager = async () => {
  const managerQuestions = [
    {
      type: "input",
      message: "Enter the manager's name:",
      name: "managerName",
    },
    {
      type: "input",
      message: "Enter the manager employee ID:",
      name: "managerId",
    },
    {
      type: "input",
      message: "Enter the manager's email address:",
      name: "managerEmail",
    },
    {
      type: "input",
      message: "Enter the manager's office number:",
      name: "managerOfficeNumber",
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

// generateEngineer function to create a new instance of an engineer
const generateEngineer = async () => {
  const engineerQuestions = [
    {
      type: "input",
      message: "Enter the engineer's name:",
      name: "engineerName",
    },
    {
      type: "input",
      message: "Enter the engineer's employee ID:",
      name: "engineerId",
    },
    {
      type: "input",
      message: "Enter the engineer's e-mail address:",
      name: "engineerEmail",
    },
    {
      type: "input",
      message: "Enter the engineer's gitHub username:",
      name: "engineerGitHubUsername",
    },
  ];

  const engineerObject = await inquirer.prompt(engineerQuestions);
  return new Engineer(
    engineerObject.engineerName,
    engineerObject.engineerID,
    engineerObject.engineerEmail,
    engineerObject.engineerGitHubUsername
  );
};

// generateIntern function to create a new instance of an intern
const generateIntern = async () => {
  const internQuestions = [
    {
      type: "input",
      message: "Enter the intern's name:",
      name: "internName",
    },
    {
      type: "input",
      message: "Enter the intern's employee ID:",
      name: "internId",
    },
    {
      type: "input",
      message: "Enter the intern's e-mail address:",
      name: "internEmail",
    },
    {
      type: "input",
      message: "Enter the intern's school name:",
      name: "internSchool",
    },
  ];

  const internObject = await inquirer.prompt(internQuestions);
  return new Intern(
    internObject.internName,
    internObject.internID,
    internObject.internEmail,
    internObject.internSchool
  );
};

// starter function
const init = async () => {
  console.log("started");
  const createdManager = await generateManager();
  const createdEmployees = await generateEmployees();
  generateHTML(createdManager, createdEmployees);
};

init();
