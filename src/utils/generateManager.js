const manager = require("../lib/Manager");
const employee = require("../lib/Employee");

const generateManager = (team) => {
  console.log(team);
  team.map(generateManager);

  //map through team array
  //if statements based on getJobRole
  //array.join of results of if statements
  //create functions for different employee cards
};

module.exports = generateManager;
