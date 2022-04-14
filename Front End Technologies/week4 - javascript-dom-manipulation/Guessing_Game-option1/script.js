let randomValue = 0;
let userGuess = -1;
//Generate random number
function generateRandomNumber(x, y)
{
    randomValue =  Math.floor(Math.random() * y) +x;
}

function getUserGuess()
{
    userGuess = document.getElementById('number').value;
    console.log('userGuess: ' , userGuess);
    console.log('Random Value', randomValue)

    console.log(typeof(parseInt(userGuess)))
    guessRange();
}
function appendText(text)
{
    let tag = document.createElement('p');
    let textNode = document.createTextNode(text);
    tag.style.color = '#9ac305';
    tag.appendChild(textNode);
    var container = document.getElementsByClassName('error-list')[0];
    container.appendChild(tag);
}
function guessRange()
{
    if(parseInt(userGuess) > randomValue)
    {
        //append guess is too high
        console.log('guess is too high');
        let text = `User Guess of ${userGuess} is too high`;
        appendText(text);
    }
    else if(parseInt(userGuess) < randomValue)
    {
        //append too high
        console.log('guess is too low');
        let text = `User Guess of ${userGuess} is too low`;
        appendText(text);
    }
    else
    {
        //user guessed the value. 
        userWins();
    }
}

function userWins()
{
    document.getElementsByTagName('body')[0].style.background ="green";
    let error = document.getElementsByClassName('error-list')[0];
    removeAllChildNodes(error);

    let text = 'congrats! you have won';
    appendText(text);

    document.getElementById('number').remove();
    document.getElementById('number-label').remove();

}

function removeAllChildNodes(parent) {

    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

