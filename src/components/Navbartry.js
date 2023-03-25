import React from 'react'
import logo from "../assets/img/Outleadlogo.png"
import { Link } from 'react-router-dom'
export const Navbartry = () => {
  return (
    <>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed-top">
  <div class="container">
    {/* <Link class="navbar-brand " href="/">Navbar</Link> */}
    <img style={{width:"80px",marginLeft:"80px"}} src={logo}/>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav mx-auto">　
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link" to="/about">About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/services">Services</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/blogs">Blogs</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/contactceo">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
