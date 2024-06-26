import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/home/Home';
import Events from './components/events/Events';
import Courses from './components/courses/Courses';
import AboutUs from './components/aboutus/aboutus';
import ContactUsPage from './components/contactus/contactUsPage';
import Gallery from './components/gallery/gallery';
import UserLayout from './components/layout/UserLayout';
import Dashboard from './components/admin/dashboard/dashboard';
import AdminLayout from './components/admin/layouts/AdminLayout';
import DataEntry from './components/admin/masterdata/DataEntry';
import Enquiries from './components/admin/enquiries/Enquiries';
import Feedback from './components/admin/feedback/Feedback';
import Login from './components/login/Login';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loadUser } from './state/actions/userAction';
// import AppSidebar from './admincomponents/AppHeader'

function App() {
  let dispatch= useDispatch();
  useEffect(()=>{
    dispatch(loadUser());
  },[])
  return (
    <BrowserRouter>

      <Routes> 

        <Route exact element={<AdminLayout/>}>
            <Route path='/admin/dashboard' exact element={<Dashboard/>} />
            <Route path='/admin/dataentry' exact element={<DataEntry/>} />
            <Route path='/admin/enquiries' exact element={<Enquiries/>} />
            <Route path='/admin/feedback' exact element={<Feedback />} />
        </Route>

        <Route exact element={<UserLayout/>}>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/events' exact element={<Events/>}/>
          <Route path='/courses' exact element={<Courses/>}/>
          <Route path='/aboutus' exact element={<AboutUs/>}/>
          <Route path='/contactus' exact element={<ContactUsPage/>}/>
          <Route path='/gallery' exact element={<Gallery/>}/>
        </Route>

      <Route path='/login' exact element={<Login/>}/>
        



      </Routes>
    </BrowserRouter>
  );
}

export default App;
