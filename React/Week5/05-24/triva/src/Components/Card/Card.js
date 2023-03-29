/**
 * 
 * 
 * To render the trivia question with options
 */

import { useEffect, useState } from "react";

function Card() {

    const [trivia, setTrivia] = useState()
    const url = `https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple`;

    fetch(url)
    .then(response => response.json())
    .then(data => {console.log(data); setTrivia(data)});

    let answers = trivia.question.incorrect_answers;
    answers.push(trivia.question.correct_answers);

    useEffect(() => {
        trivia.results.map(question => {

            //shuffle 
            question.all_answers = [...question.correct_answers, question.incorrect_answers];
        })
    
    }, [trivia])
    return(
        <>
        {trivia.results.map(question => {
            <>
            <div>
                {question.category}
            </div>
            <div>
                {question.question}
            </div>
            <div>
                <ul>
                    {console.log(trivia)}
                </ul>
            </div>
            </>
            
        })}


        </>
    )
}