import React from 'react'
import main from "../assets/img/Main-Idea.png"
// style="position: relative; width: 100%; height: 0; padding-top: 75.0000%;
//  padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
//  border-radius: 8px; will-change: transform;"

// style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
export const Process = () => {
  return (
    <>
      <div class="nine" style={{marginTop:"120px"}}>
        <h1><span><h2>Our Process</h2></span></h1>
      </div>
      <div className='row ' style={{ marginTop: "150px", color: "#fff" }}>
        <div className='col-md-6' data-aos="fade-right">
          <img src={main} alt="" style={{ width: "90%" }} />
        </div>
        <div className='col-md-6' style={{ paddingTop: "130px" }} data-aos="fade-left"  >
          <h2 style={{ color: "orange" }}>Why to Choose us??</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
          <p>labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
        </div>
      </div>
    </>
  )
}
