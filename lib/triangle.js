const parentShape = require('./parentshape.js');

class Triangle extends parentShape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    };

    render() {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="100,15 200,200 0,200" fill="${this.shapeColor}" />
        <text x="100" y="180" font-size="50" fill="${this.textColor}" text-anchor="middle">${this.text}</text>
        </svg>
        `
    };
}

module.exports = Triangle;