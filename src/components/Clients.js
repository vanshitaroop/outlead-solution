import React from "react";
import { useEffect, useRef } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "react-multi-carousel/lib/styles.css";
import "./text.css";
import Slider from "react-slick";
// import { FaQuoteLeft } from "react-icons/fa";
// import { Whatwedo } from "./Whatwedo";
// import img1 from "../assets/img/Hitechlogo.png";
// import img2 from "../assets/img/client4.png";
import { Link } from "react-router-dom";
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
  'Sources/images/logos/logo2.png',
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
  'Sources/images/logos/bsquare.png',
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
const mobilelogo = [
  {
    img: "Sources/images/logos/prepseed.png",
  },
  {
    img: "Sources/images/logos/chartered.png",
  },
  {
    img: "Sources/images/logos/craftezy.png",
  },
  {
    img: "Sources/images/logos/shivtex.png",
  },
  {
    img: "Sources/images/logos/rdt.png",
  },
  {
    img: "Sources/images/logos/cidroy.png",
  },

  {
    img: "Sources/images/logos/adira.png",
  },
  {
    img: "Sources/images/logos/drashti.png",
  },
  {
    img: "Sources/images/logos/FA.png",
  },
  {
    img: "Sources/images/logos/Bim.png",
  },
  {
    img: "Sources/images/cardinal.png",
  },
  {
    img: "Sources/images/logos/logo2.png",
  },
  {
    img: "Sources/images/logos/64.png",
  },
  {
    img: "Sources/images/logos/adrija.png",
  },
  {
    img: "Sources/images/logos/age.png",
  },
  {
    img: "Sources/images/logos/archbude.png",
  }
  ,
  {
    img: "Sources/images/logos/bbg.png",
  },
  {
    img: "Sources/images/logos/beacon.png",
  },
  {
    img: "Sources/images/logos/biochem.png",
  },
  {
    img: "Sources/images/logos/bluefire.png",
  },
  {
    img: "Sources/images/logos/Bsquare.png",
  }
  ,
  {
    img: "Sources/images/logos/hitech.png",
  },
  {
    img: "Sources/images/logos/ninefive.png",
  },
  {
    img: "Sources/images/logos/qutone.png",
  },
  {
    img: "Sources/images/logos/book.png",
  },
  {
    img: "Sources/images/logos/braincuber.png",
  },
  {
    img: "Sources/images/logos/codertrails.png",
  },
  {
    img: "Sources/images/logos/divya.png",
  },
  {
    img: "Sources/images/logos/bsquare.png",
  },
  {
    img: "Sources/images/logos/enable.png",
  },
  {
    img: "Sources/images/logos/estrella.png"
  },
  {
    img: "Sources/images/logos/finanvo.png",
  },
  {
    img: "Sources/images/logos/gloline.png",
  },
  {
    img: "Sources/images/logos/gramvaani.png",
  },
  {
    img: "Sources/images/logos/h4healing.png",
  },
  {
    img: "Sources/images/logos/happick.png",
  },
  {
    img: "Sources/images/logos/inspire.png",
  },
  {
    img: "Sources/images/logos/maak.png",
  },
  {
    img: "Sources/images/logos/mandir.png",
  },
  {
    img: "Sources/images/logos/mastersoft.png",
  },
  {
    img: "Sources/images/logos/online.png",
  },
  {
    img: "Sources/images/logos/pet.png",
  },
  {
    img: "Sources/images/logos/poas.png",
  },
  {
    img: "Sources/images/logos/savory.png",
  },
  {
    img: "Sources/images/logos/scones.png",
  },
  {
    img: "Sources/images/logos/shinkhan.png",
  },
  {
    img: "Sources/images/logos/simplso.png",
  },
  {
    img: "Sources/images/logos/softco.png",
  },
  {
    img: "Sources/images/logos/techmyntra.png",
  },
  {
    img: "Sources/images/logos/v.png",
  },
  {
    img: "Sources/images/logos/valuemize.png",
  }
]
const testimonial = [
  {
    img: "Sources/images/logos/chartered.png",
  },
  {
    img: "Sources/images/logos/craftezy.png",
  },
  {
    img: "Sources/images/logos/shivtex.png",
  },
  {
    img: "Sources/images/logos/rdt.png",
  },
  {
    img: "Sources/images/logos/cidroy.png",
  },

];
const testimonialtwo = [

  {
    img: "Sources/images/logos/prepseed.png",
  },
  {
    img: "Sources/images/logos/drashti.png",
  },
  {
    img: "Sources/images/logos/FA.png",
  },
  {
    img: "Sources/images/logos/Bim.png",
  },
  {
    img: "Sources/images/cardinal.png"
  }

];
const testimonialthree = [

  {
    img: "Sources/images/logos/logo2.png",
  },
  {
    img: "Sources/images/logos/64.png",
  },
  {
    img: "Sources/images/logos/adrija.png",
  },
  {
    img: "Sources/images/logos/age.png",
  },
  {
    img: "Sources/images/logos/archbude.png"
  }

];
const testimonialfour = [

  {
    img: "Sources/images/logos/bbg.png",
  },
  {
    img: "Sources/images/logos/beacon.png",
  },
  {
    img: "Sources/images/logos/biochem.png",
  },
  {
    img: "Sources/images/logos/bluefire.png",
  },
  {
    img: "Sources/images/logos/Bsquare.png"
  }

];
const testimonialfive = [

  {
    img: "Sources/images/logos/hitech.png",
  },
  {
    img: "Sources/images/logos/ninefive.png",
  },
  {
    img: "Sources/images/logos/qutone.png",
  },
  {
    img: "Sources/images/logos/book.png",
  },
  {
    img: "Sources/images/logos/braincuber.png"
  }

];
const testimonialsix = [

  {
    img: "Sources/images/logos/codertrails.png",
  },
  {
    img: "Sources/images/logos/divya.png",
  },
  {
    img: "Sources/images/logos/Bsquare.png",
  },
  {
    img: "Sources/images/logos/enable.png",
  },
  {
    img: "Sources/images/logos/estrella.png"
  }

];
const testimonialseven = [

  {
    img: "Sources/images/logos/finanvo.png",
  },
  {
    img: "Sources/images/logos/gloline.png",
  },
  {
    img: "Sources/images/logos/gramvaani.png",
  },
  {
    img: "Sources/images/logos/h4healing.png",
  },
  {
    img: "Sources/images/logos/happick.png"
  }

];
const testimonialeight = [

  {
    img: "Sources/images/logos/inspire.png",
  },
  {
    img: "Sources/images/logos/maak.png",
  },
  {
    img: "Sources/images/logos/mandir.png",
  },
  {
    img: "Sources/images/logos/mastersoft.png",
  },
  {
    img: "Sources/images/logos/online.png"
  }

];
const testimonialnine = [

  {
    img: "Sources/images/logos/pet.png",
  },
  {
    img: "Sources/images/logos/poas.png",
  },
  {
    img: "Sources/images/logos/savory.png",
  },
  {
    img: "Sources/images/logos/scones.png",
  },
  {
    img: "Sources/images/logos/shinkhan.png"
  }

];
const testimonialten = [

  {
    img: "Sources/images/logos/simplso.png",
  },
  {
    img: "Sources/images/logos/softco.png",
  },
  {
    img: "Sources/images/logos/techmyntra.png",
  },
  {
    img: "Sources/images/logos/v.png",
  },
  {
    img: "Sources/images/logos/valuemize.png"
  }

];
export const Clients = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


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
          </span>
        </h1>
      </div>
      <div className="container mb-5">
        <div className="container not-for-mobile mt-5">
          <div className="not_for_pc">
            {/* <Slider {...settings}>
              {mobilelogo.map((item, key) => {
                return (
                  <div className="mt-5">
                    <img src={item.img} className="testo_img" />
                  </div>
                );
              })}
            </Slider> */}
            {/* {mobilelogo.map((item, key) => { */}
            <Carousel interval={2000}>
              {images.map((image, index) => (
                <Carousel.Item key={index}>
                  <img src={image} alt={`Image ${index}`}  width={300} className="testo_img"/>
                  {/* <Carousel.Caption>
                    <h3>Slide {index + 1} label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption> */}
                </Carousel.Item>
              ))}
            </Carousel>

            {/* })} */}
          </div>
          <div className="not_for_mobile">

            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
              ref={carouselRef}
            >
              <div className="carousel-inner">
                <div className="carousel-item active" >
                  <div className="cards-wrapper">
                    {testimonial.map((item, key) => {
                      return (
                        <div className="card">
                          <div className="image-wrapper">
                            <img
                              src={item.img}
                              alt="..."
                            />
                          </div>

                        </div>
                      );
                    })}

                  </div>
                </div>
                <div className="carousel-item">
                  <div className="cards-wrapper">
                    {testimonialtwo.map((item, key) => {
                      return (
                        <div className="card">
                          <div className="image-wrapper">
                            <img
                              src={item.img}
                              alt="..."
                            />
                          </div>

                        </div>
                      );
                    })}

                  </div>
                </div>
                <div className="carousel-item">
                  <div className="cards-wrapper">
                    {testimonialthree.map((item, key) => {
                      return (
                        <div className="card">
                          <div className="image-wrapper">
                            <img
                              src={item.img}
                              alt="..."
                            />
                          </div>

                        </div>
                      );
                    })}

                  </div>
                </div>
                <div className="carousel-item" >
                  <div className="cards-wrapper">
                    {testimonialfour.map((item, key) => {
                      return (
                        <div className="card">
                          <div className="image-wrapper">
                            <img
                              src={item.img}
                              alt="..."
                            />
                          </div>

                        </div>
                      );
                    })}

                  </div>
                </div>
                <div className="carousel-item">
                  <div className="cards-wrapper">
                    {testimonialfive.map((item, key) => {
                      return (
                        <div className="card">
                          <div className="image-wrapper">
                            <img
                              src={item.img}
                              alt="..."
                            />
                          </div>

                        </div>
                      );
                    })}

                  </div>
                </div>
                <div className="carousel-item">
                  <div className="cards-wrapper">
                    {testimonialsix.map((item, key) => {
                      return (
                        <div className="card">
                          <div className="image-wrapper">
                            <img
                              src={item.img}
                              alt="..."
                            />
                          </div>

                        </div>
                      );
                    })}

                  </div>
                </div>
                <div className="carousel-item">
                  <div className="cards-wrapper">
                    {testimonialseven.map((item, key) => {
                      return (
                        <div className="card">
                          <div className="image-wrapper">
                            <img
                              src={item.img}
                              alt="..."
                            />
                          </div>

                        </div>
                      );
                    })}

                  </div>
                </div>
                <div className="carousel-item">
                  <div className="cards-wrapper">
                    {testimonialeight.map((item, key) => {
                      return (
                        <div className="card">
                          <div className="image-wrapper">
                            <img
                              src={item.img}
                              alt="..."
                            />
                          </div>

                        </div>
                      );
                    })}

                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
              </button>
            </div>




          </div>
          <br />
          <br />
          <br />
          <div style={{ margin: "auto", textAlign: "center" }}>
            <Link
              to="/AllClients"
              className="GAQ"
              style={{
                textDecoration: "none",
                color: "white",
                width: "100%",
              }}
            >
              Explore
            </Link>
          </div>

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
        </div>
      </div>
    </>

  );
};
