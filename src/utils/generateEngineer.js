const generateEngineer = (engineer) => {
  return `<div class="card text-white bg-primary m-3" style="max-width: 18rem">
    <div class="card-header">
      <h5 class="card-title">${engineer.name}</h5>
      <h5 class="card-title">${engineer.getJobRole()}</h5>
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
          <a href="https://github.com/bob" , target="_blank">${engineer.getGitHub()}</a>
        </li>
      </ul>
    </div>
  </div>`;
};

module.exports = generateEngineer;
