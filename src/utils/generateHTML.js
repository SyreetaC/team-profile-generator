const fs = require("fs");
const manager = require("../lib/Manager");
const employee = require("../lib/Employee");
const intern = require("../lib/Intern");
const engineer = require("../lib/Engineer");
const generateManager = require("./generateManager");
const generateEngineer = require("./generateEngineer");

const generateHTML = (team) => {
  generateManager(team);
  generateEngineer(team);
  //map through team array
  //if statements based on getJobRole
  //array.join of results of if statements
  //create functions for different employee cards
};

module.exports = generateHTML;
