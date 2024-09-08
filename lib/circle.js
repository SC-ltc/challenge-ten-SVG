const parentShape = require('./parentshape.js');

class Circle extends parentShape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    };

    render() {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="25" cy="75" r="20" fill="${this.shapeColor}" />
        <text x="100" y="100" font-size="50" fill="${this.textColor}" text-anchor="middle">${this.text}</text>
        </svg>
        `
    };
}

module.exports = Circle;