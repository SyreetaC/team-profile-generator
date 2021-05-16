const inquirer = require("inquirer");
const Manager = require("./src/lib/Manager");
const Engineer = require("./src/lib/Engineer");
const Intern = require("./src/lib/Intern");
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
    engineerObject.engineerId,
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
    internObject.internId,
    internObject.internEmail,
    internObject.internSchool
  );
};

// function to create an employees array
const generateEmployees = async () => {
  const teamArray = [];
  const employeeChoiceQuestions = [
    {
      type: "list",
      message: "Select what other role you would like to add to your team:",
      choices: ["Engineer", "Intern", "None"],
      name: "employeeAnswer",
    },
  ];
  //repeat employee choices question, for as many employees as a user wants
  //finish and return object when none is replied
  //return an array of employees

  while (teamArray.length < 9) {
    const employeeChoice = await inquirer.prompt(employeeChoiceQuestions);
    switch (employeeChoice.employeeAnswer) {
      case "Engineer":
        const generatedEngineer = await generateEngineer();
        teamArray.push(generatedEngineer);
        break;
      case "Intern":
        const generatedIntern = await generateIntern();
        teamArray.push(generatedIntern);
        break;
      case "None":
      default:
        //multiple options that have the same result
        return teamArray;
    }
  }
  console.log("You have added the maximum number of employees.");
  return teamArray;
};

// starter function to generate a manager first, then create the employees, then use generated objects to create a HTML file
const init = async () => {
  const createdManager = await generateManager();
  const createdEmployees = await generateEmployees();
  const team = [createdManager, ...createdEmployees];
  generateHTML(team);
};

init();
