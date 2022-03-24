/*hold cards player has for the round */

import React from 'react';

const Hand = (cards = []) => {
    return( 
            <>
           <ul>
               {cards.cards.map(x => {
                   return (
                       <div>
                           <img src = {x.image} />
                       </div>
                   )
               })}
                </ul>
          
            
            </>
            
        
        )
}

export default Hand;
