let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let lengths = names.map(function(element) {
    return element.length;
});
console.log (lengths);
let sum = lengths.reduce (function (accumulator, currentValue) {
    return accumulator + currentValue;
});
console.log (sum);
 let avg = sum / names.length;
console.log (avg);

let test = names[0];
console.log(test.length);