import React from 'react'
import logo from "../assets/img/Outleadlogo.png"
import { Link } from 'react-router-dom'
export const Footer = () => {
    return (
        <>
            <footer class="footer-07" style={{ paddingTop: "80px" }}>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-12 text-center">
                            {/* <h2 class="footer-heading"><a href="#" class="logo">Outlead Solutions</a></h2> */}
                            <Link to={"/"}> <img
                                src={logo}
                                height='130'
                                alt=''
                                loading='lazy'
                                style={{
                                    backgroundColor: "white",
                                    padding: "10px 10px", borderRadius: "5px"
                                }}
                            /></Link>
                            <br />
                            <br />
                            <p class="menu">
                                <Link to="/AllClients">Clients</Link>
                                <Link to="/about">About</Link>
                                <Link to="/contactCeo">Contact</Link>
                                <Link to="/services">Service</Link>
                            </p>
                            {/* <ul class="ftco-footer-social p-0">
                                <li class="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Twitter"><span class="ion-logo-twitter"></span></a></li>
                                <li class="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Facebook"><span class="ion-logo-facebook"></span></a></li>
                                <li class="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Instagram"><span class="ion-logo-instagram"></span></a></li>
                            </ul> */}
                            <a href="https://www.instagram.com/outlead_solutions/"><i class="fa fa-instagram mx-2" style={{ color: "orange" }}></i></a>
                            <a href=""><i class="fa fa-whatsapp mx-2" style={{ color: "orange" }}></i></a>
                            <a href="https://in.linkedin.com/company/outlead-solutions" target='_blank'><i class="fa fa-linkedin mx-2" style={{ color: "orange" }}></i></a>

                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col-md-12 text-center">
                            <p class="copyright">
                                Copyright &copy;
                                <script>document.write(new Date().getFullYear());</script> All rights reserved<i class="ion-ios-heart" aria-hidden="true"></i> by <a target="_blank">Outlead Solution
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
