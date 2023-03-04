// code used to create a square
    // <rect x="10" y="10" width="30" height="30"/>
const Shape = require('./shapes');

class Square extends Shape {
    constructor(shape, shapeColor, text, textColor) {
        super(shape, shapeColor, text, textColor)
    }

    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

        <${this.shape} x="200" y="200" width="60" height="60" fill="${this.shapeColor}"/>
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      
      </svg>`
    }
}

module.exports = Square;
