// import inquirer
const inquirer = require('inquirer');
// import file system
const fs = require('fs');
// import all the shapes
const { Triangle, Circle, Square } = require('./lib/shapes.js');

//use inquirer to get input from the user command line
inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter up to three characters for you logo name.',
            name: 'logoName'
        },
        {
            type: 'input',
            message: 'Enter a color name or HEX value for the logo name.',
            name: 'colorName'
        },
        {
            type: 'list',
            message: 'Please select a shape.',
            name: 'shape',
            choices: ['circle', 'triangle', 'square']
        },
        {
            type: 'input',
            message: 'Please enter the color name or HEX value for the shape.',
            name: 'shapeColor'
        }
    ])
    .then((data) => {
        // deconstructing the data values
        const {logoName, colorName, shape, shapeColor} = data;
        // Created an empty string for the logo
        let logoStr = '';

        // Check the shape selected and create a new object of that shape
        // then calling for the render function to return the SVG string
        if(shape === 'circle') {
            const logo = new Circle(logoName, colorName, shape, shapeColor);
            logoStr = logo.render();
        } else if (shape === 'triangle') {
            const logo = new Triangle(logoName, colorName, shape, shapeColor);
            logoStr = logo.render();
        } else {
            const logo = new Square(logoName, colorName, shape, shapeColor);
            logoStr = logo.render();
        }

        // Writing the SVG string to a .svg file
        fs.writeFile('./examples/logo.svg', logoStr, function(err){
            if (err) {
                console.log(err);
            } else {
                console.log('Generated logo.svg');
            }
        })
    })