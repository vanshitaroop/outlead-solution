import React from 'react'
import Lottie from "lottie-react";
import profile from "../assets/json/profile.json"
import men2 from "../assets/json/men1.json"
import LottieAnimation from './LottieJson';

export const ContactCeo = () => {
    return (
        <>
            <div id='contact' className='container'>
                <LottieAnimation />
                <div className="row text-white text-center ">

                    {/* <div className="col back_col">
                        <div className="container">
                        <div className='about_content'>
                            <h1 className='double_colour'>
                                About <span>Outlead Solution</span>
                            </h1>

                        </div>
                        </div>
                    </div>
                    <div className="col back_col"></div> */}
                    <div className="contact_cards ">

                        <div className="row text-white text-center">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className='contact-card'>
                                    <Lottie animationData={profile} className='animate_img' />
                                    <div className='contact_content'>
                                        <h2>Shanay Shah</h2>
                                        <h6 style={{ color: "#8d8d8d" }}>For B2B</h6>
                                        <button><a href="tel:+91 80008 12325" style={{ textDecoration: "none", color: "white" }}>Contact</a></button>
                                    </div>


                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className='contact-card'>
                                    <Lottie animationData={men2} className='animate_img' />
                                    <div className='contact_content'>
                                        <h2>Vivek kankaria</h2>
                                        <h6 style={{ color: "#8d8d8d" }}>For B2C</h6>
                                        <button><a href="tel:+91 99133 82221" style={{ textDecoration: "none", color: "white" }}>Contact</a></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
            {/* <div className='banner-contact'>    
            </div> */}
            {/* style={{ width: "80%", marginLeft: "120px" }} */}
            {/* <div className='lapttop-res-lott mobile-res-lott'>
                <Lottie animationData={trycontact} />
            </div> */}
            {/* {/* <div className='row' id ="contact-laptop">
                <div className='col-md-6 forCenter'>
                    <div class="card-container">
                        <div className='front'  >
                            <div style={{ textAlign: "center" }}>
                                <Lottie animationData={profile} style={{ width: "50%", marginLeft: "50px" }} />
                                <h4 >Shanay Shah <br />
                                    <span style={{ color: "#AAAAAA", fontSize: "12px" }}>for B2B</span>
                                </h4>
                                <hr />
                            </div>
                            <div style={{ paddingTop: "10px" }}>
                                <table class="check-list" style={{ marginLeft: "50px" }}>
                                    <tr>
                                        <td><li style={{ paddingLeft: "20px" }}>Loreum</li></td>
                                        <td style={{ paddingLeft: "20px" }}><li style={{ paddingLeft: "20px" }}>ipsum</li></td>
                                    </tr>
                                    <tr>
                                        <td><li style={{ paddingLeft: "20px" }}>Dummy</li></td>
                                        <td style={{ paddingLeft: "20px" }}><li style={{ paddingLeft: "20px" }}>text</li></td>
                                    </tr>
                                </table>
                            </div>
                            <button type="" className='btn' style={{radius:"50%"}}><i className='fa fa-whatsapp' style={{color:"white"}}></i></button>
                        </div>
                        <div className="back">
                            <div class="card-body">
                                <h5 class="card-title my-3" style={{fontSize:"25px"}}>Card title</h5>
                                <p class="card-text mx-2" style={{fontSize:"15px",marginTop:"100px",textAlign:"left"}}>Lorem ipsum dolor sit amet, minim veniam, quis nostrud exercitation ex ea commodo consequat.  card's content.</p>
                                <a href='https://api.whatsapp.com/send?phone=+919913382221&text=Hello' type="button" class="btn btn-outline-success" style={{border:"50%"}}><i className='fa fa-whatsapp' style={{textDecorat:"none"}}></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 forCenter'>
                    <div class="card-container" style={{ textAlign: "center" }}>
                        <div className='front'  >
                            <div style={{ textAlign: "center" }}>
                                <Lottie animationData={men2} style={{ width: "50%", marginLeft: "50px", marginBottom: "15px" }} />
                                <h4>Vivek kankaria<br />
                                    <span style={{ color: "#AAAAAA", fontSize: "12px" }}>for B2C</span>
                                </h4>
                                <hr />
                            </div>
                            <div style={{ paddingTop: "10px" }}>
                                <table class="check-list" style={{ marginLeft: "50px" }}>
                                    <tr>
                                        <td><li style={{ paddingLeft: "20px" }}>Loreum</li></td>
                                        <td style={{ paddingLeft: "20px" }}><li style={{ paddingLeft: "20px" }}>ipsum</li></td>
                                    </tr>
                                    <tr>
                                        <td><li style={{ paddingLeft: "20px" }}>Dummy</li></td>
                                        <td style={{ paddingLeft: "20px" }}><li style={{ paddingLeft: "20px" }}>text</li></td>
                                    </tr>
                                </table>
                            </div>
                            <button type="" className='btn' style={{radius:"50%"}}><i className='fa fa-whatsapp' style={{color:"white"}}></i></button>
                        </div>
                        <div className="back">
                            <div class="card-body">
                                <h5 class="card-title my-3" style={{fontSize:"25px"}}>Card title</h5>
                                <p class="card-text mx-2" style={{fontSize:"15px",marginTop:"100px",textAlign:"left"}}>Lorem ipsum dolor sit amet, minim veniam, quis nostrud exercitation ex ea commodo consequat.  card's content.</p>
                                <a type="button" href='https://api.whatsapp.com/send?phone=+919913382221&text=Hello' class="btn btn-outline-success" style={{border:"50%"}}><i className='fa fa-whatsapp' style={{textDecorat:"none"}}></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            mobile responsive
            <div className='row' id="contact-mobile">
                <div className='col-md-6 forCenter'>
                    <div class="card-container">
                        <div className='front'  >
                            <div style={{ textAlign: "center" }}>
                                <Lottie animationData={profile} style={{ width: "50%", marginLeft: "50px" }} />
                                <h4 >Shanay Shah <br />
                                    <span style={{ color: "#AAAAAA", fontSize: "12px" }}>for B2B</span>
                                </h4>
                                <hr />
                            </div>
                            <div style={{ paddingTop: "10px" }}>
                                <table class="check-list" style={{fontSize:"12px"}}>
                                    <tr>
                                        <td><li style={{ paddingLeft: "20px" }}>Loreum</li></td>
                                        <td style={{ paddingLeft: "20px" }}><li style={{ paddingLeft: "20px" }}>ipsum</li></td>
                                    </tr>
                                    <tr>
                                        <td><li style={{ paddingLeft: "20px" }}>Dummy</li></td>
                                        <td style={{ paddingLeft: "20px" }}><li style={{ paddingLeft: "20px" }}>text</li></td>
                                    </tr>
                                </table>
                            </div>
                            <button type="" className='btn' style={{radius:"50%"}}><i className='fa fa-whatsapp' style={{color:"white"}}></i></button>
                        </div>
                        <div className="back">
                            <div class="card-body">
                                <h5 class="card-title my-3" style={{fontSize:"25px"}}>Card title</h5>
                                <p class="card-text mx-2" style={{fontSize:"15px",marginTop:"10px",textAlign:"left"}}>Lorem ipsum dolor sit amet, minim veniam, quis nostrud exercitation ex ea commodo consequat.  card's content.</p>
                                <a href='https://api.whatsapp.com/send?phone=+919913382221&text=Hello' type="button" class="btn btn-outline-success" style={{border:"50%",height:"50%"}}><i className='fa fa-whatsapp' style={{textDecorat:"none"}}></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 forCenter'>
                    <div class="card-container" style={{ textAlign: "center" }}>
                        <div className='front'  >
                            <div style={{ textAlign: "center" }}>
                                <Lottie animationData={men2} style={{ width: "50%", marginLeft: "50px", marginBottom: "15px" }} />
                                <h4>Vivek kankaria<br />
                                    <span style={{ color: "#AAAAAA", fontSize: "12px" }}>for B2C</span>
                                </h4>
                                <hr />
                            </div>
                            <div style={{ paddingTop: "10px" ,paddingLeft:"0px"}}>
                                <table class="check-list" >
                                    <tr>
                                        <td><li style={{ paddingLeft: "20px" }}>Loreum</li></td>
                                        <td style={{ paddingLeft: "20px" }}><li style={{ paddingLeft: "20px" }}>ipsum</li></td>
                                    </tr>
                                    <tr>
                                        <td><li style={{ paddingLeft: "20px" }}>Dummy</li></td>
                                        <td style={{ paddingLeft: "20px" }}><li style={{ paddingLeft: "20px" }}>text</li></td>
                                    </tr>
                                </table>
                            </div>
                            <button type="" className='btn' style={{radius:"50%"}}><i className='fa fa-whatsapp' style={{color:"white"}}></i></button>
                        </div>
                        <div className="back">
                            <div class="card-body">
                                <h5 class="card-title my-3" style={{fontSize:"25px"}}>Card title</h5>
                                <p class="card-text mx-2" style={{fontSize:"15px",marginTop:"10px",textAlign:"left"}}>Lorem ipsum dolor sit amet, minim veniam, quis nostrud exercitation ex ea commodo consequat.  card's content.</p>
                                <a type="button" href='https://api.whatsapp.com/send?phone=+919913382221&text=Hello' class="btn btn-outline-success" style={{borderRadius:"10%"}}><i className='fa fa-whatsapp' style={{textDecoration:"none"}}></i></a>
                            </div>
                        </div>
                    </div>
                </div> 
            </div> */}

        </>
    )
}
