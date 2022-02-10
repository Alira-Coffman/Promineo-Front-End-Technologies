//ask user what their guess for number
//computer to get a random number
//check if the number guess is correct
//prompt to play again.
let userGuess = 0;
let randomNumber = -2;
do
{
    userGuess = prompt('Enter your guess: ');
    console.log(typeof(userGuess));
    randomNumber = Math.floor(Math.random() * 10) + 1; //generate between 1 - 10
    alert(randomNumber, userGuess);
// alert('YOU LOSE, generating a new number');
    if(userGuess == randomNumber)
    {
        alert('You WIN');
    }
    else
    {
        alert('YOU LOSE');
    }
}while(userGuess != randomNumber);

