const generateManager = require("./generateManager");
const generateEngineer = require("./generateEngineer");
const generateIntern = require("./generateIntern");

const generateHTML = (employees) => {
  const generateCard = (employee) => {
    if (employee.getJobRole() === "Manager") {
      return generateManager(employee);
    }

    if (employee.getJobRole() === "Engineer") {
      return generateEngineer(employee);
    }

    if (employee.getJobRole() === "Intern") {
      return generateIntern(employee);
    }
  };

  const employeesMarkup = employees.map(generateCard).join("\n");

  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <!-- Required meta tags -->
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <!-- Bootstrap CSS -->
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
          crossorigin="anonymous"
        />

        <style>
          .jumbotron {
            padding: 2rem 1rem;
            margin-bottom: 2rem;
            background-color: #e9ecef;
            border-radius: 0.3rem;
          }
        </style>

        <title>Team Profile</title>
      </head>
      <body>
        <div class="jumbotron text-center">
          <h1 class="display-4">Team Profile</h1>
          <p class="lead">List of all employees</p>
          <hr class="my-4" />
        </div>

        <div class="d-flex container justify-content-center flex-wrap">
          ${employeesMarkup}
        </div>

        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
          crossorigin="anonymous"
        ></script>

        <script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
          integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js"
          integrity="sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT"
          crossorigin="anonymous"
        ></script>
      </body>
    </html>`;
};

module.exports = generateHTML;
