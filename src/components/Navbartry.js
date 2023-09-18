import React, { useState } from 'react';
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
export function Navbartry() {
  const [showBasic, setShowBasic] = useState(false);
  function handleClick(){
    setShowBasic(false);
  }
  return (
    <MDBNavbar expand='lg' dark bgColor='dark'>
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
                <LinkContainer to="/">
                  <Nav.Link onClick={handleClick}>Home</Nav.Link>
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
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' to="">
                <LinkContainer to="/blogs">
                  <Nav.Link onClick={handleClick}>Blogs</Nav.Link>
                </LinkContainer>
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}