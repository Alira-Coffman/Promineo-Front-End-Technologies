import logo from './logo.svg';
import './App.css';
import Car from './components/Car';
import { Navigation } from './components/Navigation/Navigation';
import { ContactForm } from './components/ContactForm/ContactForm';
function App() {
  return (
    <div >
     
     <Navigation />

     <Car make='GMC' model='Safari' color='red'/> 
      <ContactForm />
    </div>
  );
}

export default App;
