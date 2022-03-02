const Manager = require("./util/Manager")
const Intern = require("./util/Intern")
const Engineer = require("./util/Engineer")
const fs = require('fs')
const inquirer = require("inquirer")

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
        console.info(answers)
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
        console.info(answers)
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
        console.info(answers)
    })
}

init()
