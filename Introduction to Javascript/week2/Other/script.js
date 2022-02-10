//Lets set some values to check: 
let a = 5;
let b = 6;
let c = 8;
let d = 7;


console.log(a > b || b&& c > d)
// check a > b (lets say this gives a true value)
// then it would check true || b (lets say this returns true)
//then it would check c > d ( lets say that gives us true)
// then it would check true && true.

console.log(a > b || (b > d && c >d));
//GROUPINGS First -> b > d && c >D 
// then a >b 
//then handle the ||