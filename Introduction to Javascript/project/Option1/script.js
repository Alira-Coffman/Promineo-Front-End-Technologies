//GLOBAL VARIABLES 

const suits = ['Diamonds', 'Hearts', 'Clubs', 'Spades'];
const values = ['Ace',2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
let player1Points = 0, player2Points = 0;


function startGame()
{
    player1Points = 0, player2Points = 0;
    //create deck of cards
    let mainDeck = buildMainDeck();
    mainDeck = shuffle(mainDeck);
    // console.log(mainDeck);
    let player1Deck = mainDeck.splice(0,26); //This cuts them in half, but they are shuffled, soo
    let player2Deck = mainDeck.splice(0,26);
    // console.log(player1Deck);
    // console.log(player2Deck);

    //play the game until either player runs out of cards
    while(player1Deck.length > 0 && player2Deck.length> 0)
    {
        let player1Card = player1Deck.pop();
        let player2Card = player2Deck.pop();

        console.log(`Player Played: ${player1Card.name} \n Computer Played: ${player2Card.name}`);

        whoWon(player1Card, player2Card);
    }
    console.log(`THANKS FOR PLAYING`);
}

function buildMainDeck()
{
    let deck = [];
    for(let i = 0; i < suits.length; i++)
    {
        for(let j = 0; j < values.length; j++)
        {
            let card = {name: `${values[j]} of ${suits[i]}`, value: j};
            deck.push(card);
        }
    }
    return deck;
}

function shuffle(unshuffledDeck) {
    //USES the fisher-yates shuffle algorithm https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
    let currentIndex = unshuffledDeck.length;
    let randomIndex = 0; 

    while(currentIndex != 0)
    {
        //pick an element

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        //swap random and current. 
        [unshuffledDeck[currentIndex], unshuffledDeck[randomIndex]] = [unshuffledDeck[randomIndex], unshuffledDeck[currentIndex]];

    }
    return unshuffledDeck;
    
}

function whoWon(playerCard, computerCard)
{
    if(playerCard.value > computerCard.value)
    {
        player1Points++;
        console.log(`Player Wins 1 point`);
    }
    else if(playerCard.value < computerCard.value)
    {
        player2Points++;
        console.log('Computer Wins 1 point');

    }
    else
    {
        console.log('Tie. No points awarded');
    }

    console.log(`Current Points: 
    Player: ${player1Points}
    Computer: ${player2Points}`);
}