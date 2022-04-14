//generated a random value
let randomValue = Math.floor(Math.random() * 100) + 1;

let userInput = -1;
let errorList = document.getElementsByClassName('error-list')[0];

function getUserGuess()
{
    
    userInput = document.getElementById('number').value;
    console.log(randomValue, userInput);
    compare();
}

function compare()
{
    if(userInput > randomValue)
    {
        console.log('Guess is too high');
        let textTemp = `User Guess of ${userInput} is too high`;
        appendToErrorList(textTemp);

    }
    else if(userInput < randomValue)
    {
        console.log('Guess is too low');
        let textTemp = `User Guess of ${userInput} is too low`;
        appendToErrorList(textTemp);
    }
    else
    {
        console.log('You win');
        removeAllChildren(errorList)
        appendToErrorList('Congrats! YOU WON!');
        removeAllChildren(document.getElementById('remove-later'));
        document.getElementsByTagName('body')[0].style.background = 'green';
    }
}

//#9ac305

function appendToErrorList(text)
{

    let para = document.createElement('p');
    let textNode = document.createTextNode(text);
    para.appendChild(textNode);
    errorList.appendChild(para);
}

function removeAllChildren(div)
{
    while(div.lastChild != null)
        div.removeChild(div.lastChild);
}