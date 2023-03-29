/**
 * 
 * Purpose: Show/Store the cards in Hand. 
 * Possibly: handle logic of hit or stay
 */

import { useEffect , useState} from "react";
import PointCounter from "../PointCounter/PointCounter";

//PARENT COMPONENT OF POINTS
export default function Hand({drawnCards, pileName, deckID})
{

    const [hand, setHand] = useState([]);

    //VALUES WE WILL GET FROM CHILD COMPONENT
    const [endGame, setEndGame] = useState(false);
    //addToPile
    const updateHand = (...cardsToAdd) => {
        console.log('cards to add'. cardsToAdd);
        
            const apiURL = `https://deckofcardsapi.com/api/deck/${deckID}/pile/${pileName}/add/?cards=${cardsToAdd}`;
            fetch(apiURL)
            .then(response => response.json())
            .then(data => {console.log(data); playerHand();});
       
       
    }

    const playerHand = () => {
        const apiURL = `https://deckofcardsapi.com/api/deck/${deckID}/pile/${pileName}/list`

        fetch(apiURL)
            .then(response => response.json())
            //replace playerHand with pileName
            .then(data => {console.log('data ', data); setHand(data?.piles?.playerHand?.cards); console.log(hand)});
    }
    const handleEndGameBubble = (e) =>
    {
        //this should not be a win condition. Change to end game condition. 
       setEndGame(e);

       console.log('e ', e)
       
    }

    useEffect(()=>{

        let code = [];
        //loop through drawnCards 
        drawnCards.cards && drawnCards.cards.map(card => { 
            
            //add code to an array
            code.push(card.code);
        })

        console.log(code)
       
        updateHand(code);

        // playerHand();

    },[drawnCards])
    return(
        <>
    {!endGame && <>
     {/* {hand[0] && hand[0].code} */}
     <PointCounter cards={hand} endGameFunct={handleEndGameBubble}/>
     {hand && hand?.map(card => {
         return (
             <>
             
             <img src={card.images.svg} alt={card.code} />
             </>
         )        
         })}
     </>
    }
       </>
    )


    /**if endgame == true, then show restart button. 
     * send restart state to parent(game board) to get a new deck id
     * */
}