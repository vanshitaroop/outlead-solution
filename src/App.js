import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Navbartry } from './components/Navbartry';
function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Navbartry/>
      <Home/>
    </div>
  );
}

export default App;
