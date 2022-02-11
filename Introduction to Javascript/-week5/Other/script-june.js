class Shape
{
    
    constructor(x,y =0){
        this.xPosition = x;
        this.yPosition = y;
        console.log(x + " " + y);
    }
    
    getArea() 
    {
        
    }
}

class Triangle extends Shape
{
    constructor(b,h){
        super(b,h);
        this.base = b;
        this.height = h;
        console.log("I am a triangle");
    }
    getArea()
    {
        this.area = this.base * this.height / 2;
        return this.area;
    }
}

class Rectangle extends Shape
{
    constructor(w, l){
        super(w,l);
        this.width = w;
        this.length = l;
        console.log("I am a rectangle");
    }
    getArea()
    {
        this.area = this.length * this.width;
        return this.area;
    }
}

class Square extends Rectangle
{
    constructor(l){
        super(l);
        //how can we prevent side to not be changed? - encapsulation
       this.side = l;
        console.log("I am a square");
    }
    getArea()
    {
        this.area = this.side * this.side;
        return this.area;
    }
}

let myTriangle = new Triangle(3, 4);
console.log(myTriangle.getArea());

let mySquare = new Square(5);
console.log(mySquare.side);
mySquare.side = 6;
console.log(mySquare.side);