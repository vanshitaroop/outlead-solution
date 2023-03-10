import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Navbartry } from './components/Navbartry';
import { Whatwedo } from './components/Whatwedo';
import { Process } from './components/Process';
function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      {/* <Navbartry/> */}
      <Home/>
      <Whatwedo/>
      <Process/>
    </div>
  );
}

export default App;
