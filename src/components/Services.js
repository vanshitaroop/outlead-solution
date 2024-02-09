import React, { useState } from 'react';
import bgimg from "../assets/img/bg_image_3.png";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import mainImage from "../assets/img/graphic.gif"
// import img1 from "../assets/img/gifs/"
import img2 from "../assets/img/outlead4.gif"
import LottieAnimationtwo from './Lottiejson2';

export const Services = () => {
  const [selectedCard, setSelectedCard] = useState(1);

  const handleMouseEnter = (index) => {
    setSelectedCard(index);
  };

  return (
    <>
      <section className='services-back-theme'>

        <div>
          <main className='row'>
            <div class="page-section col-md-12 col-sm-12 ">
              <div class="container service">
                <div class="row">
                  <div class="col-lg-6 py-3" style={{ display: "flex", alignItems: "center" }}>
                    <div>
                      <h2 class="title-section">We're <span class="marked">ready to</span> Serve you with best</h2>
                      <div class="divider"></div>
                      <p class="mb-5">We provide marketing services to startups & small business to looking <br /> for partner for their digital media, design & dev lead generation & communication.</p>
                      <a href="#" class="btn btn-primary mr-3">More Details</a>
                      <a href="#" class="btn btn-outline mx-2" >See pricing</a>
                    </div>
                  </div>
                  <div class="col-lg-6 py-3">
                    <div class="img-place text-center">
                      <LottieAnimationtwo />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="page-section col-md-12 col-sm-12" id='choose-us-section'>
              <div class="container">
                <div class="text-center">
                  <div class="subhead">Why Choose Us</div>
                  <h2 class="title-section">Your <span class="marked">Comfort</span> is Our Priority</h2>
                  <div class="divider mx-auto"></div>
                </div>

                <div class="row mt-5 text-center">
                  <div class="col-lg-4 p-3">
                    <div class="display-3"><span class="mai-shapes"></span> <i class="fa-solid fa-signal"></i></div>
                    <h5 style={{ color: "orange" }}>High Performance</h5>
                    <p>Empowering peak performance with innovative solutions and dedicated service</p>
                  </div>
                  <div class="col-lg-4 p-3">
                    <div class="display-3"><span class=""></span> <i class="fas fa-money-check-alt"></i></div>

                    <h5 style={{ color: "orange" }}>Friendly Prices</h5>
                    <p>Experience premium quality at budget-friendly rates.</p>
                  </div>
                  <div class="col-lg-4 p-3">
                    <div class="display-3"><span class="mai-shapes"></span><i class="far fa-clock"></i></div>
                    <h5 style={{ color: "orange" }}>No time-confusing</h5>
                    <p>Quality products, competitive pricing – guaranteed simplicity.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <section className='services'>
            <Row>
              <Col>
              <h1>hello</h1>
              </Col>
            </Row>



          </section> */}
          </main>
        </div>
        <div className='container'>
          <div className="text-center mt-5 mb-5">

            <h2 className="title-section">Our<span className="marked"> Services</span> </h2>
            <div className="divider mx-auto"></div>
          </div>
          <div className="container mt-5 mb-5">
            <div className="row">

            </div>
            <div className='row' id='cards'>
              <div className="col-md-6 col-lg-6 col-xl-4 col-sm-12" data-aos="fade-up"
                data-aos-anchor-placement="top-bottom" data-aos-duration="1000"
              >
                <div className={`card_content  ${selectedCard === 0 ? 'selected' : ''}`}
                  onMouseEnter={() => handleMouseEnter(0)}>
                  <div className="card__icon">
                    <img src="https://i.imgur.com/93ei2SI.png" alt="icon.png" />
                  </div>
                  <h6>LINKEDIN OUTBOUND</h6>
                  <ul>
                    <li>Digital Branding</li>
                    <li>Web & Mobile Sites</li>
                    <li>User Interface Design</li>
                    <li>Responsive Techs</li>
                  </ul>
                </div>

              </div>
              <div className="col-md-6 col-lg-6 col-xl-4 col-sm-12" data-aos="fade-up"
                data-aos-anchor-placement="top-bottom" data-aos-duration="1000"
              >
                <div className={`card_content  ${selectedCard === 6 ? 'selected' : ''}`}
                  onMouseEnter={() => handleMouseEnter(6)}>
                  <div className="card__icon">
                    <img src="" alt="icon.png" />
                  </div>
                  <h6>B2B LEAD GENERATION</h6>
                  <p className='text-white'>
                    OutLead Solutions provides Lead Generation service which has unique process itself and can be useful to fulfil your need for business goal.</p>
                  {/* <ul>
                    <li>Digital Branding</li>
                    <li>Web & Mobile Sites</li>
                    <li>User Interface Design</li>
                    <li>Responsive Techs</li>
                  </ul> */}
                </div>

              </div>
              <div className='col-md-6 col-lg-6 col-xl-4 col-sm-12' data-aos="fade-up"
                data-aos-anchor-placement="top-bottom" data-aos-duration="1000"
              >
                <div className={`card_content  ${selectedCard === 1 ? 'selected' : ''}`}
                  onMouseEnter={() => handleMouseEnter(1)}>
                  <div className="card__icon">
                    <img src={img2} alt="icon.png" />
                  </div>
                  <h6>UI-UX DESIGN</h6>
                  <ul>
                    <li>Digital Strategy</li>
                    <li>User Experience Design</li>
                    <li>User Interface Design</li>
                    <li>Mobile Sites</li>
                  </ul>
                </div>

              </div>
              <div className='col-md-6 col-lg-6 col-xl-4 col-sm-12' data-aos="fade-up"
                data-aos-anchor-placement="top-bottom" data-aos-duration="1000"
              >
                <div className={`card_content ${selectedCard === 2 ? 'selected' : ''}`}
                  onMouseEnter={() => handleMouseEnter(2)}>
                  <div className="card__icon">
                    <img src="https://i.imgur.com/dbngiB3.png" alt="icon.png" />
                  </div>
                  <h6>WEB DEVELOPMENT</h6>
                  <p className='text-white'>Outlead Solutions also improvises your online visibility by using website development which can be further used to explore your work by your customers.</p>
                  {/* <ul>
                    <li>Custom Platform</li>
                    <li>Back-End Executions</li>
                    <li>Interface Apps</li>
                    <li>Mobile Systems</li>
                  </ul> */}
                </div>

              </div>
              <div className='col-md-6 col-lg-6 col-xl-4 col-sm-12' data-aos="fade-up"
                data-aos-anchor-placement="top-bottom" data-aos-duration="1000"
              >
                <div className={`card_content ${selectedCard === 3 ? 'selected' : ''}`}
                  onMouseEnter={() => handleMouseEnter(3)}>
                  <div className="card__icon">
                    <img src="https://i.imgur.com/dbngiB3.png" alt="icon.png" />
                  </div>
                  <h6>Cold Emailing</h6>
                  <ul>
                    <li>Custom Platform</li>
                    <li>Back-End Executions</li>
                    <li>Interface Apps</li>
                    <li>Mobile Systems</li>
                  </ul>
                </div>


              </div>
              <div className='col-md-6 col-lg-6 col-xl-4 col-sm-12' data-aos="fade-up"
                data-aos-anchor-placement="top-bottom" data-aos-duration="1000"
              >
                <div className={`card_content ${selectedCard === 4 ? 'selected' : ''}`}
                  onMouseEnter={() => handleMouseEnter(4)}>
                  <div className="card__icon">
                    <img src="https://i.imgur.com/dbngiB3.png" alt="icon.png" />
                  </div>
                  <h6>Social Media Marketing</h6>
                  <p className='text-white'>OutLead Solutions further harmonizes the unique tool for Lead Generation with careful and meticulously planned social media marketing techniques.</p>
                  {/* <ul>
                    <li>Custom Platform</li>
                    <li>Back-End Executions</li>
                    <li>Interface Apps</li>
                    <li>Mobile Systems</li>
                  </ul> */}
                </div>

              </div>
              <div className='col-md-6 col-lg-6 col-xl-4 col-sm-12' data-aos="fade-up"
                data-aos-anchor-placement="top-bottom" data-aos-duration="1000"
              >
                <div className={`card_content ${selectedCard === 5 ? 'selected' : ''}`}
                  onMouseEnter={() => handleMouseEnter(5)}>
                  <div className="card__icon">
                    <img src="https://i.imgur.com/dbngiB3.png" alt="icon.png" />
                  </div>
                  <h6>Content Writing</h6>
                  <p className='text-white'>
                    OutLead Solutions offers the option of Content Writing and Posting for instances where sharing of detailed information is vital and pictures/graphics cannot do enough justice to the data in hand.</p>
                  {/* <ul>
                    <li>Custom Platform</li>
                    <li>Back-End Executions</li>
                    <li>Interface Apps</li>
                    <li>Mobile Systems</li>
                  </ul> */}
                </div>

              </div>
            </div>
          </div>


        </div>


      </section >
    </>
  )
}
