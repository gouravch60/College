import './header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom' 
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';


const NavbarComponent=()=>{
    return(
      <Navbar collapseOnSelect expand="lg" data-bs-theme="dark" className="bg-body-tertiary fixed-top">
      <Container>
        <Navbar.Brand><img src='/logo.png' className='logo' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={NavLink} className={({ isActive }) => isActive ? "navLink activeNavLink" : "navLink"} exact to="/">Home</Nav.Link>
          <Nav.Link as={NavLink} className={({ isActive }) => isActive ? "navLink activeNavLink" : "navLink"} to="/courses">Courses</Nav.Link>
          <Nav.Link as={NavLink} className={({ isActive }) => isActive ? "navLink activeNavLink" : "navLink"} to="/events">Events</Nav.Link>
          <Nav.Link as={NavLink} className={({ isActive }) => isActive ? "navLink activeNavLink" : "navLink"} to="/aboutus">About Us</Nav.Link>
          <Nav.Link as={NavLink} className={({ isActive }) => isActive ? "navLink activeNavLink" : "navLink"} to="/gallery">Gallery</Nav.Link>
          <Nav.Link as={NavLink} className={({ isActive }) => isActive ? "navLink activeNavLink" : "navLink"} to="/contactus">Contact Us</Nav.Link>
          <NavDropdown title={<FontAwesomeIcon icon={faUserCircle} />} id="collapsible-nav-dropdown">
            <NavDropdown.Item as={NavLink} className={({ isActive }) => isActive ? "navLink activeNavLink" : "navLink"} to="/login">Admin Login</NavDropdown.Item>
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