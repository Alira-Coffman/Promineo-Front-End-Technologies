/**
 * 
 * Purpose: Displays all cards on the table & sum of the cards & 
 * 
 * Possibly: dispays buttons
 */


import { useEffect, useState } from "react"
import Hand from "../Hand/Hand";

export default function GameBoard()
{
    const url = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'

    //state 
    const [deckID, setDeckID] = useState('0drmlgvg21b5')
    const [hand, setHand] =useState([]); //change use the pile api

    //Get a deck of cards

    const getNewDeck = () => {
        fetch(url)
        .then(response => response.json())
        .then(data => {setDeckID(data.deck_id);});
    }

    const drawNewCard = () => {
        const apiURL = `https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`;
        fetch(apiURL)
        .then(response => response.json())
        .then(data => setHand(data));
    }

    const createHand = () => {
        const apiURL = `https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=2`;
        fetch(apiURL)
        .then(response => response.json())
        .then(data => setHand(data));
    }

    return(
        <>
            {deckID}

            <button className='btn btn-primary' onClick={getNewDeck}>Get a new deck of cards</button>


            <button onClick={drawNewCard}>Draw A Card</button>

            <Hand deckID={deckID} pileName='playerHand' drawnCards={hand}  />
 
        </>
    )
}