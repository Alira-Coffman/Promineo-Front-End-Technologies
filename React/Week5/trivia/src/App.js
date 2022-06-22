import React, { useEffect ,useState} from 'react';
import FlashCard from './components/FlashCard';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
const API_URL = 'https://opentdb.com/api.php?amount=10';


function App() {
    //const apiData = fetch(API_URL).then(res => res.json()).then((result) => {console.log(result)});
    const [items, setItems] = useState(null);
    useEffect(() => {
        fetch(API_URL)
        .then(res => res.json())
        .then(
          (result) => { setItems(result); console.log(result)})
      }, []);
    return (
          <div>
              {/** Loop over results and have a card for each question */}
              {/* {items != null && items.results[0].question} */}
              {items != null && items.results.map((i) =>(
                 
                      <FlashCard question={i.question} answer={i.correct_answer} incorrect={i.incorrect_answers}/>
                  

              ))}
        
    </div>
    )
  
}

export default App;
