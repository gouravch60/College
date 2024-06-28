import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { getAllEnquiries, updateEnquiries } from '../../../state/actions/enquiryAction';
import { UPDATE_ENQUIRY_RESET } from '../../../state/constants/enquiryConstant';

const Enquiries = () => {
    const dispatch = useDispatch();
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
    const handleCheckbox = (id,e)=>{
        let data={isEnquired:e.target.checked}
        dispatch(updateEnquiries(id,data));
    }
    

    return (
        <div>
            <h2>Enquiries</h2>
            <div style={{overflow-x:'hidden'}}>
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
                                    <input type="checkbox" name="enquired" checked={enquiry.isEnquired} onClick={(event)=>{handleCheckbox(enquiry._id,event)}}/>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default Enquiries;
