// for(let x = 1; x < 6; x++)
// {
//     console.log(x);
// }
// //continue until condition is false. 

// //print in desc. 10 - 0 

// for(let y = 10; y >= 0; y--)
// {
//     console.log(y);
// // }

// let arr = [2, 'a', 3, 5.2, 1000];
// //changing 3 to 'b' 
// arr[2] = 'b';
// arr.push(0)
// arr.unshift(7)

// arr.pop()
// arr.shift()
// for(let x = 0; x < arr.length; x++)
// {
//     console.log(arr[x]);
// }

//Create an array
// let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
// var sumWithoutReduce = 0;
// //iterate through array
// for(let x = 0; x < names.length; x++)
// {

//     //formula for average : sum of all values / number of values.
//     console.log(names[x].length);
//     //without reduce
//     sumWithoutReduce += names[x].length;

//     //calculate average - inside ?? 
    
    
    

// }
// //with reduce
// const initialValue = 0;
// let sum3 = names.reduce((prevVal, currentVal) => prevVal + currentVal.length , 0)

// console.log(sum3, sumWithoutReduce);
// console.log('average' , sumWithoutReduce /names.length-1);

// {
    
// }
// let x = 7; 

// {
//     let y = 5;
//     console.log(x, y);
// }


// {
//     var x = 7; 
// }


// {
//     var y = 5;
//     console.log(x, y);
    
// }

//TEMPLATE LITERALS!! 

// let string = 'hello'; 
// let string2 = 'world';

// console.log(string + ' ' + string2);
// console.log(string, string2);

// let fancyString = `hello 

// world`
// console.log(fancyString);

// console.log(`${string} ${string2} , humans`);


//FUNCTIONS
//create a function returns the product of three numbers

// function product(a,b,c)
// {
//     return a * b * c;
// }



// let myProduct = product(1,2,0);
// console.log(myProduct);
// console.log(sum(2,3))

// function sum(a,b)
// {
//     return a + b;
// }

// //first name and last name with a space 

// function concat(first, last)
// {
//     //return first + ' ' + last;
//     return `${first} ${last}` //TEMPLATE LITERAL VERSION
// }

// console.log(concat('alira', 'coffman'));

// //ARROW FUNCTIONS / Anon Functions / Lamda

// var sum2 = function(a, b) {
//     console.log(a)
//     let c = 7;
//     var d = 5;
//     return a + b;
// }
// console.log(sum2(2,3));

// let sum3 = (a,b) => a + b;
// console.log(sum3(2,5))


//CALLBACKS

// console.log('Put Food in Oven');
// setTimeout(function bake() {
//     console.log('Done Cooking');
//     console.log('ready to eat')
// }, 3000);
// console.log('cooking');

// const logon = function(username, password) {
//     directory.findUser(username, function(user, err) {
//       user.isAuthorized(function(authorized, err) {
//         if (!err && authorized) {
//           user.validatePassword(password, function(validated, err) {
//             if (!err && validated) {
//               console.log(`${username} access granted`);
//             }
//           });
//         }
//       });
//     });
//   };

//   const logon = (username, password) => {
//     directory.findUser(username).then((user) => {
//       user.IsAuthorized().then((authorized) => {
//         user.validatePassword(password).finally((validated, err) => {
//           if (!err && validated) {
//             console.log(`${username} access granted`);
//           } else {
//             console.log(`Incorrect password for ${username}`);
//           }
//         });
//       }).catch((err) => console.log(`${username} not authorized`));
//     }).catch((err) => console.log(`${username} not found`););
//   };
  
//   logon("bsmith@gmail.com","p@ssW0rd!");
  
//   logon("bsmith@gmail.com","p@ssW0rd!");
