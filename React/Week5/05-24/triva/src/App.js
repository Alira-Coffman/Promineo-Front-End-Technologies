import logo from './logo.svg';
import './App.css';
import GetTrivaQuestions from './api/GetTrivaQuestions';

//https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple
function App() {
  let data = GetTrivaQuestions();
  return (
    <></>
  );
}

export default App;
