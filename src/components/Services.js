import React, { useState } from 'react';
import bgimg from "../assets/img/bg_image_3.png";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export const Services = () => {
  const [selectedCard, setSelectedCard] = useState(1);

  const handleMouseEnter = (index) => {
    setSelectedCard(index);
  };

  return (
    <>
      <section>

        <div>
          <main className='row'>
            <div class="page-section col-md-12 col-sm-12" style={{ backgroundColor: "#212529" }}>
              <div class="container service">
                <div class="row">
                  <div class="col-lg-6 py-3">
                    <h2 class="title-section">We're <span class="marked">ready to</span> Serve you with best</h2>
                    <div class="divider"></div>
                    <p class="mb-5">We provide marketing services to startups & small business to looking <br /> for partner for their digital media, design & dev lead generation & communication.</p>
                    <a href="#" class="btn btn-primary mr-3">More Details</a>
                    <a href="#" class="btn btn-outline mx-2" >See pricing</a>
                  </div>
                  <div class="col-lg-6 py-3">
                    <div class="img-place text-center">
                      <img src={bgimg} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="page-section col-md-12 col-sm-12">
              <div class="container">
                <div class="text-center">
                  <div class="subhead">Why Choose Us</div>
                  <h2 class="title-section-2">Your <span class="marked">Comfort</span> is Our Priority</h2>
                  <div class="divider mx-auto"></div>
                </div>

                <div class="row mt-5 text-center">
                  <div class="col-lg-4 py-3">
                    <div class="display-3"><span class="mai-shapes"></span> <i class="fa-solid fa-signal"></i></div>
                    <h5>High Performance</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, sit.</p>
                  </div>
                  <div class="col-lg-4 py-3">
                    <div class="display-3"><span class=""></span> <i class="fas fa-money-check-alt"></i></div>

                    <h5>Friendly Prices</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, sit.</p>
                  </div>
                  <div class="col-lg-4 py-3">
                    <div class="display-3"><span class="mai-shapes"></span><i class="far fa-clock"></i></div>
                    <h5>No time-confusing</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, sit.</p>
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

            <h2 className="title-section-2 text-white">Our<span className="marked"> Services</span> </h2>
            <div className="divider mx-auto"></div>
          </div>
          <div className="container mt-5 mb-5">
            <div className="row">

            </div>
            <div className='row' id='cards'>
              <div className="col-md-6 col-lg-4 col-sm-12"
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
              <div className='col-md-6 col-lg-4 col-sm-12'
              >
                <div className={`card_content  ${selectedCard === 1 ? 'selected' : ''}`}
                  onMouseEnter={() => handleMouseEnter(1)}>
                  <div className="card__icon">
                    <img src="https://i.imgur.com/n31OoA5.png" alt="icon.png" />
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
              <div className='col-md-6 col-lg-4 col-sm-12'
              >
                <div className={`card_content ${selectedCard === 2 ? 'selected' : ''}`}
                  onMouseEnter={() => handleMouseEnter(2)}>
                  <div className="card__icon">
                    <img src="https://i.imgur.com/dbngiB3.png" alt="icon.png" />
                  </div>
                  <h6>WEB DEVELOPMENT</h6>
                  <ul>
                    <li>Custom Platform</li>
                    <li>Back-End Executions</li>
                    <li>Interface Apps</li>
                    <li>Mobile Systems</li>
                  </ul>
                </div>

              </div>
              <div className='col-md-6 col-lg-4 col-sm-12'
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
              <div className='col-md-6 col-lg-4 col-sm-12'
              >
                <div className={`card_content ${selectedCard === 4 ? 'selected' : ''}`}
                  onMouseEnter={() => handleMouseEnter(4)}>
                  <div className="card__icon">
                    <img src="https://i.imgur.com/dbngiB3.png" alt="icon.png" />
                  </div>
                  <h6>Social Media Marketing</h6>
                  <ul>
                    <li>Custom Platform</li>
                    <li>Back-End Executions</li>
                    <li>Interface Apps</li>
                    <li>Mobile Systems</li>
                  </ul>
                </div>

              </div>
            </div>
          </div>


        </div>


      </section >
    </>
  )
}
