import React, {useState} from "react";
import { Container } from "react-bootstrap";
import GetTriviaQuestions from "../api/GetTriviaQuestions";
import TriviaCard from "./TriviaCard";

export default function TriviaContainer() {

    const [questions, setQuestions] = useState(GetTriviaQuestions());
    console.log(questions);
    return(
        <Container>
            display here
            {
                questions && questions?.results.map((question) => {
                    <TriviaCard question={question.question} answers={[question.correct_answer, ...question.incorrect_answers]} correctAnswer={question.correctAnswer} />
                })
            }
        </Container>
    )
}