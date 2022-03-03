const Manager = require("./util/Manager")
const Intern = require("./util/Intern")
const Engineer = require("./util/Engineer")
const fs = require('fs')
const inquirer = require("inquirer")
const generateSite = require("./util/generateSite.js")
const engineerHTML = require("./util/engineerHTML")
const internHTML = require("./util/internHTML")
const managerHTML = require("./util/managerHTML")

var htmlContent = "";

function init() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'type',
            message: 'Are you a Manager, Intern, or Engineer?',
            choices: ['Manager', 'Intern', 'Engineer', 'None']
        }
    ]).then(function(response) {
        switch(response.type) {
            case "Manager":
                addManager()
                break;
            case "Intern":
                addIntern()
                break;
            case "Engineer":
                addEngineer()
                break;
            case "None":
                exitApp()
                break;
        }
    })
}

function addManager() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'What is your ID number?'
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is your email?'
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: "What is your office's number?"
        }
    ]).then(answers => {
        console.log(answers)
        var newManager = new Manager(answers.managerName,answers.managerId, answers.managerEmail, answers.managerOfficeNumber)

        htmlContent +=  managerHTML(answers)

        console.log(htmlContent);
        init()
    })
}

function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'internId',
            message: 'What is your ID number?'
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'What is your email?'
        },
        {
            type: 'input',
            name: 'internSchoolName',
            message: "What is your School's name?"
        }
    ]).then(answers => {
        console.log(answers)
            var newIntern = new Intern(answers.internName,answers.InternId, answers.internEmail, answers.internSchoolName)
    
            htmlContent +=  internHTML(answers)
    
            console.log(htmlContent);
            init()
    })
}
function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'engineerId',
            message: 'What is your ID number?'
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'What is your email?'
        },
        {
            type: 'input',
            name: 'engineerGitHub',
            message: "What's your GitHub username?"
        }
    ]).then(answers => {
        console.log(answers)
    })
}

function exitApp() {
    var data = generateSite(htmlContent)
    fs.writeFile('index.html', data, err => {
        if (err) {
            console.log(err)
            return
        }
        else
        {
            console.log('Head over to index.html to see your team!')
        }
    })
}


init()
// .then(answers => {
//     return generateSite(answers)
// }).then(data => {
//     return writeFile(data)
// })

