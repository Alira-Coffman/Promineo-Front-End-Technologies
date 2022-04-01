import React, { useState } from "react";
import { Card } from "react-bootstrap";

const FlashCard = ({question, answer}) => {
    const [flip, setflip] = useState(false);
return(

  <Card className='mx-2' style={{ width: '18rem' ,backgroundColor: 'lightblue'}} onClick={() => setflip(!flip)}>
  <Card.Body>
    <div className={`${flip ? 'd-none' : ''}`}>
    {question}
    </div>
    
    <div className={`${flip ? '' : 'd-none'}`}>
    {answer}

    </div>
    
    
  </Card.Body>
</Card>
)


}
export default FlashCard;