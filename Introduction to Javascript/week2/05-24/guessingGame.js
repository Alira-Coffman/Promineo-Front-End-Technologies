//ask user what their guess for number :D
//computer to get a random number :D
//check if the number guess is correct :D
//prompt to play again.

// Returns a random integer from 1 to 10:
let random = Math.floor(Math.random() * 10) + 1;
//Math.floor(Math.randome() * MAX) + MIN

console.log(random);

do
{
    var guess = prompt('what is your guess? 1 - 10');
    if(guess != random)
        alert('YOU Lost')
}while(guess != random)

alert('YOU WON')
