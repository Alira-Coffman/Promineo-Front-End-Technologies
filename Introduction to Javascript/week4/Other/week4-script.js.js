// //  var names = [];
// // // let x = 0;
// // // x = 0;

// // // //alt 1. 
// // names.push('Tommy');
// // names.push('Tim');
// // names.push('Sally');

// // //alt 2
// // var names_2 = ['Tommy', 'Tim', 'Sally'];

// // var test = names[1];
// // console.log(averageLengthNames(names_2));

// // if(names[1] == "Tim")
// // {
    
   
// // }


// // // //option 2: use the for loop
// // // //sum = sum + names[i].length;
// // // //console.log -
// // // var sum = 0;
// // // for(var i = 0; i < names.length; i++)
// // // {
// // //     sum += names[i].length;

// // // }
// // // console.log(sum/names.length);


// // // //OPTION 1:
// // // //Create a function for average length. 
// // // // array(names)
// // // // sum init. 0
// // // // count = names.length //total num of items
// // // // for loop, iterate over array
// // // // sum += names[i].length
// // // //return sum/count

// // function averageLengthNames(names_2)
// // {
// //     let sum = 0;
// //     var count = names_2.length;
// //     for(var i = 0; i < names_2.length; i++)
// //     {
// //         sum += names_2[i].length;
// //     }
   
// //     return sum/count;
// // }
// // console.log(x)

// // //Tommy Tim Sally
// // var con = names[0];

// // for(var i = 1; i < names.length; i ++)
// // {
// //     con = con.concat(" ", names[i]);
// // }
// // console.log(con);


// // let name = `Shrek
// // hi
// // hello`;

// // console.log(`${names} `);


// //template literals
// //a = 7, b = 8
// sum(7,8);
// function sum(a,b)
// {
//     console.log(`The sum of ${a} and ${b} is  ${a>b}` );
// }

// let arrowFunctionExample = (a,b) => {
//     console.log(`The sum of ${a} and ${b} is  ${a+b}` );
// }

// arrowFunctionExample(7,8);


// //Takes in length and width of a rec. and returns an array with the first value being perm. and second value area

// var x = 0;
// function rectangleThing(length, width)
// {
//     let rectInfo = [];
//     rectInfo.push(2*length + 2*width);
//     rectInfo.push(length * width);
//     return rectInfo;
// }

// console.log(`${rectangleThing(4,3)}`);
//here - 1
let rectangleThingArrow = (length, width) => {
    let rectInfo = [];
    rectInfo.push(2*length + 2*width);
    rectInfo.push(length * width);
    return rectInfo;
}
//here - 2
console.log(`${rectangleThingArrow(2,2)}`);

//CALLBACKS

console.log('Timeout Starts');
setTimeout(
    function later(){
        console.log("It is later");

}, 2000);
console.log("I am here");
