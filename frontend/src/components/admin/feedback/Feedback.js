import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAllFeedback } from '../../../state/actions/feedbackAction';

const Feedback = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllFeedback());
    },[])

    let {feedbacks} = useSelector(globalState=>globalState.feedbacks.feedbacks);



  return (
    <div>
      <h2 className="mb-4">Feedbacks</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {feedbacks&&feedbacks.map((feedback, index) => (
            <tr key={index}>
              <td>{feedback.name}</td>
              <td>{feedback.email}</td>
              <td>{feedback.message}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Feedback;
