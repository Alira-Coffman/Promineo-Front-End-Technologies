/* allow acces to deck of cards api */
import React, { useState } from 'react';
import Hand from './Hand';

const DeckOfCards = () => {
    const url = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';
    const [deckID , setDeckID] = useState('9kmax5ydrjo6');
    const [hand, setHand]=useState([])
    const getNewDeck = () => {
        fetch(url)
        .then(response => response.json())
        .then(data => setDeckID(data.deck_id));
    }

    const drawPlayersHand = () => {
        const apiUrl = 'https://deckofcardsapi.com/api/deck/' + deckID+'/draw/?count=2';
        fetch(apiUrl)
        .then(response => response.json())
        .then(data => setHand(data.cards));
    }
   
    return(
        <>
        
        <button onClick={getNewDeck}>Get a deck of cards</button>
        <button onClick={drawPlayersHand}>New Game</button>
        {deckID}
       
        
        <Hand cards={hand} />
        
        </>
       
    )
    
}


export default DeckOfCards;
