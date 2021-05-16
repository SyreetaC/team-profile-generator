const fs = require("fs");
const generateManager = require("./generateManager");
const generateEngineer = require("./generateEngineer");
const generateIntern = require("./generateIntern");

const generateHTML = (team) => {
  generateManager(team);
  generateEngineer(team);
  generateIntern(team);
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
