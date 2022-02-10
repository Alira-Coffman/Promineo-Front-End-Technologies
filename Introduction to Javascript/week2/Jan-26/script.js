
let count = alert('This is a prompt')
console.log(count);
let b = 7;

// if(b > 0)
// {
//     console.log('DEBUG: IS GREATER THAN ZERO');
//     if(b % 2 == 0)
//     {
//         console.log('EVEN');
//     }
//     else
//     {
//         console.log('ODD');
//     }
// }
// else if(b < 0)
// {
//     console.log('NEGATIVE');
// }
// else
// {
//     console.log('NEUTRAL');
// }

// if(b > 0 && b % 2 == 0)
// {
//     console.log('even');
// }
// else if(b > 0 )
// {
//     console.log('odd');
// }
// else if(b < 0 )
// {
//     console.log('negative')
// }
// else if(b == 0)
// {
//     console.log('neutral');
// }

// let stopLightColor = 'green';

// if(stopLightColor == 'green'){
//     console.log('GOOOOOOOO');
// }
// else if(stopLightColor == 'yellow')
// {
//     console.log('SLOOOW');
// }
// else
// {
//     console.log('stop');
// }
// else if(stopLightColor == 'red')
// {
//     console.log('stop')
// }
// else
// {
//     console.log('This is a problem!!');
// }

// // let a = 'Sunday';

// // switch(a)
// // {
// //     case 'Sunday':
// //         console.log('beginning of the week');
// //         break;
// //     case 'Monday':
// //         console.log('Second Day of the Week');
// //         break;
// //     default:
// //         console.log('Other Day of the Week');
// //         break;
// // }





// // let y = 8;
// // if(y == 8)
// // {
// //     console.log('Y is 8')
// // }
// // if(typeof(y) == 'number')
// // {
// //     console.log('it is a number');
// // }
// // if(y % 2 == 0)
// // {
// //     console.log('y is even');
// // }





// // console.log('we have lift off')

// //WE KNOW THE AMOUNT WE ITERATE
for(let i = 0; i < 5; i--)
{
    console.log(i);
}
console.log('j loop')
for(let j = 0; j < 5; ++j)
{
    console.log(j);
}

countdown = 5;
while(countdown >=1)
{
    console.log(countdown +  "...");
    countdown--;
}


// countdown 

//countdown <=10 countdown >=3


//do whiles run at least once!
do 
{
    let countdown = prompt('Enter a number'); //prompt
}while(countdown %2 == 0)