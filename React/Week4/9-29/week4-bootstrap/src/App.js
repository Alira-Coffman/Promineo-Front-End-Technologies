import logo from './logo.svg';
import './App.css';
import ContactForm from './Components/ContactForm';
import { useLocation } from 'react-router-dom';
function App() {
  let { state } = useLocation();
  console.log(state);
  return (
   <h1>I am home</h1>
  );
}

export default App;
