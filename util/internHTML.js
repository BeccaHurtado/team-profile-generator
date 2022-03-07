const internHTML = (data) =>{
    return(`
    <div class="card border-light mb-3" style="max-width: 18rem;">
  <div class="card-header text-capitalize fs-3">${data.internName}</div>
  <div class="card-body">
    <h5 class="card-subtitle text-muted">Intern</h5>
    <p class="card-text">ID: ${data.internId}</p>
    <a class="card-text link-secondary" href="mailto:${data.internEmail}">Email: ${data.internEmail} </a>
    <p class="card-text text-capitalize">School Name: ${data.internSchoolName} </p>
  </div>
    </div>
    `)
}

module.exports = internHTML