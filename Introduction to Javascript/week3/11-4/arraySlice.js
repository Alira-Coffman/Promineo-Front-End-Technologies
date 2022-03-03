let ages = [3, 9, 23, 64, 2, 8, 28, 93];

console.log(ages.slice(-1));
console.log(ages.slice(0,1));
let result = ages.slice(-1) - ages.slice(0,1);
console.log(result)
console.log(ages);


console.log(ages.at(-1));
console.log(ages.at(0));
result = ages.at(-1) - ages.at(0);
console.log(result);