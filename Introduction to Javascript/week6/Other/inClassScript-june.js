let newDeck;
let playerHand = [];
let dealerHand = [];

function displayPlayerHand()
{
    document.getElementById("player").innerHTML 
}
function displayDealerHand()
{
    return dealerHand;
}
function startGame()
{
    //empty player & dealer hand
    playerHand = [];
    dealerHand = [];
    //create a new deck;
    newDeck = getDeck();
    //shuffle deck
    shuffle(newDeck);
    console.log(newDeck);
    dealStartDeck();
    console.log(newDeck);
}
function dealStartDeck()
{
    //deal deck to both player & dealer
    playerHand.push(newDeck.pop());
    playerHand.push(newDeck.pop());
    console.log(playerHand);

    dealerHand.push(newDeck.pop());
    dealerHand.push(newDeck.pop());
    console.log(dealerHand);

    
}

function calculatePlayerTotal()
{
    
}

function calculateDealerTotal()
{

}