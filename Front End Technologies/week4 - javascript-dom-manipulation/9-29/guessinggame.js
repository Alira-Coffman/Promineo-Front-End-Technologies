let element = document.getElementById('guess')
let userGuess = NaN;
//get the users input
element.addEventListener("blur", function(){
    console.log(element.value)
    userGuess = parseInt(element.value);
    isGuessCorrect()
    });

//get a random number 1 - 100
function randNumber(){
    return Math.floor(Math.random() * 100) +1;
} 

    //Math.floor(Math.random() * (max - min) + min); //
let number = randNumber()
console.log(number)

let hintContainer = document.getElementById('hint');

//alert the user if they are too high or too low
function isGuessCorrect()
{
    if(number === userGuess)
    {
        //user wins
        document.body.style.backgroundColor = 'green'
    }
    else if(number > userGuess)
    {
        //userguess is too low
        createPara(`Your guess of ${userGuess} is too low`)
    }
    else
    {
        //userguess is too high
        createPara(`Your guess of ${userGuess} is too high`)
    }
}

function createPara(text)
{
    const newPara = document.createElement('p');
    const newContent = document.createTextNode(text);

    newPara.appendChild(newContent);
    hintContainer.appendChild(newPara);
}

//change the background color if the user wins.