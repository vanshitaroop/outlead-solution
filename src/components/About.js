import React from 'react'
import bg from "../assets/img/bgcontact.png"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from "../assets/img/contact.gif";
export const About = () => {
  return (
    <div className='aboutpage  aboutpage-mob'>
      <div className='container'>

        <Row xs={1} md={2}>
          <Col >
            <hr className='abouthr'  />
            <h1 className='aboutHeading'>About <span>us</span></h1>
            <h1 className='opacity'>About us</h1>
          </Col>
          <Col >
            <p style={{ paddingLeft: "0px", color: "white",paddingTop:"2rem" }}>
              We are an innovative marketing company, 
              dedicated to helping businesses succeed 
              through tailored strategies and captivating  
              campaigns.
            </p>
            {/* <button type="button" class="GAQ">Text us! <i class="fa fa-paper-plane"></i></button> */}
          </Col>
        </Row>
        <Row xs={1} md={2} className='pt-5 mt-5 pb-5 about_two'>
          
          <Col>
            <img src={img1} width={500} alt="" className='img_fluid'/>
          </Col>
          <Col className='pe-4'>
            <div className='about_content'>
            <h1 className='double_colour'>
              Outlead <span>heading</span>
            </h1>
            <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos consectetur sunt minima at, beatae quis magnam inventore autem placeat nam atque accusamus nisi ipsa non quo hic sint error numquam.</p>
            {/* <button type="button" class="GAQ">Text us! <i class="fa fa-paper-plane"></i></button> */}
            </div>
          </Col>
        </Row>
        <div className='contentofAbout pt-5'>
        <div className='about_content'>
            <h1 className='double_colour'>
              About <span>Outlead Solution</span>
            </h1>
            <h3 className='text-white'>history, New Updates, short infomation etc.</h3>
          </div>

        </div>
      </div>

    </div>
  )
}
