
import React, { useState } from 'react';
import Hand from '../PlayersHand/Hand';
const Table = () => {
    let points = 0;
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
   
    const drawNewCard = () => {
        const apiUrl = 'https://deckofcardsapi.com/api/deck/' + deckID+'/draw/?count=1';
        fetch(apiUrl)
        .then(response => response.json())
        .then(data =>{setHand([...hand, data.cards[0]]); console.log(data); calculateTotal()}  );
    }
   
    const calculateTotal = () => {
        points = 0;
        hand.map((card) => {
            //returns true if does not contain a valid number handle for jack queen etc
            if(isNaN(card.value))
            {
                switch(card.value)
                {
                    case 'ACE':
                        points += 1;
                        break;
                    case 'JACK':
                        points += 10;
                        break;
                    case 'KING':
                        points += 12;
                        break;
                    case 'QUEEN':
                        points += 11;
                        break;
                    default:
                        console.log('error');
                        break;
                }
            }
            else
            {
                points += parseInt(card.value);
            }
        })
        console.log('point calc', points)
        return points;
    }
    return(
        <>
        
        <button className='btn btn-primary' onClick={getNewDeck}>Get a new deck of cards</button>
        <button className='btn btn-secondary' onClick={drawPlayersHand}>Start Game</button>
        <p>{deckID}</p>
       
        
        <div className="container">
            <button className="btn btn-secondary" onClick={drawNewCard}>Draw Another Card</button>
        </div>
       
        {console.log('Players Hand', hand)}
       <Hand cards ={hand}/>
        
        </>
    )
}
export default Table;