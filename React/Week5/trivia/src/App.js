import React, { useEffect ,useState} from 'react';
import FlashCard from './components/FlashCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
const API_URL = 'https://opentdb.com/api.php?amount=10';


function App() {
    const [items, setItems]= useState(null);
  useEffect(() => {
    fetch(API_URL)
    .then(res => res.json())
    .then(
      (result) => { setItems(result); console.log(result)})
  }, []);
  return (
    <div className="d-flex justify-content-between">
      

      {items.results.map((item) => (

      <FlashCard question={item.question} answer={item.correct_answer}/>
      ))}

    </div>
  );
}

export default App;
