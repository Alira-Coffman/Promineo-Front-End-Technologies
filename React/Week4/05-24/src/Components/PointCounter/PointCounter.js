/**
 * 
 * Purpose: Showcase the current points a user has.
 */

import { useState, useEffect } from "react";

//CHILD COMPONENT OF HAND
export default function PointCounter({cards , endGameFunct})
{
    //calculate points
    const [points, setPoints] = useState(0);

    const [win, setWin] = useState(false);


    console.log(cards);

   

    useEffect(()=>{

       //parseInt(Value)

       //loop through array, and add all card.value

       let pointValue = 0;

       let jack = 11, queen = 12, king = 13, ace = 1;

       //NOTE: POSSIBLE IMPROVEMENT, not tested. 
       //Set an object {JACK: 11, QUEEN: 12 ..} `faceCards.${card.value}`


       //set value for jack =11, queen =12, king =13, ace = 1
       cards.map(card => {
        if(card.value == 'JACK')
            pointValue += jack;
        else if(card.value == 'QUEEN')
            pointValue += queen;
        else if(card.value == 'KING')
            pointValue += king;
        else if(card.value == 'ACE')
            pointValue += ace;
        else
            pointValue += parseInt(card.value);
       })
       console.log(pointValue)

       setPoints(pointValue);


       if(pointValue > 21)
       {
        setWin(false);
        console.log('You have lose')
        endGameFunct(true)
       }
       else if(pointValue == 21)
       {
        setWin(true);
        console.log('you win');
        endGameFunct(true)
       }
       else
       {
        console.log('nothing')
       }
        
    },[cards])


    //Optional: function to calculate the points

    return (
        <>
        points:  {points}
        </>
    )
}