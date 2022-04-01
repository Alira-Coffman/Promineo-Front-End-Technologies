import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Signup from './pages/Signup';
import WeatherCard from './components/WeatherCard';
import Weather from './pages/Weather';
function App() {
  return (
    <div >
      {/* <WeatherCard date='today' hum='10'/>
      <WeatherCard date='today' hum='10'/>
      <WeatherCard date='today' hum='10'/>
      <WeatherCard date='today' hum='10'/> */}


      <Weather />
    </div>
  );
}

export default App;
