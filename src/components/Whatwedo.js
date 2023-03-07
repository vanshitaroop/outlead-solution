import React from 'react'
import meeting from "../assets/json/meeting.json";
import leadgeneration from "../assets/json/lead1.json"
import Lottie from "lottie-react";
export const Whatwedo = () => {
  return (

    <div className='container'>
      <div className='row '>
        <div className='col-md-6 container' style={{ color: "white", textAlign: "" }}>
          {/* <img src={Gif} alt=""/> */}
          <Lottie animationData={meeting} />
        </div>
        <div className='col-md-6' style={{ color: "white", textAlign: "" }}>
          <div class="container" style={{ marginTop: "30px" }}>
            {/* <div class="row">
    <div class="col-12">
      <div class="title-heading">
        How to UpSkill
      </div>
    </div>
  </div> */}
            <div class="row">
              <div class="col-md-6 ">
                <div class="card mx-3 mt-3">
                  <div class="card-body" style={{ position: "relative" }}>
                    <h4 class="card-title" style={{ color: "orange" }} >Lead Generation</h4>
                    <Lottie animationData={leadgeneration} className="lottie-animated" />;
                    <div class="card-image" style={{ color: "#5e371b", marginTop: "90px" }} >
                      <i class="fas fa-laptop-code fa-5x"></i>
                    </div>
                    <p class="card-text ">Go through the course content thoroughly and enroll before the batch begins.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="card mx-3 mt-3">
                  <div class="card-body">
                    <h4 class="card-title">Card 2 </h4>
                    <div class="card-image" style={{ color: "#5e371b" }}>
                      <i class="fas fa-chalkboard-teacher fa-5x"></i>
                    </div>
                    <p class="card-text">Attend all the weekly interactive sessions from 9pm - 10pm, 4 times a week and do all your projects and assignments.</p>

                  </div>
                </div>
              </div>
            </div>
            <div class="row my-5">
            </div>
            <div class="row">
              <div class="col-md-6 ">
                <div class="card mx-3 mt-3">
                  <div class="card-body">
                    <h4 class="card-title">Card 3</h4>
                    <div class="card-image" style={{ color: "#5e371b" }}>
                      <i class="fas fa-laptop-code fa-5x"></i>
                    </div>
                    <p class="card-text ">Go through the course content thoroughly and enroll before the batch begins.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="card mx-3 mt-3">
                  <div class="card-body">
                    <h4 class="card-title">card 4</h4>
                    <div class="card-image" style={{ color: "#5e371b" }}>
                      <i class="fas fa-chalkboard-teacher fa-5x"></i>
                    </div>
                    <p class="card-text">Attend all the weekly interactive sessions from 9pm - 10pm, 4 times a week and do all your projects and assignments.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
