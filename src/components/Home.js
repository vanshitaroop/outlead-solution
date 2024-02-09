import React from "react";
import bg from "../assets/img/man.png";
import elements from "../assets/img/elements.png";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";


export const Home = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 150);
  const [index, setIndex] = useState(1);
  // Check if there's a dark mode preference in localStorage, otherwise default to "dark-mode"
  // Check if there's a dark mode preference in localStorage, otherwise default to "dark-mode"
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

  const toRotate = [
    "Lead Generation for B2B Businesses",
    "Branding & Marketing for B2C Businesses",
    "Logo Designing & Website Development",
    // "Social Media Marketing",
  ];


  const period = 2000;
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);
  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };
  return (
    <>
      <div className="hero">
        <div className="rowtemp">
          <div className="col-1">
            <img src={bg} alt="" />
            <img src={elements} className="elements" alt="" />
          </div>
          <div className="col-2 col-2-mob" >
            {/* <button onClick={toggleClick}><img src={img1} alt="" /></button> */}
            <h1 className="hero-main-heading" data-aos="fade-left" data-aos-duration="1000">
              Outlead Solutions
              <br />
              <span style={{ color: "orange" }}>Business Development </span>
              Agency
            </h1>
            {/* <h1> {`Hi I m vanshita, A `} <span className="wrap">{text}</span> </h1> */}
            <br />
            <div
            className="typer-back"
              // style={{
              //   // backgroundColor: "white",
              //   width: "fit-content",
              //   borderRadius: "20px",
              // }}
            >
              <h3 className="p-3" style={{ color: "black" }} data-aos="fade-up" data-aos-duration="1000">
                {" "}
                {"We do "}{" "}
                <span className="wrap" style={{ color: "orange" }}>
                  {text}
                </span>{" "}
              </h3>
            </div>
            <br />
            <br />
            <Link to="/about" className="GAQ ">
              Learn&nbsp;More
            </Link>
            <Link to="/contactCeo" className="GAQ-mob">
              Contact
            </Link>
          </div>
        </div>
      </div>
      {/* <button onClick={toggleClick} className='theme-switch-btn'><img src={img1} alt="" /></button> */}
      
    </>
  );
};
