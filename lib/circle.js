const parentShape = require('./parentshape.js');

class Circle extends parentShape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    };

    render() {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
        <text x="150" y="125" font-size="65" fill="${this.textColor}" text-anchor="middle">${this.text}</text>
        </svg>
        `
    };
}

module.exports = Circle;