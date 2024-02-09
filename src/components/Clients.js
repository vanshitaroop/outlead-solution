import React from "react";
import { useEffect, useState, useRef } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "react-multi-carousel/lib/styles.css";
import "./text.css";
import Slider from "react-slick";
// import { FaQuoteLeft } from "react-icons/fa";
// import { Whatwedo } from "./Whatwedo";
// import img1 from "../assets/img/Hitechlogo.png";
// import img2 from "../assets/img/client4.png";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay, Pagination, Navigation, FreeMode } from 'swiper/modules';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import Switch from '@mui/material/Switch';

// Import Swiper styles




// import Slider from "react-slick";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";


const images = [
  'Sources/images/logos/prepseed.png',
  'Sources/images/logos/chartered.png',
  'Sources/images/logos/craftezy.png',
  'Sources/images/logos/shivtex.png',
  'Sources/images/logos/rdt.png',
  'Sources/images/logos/cidroy.png',
  'Sources/images/logos/adira.png',
  'Sources/images/logos/drashti.png',
  'Sources/images/logos/FA.png',
  'Sources/images/logos/Bim.png',
  'Sources/images/cardinal.png',
  'Sources/images/logos/digvijay.png',
  'Sources/images/logos/64.png',
  'Sources/images/logos/adrija.png',
  'Sources/images/logos/age.png',
  'Sources/images/logos/archbude.png',
  'Sources/images/logos/bbg.png',
  'Sources/images/logos/beacon.png',
  'Sources/images/logos/biochem.png',
  'Sources/images/logos/bluefire.png',
  'Sources/images/logos/Bsquare.png',
  'Sources/images/logos/hitech.png',
  'Sources/images/logos/ninefive.png',
  'Sources/images/logos/qutone.png',
  'Sources/images/logos/book.png',
  'Sources/images/logos/braincuber.png',
  'Sources/images/logos/codertrails.png',
  'Sources/images/logos/divya.png',

  'Sources/images/logos/enable.png',
  'Sources/images/logos/estrella.png',
  'Sources/images/logos/finanvo.png',
  'Sources/images/logos/gloline.png',
  'Sources/images/logos/gramvaani.png',
  'Sources/images/logos/h4healing.png',
  'Sources/images/logos/happick.png',
  'Sources/images/logos/inspire.png',
  'Sources/images/logos/maak.png',
  'Sources/images/logos/mandir.png',
  'Sources/images/logos/mastersoft.png',
  'Sources/images/logos/online.png',
  'Sources/images/logos/pet.png',
  'Sources/images/logos/poas.png',
  'Sources/images/logos/savory.png',
  'Sources/images/logos/scones.png',
  'Sources/images/logos/shinkhan.png',
  'Sources/images/logos/simplso.png',
  'Sources/images/logos/softco.png',
  'Sources/images/logos/techmyntra.png',
  'Sources/images/logos/v.png',
  'Sources/images/logos/valuemize.png',
];

export const Clients = () => {
  // const label = { inputprops: { "area-lable": "switch demo" } };
  // const [darkMode, setdarkMode] = useState(false)

  // Reference to the carousel element
  const carouselRef = useRef(null);

  // Function to move to the next slide
  const nextSlide = () => {
    const carousel = carouselRef.current;
    const nextButton = carousel.querySelector('.carousel-control-next');
    nextButton.click();
  };

  // Set the interval for automatic slide transitions (e.g., every 5 seconds)
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change 5000 to the desired interval in milliseconds
    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <>
      <div class="nine not-for-mobile" style={{ marginTop: "100px" }}>
        
        <h1>
          <span>
            <h2>Our Key Clients</h2>
            {/* <Switch {...label} defaultChecked checked={darkMode} onChange={() =>
              setdarkMode(!darkMode)
            } /> */}
          </span>
        </h1>
      </div>
      <div className="container mb-5">
        <div className="container not-for-mobile mt-5">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              freeMode={true}
              // pagination={{
              //   clickable: true,
              // }}
              breakpoints={{
                768: { // Breakpoint for mobile devices (screens with width >= 768px)
                  slidesPerView: 3, // Use colon here instead of equals sign
                  spaceBetween: 10, // Use colon here instead of equals sign
                  // Add more breakpoints as needed
                }
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Pagination, Navigation, FreeMode]}
              className="mySwiper">
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img src={image} alt={`Slide ${index + 1}`} className="client-logo" />
                </SwiperSlide>
              ))}
            </Swiper>




        </div>
        <br />
        <br />
        <br />
      
        <div style={{ margin: "auto", textAlign: "center" }}>
          <Link
            to="/AllClients"
            className="GAQ"
            
          >
            Explore
          </Link>
        </div>  <div className="section-padding"></div>

        {/* <div class="containerClient " style={{ paddingBottom: "120px" }}>
          <div class="carousell">
            <div class="carousel__facee">
              <span></span>
            </div>
            <div class="carousel__facee">
              <span></span>
            </div>
            <div class="carousel__facee">
              <span></span>
            </div>
            <div class="carousel__facee">
              <span></span>
            </div>
            <div class="carousel__facee">
              <span></span>
            </div>
            <div class="carousel__facee">
              <span></span>
            </div>
            <div class="carousel__facee">
              <span></span>
            </div>
            <div class="carousel__facee">
              <span></span>
            </div>
            <div class="carousel__facee">
              <span></span>
            </div>
          </div>
        </div> */}
      </div >

    </>

  );
};
