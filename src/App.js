
import './App.css';
import { Navbar } from './components/Navbar';
import { useEffect,useState } from "react";
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
import AllClients from './components/AllClients';
// import { Navbartry } from './components/Navbartry';
import img1 from "./assets/img/bulb-on.png"
function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('darkMode') === 'light-mode' ? 'light-mode' : 'dark-mode'
  );

  const toggleClick = () => {
    // Toggle darkMode value between "dark-mode" and "light-mode"
    const newMode = darkMode === 'dark-mode' ? 'light-mode' : 'dark-mode';
    setDarkMode(newMode);
    // Store the new mode preference in localStorage
    localStorage.setItem('darkMode', newMode);
  }

  useEffect(() => {
    // Update document body class whenever darkMode changes
    document.body.className = darkMode;
  }, [darkMode]);

  return (
    <div className="App">
      <Navbartry/>
      <Routes>
          <Route exact path="/" element={<Mainpage/>} />
          <Route exact path="/contactCeo" element={<ContactCeo/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/portfolio" element={<Portfolio/>}/>
          <Route exact path="/services" element={<Services/>}/>
          <Route exact path="/blogs" element={<Blogs/>}/>
          <Route exact path="/AllClients" element={<AllClients/>}/>

        </Routes>
      <button onClick={toggleClick} className='theme-switch-btn'><img src={img1} alt="" /></button>
      <Footer/>
    </div>
  );
}

export default App;
