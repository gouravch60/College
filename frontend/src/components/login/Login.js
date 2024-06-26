import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import './Login.css'; // Custom CSS for dark theme
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../state/actions/userAction';
import { CLEAR_USER_ERROR } from '../../state/constants/userConstant';
import { toast } from 'react-toastify';

const Login = () => {
    let [email,setEmail] = useState('');
    let [password,setPwd]= useState('');
    const dispatch=useDispatch();
    const navigate = useNavigate();

    const {isAuth,error,loading} = useSelector(globalState=>globalState.user)

    const handleSubmit=(e)=>{
        e.preventDefault();
        let data = {email,password};
        dispatch(loginUser(data))
    }
    useEffect(()=>{
        if(isAuth){
            navigate('/admin/dashboard');
        }
        if(error){
            toast.error(error);
            setTimeout(()=>{
                dispatch({type:CLEAR_USER_ERROR})
            },20000)
        }
    },[isAuth,error])

    return (
        <div className="dark-theme">
            <Container fluid>
                
                <Row>
                    <Col className="image-col" sm={12} md={6}>
                        <div className="background-image d-none d-md-flex align-items-center justify-content-center">
                            <div className="h1 college-name">"Inspiring Minds,<br/>Shaping Futures..."</div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="d-flex align-items-center">
                    
                        <Card className="login-card w-100">
                            <Card.Header className="text-center">
                                <Link to="/"><img src='/logo.png' className='logo' /></Link>
                            </Card.Header>
                            <Card.Body>
                            
                                {/* <h4 className="text-center mb-4 text-white">Admin Login</h4> */}
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label className="text-white">Email address</Form.Label>
                                        <Form.Control value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder="Enter email" />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label className="text-white">Password</Form.Label>
                                        <Form.Control value={password} onChange={e=>setPwd(e.target.value)} type="password" placeholder="Password" />
                                    </Form.Group>

                                    <Button variant="dark" className="float-end mt-1" type="submit" block>
                                        {loading?'Logging in...':'Login'}
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;
