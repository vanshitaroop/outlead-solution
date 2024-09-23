import React, { useState, useEffect, useRef } from 'react';

import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import logo from "../assets/img/Outleadlogo.png"
import { Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import img1 from "../assets/img/bulb-on.png"

export function Navbartry() {
  const [showBasic, setShowBasic] = useState(false);
  const navbarRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
      const handleScroll = () => {
          if (window.scrollY > 200) {
              setIsSticky(true);
          } else {
              setIsSticky(false);
          }
      };

      // Attach scroll event listener
      window.addEventListener("scroll", handleScroll);

      // Cleanup event listener when component unmounts
      return () => {
          window.removeEventListener("scroll", handleScroll);
      };
  }, []);
  function handleClick() {
    setShowBasic(false);
  }
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('darkMode') === 'light-mode' ? 'light-mode' : 'dark-mode'
  );

  const toggleClick = () => {
    // Toggle darkMode value between "dark-mode" and "light-mode"
    const newMode = darkMode === 'dark-mode' ? 'light-mode' : 'dark-mode';
    setDarkMode(newMode);
    // Store the new mode preference in localStorage
    localStorage.setItem('darkMode', newMode);
  }

  useEffect(() => {
    // Update document body class whenever darkMode changes
    document.body.className = darkMode;
  }, [darkMode]);
  useEffect(() => {
    // Function to close the navbar when clicking outside of it
    function handleClickOutside(event) {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setShowBasic(false);
      }
    }

    // Add event listener when component mounts
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up event listener when component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <div className={`OutleadNavigationBar ${isSticky ? "sticky" : ""}`}>
      <MDBNavbar expand='lg'  id='navbar' ref={navbarRef}>
        <MDBContainer fluid>
          <Link to={"/"}> <img
            src={logo}
            height='85'
            alt=''
            loading='lazy'
          /></Link>
          <MDBNavbarToggler
            onClick={() => setShowBasic(!showBasic)}
            data-target='#navbarRightAlignExample'
            aria-controls='navbarRightAlignExample'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0'>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' to="">
                  <LinkContainer to="/about">
                    <Nav.Link onClick={handleClick}>About</Nav.Link>
                  </LinkContainer>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' to="">
                  <LinkContainer to="/AllClients">
                    <Nav.Link onClick={handleClick}>Clients</Nav.Link>
                  </LinkContainer>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' to="">
                  <LinkContainer to="/services">
                    <Nav.Link onClick={handleClick}>Service</Nav.Link>
                  </LinkContainer>
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' to="">
                  <LinkContainer to="/contactceo">
                    <Nav.Link onClick={handleClick}>Contact</Nav.Link>
                  </LinkContainer>
                </MDBNavbarLink>
              </MDBNavbarItem>
              {/* <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' to="">
                <LinkContainer to="/blogs">
                  <Nav.Link onClick={handleClick}>Blogs</Nav.Link>
                </LinkContainer>
              </MDBNavbarLink>
            </MDBNavbarItem> */}
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' to="">
                  <button onClick={toggleClick} className='theme-switch-btn'><img src={img1} alt="" /></button>
                </MDBNavbarLink>
              </MDBNavbarItem>

            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
}