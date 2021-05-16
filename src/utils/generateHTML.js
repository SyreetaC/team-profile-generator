const fs = require("fs");
const generateManager = require("./generateManager");
const generateEngineer = require("./generateEngineer");
const generateIntern = require("./generateIntern");

const generateHTML = () => {
  generateManager();
  generateEngineer();
  generateIntern();
  writeToFile();

  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>My Team</title>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0"
        crossorigin="anonymous"
      />
    </head>
    <body>
      <header>
        <nav class="navbar navbar-dark bg-danger p-5">
          <div class="container-fluid d-flex justify-content-center">
            <span class="navbar-brand mb-0 h1">My Team</span>
          </div>
        </nav>
      </header>
      <main class="d-flex justify-content-center container-fluid">
        <div class="row row-cols-1 row-cols-md-3 g-4">
         ${managercard}
  
          <div class="col">
          ${employeecard}
          </div>
  
          <div class="col">
            ${employeecard}
          </div>
        </div>
      </main>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-p34f1UUtsS3wqzfto5wAAmdvj+osOnFyQFpp4Ua3gs/ZVWx6oOypYoCJhGGScy+8"
        crossorigin="anonymous"
      ></script>
    </body>
  </html>
  `;
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
