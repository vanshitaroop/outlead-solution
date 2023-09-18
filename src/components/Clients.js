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
const testimonial = [
  {
    img: "Sources/images/hi-tech.png",
  },
  {
    img: "Sources/images/prepseed 2.png",
  },
  {
    img: "Sources/images/ssrvm.png",
  },
  {
    img: "Sources/images/shiv-textile.png",
  },
  {
    img: "Sources/images/vrudev.png",
  },
  {
    img: "Sources/images/bbgroyals.png",
  },
  {
    img: "Sources/images/archbude.png",
  },
  {
    img: "Sources/images/client3.png",
  },
  {
    img: "Sources/images/digvijay.png",
  },
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
          <Slider {...settings}>
            {testimonial.map((item, key) => {
              return (
                <div className="mt-5">
                  <img src={item.img} className="testo_img" />
                </div>
              );
            })}
          </Slider>
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
