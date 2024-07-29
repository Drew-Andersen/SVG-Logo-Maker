const {Triangle, Circle, Square} = require('./shapes.js');

describe('Triangle test', () => {
    it ('should return a triangle SVG when called with the Triangle constructor', () => {
        // when a new triangle is called the name should be red and the triangle should be blue
        const testTriangle = new Triangle('SVG', 'red', 'triangle', 'blue');
        const svg = testTriangle.render();
        const expected = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150 10, 50 190, 250 190" fill="blue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="red">SVG</text></svg>`;
        expect(svg).toEqual(expected);
    })
})

describe('Circle test', () => {
    it ('should return a circle SVG when called with the Circle constructor', () => {
        // when a new circle is called the name should be green and the circle should be purple
        const testCircle = new Circle('ABC', 'green', 'circle', 'purple');
        const svg = testCircle.render();
        const expected = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="purple" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="green">ABC</text></svg>`;
        expect(svg).toEqual(expected);
    })
})

describe('Square test', () => {
    it ('should return a square SVG when called with the Square constructor', () => {
        // when a new square is called the name should be green and the square should be red
        const testSquare = new Square('XYZ', 'green', 'square', 'red');
        const svg = testSquare.render();
        const expected = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" x="50" y="0" fill="red" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="green">XYZ</text></svg>`;
        expect(svg).toEqual(expected);
    })
})