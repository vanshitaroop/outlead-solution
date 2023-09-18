import React from 'react'
import bg from "../assets/img/bgcontact.png"
export const About = () => {
  return (
    <div className='aboutpage  aboutpage-mob'>
      <div className='container '>
        <h1 className='aboutHeading'>About us</h1>
        <hr className='abouthr' />
        <div className='contentofAbout '>
        {/* <p>
        Lorem ipsum dolor sit amet,  <br/>consectetur adipiscing elit, <br/>sed do eiusmod tempor incididunt ut labore<br/>Ut enim ad minim veniam, quis 
        </p>
        <p>
        Lorem ipsum dolor sit amet,  
        </p> */}
        <p style={{ paddingLeft: "0px" }}>
          We are an innovative marketing company, <br />
          dedicated to helping businesses succeed <br />
          through tailored strategies and captivating  <br />
          campaigns.
        </p>
        <button type="button" class="GAQ">Text us! <i class="fa fa-paper-plane"></i></button>
      </div>
      </div>
      
    </div>
  )
}
