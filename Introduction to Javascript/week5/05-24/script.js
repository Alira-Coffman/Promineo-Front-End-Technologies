var x;
let y;

const car = {
    make: 'GMC',
    year: 2001,
    color: 'tan',
    gasMileage : 201000,

    go()
    {
        console.log('Pressed the gas')
    }
};

//how to print or access properties from object
console.log(car.go());



///CLASSSESS 

//SHape, prop: color, height, width, length, etc. 
//functions: getArea()

class Shape
{
    constructor(color, sides)
    {
        this.color = color;
        this.sides = sides;

        console.log('SHAPE CLASS')
    }
}

//let newShape = new Shape('blue', 4);

//rectangle, triangle, circle;


//EXAMPLE Inhertiance 
class Rectangle extends Shape {
    constructor(l, w)
    {
        super('blue', 4);
        this.length = l;
        this.width = w;
        console.log('Rectangle CLASS')
    }
    getArea()
    {
        console.log(this.length * this.width); 
    }

    //acessors
    getWidth()
    {
        return this.width;
    }
    //mutators
    newWidth(newWidth)
    {
        this.width = newWidth
    }
}

let ourRectangle = new Rectangle(4,3);
ourRectangle.getArea();
console.log(ourRectangle.length)
console.log(ourRectangle.sides);


//Square
class Square extends Rectangle {
    constructor(s)
    {
        super(s,s);
        this.side = s;
        console.log('SQUARE CLASS');
    }
    getArea()
    {
        console.log(this.side * this.side);
    }
}

let newSquare = new Square(3);
newSquare.getArea();

//make two squares, s= 5, s=8

let firstSquare = new Square(5);
let secondSquare = new Square(8);
firstSquare.side++;

firstSquare.getArea(); //36 = 6
secondSquare.getArea(); //64 = 8