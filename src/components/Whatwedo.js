import React from "react";
import meeting from "../assets/json/meeting.json";
import leadgeneration from "../assets/json/lead1.json";
import Lottie from "lottie-react";
import socialMedia from "../assets/json/socialmedia.json";
import website from "../assets/json/website.json";
import contentWritting from "../assets/json/contentWritting.json";
export const Whatwedo = () => {
  return (
    <>
      <div class="nine">
        <h1>
          <span>
            <h2>Services</h2>
          </span>
        </h1>
      </div>
      <div className="container">
        <div className="row">
          <div
            className="col-sm-6 container"
            data-aos="zoom-out-right"
            style={{ color: "white", textAlign: "" }}
          >
            {/* <img src={Gif} alt=""/> */}
            <Lottie animationData={meeting} />
          </div>
          <div className="col-sm-6" style={{ color: "white", textAlign: "" }}>
            <div class="container" style={{ marginTop: "30px" }}>
              {/* <div class="row">
                <div class="col-12">
                  <div class="title-heading">
                    How to UpSkill
                  </div>
                </div>
              </div> */}
              <div
                class="row mb-4"
                // data-aos="fade-up"
                // ata-aos-offset="500"
                // data-aos-duration="500"
              >
                <div class="col-sm-6" data-aos="fade-up" data-aos-duration="1000">
                  <div class="card mx-3 mt-3">
                    <div class="card-body" style={{ position: "relative" }}>
                      <h4 class="card-title head">LinkedIn Outbound</h4>
                      <Lottie
                        animationData={leadgeneration}
                        className="lottie-animated"
                      />
                      ;
                      <div
                        class="card-image"
                        style={{ color: "#5e371b", marginTop: "90px" }}
                      ></div>
                      <p class="card-text ">
                        Tap businesses on LinkedIn on a one-to-one basis with
                        our proven communication methodologies.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 cards-mob" data-aos="fade-up" data-aos-duration="1000">
                  <div class="card mx-3 mt-3 ">
                    <div class="card-body">
                      <h4 class="card-title head">Cold Emailing</h4>
                      <Lottie
                        animationData={socialMedia}
                        style={{ width: "35%", marginTop: "15px" }}
                        className="lottie-animated"
                      />
                      ;
                      <div
                        class="card-image"
                        style={{ color: "#5e371b" }}
                      ></div>
                      <br />
                      <p class="card-text">
                        Reach out to businesses and individuals at large with
                        high ROI emailing sequences.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div class="row my-2">
              </div> */}
              <div class="row" >
                <div class="col-sm-6 cards-mob" data-aos="fade-up" data-aos-duration="1000">
                  <div class="card mx-3 mt-3">
                    <div class="card-body">
                      <h4 class="card-title head">Social Media Marketing</h4>
                      <Lottie
                        animationData={website}
                        style={{ width: "40%", marginTop: "30px" }}
                        className="lottie-animated"
                      />
                      ;
                      <div
                        class="card-image"
                        style={{ color: "#5e371b" }}
                      ></div>
                      <br />
                      <p class="card-text ">
                        Establish your brand and create effective sales channels
                        through our social media prowess.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 cards-mob" data-aos="fade-up" data-aos-duration="1000">
                  <div class="card mx-3 mt-3">
                    <div class="card-body">
                      <h4 class="card-title head">
                        Logo & Website Development
                      </h4>
                      <Lottie
                        animationData={contentWritting}
                        className="lottie-animated pt-5"
                      />
                      ;
                      <div
                        class="card-image"
                        style={{ color: "#5e371b" }}
                      ></div>
                      <br />
                      <br />
                      <p class="card-text">
                        Transform your vision into a captivating digital
                        experience with our logo & website development
                        expertise.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
