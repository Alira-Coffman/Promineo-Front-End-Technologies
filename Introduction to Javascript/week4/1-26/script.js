let names = ['ariel', 'fiona', 'penelope', 'sebastian', 'eric'];
//average = sum/num
function arrayReview(){
    let sum = 0;
    for(let i = 0; i < names.length; i++)
    {
        sum += names[i].length;
    }
    console.log('sum is ', sum)
    console.log(sum/names.length);
    
    let newString = '';
    let concatString = '';
    for(let i = 0; i < names.length; i++)
    {
        newString += names[i] + ' ';
       
    }
    console.log(x);
    console.log(newString);
    concatString = names.join(' ');
    console.log(concatString);
}

// console.log(x);


let mynewstring = `Lorem ipsum dolor, 
sit amet consectetur adipisicing elit. Consectetur omnis impedit eum, culpa obcaecati incidunt qui eveniet odit dignissimos. Ullam quam molestiae consectetur veniam dolore, 
fugit cumque amet natus itaque.`

console.log(mynewstring)

let sum = 5;
mynewstring = "the sum is " + sum;
mynewstring = `the sum is ${sum}`;
console.log(mynewstring);

console.log(`names printed : ${names} `)


//template literal practice

let createSum = (a, b) => `The sum of ${a} and ${b} is ${a+b}`;
console.log(createSum(2,3));
// function createSum(a,b){
//     console.log(`The sum of ${a} and ${b} is ${a+b}`)
// }



//one para. return the square (2) 4
//Math.pow(num,2)

let squares = num => `The square of ${num} is ${num ** 2}`

console.log(squares(6));
console.log(names.map(val => val.length));

//forEach
let sum2 = 0;
// names.forEach(function(element, index){
//     sum2 += element.length;
//     console.log(element, index);
// })

names.forEach((element, index) => sum2 += element.length);
console.log(sum2);
console.log(sum2/names.length);


//reduce
let sum4 = 0;
let sum3 = names.reduce((prevVal, currentVal) => prevVal + currentVal.length , sum4)
console.log('This one ', sum3);

//reduce example. 

let x = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
//Add the sub-array lengths together. (answer should be  9)
x.reduce((acc,element) => acc + element.length, 0);


//filter ages over 16 

const ages = [10, 5, 23, 14, 15.5, 16, 28];

//.filter
const result = ages.filter(age => age >= 16);
console.log(result);


const message = function() {
    console.log('This is a message');
}

setTimeout(message, 10000);
