const apply = (n1,n2, ops) => {
    console.log(ops);
    return ops(n1,n2)
}

const add = (n1,n2) => n1 + n2;
const subtract = (n1,n2) => n1 - n2;

let a = 10;
let b = 20;
let c = 15;
let d = 75;

console.log('Addition:: ', apply(a,b, add));

console.log('Subtract:: ', apply(a,b, subtract));