import logo from './logo.svg';
import './App.css';
// import Car from './components/Car/Car';
import Garage from './components/Garage';
import { Component } from 'react';
function App() {
  return (
    <div>
      {/* <Car make='GMC' model='SAFARI' year='2002' randomArray={[1,2,3,4,5,6]}/>
      <Car {...{make:'GMC', model:'SAFARI', year:'2002', randomArray:[1,2,3,4,5,6]}} />
 */}

  <Garage />

  
      
    </div>
  );
}

export default App;
