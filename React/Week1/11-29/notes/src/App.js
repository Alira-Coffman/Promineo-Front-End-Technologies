import logo from './logo.svg';
import './App.css';
import Car from './components/Car';
import { AddButton } from './components/AddButton';
import Buttons from './components/Buttons';
import User from './components/User';
import Header from './components/Header';
import HeaderFunct from './components/Header-Funct';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />

        <HeaderFunct value='a prop'/>
        <User firstName='James' lastName='Bond'/>

        <img src={logo} className="App-logo" alt="logo" />
        <Car make='GMC' model='Safari' color='red'/>
       <Buttons />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
