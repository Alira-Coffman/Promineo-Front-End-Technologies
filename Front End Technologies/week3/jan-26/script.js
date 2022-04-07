//define a variable
var x = 7; //let x = 7; const x = 7;

// console.log(x);
//output x to 0 loop
for(let i = x; i >= 0; i--)
{
    console.log(i);
}
console.log('NOT THERE', x)
//same as above
let i = x;
while(i >= 0)
{
    console.log(i);
    i--;
}
console.log('HERE', x);

//function takes two variables and adds them together and returns the sum. 


function sum(x,y)
{
    return x + y;
}


// let sum = (x,y) => x+y;

console.log(sum(3,3));

//prompt a user at least once for their name keep asking till they enter smith.
let names = '';
do{

   names = prompt('What is your name?');

}while(names != 'smith');

console.log('out of loop')


