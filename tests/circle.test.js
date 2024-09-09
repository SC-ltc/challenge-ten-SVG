const Circle = require('../lib/circle.js')

describe('Circle', () => {
    it('should return a circle with shape color, text, and text color based on the user choice', () => {
        const circle = new Circle('blue', 'ABC', 'white');
        expect(circle.render()).toEqual(`
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="blue" />
        <text x="150" y="125" font-size="65" fill="white" text-anchor="middle">ABC</text>
        </svg>
        `);
    }) 
})