const fs = require("fs");
const manager = require("../lib/Manager");
const employee = require("../lib/Employee");
const intern = require("../lib/Intern");
const engineer = require("../lib/Engineer");

const generateHTML = (team) => {
  console.log(team);
  console.log("team created");
};

module.exports = generateHTML;
