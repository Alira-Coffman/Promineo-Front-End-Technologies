let DECK_ID = "3jdwjg68pisy";
let API_URL =  "https://deckofcardsapi.com/api/deck/" + DECK_ID;
let PLAYER_1 = 'PLAYER1HAND';
let PLAYER_2 = 'PLAYER2HAND';

$.ajaxSetup({async: false});
function newDeck(){
    $.get('https://deckofcardsapi.com/api/deck/new/', function(data){
        DECK_ID = data.deck_id;
        console.log(data);
    })
    API_URL = "https://deckofcardsapi.com/api/deck/" + DECK_ID;
}
function shuffleDeck()
{
    let shuffleUrl = API_URL + '/shuffle/';
    $.get(shuffleUrl, function(data)
    {
        console.log(data);
    })
}
function shufflePlayerHand()
{
    let shuffle_url1 = API_URL+'/pile/'+PLAYER_1 +'/shuffle/';
    let shuffle_url2 = API_URL+'/pile/'+PLAYER_2 +'/shuffle/';
    $.get(shuffle_url1, function(data)
    {
        console.log(data);
    })
    $.get(shuffle_url2, function(data)
    {
        console.log(data);
    })

    let list1 = API_URL + '/pile/'+ PLAYER_1 +'/list/';
    let list2 = API_URL + '/pile/'+ PLAYER_2 +'/list/';

    $.get(list1, function(data)
    {
        console.log(data.piles.PLAYER1HAND.cards);
    })
    $.get(list2, function(data)
    {
        console.log(data.piles.PLAYER2HAND.cards);
    })

}
function dealCards()
{
    let pile1_url = API_URL + '/pile/'+ PLAYER_1 +'/add/?cards=';
    let pile2_url = API_URL + '/pile/'+ PLAYER_2 +'/add/?cards=';
    
    //shuffle
    shuffleDeck();

    //deal to player 1
    let drawURL = API_URL + "/draw/?count=26";
    $.get(drawURL, function(data){
       
        for(let i = 0; i < 26; i++)
        {
        //    deckTemp.push(data.cards[i].code); 
           pile1_url+= data.cards[i].code + ',';
        }
    }) 
    //console.log(deckTemp);
    //add to pile https://deckofcardsapi.com/api/deck/<<deck_id>>/pile/<<pile_name>>/add/?cards=AS,2S
    $.get(pile1_url,function(data){
        console.log(data);
    })

    //deal to player2

    $.get(drawURL, function(data){
       
        for(let i = 0; i < 26; i++)
        {
        //    deckTemp.push(data.cards[i].code); 
           pile2_url+= data.cards[i].code + ',';
        }
    }) 
    $.get(pile2_url,function(data){
        console.log(data);
    })
}
function drawCards(numberOfCards)
{
    let drawURL = API_URL + "/draw/?count=" + numberOfCards;
    $.get(drawURL, function(data){
        console.log(data.cards[0].image);
        for(let i = 0; i < numberOfCards; i++)
        {
            addImage(data.cards[i].image);
        }
    })
}

function addImage(imgSrc)
{
    let img_element = document.createElement("img");
    img_element.src = imgSrc;
    console.log(img_element);

    let drawnCardsDiv = document.getElementById('drawnCards');
    drawnCardsDiv.appendChild(img_element);
}
function drawRandom(player)
{
   let drawRandom =  API_URL+ '/pile/'+player +'/draw/random/';
   $.get(drawRandom, function(data){
    for(let i = 0; i < data.cards.length; i++)
    {
        addImage(data.cards[i].image);
    }
})
}