import React, { useEffect, useRef } from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { getAllEnquiries, updateEnquiries } from '../../../state/actions/enquiryAction';
import { UPDATE_ENQUIRY_RESET } from '../../../state/constants/enquiryConstant';

const Enquiries = () => {
    const dispatch = useDispatch();
    let checkBox = useRef();
    const {updating,updated,updateErr} = useSelector(globalState => globalState.updateEnquiry);

    useEffect(() => {
        dispatch(getAllEnquiries());
    }, []);

    useEffect(()=>{
        if(updated){
            dispatch(getAllEnquiries());
            dispatch({type:UPDATE_ENQUIRY_RESET});
        }else if(updateErr){
            alert('Some error occured');
            console.log(updateErr);
        }
    },[updated,updateErr]);


    const { loading, enquiries, error } = useSelector(globalState => globalState.enquiry);
    
    const enquiryList = enquiries.enquiries || [];
    const handleCheckbox = (id)=>{
        let data={isEnquired:checkBox.current.checked}
        dispatch(updateEnquiries(id,data));
    }
    

    return (
        <div>
            <h2>Enquiries</h2>
            <Table striped bordered hover >
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Course</th>
                        <th>Enquired</th>
                    </tr>
                </thead>
                <tbody>
                    {enquiryList.map((enquiry, index) => (
                        <tr key={index}>
                            <td>{enquiry.name}</td>
                            <td>{enquiry.email}</td>
                            <td>{enquiry.phone}</td>
                            <td>{enquiry.course}</td>
                            <td>
                                <input type="checkbox" checked={enquiry.isEnquired} ref={checkBox} onClick={()=>{handleCheckbox(enquiry._id)}}/>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default Enquiries;
