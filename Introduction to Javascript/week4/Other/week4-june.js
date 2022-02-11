let names=["shrek", "donkey", "gingerbreadman", "fiona"];
let sum = 0;
for(let i = 0; i < names.length; i++)
{
   let nameLength = names[i];
   sum += nameLength.length;
}
console.log(sum/names.length);


//Global Scope - Example 1
var fruit = 'apple'
console.log(fruit);        //apple

function getFruit(){
    console.log(fruit);    //fruit is accessible here
}

getFruit();                //apple


//Block Scope - Example 2
// function foo(){
//     if(true){
//         var fruit1 = 'apple';        //exist in function scope
//         const fruit2 = 'banana';     //exist in block scope
//         let fruit3 = 'strawberry';   //exist in block scope
//     }
//     console.log(fruit1);
//     // console.log(fruit2);
//     // console.log(fruit3);
// }

// foo();
//result:
//apple
//error: fruit2 is not defined
//error: fruit3 is not defined

//FUNCTION SCOPE - Example 3

// function foo(){
//     var fruit4 ='apple';
//     console.log('inside function: ',fruit4);
// }

// foo();                    //inside function: apple
// console.log(fruit4);       //error: fruit is not defined 


// /* TEMPLATE LITERALS */

let myString = `Hello
world
my name
is Willy Wonka`;


console.log(myString);

// //Expressions 

let firstName = "Willy";
let lastName = "Wonka";
console.log(`Hello! My name is ${firstName + " " +lastName} `);

// //function Example Here 
function exampleOfLiterals(a,b)
{
    console.log(`The sum of ${a} and ${b} is ${a+b}`);
}
let apples = 7;
let trees = 6;
exampleOfLiterals(apples,trees);


// //***ARROW FUNCTIONS */

let arrowFunction = (a,b) => {
    console.log(`The sum of ${a} and ${b} is ${a+b}`);
}
arrowFunction(3,2);

// hello = function() {
//     return "Hello World!";
//   }

//   hello = () => {
//     return "Hello World!";
//   }

//   hello = (val) => "Hello " + val;


// /***CALLBACKS */

const message = function() {  
    console.log("This message is shown after 5 seconds");
}
 
setTimeout(message, 5000);


// function myDisplayer(some) {  
//    console.log(some);
// }


// function myCalculator(a,b, myCallBack)
// {
//     let mySum = a + b;
//     myCallBack(mySum);
// }

// myCalculator(3,6, myDisplayer);


//create a funciton that takes an array and squares all of the values  it, 
//then print it with a sep. function

let values = [2,3,4,5,6,7];

function myNumbers(myArray)
{
    for(let i = 0; i < myArray.length; i++)
    {
        console.log(myArray[i]);
    }
}

function mySquares(myArray, myCallBack)
{
    for(let i = 0; i < myArray.length; i++)
    {
        myArray[i] *=  myArray[i];
    }
    //print
    myCallBack(myArray);
}
//myNumbers(values);

mySquares(values, myNumbers);