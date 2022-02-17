let car = {
    gasLevel : 'full',
    make: 'ford',
    model: 'batman',
    year: 2022,

    //NEXT WEEK functions within objects
}
console.log(car.year)


// let ages = [5, 19, 21, 22, 25];

// let legalAge = ages.filter(function(element){
//     return element >=21;
// })

// // console.log(legalAge);
// let myArray = ["sam", "jeff", "mike" , "smith"];

// console.log(myArray[0].length);


// let myname = "alira";

// for(let i = 0; i < myname.length; i++)
// {
//     console.log(myname[i]);
// }
// let myArray = [9, 16, 4];
// console.log(myArray)
// myArray = myArray.map(Math.sqrt);
// console.log(myArray);

// let newArray = myArray.reduce( function(adder, value) {
//     return adder+value;
// })
// console.log(newArray)

// function calculateGPA(a,b,c,d,e,f)
// {
//     let myGpa = [a,b,c,d,e,f];
//     let sum = 0;
//     let numOfGrades = 0;
//     for(let i = 0; i < myGpa.length; i++)
//     {
//         console.log(myGpa[i]);
//         if(!(myGpa[i] >= 0 && myGpa[i] <= 4) || myGpa[i] === '')
//         {
//             console.log('throw it away ', myGpa[i])
//         }
//         else 
//         {
//             sum += myGpa[i];
//             numOfGrades++;

//         }
//     }
//     console.log(sum, numOfGrades)
//     //add and divide
//     return sum / numOfGrades;

// }
// console.log(calculateGPA('', 4, 8, 0, 1, ''));
// let myArray = ["sam", "jeff", "mike" , "smith"];

// console.log(myArray[1]);
// console.log(myArray.length);
// console.log(myArray[4]);

// //pop, shift, unshift, push
// //pop 
// myArray.pop();
// console.log('pop', myArray);
// myArray.shift();
// console.log('shift', myArray);

// myArray.push('smith');
// console.log('push', myArray); ///possibly in video
// myArray.unshift('sam');
// console.log('unshift', myArray)

// for(let i = 0; i < myArray.length; i++)
// {
//     console.log(myArray[i])
// }


// function checkout(cardBalance, price = 20){
//     if(price > cardBalance)
//     {
//         return false;
//     }
//     else{
//         return cardBalance - price;
//     }
// }


// let newBalance = checkout(100);
// console.log('test', newBalance);

// console.log(checkout(500,100,40));

//let pointsReset = false;
// for(let i = 1, points = 0; (i <= 100) && (points < 290); i++)
// {
//     console.log('turns ', i, 'points ', points);
//     if(i %2 == 0)
//     {
//         points += 5;
//         //points = points +5;
//     }
//     else{
//         points += 3;
//         //points = points + 3;
//     }

//     //if(points == 125 && !pointsReset)
//     if(points == 125 && pointsReset == false)
//     {
//         points = 25;
//         pointsReset = true;
//     }
// }

//a = i <=100
//b - points < 290
// let points = 0;
// for(let i = 1; (i <= 100); i++)
// {
//     console.log('turns ', i, 'points ', points);
//     if(i %2 == 0)
//     {
//         points += 5;
//         //points = points +5;
//     }
//     else{
//         points += 3;
//         //points = points + 3;
//     }

//     //if(points == 125 && !pointsReset)
//     if(points == 125 && pointsReset == false)
//     {
//         points = 25;
//         pointsReset = true;
//     }
//     if(points > 290)
//         break;
// }