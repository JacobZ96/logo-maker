const inquirer = require('inquirer');
const fs = require('fs');
const { default: Choices } = require('inquirer/lib/objects/choices');

class Menu {
    constructor() {
}
run() {
    return inquirer 
    .prompt ([
        {
            type: 'input',
            name: 'text',
            message:'Enter text for the logo. (Must not be more than 3 characters.)',
        },
        {
            type : 'input',
            name: 'text-color',
            message: 'Enter text color',
        },
        {
            type: 'checkbox',
            message: 'Select a Shape for the logo',
            name: 'shape',
            choices: ['Circle', 'Square', 'Triangle'],
        },
        {
            type: 'input',
            name: 'shape-color',
            message: 'Enter a Shape color',
        }
    ])
}}

module.exports = Menu;
