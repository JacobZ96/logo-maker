const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
const { default: Choices } = require('inquirer/lib/objects/choices');
const  Circle  = require('./circle');
const  Square  = require('./square');
const  Triangle  = require('./triangle');

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
            name: 'textColor',
            message: 'Enter text color',
        },
        {
            type: 'list',
            message: 'Select a Shape for the logo',
            name: 'shapeType',
            choices: ['Circle', 'Square', 'Triangle'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter a Shape color',
        }
    ]) 
    .then(({text, textColor, shapeType, shapeColor}) => {
        let shape 
        console.log('shape:', shapeType);
        switch (shapeType) {
            case 'Circle':
                shape = new Circle(text, textColor, shapeColor)
                break;
            case 'Square': 
                shape = new Square(text, textColor, shapeColor)
                break;
            default: 'Triangle' 
                shape = new Triangle(text, textColor, shapeColor)
                break;
        }
        return writeFile('logo.svg', shape.render());    
    })
    .then(() => {
        console.log("Generated logo.svg");
      })
      .catch((error) => {
        console.log(error);
        console.log("Oops! Something went wrong.");
      });

}}

module.exports = Menu;
