
import './App.css';
import { Navbar } from './components/Navbar';

import { Route, Routes } from "react-router-dom";

import { ContactCeo } from './components/ContactCeo';
import { Testting } from './components/Testting';
import { Testimonial } from './components/Testimonial';
import { Footer } from './components/Footer';
import { Navbartry } from './components/Navbartry';
import { Mainpage } from './components/Mainpage';
// import { Navbartry } from './components/Navbartry';
function App() {
  return (
    <div className="App">
      <Navbartry/>
      <Routes>
          <Route exact path="/" element={<Mainpage/>} />
          <Route exact path="/about" element={<ContactCeo/>} />
          {/* <Route exact path="/login" element={<Login showAlert={showAlert} />} />
          <Route exact path="/signup" element={<Signup showAlert={showAlert} />} /> */}
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
