import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./text.css";
import Slider from "react-slick";
// import { FaQuoteLeft } from "react-icons/fa";
import { Whatwedo } from "./Whatwedo";
import img1 from "../assets/img/Hitechlogo.png";
import img2 from "../assets/img/client4.png";
import { Link } from "react-router-dom";
// import Slider from "react-slick";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
const mobilelogo = [
  {
    img: "Sources/images/hi-tech.png",
  },
  {
    img: "Sources/images/prepseed.png",
  },
  {
    img: "Sources/images/ssrvm.png",
  },
  // {
  //   img: "Sources/images/shiv-textile.png",
  // },
  {
    img: "Sources/images/shivtex.png",
  },
  {
    img: "Sources/images/bbgroyals.png",
  },
  {
    img: "Sources/images/archbude.png",
  },
  {
    img: "Sources/images/bsquare.png",
  },
  {
    img: "Sources/images/digvijay.png",
  },
  {
    img: "Sources/images/cardinal.png",
  },
  {
    img: "Sources/images/logo.png",
  },
  {
    img: "Sources/images/logou.png",
  },
  {
    img: "Sources/images/maak advisors.JPG",
  },
  {
    img: "Sources/images/mastersoft-logo.webp",
  },
  {
    img: "Sources/images/quickdraft.JPG",
  },
  {
    img: "Sources/images/raywell studio.JPG",
  },
  {
    img: "Sources/images/shinkan.JPG",
  },
  {
    img: "Sources/images/ninefive.png",
  },

  {
    img: "Sources/images/inspire.JPG",
  },
  {
    img: "Sources/images/entroid.JPG",
  },
  {
    img: "Sources/images/enableX_logo.png",
  },
  {
    img: "Sources/images/divya attires.JPG",
  },
  {
    img: "Sources/images/craftezy.JPG",
  },
  {
    img: "Sources/images/bluefire.JPG",
  },
  {
    img: "Sources/images/cardinal.png",
  },

  {
    img: "Sources/images/bbgroyals.png",
  },
  {
    img: "Sources/images/archbude.png",
  },
  {
    img: "Sources/images/bsquare.png",
  },
  {
    img: "Sources/images/digvijay.png",
  },
  {
    img: "Sources/images/cardinal.png",
  },
  {
    img: "Sources/images/bbgroyals.png",
  },
  {
    img: "Sources/images/archbude.png",
  },
  {
    img: "Sources/images/bsquare.png",
  },
  {
    img: "Sources/images/digvijay.png",
  },
  {
    img: "Sources/images/cardinal.png",
  },

  {
    img: "Sources/images/bbgroyals.png",
  },
  {
    img: "Sources/images/archbude.png",
  },
  {
    img: "Sources/images/bsquare.png",
  },
  {
    img: "Sources/images/digvijay.png",
  },
  {
    img: "Sources/images/cardinal.png",
  }
]
const testimonial = [
  {
    img: "Sources/images/hi-tech.png",
  },
  {
    img: "Sources/images/prepseed.png",
  },
  {
    img: "Sources/images/ssrvm.png",
  },
  {
    img: "Sources/images/shiv-textile.png",
  },
  {
    img: "Sources/images/shivtex.png",
  },
  // {
  //   img: "Sources/images/bbgroyals.png",
  // },
  // {
  //   img: "Sources/images/archbude.png",
  // },
  // {
  //   img: "Sources/images/client3.png",
  // },
  // {
  //   img: "Sources/images/digvijay.png",
  // },
];
const testimonialtwo = [

  {
    img: "Sources/images/bbgroyals.png",
  },
  {
    img: "Sources/images/archbude.png",
  },
  {
    img: "Sources/images/bsquare.png",
  },
  {
    img: "Sources/images/digvijay.png",
  },
  {
    img: "Sources/images/cardinal.png"
  }

];
const testimonialthree = [

  {
    img: "Sources/images/logo.png",
  },
  {
    img: "Sources/images/logou.png",
  },
  {
    img: "Sources/images/maak advisors.JPG",
  },
  {
    img: "Sources/images/mastersoft-logo.webp",
  },
  {
    img: "Sources/images/quickdraft.JPG"
  }

];
const testimonialfour = [

  {
    img: "Sources/images/raywell studio.JPG",
  },
  {
    img: "Sources/images/shinkan.JPG",
  },
  {
    img: "Sources/images/ninefive.png",
  },

  {
    img: "Sources/images/inspire.JPG",
  },
  {
    img: "Sources/images/entroid.JPG"
  }

];
const testimonialfive = [

  {
    img: "Sources/images/enableX_logo.png",
  },
  {
    img: "Sources/images/divya attires.JPG",
  },
  {
    img: "Sources/images/craftezy.JPG",
  },
  {
    img: "Sources/images/bluefire.JPG",
  },
  {
    img: "Sources/images/cardinal.png"
  }

];
const testimonialsix = [

  {
    img: "Sources/images/bbgroyals.png",
  },
  {
    img: "Sources/images/archbude.png",
  },
  {
    img: "Sources/images/bsquare.png",
  },
  {
    img: "Sources/images/digvijay.png",
  },
  {
    img: "Sources/images/cardinal.png"
  }

];
const testimonialseven = [

  {
    img: "Sources/images/bbgroyals.png",
  },
  {
    img: "Sources/images/archbude.png",
  },
  {
    img: "Sources/images/bsquare.png",
  },
  {
    img: "Sources/images/digvijay.png",
  },
  {
    img: "Sources/images/cardinal.png"
  }

];
const testimonialeight = [

  {
    img: "Sources/images/bbgroyals.png",
  },
  {
    img: "Sources/images/archbude.png",
  },
  {
    img: "Sources/images/bsquare.png",
  },
  {
    img: "Sources/images/digvijay.png",
  },
  {
    img: "Sources/images/cardinal.png"
  }

];
export const Clients = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
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
            <Slider {...settings}>
              {mobilelogo.map((item, key) => {
                return (
                  <div className="mt-5">
                    <img src={item.img} className="testo_img" />
                  </div>
                );
              })}
            </Slider>
          </div>
          <div className="not_for_mobile">
            <>
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
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
                  <div className="carousel-item">
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

            </>

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
