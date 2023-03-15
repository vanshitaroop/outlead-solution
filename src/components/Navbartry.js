import React from 'react'
import logo from "../assets/img/Outleadlogo.png"
export const Navbartry = () => {
  return (
    <>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed-top">
  <div class="container">
    {/* <a class="navbar-brand " href="/">Navbar</a> */}
    <img style={{width:"80px",marginLeft:"80px"}} src={logo}/>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav mx-auto">　
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Portfolio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Blogs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
