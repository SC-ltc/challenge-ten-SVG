const Triangle = require('../lib/triangle.js');

describe('Triangle', () => {
    it('should return a triangle with shape color, text, and text color based on the user choice', () => {
        const triangle = new Triangle('blue', 'ABC', 'white');
        expect(triangle.render()).toEqual(`
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="100,15 200,200 0,200" fill="blue" />
        <text x="100" y="180" font-size="50" fill="white" text-anchor="middle">ABC</text>
        </svg>
        `);
    })
})

