import logo from './logo.svg';
import './App.css';
import { AddButton } from './component/Button';
import { Car } from './component/Car';
function App() {
  return (
    <div className="App">
      <Car />
      <AddButton/>
    </div>
  );
}

export default App;
