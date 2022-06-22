var name = 'james bond'; //String //initalization
var age = 40; //Number
let randomValue = 150.5; //Number
const pi = 3.141592; //Number
let t = 50000000000000; //Number
let a = "a" //string
let z = "137.65" //string
let b = false; //Boolean
let y; //declaring
console.log(z + age);//??136.6540
let x;
x = 5; //assignment 
console.log(typeof(t));
console.log("HELLO");


//addition
let sum = age + randomValue; //190.5
sum += 5;  // sum = sum + 5 195.5
console.log(sum)

//Subtraction
let c = randomValue - pi;
c -= 5;
console.log(c);

//multip....
let product = age *2; //80
product *=2; //product = product*2
console.log(product)

//division
let divdend = age /2;
console.log(divdend)

//increment

age++;
console.log(age);
// ++age;

//decrement 

age--;
console.log(age);

//Modulus %

console.log(177 %2)


///Age Calculator

var futureYear = 2026;
var birthYear = 1988;
var age = futureYear - birthYear;

console.log("I will be " + age + " in " + futureYear);

///BOOLEANS

//true or false
// >, < , >=, <= , && , ||

5 > 3 //true 
6 > 8 //false
8 < 10 //true 
10 >= 10 //true 
10 > 10 //false 

5 > 3 || 6 > 8 //TRUE 
5 > 3 || 8 < 10 //True 
5 > 3 && 8 < 10 //True 
5 > 3 && 6 > 8 //false 
//PEMDAS
if(5 < 3){
    console.log("foo");
}
else 
{
    console.log("bar");
}