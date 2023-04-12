// https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=boolean

export default function GetTriviaQuestions(){
    return fetch('https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=boolean')
    .then(response => response.json())
    .then(data => {console.log('data ',data); return data});
}