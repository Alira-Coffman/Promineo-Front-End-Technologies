
import React, { useState } from 'react';

const Hand = (cards = []) => {
    console.log(cards);
   
    return(
         <>
           <div className='d-flex justify-content-start'>
               { cards.cards.length > 0 && cards.cards.map(x => {
                   return (
                       <div>
                           <img src = {x.image} className='w-50' alt='card'/>
                       </div>
                   )
               })}
                </div>
       
        </>
    )
}
export default Hand;