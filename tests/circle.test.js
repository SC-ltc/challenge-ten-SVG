const Circle = require('../lib/circle.js')

describe('Circle', () => {
    it('should return a circle with shape color, text, and text color based on the user choice', () => {
        const circle = new Circle('blue', 'ABC', 'white');
        expect(circle.render()).toEqual(`
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="25" cy="75" r="20" fill="blue" />
        <text x="100" y="100" font-size="50" fill="white" text-anchor="middle">ABC</text>
        </svg>
        `);
    }) 
})