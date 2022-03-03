const engineerHTML = (data) =>{
    return(`
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${data.engineerName}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
    <p class="card-text">ID: ${data.engineerId} </p>
    <a class="card-text" href="mailto:${data.engineerEmail}">Email: ${data.internEmail} </a>
    <a class="card-text" href="https://github.com/${data.engineerGitHub}">GitHub: ${data.engineerGithub} </a>
  </div>
</div>
    `)
}

module.exports = engineerHTML