
//create a random number & store it between 1 and 100
let randValue = Math.floor(Math.random() * 100) +1;
console.log(randValue);

let userGuess = document.getElementById('userGuess');

console.log(userGuess)

//Define GuessContainer

let guessHintContainer = document.getElementById('guessesContainer');


document.getElementById('test').addEventListener("click", function() {
    alert('hello')
})

//create a listener
userGuess.addEventListener("blur", function() {
   console.log(this.value)
   const para = document.createElement('p');
   if(this.value > randValue)
   {
    //create text node
        para.innerText = 'User Guess is too High'

    //append to guessContainer
        guessHintContainer.appendChild(para);
   }
   else if(this.value < randValue)
   {
        //create text node
        para.innerText = 'User Guess is too Low'

        //append to guessContainer
            guessHintContainer.appendChild(para);
   }
   else
   {
    guessHintContainer.innerHTML = '';
    para.innerText = 'User Wins'

    //append to guessContainer
        guessHintContainer.appendChild(para);

        document.body.style.background ='green';
   }

  }, false);


function checkWin()
{

}