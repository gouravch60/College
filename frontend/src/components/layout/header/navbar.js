import './header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom' 
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';


const NavbarComponent=()=>{
    const collapseRef=useRef();
    const navbarCollapseRef=useRef();
    const handleCollapse=()=>{
      if (navbarCollapseRef.current.classList.contains('show')) {
        collapseRef.current.click();
      }
    }
    return(
      <Navbar collapseOnSelect expand="md" data-bs-theme="dark" className="bg-body-tertiary fixed-top">
      <Container>
        <Navbar.Brand><img src='/logo.png' className='logo' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" ref={collapseRef} />
        <Navbar.Collapse id="responsive-navbar-nav" ref={navbarCollapseRef}>
        <Nav className="ms-auto">
          <Nav.Link as={NavLink} onClick={handleCollapse} className={({ isActive }) => isActive ? "navLink activeNavLink" : "navLink"} exact to="/">Home</Nav.Link>
          <Nav.Link as={NavLink} onClick={handleCollapse} className={({ isActive }) => isActive ? "navLink activeNavLink" : "navLink"} to="/courses">Courses</Nav.Link>
          <Nav.Link as={NavLink} onClick={handleCollapse} className={({ isActive }) => isActive ? "navLink activeNavLink" : "navLink"} to="/events">Events</Nav.Link>
          <Nav.Link as={NavLink} onClick={handleCollapse} className={({ isActive }) => isActive ? "navLink activeNavLink" : "navLink"} to="/aboutus">About Us</Nav.Link>
          <Nav.Link as={NavLink} onClick={handleCollapse} className={({ isActive }) => isActive ? "navLink activeNavLink" : "navLink"} to="/gallery">Gallery</Nav.Link>
          <Nav.Link as={NavLink} onClick={handleCollapse} className={({ isActive }) => isActive ? "navLink activeNavLink" : "navLink"} to="/contactus">Contact Us</Nav.Link>
          <Nav.Link className="d-md-none" to="/login">
            <FontAwesomeIcon icon={faUserAlt} />
            <span className="ms-1">Admin Panel</span>
          </Nav.Link>
          <NavDropdown className="d-none d-md-block" title={<FontAwesomeIcon icon={faUserCircle} />} id="collapsible-nav-dropdown">
            <NavDropdown.Item as={NavLink} className={({ isActive }) => isActive ? "navLink activeNavLink" : "navLink"} to="/login">Admin Panel</NavDropdown.Item>
          </NavDropdown>
        </Nav>
          {/* <Nav>
            <Nav.Link>More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default NavbarComponent
