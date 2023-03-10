import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';

import { Whatwedo } from './components/Whatwedo';
import { Process } from './components/Process';
import { Clients } from './components/Clients';

import { Testting } from './components/Testting';
function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      {/* <Navbartry/> */}
      <Home/>
      <Whatwedo/>
      <Clients/>
      <Testting/>
      <Process/>
      
    </div>
  );
}

export default App;
