
import './App.css';
import { Navbar } from './components/Navbar';

import { Route, Routes } from "react-router-dom";

import { ContactCeo } from './components/ContactCeo';
import { Testting } from './components/Testting';
import { Testimonial } from './components/Testimonial';
import { Footer } from './components/Footer';
import { Navbartry } from './components/Navbartry';
import { Mainpage } from './components/Mainpage';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Services } from './components/Services';
import { Blogs } from './components/Blogs';
// import { Navbartry } from './components/Navbartry';
function App() {
  return (
    <div className="App">
      <Navbartry/>
      <Routes>
          <Route exact path="/" element={<Mainpage/>} />
          <Route exact path="/contactCeo" element={<ContactCeo/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/portfolio" element={<Portfolio/>}/>
          <Route exact path="/services" element={<Services/>}/>
          {/* <Route exact path="/blogs" element={<Blogs/>}/> */}
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
