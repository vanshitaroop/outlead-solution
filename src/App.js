
import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';

import { Whatwedo } from './components/Whatwedo';
import { Process } from './components/Process';
import { Clients } from './components/Clients';

import { Testting } from './components/Testting';
import { Testimonial } from './components/Testimonial';
import { Footer } from './components/Footer';
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
      <Testimonial/>
      <Footer/>
    </div>
  );
}

export default App;
