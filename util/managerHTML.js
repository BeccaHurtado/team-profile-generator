const managerHTML = (data) =>{
    return(`
    <div class="card border-light mb-3" style="max-width: 18rem;">
  <div class="card-header text-capitalize fs-3">${data.managerName}</div>
  <div class="card-body">
    <h5 class="card-subtitle text-muted">Manager</h5>
    <p class="card-text">ID: ${data.managerId}</p>
    <a class="card-text link-secondary" href="mailto:${data.managerEmail}">Email: ${data.managerEmail} </a>
    <p class="card-text text-capitalize">Office Number: ${data.managerOfficeNumber}</p>
  </div>
    </div>
    `)
}

module.exports = managerHTML