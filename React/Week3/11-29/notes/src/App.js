import logo from './logo.svg';
import './App.css';
import Person from './components/Person';
import FunctPerson from './components/FunctPerson';

function App() {
  return (
    <div className="App">
      <Person firstName ="Bob" lastName = "Smith" career="Chef" age={35}/>
      <FunctPerson firstName ="Bob" lastName = "Smith"/>

      <FunctPerson firstName ="Bob1" lastName = "Smith"/>

      <FunctPerson firstName ="Bob2" lastName = "Smith"/>

    </div>
  );
}

export default App;
