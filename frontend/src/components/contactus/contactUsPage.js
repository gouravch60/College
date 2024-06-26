import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import PageHero from "../layout/header/pageHero";
import { useDispatch, useSelector } from 'react-redux';
import { newFeedback } from '../../state/actions/feedbackAction';
import { NEW_FEEDBACK_RESET } from '../../state/constants/feedbackConstant';

const ContactUsPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const dispatch = useDispatch();
  let {loading,error,success} = useSelector(globalState=>globalState.newFeedback)

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let data = {
       name:name
      ,email:email
      ,message:msg
    }
    dispatch(newFeedback(data));
    
  };

  const resetFeilds=()=>{
    setName('')
    setEmail('')
    setMsg('')
  }

  useEffect(()=>{
    if(success){
      alert("Message sent successfully!");
      dispatch({type:NEW_FEEDBACK_RESET})
      resetFeilds()
    }
    if(error){
      alert("Some Error occured!");
      console.log(error);
    }
  },[error,success])

  return (
    <div>
      <div className="pageHeroDiv">
        <PageHero title="Contact Us" image="/2.jpg" />
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="mb-3"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                {loading?'Submiting':'Submit'}
              </Button>
            </Form>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={8} className="text-center mx-auto">
            <h2>Contact Information</h2>
            <p className="mt-3">
              Address: 123 College Street, Chattisgarh, Jharkhand, 829002
            </p>
            <p>Email: contact@ice.com</p>
            <p>Phone: +91 900023476</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUsPage;
