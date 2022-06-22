// var y = 7;
// let y = 7;

// //Data types

// //string
// //number
// //undefined
// //boolean
// //symbol
// //object
// //null
// //BIG INT


// let x = "c"; 
// let y = 7.5;
// let z = x + y; //'c7.5'



// // && - AND
// // || - OR 
// // ! - NOT 

// // ^|


// 5 > 7 //false
// 10 > 5 && 11 < 7 //false 
// 5 > 6 || 7 > 5 //true
// 5 > (6 || 7) > 5 
// 5 > 6 > 5

// //
// //a is greater than b or b and c are greater than d
// //a = 5
// //b = 6
// //c = 7
// // d = 8
// 1. a > b || (b && c) > d
//     0 || 7 > 8 // False

// //a = 5
// //b = 6
// //c = 8 
// // d = 7
//  0 || 8 > 7 // true

// 2. a > b || (b > d && c > d)
// //a = 5
// //b = 6
// //c = 7
// // d = 8
// 0 || (6 > 8 && 7 > 8) // false

// //a = 5
// //b = 6
// //c = 8 
// // d = 7

// 0 || (6 > 7 && 8 > 7)
// //false


// 7 == 7 //true
// 7 == '7' //true 
// 7 === '7' //false


//var represent color of light
let lightColor = 'yellow'

if(lightColor == 'red')
{
    console.log('STOP');
}
else if(lightColor == 'green')
{
    console.log('GO');
}
else if(lightColor == 'yellow')
{
    console.log('SLOW')
}

//SWITCH 

switch(lightColor)
{
    case 'red':
        console.log('STOP');
        break;
    case 'yellow':
        console.log('SLOW');
        break;
    case 'green':
        console.log('GO');
        break;
    default:
        console.log('SOMETHING IS WRONG')
}

/*If the number is greater than zero, check if number is even or odd. 
    If number is even, print even x % 2 == 0
    If number is odd, print odd
If number is less than zero, print negative
If number is equal to zero, print neutral * */ 


let x = 7;

if(x> 0)
{
    if(x % 2 == 0)
    {
        console.log('EVEN');
    }
    else
    {
        console.log('ODD');
    }
       
}
else if ( x < 0 )
{
    console.log('negative')
}
else
{
    console.log('neutral')
}

//

// for ( let i = 0; i < 3; i++)
// {
//     console.log(i);
// }

// let z = 2; 

// while(z < 3)
// {
//     console.log(z);
   
// }

// do
// {
//     console.log(z);
//     z --;
// }while(z < 2)


let answer = prompt('what is your name');
console.log(answer);

alert(answer);

//Count down with a while loop 
// if >= 3 < 10


let a = 5
while(a >=3 && a< 10)
{
    console.log(a);
    a--;
}