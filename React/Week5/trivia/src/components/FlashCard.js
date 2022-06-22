import React, { useState } from "react";
import { Card, Form , Container} from "react-bootstrap";

const FlashCard = ({question, answer, incorrect}) => {
    {/**When card is clicked display answer, when clicked again display question */}

    function shuffleArray(array) {
        let i = array.length - 1;
        for (; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
        return array;
      }
    const [flip, setFlip] = useState(false);

    const allAnswers = [...incorrect, answer];
    console.log(allAnswers)
    
    return(
        <Container>
        <Card className="bg-info">
            <Card.Body>{question}
            
            {/**Loop over incorrect and display radio options */}
            
            <Form>
            {allAnswers.map((i) => 
            
                <div key={`inline-${question}`} className="mb-3"  onClick={() => setFlip(true) }>
                <Form.Check
                  inline
                  label={i}
                  name="group1"
                  type='radio'
                  id={`inline-${i}-${question}-1`}
                  isValid = {flip && i === answer}
                  isInvalid = {flip && i !== answer}
                />
                </div>
            )}
            </Form>
            </Card.Body>
        </Card>
        </Container>
    )


}
export default FlashCard;