// Shapes class created for common shape features
class Shapes {
    constructor(logoName, logoColor, shape, shapeColor) {
        this.logoName = logoName,
        this.logoColor = logoColor,
        this.shape = shape,
        this.shapeColor = shapeColor
    }

    render(){
        
    }
}

// Triangle class
class Triangle {
    constructor(logoName, logoColor, shape, shapeColor) {
        super(logoName, logoColor, shape, shapeColor);
    }

    render() {
        console.log('triangle called');
    }
}

// Circle class
class Circle {
    constructor(logoName, logoColor, shape, shapeColor) {
        super(logoName, logoColor, shape, shapeColor);
    }

    render() {
        console.log('circle called');
    }
}

// Square class
class Square {
    constructor(logoName, logoColor, shape, shapeColor) {
        super(logoName, logoColor, shape, shapeColor);
    }

    render() {
        console.log('square called');
    }
}