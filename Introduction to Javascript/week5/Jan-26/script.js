// let myObject = {
//     make: 'ford',
//     model: 'f150',
//     color: 'blue',
//     year:'2022',
//     printCarInfo()
//     {
//         console.log(`${this.color} ${this.make} ${this.model} `)
//     }
//     // print: function()
//     // {
//     //     console.log(`${this.color} ${this.make} ${this.model} `)
//     // }
// }
// myObject.printCarInfo()
// console.log(myObject['make']);


class Shape
{
    constructor(x =0 ,y = 0)
    {
        this.xPos = x;
        this.yPos = y;
        console.log(x, y);
    }
    setPosition(x,y)
    {
        this.xPos = x;
        this.yPos = y;
    }
}

class Triangle extends Shape{
    constructor(b,h)
    {
        super();
        this.base = b;
        this.height = h
    }
    getArea()
    {
        return this.base * this.height * (1/2);
    }
}

class Rectangle extends Shape{
    constructor(l,w)
    {
        super(0,0);
        this.length = l;
        this.width = w;
        this.prop = new Triangle(1,2); // COMPOSITION!!
    }
    getArea()
    {
        console.log('RECTANGLE')
        return this.length * this.width;
    }
}

class Square extends Rectangle{
    constructor(l)
    {
        super(l,l);
        this.side = l;
    }
    getArea(){
        console.log('SQUARE');
        return this.side * this.side;
    }
}


let shape1 = new Shape(1,2);
console.log(shape1.xPos)
let Triangle1 = new Triangle(3,4);
console.log(Triangle1.xPos)
Triangle1.setPosition(3,4);
console.log(Triangle1.xPos)
console.log(shape1.xPos)
console.log(Triangle1.getArea())
let square1 = new Square(4);
console.log(square1.getArea());
console.log(square1.prop.base);
