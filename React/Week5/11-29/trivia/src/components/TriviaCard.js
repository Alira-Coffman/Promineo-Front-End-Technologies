import { Card } from "react-bootstrap";

export default function TriviaCard({question, answers, correctAnswer})
{
    return(
        <Card>
            {question}

            {answers.map((answer) => {
                return answer
            })}
        </Card>
    )
}