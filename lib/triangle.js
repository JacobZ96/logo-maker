// Example of Triangle Shape code: 
//     const shape = new Triangle();
//     shape.setColor("blue");
//     expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

const Shape = require('./shapes');

class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }

    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

        <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      
      </svg>`
    }
}
// const myTriangle = new Triangle('black', 'HIL', 'blue')

module.exports = Triangle;