function rollDice() { 
    var numDice = document.getElementById("diceNum").value;
    var numSides = document.getElementById("diceMax").value; //gets user input for number of dice

    var sum = 0;
    var rollEvent;

    for(let i = 0; i < numDice; i++)
    {
        //generate a roll. 
        rollEvent = Math.floor(Math.random() * numSides) + 1;
       // console.log(typeof(rollEvent)); DEBUG STATEMENT
       // console.log("Your roll is: " + rollEvent);
        console.log(`Your roll is : ${rollEvent}`);

        //add eventRoll to sum
        sum = sum + rollEvent; //sum = sum + rollEvent //TODO: FINDOUT WHY += does not work?
        // console.log(sum); //DEBUG
    }
    console.log(`Your sum of rolls is: ${sum}`);

}