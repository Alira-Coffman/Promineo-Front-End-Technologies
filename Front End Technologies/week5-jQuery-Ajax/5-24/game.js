//creating random value

let randValue = Math.floor(Math.random() * 100) +1;
console.log(randValue);


//store userGuess, create event listener
$('#userGuess').blur(function()
{
    console.log(this.value);

    if(this.value > randValue)
    {
        //create a para and append to guessContainer

        $('#guessesContainer').append('<p>User Guess is too High</p>')
    }
    else if(this.value < randValue)
    {
        $('#guessesContainer').append('<p>User Guess is too Low</p>')
    }
    else 
    {
        //clear the guess container
        //$('#guessesContainer').innerHtml = ''
        //$('#guessesContainer').value = ' '

        $('#guessesContainer').empty()

        // append 'User Wins'

        $('#guessesContainer').append('<p>User Wins</p>')
        //change the background
        $('body').css('background', 'green');
    }
})

