import logo from './logo.svg';
import Header from './components/Header/Header';
import './App.css'
import Todo from './components/TodoList/Todo';
function App() {
  return (
    <div className="App">
      <Header/>
      <Todo/>
    </div>
  );
}

export default App;
