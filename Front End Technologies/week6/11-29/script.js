//closest you get to 21, you win.
///dealers hand
//players hand

let DECK_ID = '';
let API_URL ='https://deckofcardsapi.com/api/deck/';
let PLAYER_1 = 'PLAYER1HAND';
let Player_2 = 'PLAYER2HAND'


//buttons: deal - 2 cards. 
// - draw a card - 1 card

$.ajaxSetup({async: false});
//functionality
// new game - new deck of cards. 
function shuffleDeck(){
    //get, post, put, delete
    $.get(
        `${API_URL}${DECK_ID}/shuffle/`, (data, status) => {
            console.log('I AM SHUFFLING',data, status)
        }
    );
    
}
//create a new deck of cards for a game. 
function newDeck() {
    //get call,
    //update deckid.
    $.ajax(
        {
            url: `${API_URL}new`,
            type: 'GET',
            success: function(res)
            {
                console.log(res);
                DECK_ID= res.deck_id;
                console.log(DECK_ID);
              
            },
           
        }
    )
}

//draw a card from the main deck and place into the players hand

function drawCards(count)
{
    //https://deckofcardsapi.com/api/deck/<<deck_id>>/pile/<<pile_name>>/draw/?count=2

    $.get(
        `${API_URL}${DECK_ID}/draw/?count=${count}`, 
        (data, status) => {
            let cardsToAdd = [];
            console.log('I AM dealing ', count, ' number of cards ',data, status)
            data?.cards.map(card=> {
                cardsToAdd.push(card.code);
            });
           
            $.get(
                `${API_URL}${DECK_ID}/pile/${PLAYER_1}/add/?cards=${cardsToAdd.toString()}`, 
                (data, status) => {
                  
                    console.log('I AM adding ',data, status)
                    
                }
            );
        }
    );
}

function dealCards(isFirstDraw)
{
    let cards = '';
    drawCards(2);
    console.log(cards)
    //deal our cards. 
    // if(isFirstDraw)
      
    // else
    //     cards = drawCards(1);
    //https://deckofcardsapi.com/api/deck/<<deck_id>>/pile/<<pile_name>>/draw/?count=2

       
}


function addImage(imgSrc)
{

}

// checkscore - are you over 21 points
function checkScore()
{

}

function createGame()
{
    newDeck();
    shuffleDeck()
    dealCards(true);
}




