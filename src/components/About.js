import React from 'react'
import bg from "../assets/img/bgcontact.png"
export const About = () => {
  return (
    <div className='aboutpage  aboutpage-mob'>
      <div className='container '>
      <h1 className='aboutHeading'>About us</h1>
      <hr className='abouthr'/>
      </div>
      <div className='contentofAbout mx-4 my-3'>
        {/* <p>
        Lorem ipsum dolor sit amet,  <br/>consectetur adipiscing elit, <br/>sed do eiusmod tempor incididunt ut labore<br/>Ut enim ad minim veniam, quis 
        </p>
        <p>
        Lorem ipsum dolor sit amet,  
        </p> */}
        <p style={{paddingLeft:"0px"}}>
        We are an innovative marketing company, <br/>
        dedicated to helping businesses succeed through 
        <br/>tailored strategies and captivating campaigns. 
        <br/>Together, we unlock our clients' 
       potential in today's competitive marketplace.
</p>
        <button type="button" class="GAQ">Text us! <i class="fa fa-paper-plane"></i></button>
      </div>
    </div>
  )
}
