const fs = require("fs");
const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

const generateEngineer = (team) => {
  const engineer = team.map(generateEngineerCard);
  if (engineer === Engineer) {
    console.log("there is an engineer!");
  }
  generateEngineerCard(engineer);
};

const generateEngineerCard = (engineer) => {};

//map through team array
//if statements based on getJobRole
//array.join of results of if statements
//create functions for different employee cards

module.exports = generateEngineer;
