const Engineer = require("../lib/Engineer");

//map through team array
//if statements based on getJobRole
//array.join of results of if statements
//create functions for different employee cards

const generateEngineer = (team) => {
  const engineer = team.map(generateEngineerCard);
  if (engineer === Engineer) {
    console.log("there is an engineer!");
  }
  generateEngineerCard(engineer);
};

const generateEngineerCard = (engineer) => {
  return ` <div class="col">
  <div class="card text-white bg-primary m-3" style="max-width: 18rem">
    <div class="card-header">
      <h5 class="card-title">${engineer.name}</h5>
      <h5 class="card-title">${engineer.getJobRole}</h5>
    </div>
    <div class="card">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${engineer.id}</li>
        <li class="list-group-item">
          E-mail:
          <a href="bob@engineer.com">${engineer.email}</a>
        </li>
        <li class="list-group-item">
          gitHub account:
          <a href="https://github.com/bob" , target="_blank"
            >${engineer.getGitHub}</a
          >
        </li>
      </ul>
    </div>
  </div>
</div>`;
};

//map through team array
//if statements based on getJobRole
//array.join of results of if statements
//create functions for different employee cards

module.exports = generateEngineer;
