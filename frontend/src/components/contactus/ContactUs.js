import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import PageHero from "../layout/header/pageHero";

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div>
      <div className="pageHeroDiv">
        <PageHero title="Contact Us" />
      </div>

      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={8}>
            <p className="lead text-center mb-5">
              Have questions or feedback? Reach out to us!
            </p>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  required
                  className="mb-3"
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="mb-3"
                />
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Label>Your Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Enter your message"
                  required
                  className="mb-4"
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={8} className="text-center">
            <h2>Contact Information</h2>
            <p className="mt-3">
              Address: 123 College Street, Cityville, State, ZIP
            </p>
            <p>Email: info@example.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;