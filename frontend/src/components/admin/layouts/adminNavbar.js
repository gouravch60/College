import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link, useNavigate} from 'react-router-dom' 
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faBars,faUserGraduate,faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { navs } from '../_nav';
import './adminLayout.css'
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../../state/actions/userAction';
import { useEffect } from 'react';


const AdminNavbar=()=>{
    const dispatch = useDispatch();
    const navigate=useNavigate();
    let {isAuth}=useSelector(globalState=>globalState.user)
    const logout=()=>{
      dispatch(logoutUser());
    }
    useEffect(()=>{
      if(!isAuth){
        navigate('/login')
      }
    },[isAuth]);
    
    return(
      <Navbar collapseOnSelect expand="md" data-bs-theme="dark" className="bg-body-tertiary w-100">
      <Container>
        {/* <Navbar.Brand><FontAwesomeIcon icon={faBars}/></Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav ">
          <Nav className="d-md-none">
            {/* <Nav.Link><Link className='navLink' to="/">Home</Link></Nav.Link> */}
              {navs.map((item)=>(
                          <Nav.Link>            
                            <Link to={item.link} className='navLink'>
                            <FontAwesomeIcon icon={item.logo} />
                            <span className='nav-text ms-4'>{item.text}</span>
                            </Link>
                          </Nav.Link> 
                        
              ))}
          </Nav>
        </Navbar.Collapse>
        
        <Nav className="ms-auto  me-5">
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