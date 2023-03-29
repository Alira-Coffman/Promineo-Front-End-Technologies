import logo from './logo.svg';
import './App.css';
import Table from './components/Table/Table'
import FunctionalComponent from './components/FunctionalComponent';
import Users from './components/Users';
import SpreadOperator from './components/SpreadOperator';
function App() {
  return (
    <div className="container text-center">
      <h2>BlackJack</h2>
      <Table />

      {/* <FunctionalComponent countStart={1} increment={1}/> */} 

      {/* <Users />*/}

      {/* <SpreadOperator /> */}
    </div>
  );
}

export default App;
