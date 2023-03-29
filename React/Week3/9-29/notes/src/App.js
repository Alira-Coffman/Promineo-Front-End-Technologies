import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import UserList from './components/UserList';


function App() {
  return (
    <>
    <Header h_text='Hello World' paragraph='text' />
    
    <UserList/>
    </>
  );
}

export default App;
