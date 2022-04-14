// chooses a random number between 1 - 100

let randomValue = Math.floor(Math.random() * 100) - 1;
let userGuess = -1;
console.log(randomValue);
// Takes user input using <input> 
$('#text').on("blur", function(){
    userGuess = $('#text').val();
    console.log(userGuess);
    checkGuess();
});
// Alerts the user within the html page if the guess is too high or too low
function checkGuess(){
    if(userGuess > randomValue)
    {
        console.log('user is too high');
        $('.error-list').append(`<p>User Guess of ${userGuess} is too high</p>`);
        $('.error-list').css('color','#9ac305')
    }
    else if(userGuess < randomValue)
    {
        console.log('user is too low');
        $('.error-list').append(`<p>User Guess of ${userGuess} is too low</p>`);
        $('.error-list').css('color','#9ac305')
    }
    else
    {
        // When user wins, changes the background of the page to a green color
        console.log('user wins');
        $('.error-list').remove();
        $('input').remove();
        $('label').remove();
        $('#bg').css('background', 'green');
        $('.container').append(`<p>Congrats you have won!</p>`);
        $('.container p').css('color','#9ac305')
    }
}

//error checking what if not a number and not between 1 and 100
