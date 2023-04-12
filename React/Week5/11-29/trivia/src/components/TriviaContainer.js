import React, {useState, useEffect} from "react";
import { Container } from "react-bootstrap";
import TriviaCard from "./TriviaCard";

export default function TriviaContainer() {
    const [loading, setLoading] = useState(false);
	const [options, setOptions] = useState(null);
	useEffect(() => {
	    const apiUrl = `https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=boolean`;
	
	    setLoading(true);
	
	    fetch(apiUrl)
	      .then((res) => res.json())
	      .then((response) => {
					setLoading(false);
	        setOptions(response);
	      });
	  }, [setOptions]);
	
	if (!loading) {
		return (
		  <div>
            { console.log(options)}
        {
           
             options && options.results.map((question) => (
				<TriviaCard key={question.question} question={question.question} answers={[question.correct_answer, ...question.incorrect_answers]} correctAnswer={question.correctAnswer} />

              ))}
		</div>
		);
	} else {
		<p>
      LOADING...
    </p>
	}
}