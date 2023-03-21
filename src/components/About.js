import React from 'react'
import bg from "../assets/img/bgcontact.png"
export const About = () => {
  return (
    <div className='aboutpage'>
      <div className='container'>
      <h1 className='aboutHeading'>About us</h1>
      <hr className='abouthr'/>
      </div>
      <div className='contentofAbout my-3'>
        <p>
        Lorem ipsum dolor sit amet,  <br/>consectetur adipiscing elit, <br/>sed do eiusmod tempor incididunt ut labore<br/>Ut enim ad minim veniam, quis 
        </p>
        <p>
        Lorem ipsum dolor sit amet,  <br/>consectetur adipiscing elit,Ut enim ad minim veniam, quis 
        </p>
        <button type="button" class="GAQ">Text us! <i class="fa fa-paper-plane"></i></button>
      </div>
    </div>
  )
}
