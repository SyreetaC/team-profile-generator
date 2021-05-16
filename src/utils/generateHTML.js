const fs = require("fs");
const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");
const Engineer = require("../lib/Engineer");
const generateManager = require("./generateManager");
const generateEngineer = require("./generateEngineer");

const generateHTML = (manager, team) => {
  generateManager(Manager);
  generateEngineer(team);
  writeToFile(html);
};

const writeToFile = (html) => {
  try {
    fs.writeFileSync("../team.html", html);
    console.log("HTML created!");
  } catch (err) {
    console.log(err);
  }
};

module.exports = generateHTML;
