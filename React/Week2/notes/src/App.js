import logo from './logo.svg';
import './App.css';
import Clock from './component/Clock';
import FunctionalComponent from './component/FunctionalComponent';
import CarFunctional from './component/CarFunctional';

function App() {
  return (
    <div className="App">
      <FunctionalComponent />

      <CarFunctional />
    </div>
  );
}

export default App;
