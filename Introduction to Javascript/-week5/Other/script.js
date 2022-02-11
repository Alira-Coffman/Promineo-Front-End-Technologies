

// console.log(car.start());



// class Shape{
//     constructor(x,y)
//     { 
//         this.xSize = x;
//         this.ySize = y;
//         console.log("Constructor: " + x + " " + y);
//     }
//     getArea()
//     {

//     }
// };

// class Triangle extends Shape
// {
//     constructor(b, h){
//         super(b, h);
//         this.base =b;
//         this.height = h;
//         console.log("I AM A TRIANGLE");
//     }
//     getArea()
//     {
//         this.area = this.base * this.height * (1/2);
//         return this.area;
//     }
// }
// let car = {
//     make : 'Ford',
//     model : 'Bronco',
//     color: 'orange',
//     year: '2021',
   
// }

//class called car. It will have members  make, model, color, year; methods: start car honk
class Car
{
    constructor(make, model, color, year)
    {
       this.make = make;
       this.model = model;
       this.color = color;
       this.year = year;
    
    }
    startCar()
    {
        console.log(`started ${this.make} ${this.model}`);
       
    }
    honk()
    {
        console.log('BEEP BEEP');
    }

}

class Truck extends Car
{
    constructor(make, model, color, year,callSign, wheels){
        super(make, model, color, year);
        this.wheels = wheels;
        this.callSign = callSign;
        console.log('truck');
    }
    getWheels()
    {
        console.log(this.wheels);
    }
    
    
}

// let batMobile1 = new Car(car.make, car.model, car.color, car.year);
let batMobileTruck = new Truck('GMC', 'Safari', 'Grey', '2001','KBJ17A', 8);
console.log(batMobileTruck.startCar());







// let myTriangle = new Triangle(3,4);
// console.log(myTriangle.getArea());
// console.log(myTriangle.xSize);



// function name(firstName, lastName)
// {
//     return firstName + ' ' + lastName;
// }

// (firstName, lastName) => firstName + ' ' + lastName;
// (firstName, lastName) => {
//     return firstName + ' ' + lastName
// }
// var sum = 0;
// for(let i = 2; i <= 20; i = i +2)
// {
//     console.log(i);
//     sum += i;
// }
// sum = 0;
// for(let i = 1; i <=20; i++)
// {
//     if(i %2 == 0)
//     {
//         console.log(i);
//         sum += i;
//     }
        
// }
// sum = 0;
// var i =0;
// while(i <= 20)
// {
//     if(i % 2 != 0)
//     {
//         sum += i
//     }
//     i++;
// }







//     // console.log(1);
//     // setTimeout(function(){console.log(2)}, 1000);
//     // setTimeout(function(){console.log(3)}, 0);
//     // console.log(4)


