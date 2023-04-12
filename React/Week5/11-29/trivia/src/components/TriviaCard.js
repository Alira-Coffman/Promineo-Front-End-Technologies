import { Card } from "react-bootstrap";

export default function TriviaCard({question, answers, correctAnswer})
{
    return(
        <Card>
            <Card.Title>{question}</Card.Title>
            <Card.Text>
                <ul>
                {answers.map((answer) => {
                    return <li>{answer}</li>
                })}
                </ul>
            </Card.Text>
        </Card>
    )
}