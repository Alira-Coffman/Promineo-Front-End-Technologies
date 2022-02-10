var i = 0, j = 0;

alert(++i);  // alerts 1
alert(j++);  // alerts 0

console.log("-- with looping --");

console.log("using ++i in a for loop");
for (var i=1; i<=3; ++i) {
  console.log(i);
}

console.log("using i++ in a for loop");
for (var i=1; i<=3; i++) {
  console.log(i);
}

console.log("using --i in a for loop");
for (var i=3; i>=1; --i) {
  console.log(i);
}

console.log("using i-- in a for loop");
for (var i=3; i>=1; i--) {
  console.log(i);
}

console.log("-- without looping --");
var i = 1;
console.log("i: "+ i);
console.log("i++: "+ i++);
console.log("i: "+ i);
console.log("++i: "+ ++i);
console.log("i: "+ i);
console.log("--i: "+ --i);
console.log("i: "+ i);
console.log("i--: "+ i--);
console.log("i: "+ i);