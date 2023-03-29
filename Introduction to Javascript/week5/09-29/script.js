// let car = {
//     color: 'red',
//     make : 'Ford',
//     model: 'Ranger',
//     currentGasLevel: 'Full',
//     checkGas()
//     {
//         return this.currentGasLevel;
//     }
// }

// car.checkGas();
// console.log(car.color, car.make);


class Shape
{
    constructor(x =0 ,y =0 )
    {
        this.xPos = x;
        this.yPos = y;
        console.log('I am in Shape')
    }
    getArea()
    {
        console.log("It is a shape");
    }

}

class Circle extends Shape
{
    //variables that you pass in to create an object
    //runs first
    //no direct way to call it except for creation of a class
    constructor(r)
    {
    /*radius—A number that holds the radius of the circle.
    PI - A number constant initialized with the value 3.14159 
    Note: We're going to define our own value for PI instead of using Math.PI
    */
        super();
       this.radius = r;
       this.PI = 3.14159;
       console.log('I am running')
    }
    /*getArea. Returns the area of the circle, which is calculated as: 
area = PI * radius * radius */
    getArea(){
        console.log("I am in circle")
        return this.PI * this.radius * this.radius;
    }
    /*getDiameter. Returns the diameter of the circle, which is calculated as: 
    diameter = radius * 2 */
    getDiameter(){
        return this.radius * 2;
    } 
    /*getCircumference. Returns the circumference of the circle, which is calculated as: 
    circumference = 2 * PI * radius
    */
    getCircumference(){
        return this.PI * 2 * this.radius;
    }

}


//Triangle Class  (example of inheritence IS A)
class Triangle extends Shape
{
    constructor(b, h)
    {
        super();
        this.base = b;
        this.height = h;
    }
    getArea()
    {
        //b * h * 1/2
        console.log('I am in Triangle')
        return this.base * this.height * 0.5
    }
}


class Rectangle extends Shape
{
    constructor(l, w)
    {
        super();
        this.length = l;
        this.width = w;
        this.prop = new Triangle(1,2); //COMPOSITION HAS A!
    }
    getArea()
    {
        //b * h * 1/2
        return this.length * this.width;
    }
}


let myCircle = new Circle(5);
console.log(myCircle.radius)
console.log(myCircle.getCircumference())
myCircle.getArea();
console.log(myCircle.xPos, myCircle.yPos)

let testCircle = new Circle(2);

let rect1 = new Rectangle(5, 3);

console.log(rect1.prop.getArea())



try 
{
    //code here
}
catch(err)
{
    //code here
}
finally
{
    //code here
}