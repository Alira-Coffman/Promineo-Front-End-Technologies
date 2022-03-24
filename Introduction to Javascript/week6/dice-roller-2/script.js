function rollDice(){
    console.log('Hi');

    //get user values

    var numDice = document.getElementById("diceNum").value;
    var diceType = document.getElementById("diceMax").value; //gets user input for number of dice

    //diceType = 6

    var rollEvent;
    for(let i = 0; i < numDice; i++)
    {
        rollEvent = Math.floor(Math.random() * diceType) + 1;
        console.log(`Your roll is : ${rollEvent}`);
    }


}