const Manager = require("./util/Manager")
const Intern = require("./util/Intern")
const Engineer = require("./util/Engineer")
const fs = require('fs')
const inquirer = require("inquirer")
const { existentialTypeParam } = require("babel-types")

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