const parentShape = require('./parentshape.js');

class Square extends parentShape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    };

    render() {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="300" fill="${this.shapeColor}" />
        <text x="100" y="155" font-size="50" fill="${this.textColor}" text-anchor="middle">${this.text}</text>
        </svg>
        `
    };
}

module.exports = Square;