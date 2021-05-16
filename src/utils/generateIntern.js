const Intern = require("../lib/Intern");

const generateIntern = (team) => {
  const intern = team.map(generateInternCard);
  if (intern === Intern) {
    console.log("there is an intern!");
  }
  generateInternCard(intern);
};

const generateInternCard = (intern) => {
  return `<div class="col">
  <div class="card text-white bg-primary m-3" style="max-width: 18rem">
    <div class="card-header">
      <h5 class="card-title">${intern.name}</h5>
      <h5 class="card-title">${intern.getJobRole}</h5>
    </div>
    <div class="card">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${intern.id}</li>
        <li class="list-group-item">
          E-mail:
          <a href="john@intern.com">${intern.email}</a>
        </li>
        <li class="list-group-item">
          School: ${intern.getSchool}
        </li>
      </ul>
    </div>
  </div>
</div>
</div>`;
};

module.exports = generateIntern;
