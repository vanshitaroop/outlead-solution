import React from 'react'
import logo from "../assets/img/Outleadlogo.png"
export const Footer = () => {
    return (
        <>
            <footer class="footer-07" style={{paddingTop:"80px"}}>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-12 text-center">
                            {/* <h2 class="footer-heading"><a href="#" class="logo">Outlead Solutions</a></h2> */}
                            <img src={logo} style={{width:"10%",marginBottom:"30px"}}/>
                            <p class="menu">
                                <a href="#">Home</a>
                                <a href="#">Agent</a>
                                <a href="#">About</a>
                                <a href="#">Listing</a>
                                <a href="#">Blog</a>
                                <a href="#">Contact</a>
                            </p>
                            {/* <ul class="ftco-footer-social p-0">
                                <li class="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Twitter"><span class="ion-logo-twitter"></span></a></li>
                                <li class="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Facebook"><span class="ion-logo-facebook"></span></a></li>
                                <li class="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Instagram"><span class="ion-logo-instagram"></span></a></li>
                            </ul> */}
                            <i class="fa fa-instagram mx-2" style={{color:"orange"}}></i>
                            <i class="fa fa-whatsapp mx-2" style={{color:"orange"}}></i>
                            <i class="fa fa-linkedin mx-2" style={{color:"orange"}}></i>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col-md-12 text-center">
                            <p class="copyright">
                                Copyright &copy;
                                <script>document.write(new Date().getFullYear());</script> All rights reserved<i class="ion-ios-heart" aria-hidden="true"></i> by <a  target="_blank">Outlead Solution
                                    </a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}