function startGame() {
    const deck1 = new deck();
    
    const player1 = new player(deck1.deck.splice(0,26));
    const player2 = new player(deck1.deck.splice(0,26));
    //console.log(player1.playerDeck);

    while(player1.playerDeck.length > 0 && player2.playerDeck.length > 0)
    {
        let player1Card = player1.playCard();
        let player2Card = player2.playCard();

        
    }



}

class player {
    constructor(deck)
    {
        let playerDeck = [];
        this.setPlayerDeck(deck);
       let  points = 0;
    }
    playCard()
    {
        return this.playerDeck.pop();
    }
    setPlayerDeck(deck)
    {
        this.playerDeck = deck;
    }
    addPoint()
    {
        this.points++;
    }
}


//deck class
class deck{
    constructor() {
        this.deck = [];
        this.createDeck();
        this.shuffle();
    }
    shuffle()
    {
        //USES the fisher-yates shuffle algorithm https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
        const deck = this.deck;
        let currentIndex = deck.length;
        let randomIndex = 0; 

        while(currentIndex != 0)
        {
            //pick an element

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            //swap random and current. 
            [deck[currentIndex], deck[randomIndex]] = [deck[randomIndex], deck[currentIndex]];

        }
        
    }
    deal(){
        return this.deck.pop();
    }
    createDeck()
    {
        const suits = ['Diamonds', 'Hearts', 'Clubs', 'Spades'];
        const values = ['Ace',2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

        //create a deck.

        for(let i = 0; i < suits.length; i++)
        {
            for(let j = 0; j < values.length; j++)
            {
                let card = {name: `${values[j]} of ${suits[i]}`, value: j};
                this.deck.push(card);
            }
        }
    }

}

