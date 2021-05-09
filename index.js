const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./src/utils/generateHTML");

const init = () => {
  console.log("started");
  generateHTML();
};

init();
