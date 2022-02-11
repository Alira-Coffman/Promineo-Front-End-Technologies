
//globals

let firstNumber = 0;
let secondNumber = 0;
let operator = "";
let outcome =0;


function add(a,b)
{
    return a+b;
}
function subtract(a,b)
{
    return a-b;
}
let multiplication = (a,b) => a*b;
let division = (a,b) => a/b;

//when click a number
let numberBtns = document.getElementsByClassName("numberSel");
console.log(numberBtns)
for (var i = 0; i < numberBtns.length; i++) {
    numberBtns[i].addEventListener("click", getNumber);
    console.log("test");
}

let mathBtns = document.getElementsByClassName("operator");
for (var i = 0; i < mathBtns.length; i++) {
    mathBtns[i].addEventListener("click", selectMath);
    console.log("test");
}

//when click equal sign

let equalSign = document.getElementsByClassName("equal-sign");
console.log(equalSign);
    equalSign[0].addEventListener("click", beforeMath);
console.log(numberBtns)
//get said number
function getNumber()
{
    var attribute = this.getAttribute("value");
    console.log(attribute);
    console.log("I AM IN GETNUMBER")
    display(attribute);
}

//display said number
function display(a)
{
    let display = document.getElementById('display');
    console.log(display);
    display.value += a
}


function clearDisplay()
{
    let display = document.getElementById('display');
    display.value = " ";

}

function selectMath()
{
    //get first number
    firstNumber = getDisplayNumber();
    console.log(firstNumber);
    //save what math it wants to do
    operator = this.value;
    console.log(operator);
    clearDisplay();
}

function getDisplayNumber()
{
    let display = document.getElementById('display').value;
    console.log(display);
    return display;
}

function beforeMath()
{
    secondNumber = getDisplayNumber();
    console.log("typeof" ,  typeof(secondNumber));

    firstNumber = parseInt(firstNumber, 10);
    secondNumber = parseInt(secondNumber, 10);
    switch(operator)
    {
        case "+":
            outcome = add(firstNumber, secondNumber);
            break;
        case "-":
            outcome = subtract(firstNumber,secondNumber);
            break;
        case "*":
            outcome = multiplication(firstNumber,secondNumber);
            break;
        case "/":
            outcome = division(firstNumber,secondNumber);
            break;
    }
    clearDisplay();
    console.log(outcome);
    display(outcome);

}