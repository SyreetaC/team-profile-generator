const fs = require("fs");
const path = require("path");

const writeToFile = (html) => {
  try {
    const filePath = path.join(__dirname, "../../dist/team.html");

    fs.writeFileSync(filePath, html);
    console.log("HTML created!");
  } catch (err) {
    console.log(err);
  }
};

module.exports = writeToFile;
