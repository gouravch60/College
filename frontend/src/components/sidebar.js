import React, { useState } from 'react';
import { Navbar, Nav, Container, Breadcrumb, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded);
  };

  return (
    <Container fluid className="p-0">
      <Navbar expand="lg" variant="dark" bg="dark" expanded={sidebarExpanded}>
        <Container>
          <Navbar.Brand as={Link} to="/" className="mr-auto">
            Your Logo
          </Navbar.Brand>
          <Navbar.Toggle onClick={toggleSidebar} aria-controls="sidebar-nav" />
        </Container>
      </Navbar>

      <Container fluid className={`d-flex ${sidebarExpanded ? 'wrapper' : 'wrapper-collapsed'}`}>
        <Navbar id="sidebar-nav" expand="lg" variant="dark" bg="dark">
          <Navbar.Collapse>
            <Nav className="flex-column">
              <Nav.Link as={Link} to="/dashboard">
                Dashboard
              </Nav.Link>
              <Nav.Link as={Link} to="/profile">
                Profile
              </Nav.Link>
              {/* Add more sidebar links as needed */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Container className="content">
          <Breadcrumb>
            <Breadcrumb.Item as={Link} to="/">
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item as={Link} to="/dashboard">
              Dashboard
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Your Page</Breadcrumb.Item>
          </Breadcrumb>

          {/* Your page content goes here */}
        </Container>
      </Container>
    </Container>
  );
};

export default Sidebar;
