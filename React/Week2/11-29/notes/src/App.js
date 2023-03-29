import logo from './logo.svg';
import './App.css';
import Car from './components/Car';
import Button from './components/Button';
import Person from './components/Person';
import PersonOne from './components/PersonOne';
function App() {
  let trait_arr = ['good', 'evil', 'fun', 'silent'];

  
  return (
    <div className="App">
      <Car make ='GMC' model='Safari' year='2007'/>
      <Car {...{make: 'Ford', model: 'f150', year:'2012'}}/>
      <Button text = 'Click Me!' />
      <Person trait ='funny'/>

      {
        trait_arr.map(((t, i) => {
          return <Person trait={t} key={i}/>
        }))
      }


    </div>
  );
}

export default App;
