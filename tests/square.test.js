const Square = require('../lib/square.js');

describe('Square', () => {
    it('should return a square with shape color, text, and text color based on the user choice', () => {
        const square = new Square('blue', 'ABC', 'white');
        expect(square.render()).toEqual(`
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="300" fill="blue" />
        <text x="100" y="155" font-size="50" fill="white" text-anchor="middle">ABC</text>
        </svg>
        `);
    })
})