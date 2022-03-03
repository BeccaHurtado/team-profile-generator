const managerHTML = (data) =>{
    return(`
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${data.managerName}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
    <p class="card-text">ID: ${data.managerId} </p>
    <a class="card-text" href="mailto:${data.managerEmail}">Email: ${data.internEmail} </a>
    <p class="card-text">School Name: ${data.managerOfficeNumber} </p>
  </div>
</div>
    `)
}

module.exports = managerHTML