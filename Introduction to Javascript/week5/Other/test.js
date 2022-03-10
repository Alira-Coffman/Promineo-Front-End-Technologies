var suits = ['H', 'S', 'C', 'D']; //card suits
var values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10','J', 'Q', 'K']; //value of each card
class Cards{
    constructor(suit, value){
        this.suit = suit;
        this.value = value;
    }
}
class Deck {
    constructor(cards = freshDeck()){
        this.cards = cards;
    }
    get numberOfCards(){
        return this.cards.length;
    }
    shuffle(){
        for(let i = numberOfCards  - 1; i > 0; i--) {
            var newIndex = Math.floor(Math.random()*(i + 1));
            var oldValue = this.cards[newIndex];
            this.cards[newIndex] = this.cards[i];
            this.cards[i] = oldValue;
    }
    }
}
function freshDeck(){
    return suits.flatMap(suit => {
        return values.map( value => {
            return new Cards (suit, value);
        });
    });
}
// // combines suits and values
