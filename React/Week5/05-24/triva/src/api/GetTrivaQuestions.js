export default function GetTrivaQuestions()
{
    fetch('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple')
    .then(response => response.json())
    .then(data => {console.log(data); return data});
}