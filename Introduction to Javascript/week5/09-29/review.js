let x = 5;
const y = 6;

{
    x = 6
    let z = 10;
    const a = 15;
}
console.log(x, y);
//console.log(a, z); //??


/*write a for loop that
 will find the sum of 
 all even numbers from 
 1 - 20 , inclusive */

 //1,2,3,4 2 + 4

let sum = 0;
for(let i = 1; i <= 20; i++)
{
    
    if(i % 2 === 0)
    {
       sum += i;
    }
}

//

// function fullName(fname, lname)
// {
//     return fname + " " + lname; 
//     //return 
// }

let test = 'hi';
let fname1 = 'Alira', lname2='Coffman';
//let fullName = (firstName, lastName) =>  firstName + "\n" + lastName;
let fullName = (firstName, lastName) =>  `${test} ${lastName}`;

console.log(fullName(fname1, lname2));