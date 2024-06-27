import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link, NavLink, useNavigate} from 'react-router-dom' 
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faBars,faUserGraduate,faUserCircle, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { navs } from '../_nav';
import './adminLayout.css'
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../../state/actions/userAction';
import { useEffect, useRef } from 'react';


const AdminNavbar=()=>{
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const collapseRef=useRef();
    let {isAuth}=useSelector(globalState=>globalState.user)
    const logout=()=>{
      dispatch(logoutUser());
    }
    useEffect(()=>{
      if(!isAuth){
        navigate('/login')
      }
    },[isAuth]);
    const handleCollapse=()=>{
      collapseRef.current.click();
    }
    
    return(
      <Navbar collapseOnSelect expand="md" data-bs-theme="dark" className="bg-body-tertiary w-100">
      <Container>
        {/* <Navbar.Brand><FontAwesomeIcon icon={faBars}/></Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" ref={collapseRef}/>
        <Navbar.Collapse id="responsive-navbar-nav ">
          <Nav className="d-md-none">
            {/* <Nav.Link><Link className='navLink' to="/">Home</Link></Nav.Link> */}
              {navs.map((item)=>(
                          <Nav.Link as={NavLink} onClick={handleCollapse} to={item.link} className='navLink'>            
                            <FontAwesomeIcon className="nav-logo" icon={item.logo} />
                            <span className='nav-text ms-4'>{item.text}</span>
                          </Nav.Link> 
                          
                        
              ))}
              <Nav.Link onClick={logout} className='navLink  mt-1' >    
                  <FontAwesomeIcon icon={faSignOut} />
                  <span className='nav-text ms-4'>Logout</span>
              </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        
        <Nav className="ms-auto  me-5 d-none d-md-block">
            <NavDropdown className='navLink' align="start"
            title={<span><span className="h4"><FontAwesomeIcon icon={faUserCircle} /></span> Admin</span>} id="nav-dropdown">
              {/* <NavDropdown.Item><Link className='navLink small' to="/">Change Password</Link></NavDropdown.Item>
              <NavDropdown.Item><Link className='navLink small' to="/">Change Email</Link></NavDropdown.Item>
              <NavDropdown.Divider /> */}
              <NavDropdown.Item onClick={logout}><Link className='navLink small' >Logout</Link></NavDropdown.Item>
            </NavDropdown>
          </Nav>
        {/* <Navbar.Toggle aria-controls="-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          
        </Navbar.Collapse> */}
      </Container>
    </Navbar>
    )
}

export default AdminNavbar
