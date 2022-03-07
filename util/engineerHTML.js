const engineerHTML = (data) =>{
    return(`
    <div class="card g-4 mb-3" style="max-width: 18rem;">
  <div class="card-header text-capitalize fs-3">${data.engineerName}</div>
  <div class="card-body">
    <h5 class="card-subtitle text-muted">Engineer</h5>
    <p class="card-text">ID: ${data.engineerId} </p>
    <a class="card-text link-secondary" href="mailto:${data.engineerEmail}">Email: ${data.engineerEmail}</a>
    <p class="card-text link-secondary" href="https://github.com/${data.engineerGitHub}">GitHub: ${data.engineerGitHub}</a>
  </div>
    </div>
    `)
}

module.exports = engineerHTML