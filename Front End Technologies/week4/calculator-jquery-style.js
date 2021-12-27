let firstNumber = 0;
let secondNumber = 0;
let operator = "";
let outcome =0;
//GLOBAL EVENT LISTENERS
$(".numberSel").click(getNumber);
$(".operator").click(selectMath);
$(".equal-sign").click(beforeMath);

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
    let display = $("#display").attr("value");
    display += a;
    $("#display").attr("value", display);
    
}


function clearDisplay()
{
    $("#display").attr("value", " ");

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