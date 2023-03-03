import React from 'react'
import logo from "../assets/img/Outleadlogo.png"
export const Navbartry = () => {
  return (
    <>
            <header>
        <div class="logo">
            <img src={logo} alt="" style={{width:"80%", marginTop:"0px"}}/>
        </div>
        <input type="checkbox" id="nav_check" hidden/>
        <nav>
            <div class="logo">
            <img src={logo} alt="" style={{width:"80%", marginTop:"0px"}}/>
            </div>
            <ul>
                <li>
                    <a href="" class="active">Home</a>
                </li>
                <li>
                    <a href="">Products</a>
                </li>
                <li>
                    <a href="">Features</a>
                </li>
                <li>
                    <a href="">Pricing</a>
                </li>
                <li>
                    <a href="">About</a>
                </li>
                <li>
                    <a href="">Contact</a>
                </li>
            </ul>
        </nav>
        <label for="nav_check" class="hamburger">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </label>
    </header>
    </>
  )
}
