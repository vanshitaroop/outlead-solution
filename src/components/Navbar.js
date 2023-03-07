import React from 'react'
import logo from "../assets/img/Outleadlogo.png"
export const Navbar = () => {
  return (
    <>
      <nav className="navbar bg-dark">
        <div className="navbar-container container">
            <input type="checkbox" name="" id=""/>
            <div className="hamburger-lines">
                <span className="line line1"></span>
                <span className="line line2"></span>=
                <span className="line line3"></span>
            </div>
            <ul className="menu-items">
                <li><a href="#"  className='before' >Home</a></li>
                <li><a href="#"  className='before'>About</a></li>
                <li><a href="#"  className='before'>Category</a></li>
                <li><a href="#" className='before'>Menu</a></li>
                <li><a href="#"  className='before'>Testimonial</a></li>
                <li><a href="#"  className='before'  >Contact</a></li>
                <li> <a href="" className='GAQ'>Get a Quote</a></li>
            </ul>
            <h1 className="logo" style={{color:"white"}}>Outlead</h1>
           
        </div>
    </nav>
    </>
  )
}
