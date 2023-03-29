// //declare a variable with a inital value of 10.
// const variable = 10;
// let x = 10;
// var y = 10;

// //declare an array named arr with the inital values of 10, 'a', 500
// let arr = [10, 'a', 500]
// arr[1] //'a'

// //print out all values in the array programatically
// //what type of loop?
// for(let i = 0; i < arr.length; i++)
// {
//     console.log(arr[i]);
// }

// //filter, map, slice?
// arr.map((i)=> console.log(i))

// //declare an object name car with properties of make, model, and year.
// let car = {
//     make: '',
//     model: '',
//     year: ''
// }
// car.make

// class Car{
//     constructor(make, model, year)
//     {
//         this.make =make;
//         this.model = model;
//         this.year = year;
//     }
// }

// let myCar = Car('gmc', 'safari', 2002)
// myCar.make


// //Create a function name sum that takes in three values and adds them together.
// function sum(a,b,c)
// {
//     return a+b+c
// }



let textRed = document.getElementById('text-red');
console.log(textRed)
textRed.innerHTML = 'Hello!'

//get element by a class name.

let container = document.getElementsByClassName('heading-container');
console.log(container[0].firstElementChild)
container[0].firstElementChild.innerHTML = 'Goodbye'

//by tag name.

let heading = document.getElementsByTagName('h3')
console.log(heading)


//querySelection 

let para = document.querySelector('.para')
console.log(para);



//select the span
 //tag
let example = document.getElementsByTagName('span');
console.log(example[0])

//change the textnode to be goodbye, hello

example[0].innerHTML = 'Goodbye, Hello'


// add class, remove, toggle.

//define what we are adding to.

let exampleContainer = document.getElementById('example')
// exampleContainer.classList.add('bg-blue')

// setTimeout(()=> {
//     exampleContainer.classList.remove('bg-blue')
// }, 5000)

exampleContainer.classList.toggle('bg-blue');

setTimeout(()=> {
    exampleContainer.classList.toggle('bg-blue')
}, 5000)