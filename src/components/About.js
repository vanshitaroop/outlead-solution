import React, { useState } from 'react'
import bg from "../assets/img/bgcontact.png"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from "../assets/img/contact.gif";
import img2 from "../assets/img/about.gif";
// import Switch from '@mui/material/Switch';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
import LottieAnimation from './Lottiejson3';
import LottieAnimation2 from './LottieJson4';



export const About = () => {

  return (

    <div className='aboutpage  aboutpage-mob'>
      <div className='container'>

        <Row xs={1} md={1} lg={2}>
          <Col>
            <hr className='abouthr' />
            <h1 className='aboutHeading' >About <span>us</span></h1>
            <h1 className='opacity' >About us</h1>
          </Col>
          <Col>
            <p style={{ paddingLeft: "0px", paddingTop: "2rem" }}>
              We are an innovative marketing company,
              dedicated to helping businesses succeed
              through tailored strategies and captivating
              campaigns.
            </p>
            <button type="button" className="GAQ" >Text us! <i className="fa fa-paper-plane"></i></button>
          </Col>
        </Row>
        {/* <div className='section-padding'></div> */}
        <Row xs={1} md={1} lg={2} className='pt-5 mt-5 pb-5 about_two' id='outlead-about'>

        
          <Col style={{ display: "flex", alignItems: "center" }}>
            <div className='about_content para'>
              <h1 className='double_colour' 
               >
                Outlead <span>heading</span>
              </h1>
              <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos consectetur sunt minima at, beatae quis magnam inventore autem placeat nam atque accusamus nisi ipsa non quo hic sint error numquam.</p>
              {/* <button type="button" class="GAQ">Text us! <i class="fa fa-paper-plane"></i></button> */}
            </div>
          </Col>
          <Col>
            <LottieAnimation />
          </Col>
        </Row>
        {/* <div className='section-padding'></div> */}
        <div className='contentofAbout pt-5'>
          <div className='about_content'>
            <h1 className='double_colour text-center' >
              What is <span>Outlead Solution?</span>
              <hr className='abouthr' style={{ margin: "auto", marginTop: "8px" }} />
            </h1>
            <div className='slitely-space'></div>
            <Row xs={1} md={1} lg={1} xl={2}>
              <Col>
                <div >

                  <LottieAnimation2/>
                  {/* <img src={img2} alt="" className='w-100 p-3 m-auto' style={{ padding: "0px 30px" }} /> */}
                </div>
              </Col>
              <Col>
                <div className='about_content' data-aos="fade-bottom"
                data-aos-duration="1000">
                  <p>
                    The onset of the global pandemic has drastically changed the way businesses survive and thrive.
                    The founders of OutLead took this challenge as an opportunity with one simple goal - to reconstruct
                    the pillars of sales and marketing in the digital world. <br /><br />

                    OutLead is a proud composer of a unique 5-stage process for lead generation, where special
                    emphasis is laid on establishing trust and authenticity with clients over the internet.
                    This process further includes researching and identifying key potential customer bases over LinkedIn,
                    by engaging with them in a dialogue and thereby selling the idea of your product/service.<br /><br />

                    This process of lead generation is further accompanied with carefully designed digital marketing tools,
                    which involve - establishing digital presence of your business on key social media platforms, targeted
                    strategies to identify and grow followers on such platforms, designing and posting of informative content
                    pertaining to the business on a regular basis and so on. <br /><br />

                    It's time to join hands; and lead together with OutLead!
                  </p>
                </div>
              </Col>
            </Row>
          </div>

        </div>
      </div>

    </div>

  )
}
