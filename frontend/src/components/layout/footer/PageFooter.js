import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SocialIcon } from 'react-social-icons'
import './footer.css'


const PageFooter=()=>{
    return(
        <footer className="bg-dark text-white mt-4">
        <Container>
          <Row className="justify-content-center py-5">
            <Col md={4} className="text-center">
              <h2 className="mb-4">Indian College Of Engineering</h2>
              <p className='mt-3 fst-italic'>
                "Come join us and explore the power of education with our highly qualified professors"
              </p>
            </Col>
  
            <Col md={4} className="text-center">
              {/* <h2 className="text-success mb-4">Quick Links</h2>
              <ul className='px-md-5 mt-1 footer-links fw-bold' type="none">
                <li className='mt-1'><Link to="/" className='text-secondary text-decoration-none'>Home</Link></li>
                <li className='mt-1'><Link to="/courses" className='text-secondary text-decoration-none'>Courses</Link></li>
                <li className='mt-1'><Link to="/events" className='text-secondary text-decoration-none'>Events</Link></li>
                <li className='mt-1'><Link to="/aboutus" className='text-secondary text-decoration-none'>About Us</Link></li>
                <li className='mt-1'><Link to="/contactus" className='text-secondary text-decoration-none'>Contact Us</Link></li>
              </ul> */}
            </Col>
  
            <Col md={4} className="text-center mt-4 mt-md-0">
              <h2 className="mb-2 mb-md-4">Follow Us</h2>
              <p className="mb-2">Stay connected on social media</p>
              <div className="social-icons-div">
                <SocialIcon className="social-icon" url="https://twitter.com" />
                <SocialIcon className="social-icon" url="https://facebook.com" />
                <SocialIcon className="social-icon" url="https://linkedin.com" />
                <SocialIcon className="social-icon" url="https://instagram.com" />
              </div>
            </Col>
          </Row>
        </Container>
  
        <Row className='p-3' style={{ backgroundColor: "black" }}>
          <Col md={6} className='text-center'>
            <span className="text-white">&copy; Copyright, All Rights Reserved</span>
          </Col>
          <Col md={6} className='text-center'>
            <span className='text-white'>Designed, Developed, and Maintained by Gourav</span>
          </Col>
        </Row>
      </footer>
    )
}

export default PageFooter