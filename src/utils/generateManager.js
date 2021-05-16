const generateManager = (manager) => {
  return `<div class="card text-white bg-primary m-3" style="max-width: 18rem">
    <div class="card-header">
      <h5 class="card-title">${manager.name}</h5>
      <h5 class="card-title">${manager.getJobRole()}</h5>
    </div>
    <div class="card">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${manager.id}</li>
        <li class="list-group-item">
          E-mail:
          <a href="mary@manager.com">${manager.email}</a>
        </li>
        <li class="list-group-item">Office number: ${manager.officeNumber}</li>
      </ul>
    </div>
  </div>`;
};

module.exports = generateManager;
