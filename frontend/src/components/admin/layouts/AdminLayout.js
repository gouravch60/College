
import { Fragment, useEffect } from 'react'
import './adminLayout.css'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AdminNavbar from './adminNavbar'
import { Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { navs } from '../_nav'

const AdminLayout=()=>{
    const navigate=useNavigate();
    const {isAuth} = useSelector(globalState=>globalState.user)
    
    useEffect(()=>{
        if(!isAuth){
            navigate('/login')
        }
    },[isAuth])
  
    
    
    return (
         <div className='d-flex'>
             <div className='sidebar bg-dark text-white d-md-block d-none' style={{minWidth:'300px'}}>
                <div className='brand px-3 py-1 mt-3'>
                    <span className='h4 ms-3'><img src='/logo.png' className='logo' /></span>
                </div>
                <hr/>
                <ul type="none" className='nav flex-column'>
                    {navs.map((item)=>(
                        <li className='p-3 p-md-2  mb-2 nav-item list-group-item d-flex align-items-center'>                 
                            <Link to={item.link} className='text-decoration-none ms-2 ms-md-4 text-white'>
                            <FontAwesomeIcon icon={item.logo} />
                            <span className='nav-text ms-4'>{item.text}</span>
                            </Link>
                        </li>
                    ))}
                    
                </ul>
             </div>
             <main className='w-100 bg-gray-200'>
                <AdminNavbar/>
                <div className='container p-3'>
                    <Card className='rounded'>
                        <Card.Body>
                        <Outlet/>
                        </Card.Body>
                    </Card>
                    
                </div>
             </main>
         </div>
    )
}

export default AdminLayout