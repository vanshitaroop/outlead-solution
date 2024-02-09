import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export const Testimonial = () => {
  const items = [
    <div key={1} className="item center">
      <img src="Sources/images/1.png" width={100} alt="" />
      <h2 className="testomonial-heading">ABHISHEK BANSAL</h2>
      <span style={{ color: "orange" }}>SHIVTEX SPINNING PVT LTD</span>
      <p>DIRECTOR, CEO</p>
      <p style={{ textAlign: "center", margin: "auto" }} className="para-testo">
        <i class="bi bi-quote" style={{ color: "orange" }}></i>When it comes to
        social media marketing there's plenty of fish in the sea. outlead
        solutions has helped me to engage customers and industry commentators
        alike, bringing my business great results.
        <i class="bi bi-quote" style={{ color: "orange" }}></i>
      </p>
    </div>,
    <div key={2} className="item center">
      <img src="Sources/images/2.png" width={100} alt="" />
      <h2 className="testomonial-heading">RAJ SHAH</h2>
      <span style={{ color: "orange" }}>HITECH PROJECTS PVT LTD</span>
      <p>DIRECTOR</p>
      <p style={{ textAlign: "center", margin: "auto" }} className="para-testo">
        <i class="bi bi-quote" style={{ color: "orange" }}></i> Consistency,
        competency and creativity are the three words I can think have when it
        comes to ‘OutLead solutions’. They are constantly willing to adapt and
        support any fast-changes and new initiatives that might be outside of
        scope.
        <i class="bi bi-quote" style={{ color: "orange" }}></i>
      </p>
    </div>,
    <div key={3} className="item center">
      <img src="Sources/images/3.png" width={100} alt="" />
      <h2 className="testomonial-heading">SNEH SHAH</h2>
      <span style={{ color: "orange" }}>TIDBIT SOLUTIONS</span>
      <p>CO-FOUNDER</p>
      <p style={{ textAlign: "center", margin: "auto" }} className="para-testo">
        <i class="bi bi-quote" style={{ color: "orange" }}></i>I have worked
        with a couple of agencies in the past and none of them even come close
        to how impressed i am with OutLead solutions. The incredible amount of
        effort and dedication they put into their work is more detailed than you
        can imagine.
        <i class="bi bi-quote" style={{ color: "orange" }}></i>
      </p>
    </div>,
    // <div key={4} className="item center">
    //   <h3>Testimonial 4</h3>
    // </div>,
    // <div key={5} className="item center">
    //   <h3>Testimonial 5</h3>
    // </div>,
  ];

  return (
    <>
      <div class="nine" style={{ marginTop: "60px" }}>
        <h1>
          <span>
            <h2>Testimonials</h2>
          </span>
        </h1>
      </div>
      <div className=" aliceCar">
        <AliceCarousel
          autoPlay
          infinite
          autoPlayInterval={2000}
          buttonsDisabled={true}
          items={items}
          responsive={{
            0: { items: 1 },
            768: { items: 1 },
            1024: { items: 1 },
          }}
        />
      </div>
    </>
  );
};
