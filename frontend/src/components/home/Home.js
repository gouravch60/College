import { Fragment } from "react";
import HomeCarousel from "./HomeCarousel";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomeCard from "./HomeCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faGlobe, faUserTie } from '@fortawesome/free-solid-svg-icons'
import Image from 'react-bootstrap/Image';
import Reviews from "./Reviews";
import { useSelector,useDispatch } from "react-redux";
import { useState,useEffect } from "react";
import { getAllDepartment } from "../../state/actions/deptAction";
import { getAllEvents } from "../../state/actions/eventAction";
import { getAllGallery } from "../../state/actions/galleryAction";
import { Link, NavLink } from "react-router-dom";
import { url } from "../../config";

const Home =()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAllDepartment(3));
        dispatch(getAllEvents(4));
        dispatch(getAllGallery(4));
    },[])

    const {departments} = useSelector((globalState)=>(globalState.departments.departments));
    const {events} = useSelector((globalState)=>(globalState.events.events));
    const {gallery} = useSelector((globalState)=>(globalState.gallery.gallery));

    let changeDateFormat=(timestamp)=>{
        const date = new Date(timestamp);

        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const year = date.getFullYear();

        return `${day}-${month}-${year}`;
    }


    let chooseUsImg='https://media.istockphoto.com/id/1273180194/photo/young-and-happy-students-studying-standing-on-white-background.jpg?s=170667a&w=0&k=20&c=pVnSQpZD_5rDv5yAlona_wnzI_k6TMw469iZX2C8XOc=';
    return(
        <Fragment>
            <HomeCarousel/>


            {/* courses section */}
            <section className="p-3 mt-5">
                <Container>
                    <Row className='justify-content-center'>
                        <Col className="text-center p-2">
                        <span className="h1 text-heading">
                            Courses Available <br/>
                            <div className="heading-underline">____________</div>
                        </span>
                        </Col>
                    </Row>
                    <Row>
                        {
                            departments && departments.map((department)=>(
                                <Col md={4} className="p-2">
                                    <HomeCard title={department.dept} img={department.deptPic} />
                                </Col>
                                
                            ))
                        }
                    </Row>
                    <Row className='justify-content-center'>
                        <Col className="text-center p-2">
                        <Link to='/courses' className="secondary-link">
                            All Courses&gt;&gt;&gt;
                        </Link>
                        </Col>
                    </Row>
                </Container>
            </section>  
            {/* courses section end */}          
            {/* why choose us? section */}
            <section className="p-3 mt-5">
                <Container>
                    <Row className="mt-1">
                       <Col md={6}>
                        <img src={chooseUsImg} className="h-100 w-100" />
                       </Col>
                       <Col md={6}>
                        <Row className='justify-content-center'>
                            <Col className="p-3 text-xs-center text-right">
                            <span className="h1 text-heading">
                                Why Choose Us?<br/>
                                <div className="heading-underline">_____________</div>
                            </span>
                            </Col>
                        </Row>
                        <p className="fw-semibold text-secondary">
                                Discourse assurance estimable applauded to so. Him everything melancholy uncommonly but solicitude inhabiting projection off.
                        </p>
                        
                        {/* why choose us list */}
                        <Row>
                            <Col xs={2} className="text-secondary">
                                <div className="">
                                    <FontAwesomeIcon className="h1" icon={faGlobe} />
                                </div>
                                
                            </Col>
                            <Col xs={10}>
                                <span className="h4 fw-bold text-black">Global Certificate</span><br/>
                                <p className="mt-1 fw-semibold text-secondary">
                                    We have big ideas and sharing what we learn, we make the world a better place.
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={2} className="text-secondary">
                                <div className="">
                                    <FontAwesomeIcon className="h1" icon={faBook} />
                                </div>
                                
                            </Col>
                            <Col xs={10}>
                                <span className="h4 fw-bold text-black">Book & Library</span><br/>
                                <p className="mt-1 fw-semibold text-secondary">
                                    We have big ideas and sharing what we learn, we make the world a better place.
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={2} className="text-secondary">
                                <div className="">
                                    <FontAwesomeIcon className="h1" icon={faUserTie} />
                                </div>
                                
                            </Col>
                            <Col xs={10}>
                                <span className="h4 fw-bold text-black">Advance Advisor</span><br/>
                                <p className="mt-1 fw-semibold text-secondary">
                                    We have big ideas and sharing what we learn, we make the world a better place.
                                </p>
                            </Col>
                        </Row>
                          
                       </Col>
                    </Row>
                </Container>
            </section>  
            {/* why choose us? section end */}
            {/* events section */}
            <section className="p-3 mt-5">
                <Container>
                    <Row className='justify-content-center'>
                        <Col className="text-center p-2">
                        <span className="h1 text-heading">
                        What’s Happening?<br/>
                            <div className="heading-underline">_____________</div>
                        </span>
                        </Col>
                    </Row>
                    {events && events.length>0 && 
                    <Row>
                        
                        <Col md={6} className="p-md-3">
                            <div className="card shadow p-3 bg-light">
                                <Row>
                                    <Col xs={12}>
                                        <Image src={url+events[0].images} fluid />
                                    </Col>
                                    <Col xs={12} className="mt-3">
                                        <span className="text-success h5">{changeDateFormat(events[0].eventDate)}</span><br/>
                                        <span className="h3 mt-3">{events[0].title}</span>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col md={6} className="p-md-3">
                            <Row className="h-100">
                                {events.map((event,i)=>(
                                    i!==0?
                                    <Col xs={12} className={i==1?"mt-1 mt-md-0":"mt-1"}>
                                        <div className="card shadow p-3 bg-light h-100">
                                            <Row>
                                                <Col xs={12} md={4}>
                                                    <Image className="h-100 w-100" src={url+event.images} fluid />
                                                </Col>
                                                <Col xs={12} md={8} className="mt-3">
                                                    <span className="text-success h5">{changeDateFormat(event.eventDate)}</span><br/>
                                                    <span className="h3 mt-3">{event.title}</span>
                                                    {i==3?
                                                    <div className="mt-3">
                                                        <Link to='/events' className="btn btn-outline-secondary fw-bold">See all &gt;&gt;&gt;</Link>  
                                                    </div>
                                                    :''}
                                                </Col>
                                            </Row>
                                        </div>
                                    </Col>
                                    :false
                                ))}
                            </Row>
                        </Col>
                        
                    </Row>
                    }
                </Container>
            </section>  
            {/* events section end */}  

            {/* Reviews section */}
            <section className="p-3 mt-5">
                <Container>
                    <Row className='justify-content-center'>
                        <Col className="text-center p-2">
                        <span className="h1 text-heading">
                            What our Alumini say? <br/>
                            <div className="heading-underline">______________</div>
                        </span>
                        </Col>
                    </Row>
                    <Row className="px-md-5">
                        <Reviews/>
                    </Row>
                </Container>
            </section>  
            {/* reviews section end */} 
            {/* gallery section */}
                <section className="p-3 mt-5">
                    <Container>
                        <Row className='justify-content-center'>
                            <Col className="text-center p-2">
                            <span className="h1 text-heading">
                                Some Moments <br/>
                                <div className="heading-underline">____________</div>
                            </span>
                            </Col>
                        </Row>
                        <Row>
                            {
                                gallery && gallery.map((galleryItem)=>(
                                    <Col xs={6} md={3} className="p-2">
                                        <div className="card w-100 h-100">
                                            <img className="w-100 h-100 p-0" src={url+galleryItem.image} />
                                            
                                        </div>
                                    </Col>
                                    
                                ))
                            }
                        </Row>
                        <Row className='justify-content-center'>
                        <Col className="text-center p-2">
                        <Link to='/gallery' className="secondary-link">
                            View All&gt;&gt;&gt;
                        </Link>
                        </Col>
                    </Row>
                    </Container>
                </section>  
            {/* gallery section end */} 
        </Fragment>
        
    );

}

export default Home;