//ask user what their guess for number 
//computer to get a random number
//check if the number guess is correct
//prompt to play again. 
let guess;
let computerGuess;
let playAgain;
do
{
   guess = prompt("Please guess a number between 0 and 10");
    console.log(guess);
    computerGuess = Math.floor(Math.random() * (10 - 0)) + 0;
    console.log(computerGuess);
    
    if(guess == computerGuess)
    {
        console.log("You got it right");
    }
    else 
    {
        console.log("You got it wrong");
    }  
    playAgain = prompt("do you want to play again?")
}while(playAgain == 'y');
