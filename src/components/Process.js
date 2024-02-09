import React from 'react'
import main from "../assets/img/Main-Idea.png"
import main2 from "../assets/img/Outlead Post 2024 (1).png"

// style="position: relative; width: 100%; height: 0; padding-top: 75.0000%;
//  padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
//  border-radius: 8px; will-change: transform;"

// style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
export const Process = () => {
  return (
    <>
      <div class="nine op-mobile op-laptop">
        <h1><span><h2>Our Process</h2></span></h1>
      </div>
      <div className='slitely-space'></div>
      <div className='slitely-space'></div>
      <div className='container'>
        <div className='row' style={{ color: "#fff" }}>
          <div className='col-lg-6 col-md-12' >
            <img src={main2} alt="" style={{ width: "100%" }} data-aos="fade-bottom" data-aos-duration="1000"/>
          </div>
          <div className='col-lg-6 col-md-12'    >
            <div className='content' id='content' data-aos="fade-up" data-aos-duration="1000">
              <h2 style={{ color: "orange" }}>Why to Choose us??</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
              <p>labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
            </div>
          </div>
        </div>
      </div>
      <div className='section-padding'></div>
    </>
  )
}
