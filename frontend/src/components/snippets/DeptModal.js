import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newEnquiry } from '../../state/actions/enquiryAction';
import { toast } from 'react-toastify';
import Image from 'react-bootstrap/esm/Image';
import { NEW_ENQUIRY_RESET } from '../../state/constants/enquiryConstant';
import { url } from "../../config";

function DeptModal({departments,deptSelected}) {
const dispatch=useDispatch();

  let [name,setName] = useState("");
  let [email,setEmail] = useState("");
  let [phone,setPhone] = useState("");
  let [course,setCourse] = useState('');

  let [coursePic,setCoursePic] = useState('');
  let [courseDesc,setCourseDesc] = useState('');
  let [courseTotalSeat,setCourseTotalSeat] = useState('');
  let [courseAvlSeat,setCourseAvlSeat] = useState('');
  useEffect(()=>{
    if(deptSelected){
        setCourse(deptSelected.dept)
        setCoursePic(deptSelected.deptPic)
        setCourseDesc(deptSelected.description)
        setCourseAvlSeat(deptSelected.seatAvail)
        setCourseTotalSeat(deptSelected.totalSeat)
    }
  },[deptSelected]);


 
  let {success,error,loading} = useSelector(globalState=>globalState.newEnquiry)
  useEffect(()=>{
    if(success){
        toast.success("Enquiry submitted successfully");
        setName("");
        setCourse("");
        setEmail("");
        setPhone("");
        dispatch({type:NEW_ENQUIRY_RESET});
    }
    if(error){
        toast.error(error);
    }
  },[dispatch,success,error])

  const handleChange=(e)=>{
    setCourse(e.target.value)
    let courseEach=departments.find(d=>d.dept==e.target.value)
    setCoursePic(courseEach.deptPic)
    setCourseDesc(courseEach.description)
    setCourseAvlSeat(courseEach.seatAvail)
    setCourseTotalSeat(courseEach.totalSeat)
    
  }
    
  const submitEnquiry=(e)=>{
    e.preventDefault();

    let formData={
        'name':name,
        'email':email,
        'phone':phone,
        'course':course
    }
    dispatch(newEnquiry(formData));
    console.log(loading)
    
  }


  
    

  return (
        <div class="modal fade" id="deptModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="deptModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                <div class="modal-header bg-dark text-white">
                    <h5 class="modal-title" id="deptModalLabel">Send Enquiry</h5>
                    <button type="button" class="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form onSubmit={submitEnquiry}>
                    <div class="modal-body row">
                        <div className="col-md-6 p-3 text-center">
                            <Image src={url+coursePic} style={{height:'80px',width:'80px',borderRadius:'100%'}}/>
                            <h5>{course}</h5>
                            <hr/>
                            <p className='mt-2 text-description'>
                                "{courseDesc}"
                            </p>
                            <hr/>
                            <div>
                                <span className='small'>Total Seat:{courseTotalSeat}</span>
                                <span className='small ms-4'>Available Seat:{courseAvlSeat}</span>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='form-group row p-3'>
                                <input value={name} onChange={(e)=>(setName(e.target.value))} className='form-control col-12' placeholder='Enter your name*' />
                            </div>

                            <div className='form-group row p-3'>
                                <input value={phone} onChange={(e)=>(setPhone(e.target.value))}  className='form-control col-12' placeholder='Enter your Phone no.*' />
                            </div>

                            <div className='form-group row p-3'>
                                <input value={email} onChange={(e)=>(setEmail(e.target.value))} type="email" className='form-control col-12' placeholder='Enter your Email*' />
                            </div>

                            <div className='form-group row p-3'>
                                <select value={course} className='form-control col-12' onChange={handleChange}>
                                    {/* <option value=''>Which course you are interested in?</option> */}
                                    {
                                        departments&&departments.map((department)=>(
                                            <option value={department.dept} >{department.dept}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            
                            <div className='row p-3'>
                                    <p className='small text-secondary'>
                                        Your phone number is securely stored and will only be used for the purpose of addressing your inquiries
                                        &nbsp;<FontAwesomeIcon className='text-success' icon={faCheck} />
                                        </p>
                            </div>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-dark">{loading?'Sending':'Submit'}</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
  );
}
export default DeptModal;